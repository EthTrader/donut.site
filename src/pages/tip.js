import React, { useState, useEffect } from 'react'
import { Contract } from "@ethersproject/contracts";
import { JsonRpcProvider, getDefaultProvider } from "@ethersproject/providers";
import { parseEther, formatEther } from "@ethersproject/units"
import { formatBytes32String, parseBytes32String } from "@ethersproject/strings"
import { MaxUint256 } from "@ethersproject/constants"
import { addresses, abis } from "../contracts";
import { Button, InputNumber, Toggle } from 'rsuite';
import useWeb3Modal from "../hooks/useWeb3Modal";

const lavaPacket = {
  "method":"transfer",
  "relayAuthority":"0x0",
  "from":"0x95d9bed31423eb7d5b68511e0352eae39a3cdd20",
  "to":"0x95d9bed31423eb7d5b68511e0352eae39a3cdd20",
  "walletAddress":"0x5c5cA8c79bf69a5449F1F621215E9Cfc91189Cc5",
  "tokenAddress":"0xb6ed7644c69416d67b522e20bc294a9a9b405b31",
  "tokenAmount":0,
  "relayerReward":0,
  "expires":11975022,
  "nonce":"0x784338ac443694494fa79e3c73b737",
  "signature":"0xbd5aa6e5f23c97b7e145c9719873d0149150f9a5c3363ce410a9e5fb7cdc52c622f9f8145df79d25a3575c398f03cc603c5512cd702ee43bffdcaa60148f5c7f1c"
}
//  ?contentId=t3_kf251b&recipient=EthTraderCommunity&address=0xf7927bf0230c7b0E82376ac944AeedC3EA8dFa25
function useQuery() {
  let search = ""
  if(typeof window !== 'undefined') search = window.location.search
  return new URLSearchParams(search);
}
// https://daonuts.org/r/ethtrader?action=tip&contentId=t3_kf251b&recipient=EthTraderCommunity&address=0xf7927bf0230c7b0E82376ac944AeedC3EA8dFa25
export default () => {
  let query = useQuery();
  const [provider, chainId, account] = useProvider();

  const [useRelay, setUseRelay] = useState(false)
  const [contentId, setContentId] = useState(query.get("contentId"))
  const [recipient, setRecipient] = useState(query.get("recipient"))
  const [recipientAddress, setRecipientAddress] = useState(query.get("address"))
  const [amount, setAmount] = useState(1000)
  const [tokenSymbol, setTokenSymbol] = useState("DONUT")
  const [balance, setBalance] = useState("0")
  const [approvedTipping, setApprovedTipping] = useState(false)
  const [approvedRelay, setApprovedRelay] = useState(false)
  useEffect(()=>{
    if(!provider || !chainId || !account) { setBalance("0"); return; }
    (async ()=>{
      setBalance(await token(chainId, tokenSymbol).connect(provider).balanceOf(account));
    })()
  }, [provider, chainId, account, tokenSymbol])
  useEffect(()=>{ (async ()=>{checkApprovedTipping()})() }, [provider, chainId, account, tokenSymbol, amount])
  async function checkApprovedTipping(){
    if(!provider || !chainId || !account) { setApprovedTipping(false); return; }
    const allowance = await token(chainId, tokenSymbol).connect(provider).allowance(account, addresses[chainId].tipping);
    setApprovedTipping(allowance.gte(parseEther(amount.toString())));
  }

  return <div>
    <h1>Reddit Tipping</h1>
    <p>account: {account}</p>
    <Toggle disabled  size="lg" checkedChildren="Use relay" unCheckedChildren="No relay" checked={useRelay} onChange={(event) => setUseRelay(event.target.checked)}>Use relay</Toggle>
    <InputNumber placeholder="tip amount" step={100} value={amount} type="number" onChange={setAmount} />
    <p>Your {tokenSymbol} balance: {formatEther(balance)}</p>
    <p>Tip u/{recipient} (@{recipientAddress}) {amount} {tokenSymbol} for {contentId}</p>
    {provider ? (
        approvedTipping ?
        <Button onClick={()=>tip(provider, chainId, tokenSymbol, recipientAddress, amount, contentId)}>Tip</Button> :
        <Button onClick={()=>approveTipping(provider, chainId, tokenSymbol).then(checkApprovedTipping)}>Approve</Button>
    ) : "please connect wallet"}
  </div>
}

async function approveLavaWallet(provider, chainId, tokenSymbol){
  let tx = await token(chainId, tokenSymbol).connect(provider.getSigner()).approve(addresses[chainId].lavaWallet, MaxUint256)
  await tx.wait()
}
async function approveTipping(provider, chainId, tokenSymbol){
  let tx = await token(chainId, tokenSymbol).connect(provider.getSigner()).approve(addresses[chainId].tipping, MaxUint256)
  await tx.wait()
}

async function tip(provider, chainId, tokenSymbol, recipientAddress, amount, contentId){
  const tokenAddress = addresses[chainId][tokenSymbol]
  const tipping = new Contract(addresses[chainId].tipping, abis.Tipping, provider.getSigner())
  let tx = await tipping.tip(recipientAddress, parseEther(amount.toString()), tokenAddress, formatBytes32String(contentId))
  await tx.wait()
}

async function relayTip(){
  let response = await postData("http://localhost:3001", lavaPacket)
  console.log(response)
}

// Example POST method implementation:
async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

function token(chainId, symbol){
  console.log(chainId)
  return new Contract(addresses[chainId][symbol], abis.IERC20)
}

async function checkConnection(provider, setChainId, setAccount){
  if(!provider) return;
  setChainId((await provider.getNetwork()).chainId)
  const signer = provider.getSigner()
  if(!signer) return;
  setAccount(await signer.getAddress())
}

function useProvider() {
  let provider
  if(typeof window !== 'undefined')
    [provider] = useWeb3Modal();
  const [account, setAccount] = useState(null);
  const [chainId, setChainId] = useState(null);

  (async ()=>{
    if(!provider) return;
    const network = await provider.getNetwork()
    setChainId(network.chainId)
    const signer = provider.getSigner()
    if(!signer) return;
    setAccount(await signer.getAddress())
  })()

  return [provider, chainId, account];
}
