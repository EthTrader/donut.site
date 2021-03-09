import React, { useState, useEffect, useContext } from 'react'
import { useWallet } from 'use-wallet';
import classNames from 'classnames';
import { Contract } from "@ethersproject/contracts";
import { JsonRpcProvider, getDefaultProvider } from "@ethersproject/providers";
import { parseEther, formatEther } from "@ethersproject/units"
import { formatBytes32String, parseBytes32String } from "@ethersproject/strings"
import { MaxUint256 } from "@ethersproject/constants"
import { useDonuts} from 'hooks/useDonuts';
import { postData } from 'utils'
import { addresses, abis } from "contracts";

import './TippingBox.scss';

export default (props) => {
  const wallet = useWallet();
  const donuts = useDonuts();
  const { provider, token, balance } = donuts;
  const { chainId } = wallet;

  const [isSending, setIsSending] = useState(false);
  // const [useRelay, setUseRelay] = useState(false)
  const [contentId, setContentId] = useState(props.contentId)
  const [recipient, setRecipient] = useState(props.recipient)
  const [address, setAddress] = useState(props.address)
  const [amount, setAmount] = useState(1000)
  const [approved, setApproved] = useState(false)

  useEffect(()=>{
    if(!token) { setApproved(false); return; }
    checkApproval()
  }, [token, amount])

  async function checkApproval(){
    const allowance = await token.allowance(wallet.account, addresses[chainId].tipping)
    setApproved(allowance.gte(parseEther(amount.toString())))
  }

  const buttonDisabled = (wallet.status !== 'connected') || !approved || isSending || !amount;
  const buttonClass = classNames('complete cute-pink-btn', {
    disabled: buttonDisabled,
  });

  const handleSend = async () => {
    // if (!walletModel.isConnected) {
    //   WalletModel.askForWallet();
    // }
    // if (buttonDisabled) return;
    // setIsSending(true);
    // try {
    //   const amount = Number(amount.replace(/,/g, ''));
    //   await WalletModel.sendTip(recipient, amount);
    // } catch (error) {
    //   alert(error.message);
    // }
    // setIsSending(false);
  };

  return (
    <div className="tipping-interface box">
      <div className="tip-token">🍩</div>
      <div className="cute-header tip-info">Tipping /u/{recipient}</div>
      <div className="tip-token-info">EthTrader DONUTs</div>
      <p>{contentId}</p>
      <div className="cute-input quantity-container">
        <input value={amount} type="number" onChange={e => setAmount(e.target.value)} />
        <div className="token">DONUT</div>
      </div>
      {wallet.status === 'connected' && !approved &&
      <div className="complete cute-pink-btn" onClick={()=>approve(token.connect(provider.getSigner()), addresses[chainId].tipping).then(checkApproval)}>
        {'Approve'}
      </div>}
      <div className={buttonClass} onClick={()=>tip(provider, chainId, 'DONUT', address, amount, contentId)}>
        {wallet.status === 'connected' ? 'Send Tip' : 'Connect Wallet First'}
      </div>
    </div>
  )
}

// <div>
//   <h1>Reddit Tipping</h1>
//   <p>account: {account}</p>
//   <span><input type="checkbox" disabled  size="lg" checked={useRelay} onChange={(event) => setUseRelay(event.target.checked)} />Use relay</span>
//   <input placeholder="tip amount" step={100} value={amount} type="number" onChange={setAmount} />
//   <p>Your {tokenSymbol} balance: {formatEther(balance)}</p>
//   <p>Tip u/{recipient} (@{recipientAddress}) {amount} {tokenSymbol} for {contentId}</p>
//   {provider ? (
//       approvedTipping ?
//       <button onClick={()=>tip(provider, chainId, tokenSymbol, recipientAddress, amount, contentId)}>Tip</button> :
//       <button onClick={()=>approveTipping(provider, chainId, tokenSymbol).then(checkApprovedTipping)}>Approve</button>
//   ) : "please connect wallet"}
// </div>

// async function approveLavaWallet(provider, chainId, tokenSymbol){
//   let tx = await token(chainId, tokenSymbol).connect(provider.getSigner()).approve(addresses[chainId].lavaWallet, MaxUint256)
//   await tx.wait()
// }
async function approve(token, spender){
  let tx = await token.approve(spender, MaxUint256)
  await tx.wait()
}

async function tip(provider, chainId, tokenSymbol, recipientAddress, amount, contentId){
  const tokenAddress = addresses[chainId][tokenSymbol]
  const tipping = new Contract(addresses[chainId].tipping, abis.Tipping, provider.getSigner())
  let tx = await tipping.tip(recipientAddress, parseEther(amount.toString()), tokenAddress, formatBytes32String(contentId))
  await tx.wait()
}
//
// async function relayTip(){
//   let response = await postData("http://localhost:3001", lavaPacket)
//   console.log(response)
// }

// function useProvider() {
//   let provider
//   if(typeof window !== 'undefined')
//     [provider] = useWeb3Modal();
//   const [account, setAccount] = useState(null);
//   const [chainId, setChainId] = useState(null);
//
//   (async ()=>{
//     if(!provider) return;
//     const network = await provider.getNetwork()
//     setChainId(network.chainId)
//     const signer = provider.getSigner()
//     if(!signer) return;
//     setAccount(await signer.getAddress())
//   })()
//
//   return [provider, chainId, account];
// }
