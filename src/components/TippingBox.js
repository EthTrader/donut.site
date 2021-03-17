import React, { useState, useEffect, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { useWeb3React } from '@web3-react/core'
import classNames from 'classnames';
import { Contract } from "@ethersproject/contracts";
import { JsonRpcProvider, getDefaultProvider } from "@ethersproject/providers";
import { parseEther, formatEther } from "@ethersproject/units"
import { formatBytes32String, parseBytes32String } from "@ethersproject/strings"
import { MaxUint256 } from "@ethersproject/constants"
import { useDonuts} from 'hooks/useDonuts';
import { commaNumber, fetchCors, postData, getUser, onlyPaste } from 'utils'
import { addresses, abis } from "contracts";
import Torus from "@toruslabs/torus-embed";
const torus = new Torus();

import './TippingBox.scss';

export default (props) => {
  const { account, active, chainId, library } = useWeb3React();
  const donuts = useDonuts();
  const { signer, feeBalance, donutBalance, token, tipping } = donuts;

  const [isSending, setIsSending] = useState(false);
  // const [useRelay, setUseRelay] = useState(false)
  const [url, setUrl] = useState("")
  const [contentId, setContentId] = useState(props.contentId)
  const [recipient, setRecipient] = useState(props.recipient)
  const [donutAddress, setDonutAddress] = useState(props.address)
  const [torusAddress, setTorusAddress] = useState()
  const [amount, setAmount] = useState("1,000")
  const [approved, setApproved] = useState(false)
  const [content, setContent] = useState('')

  useEffect(()=>{
    if(!url) { setContentId(''); setRecipient(''); return; }
    let id='', tnum=0;

    try {
      let parts = (new URL(url)).pathname.split("/").filter(a=>(!!a))
      if(parts.length === 6) {
        id = parts[5]
        tnum = 1
      } else if(parts.length === 5) {
        id = parts[3]
        tnum = 3
      } else if(parts.length === 2 && ["u","user"].includes(parts[0])) {
        setRecipient(parts[1])
      } else {
        alert(`${url} could not be identified as a Reddit post, comment, or user.`)
        setUrl('')
      }
    } catch(e) {
      if(!url.includes("/"))
        setRecipient(url)
      else {
        alert(`${url} could not be identified as a Reddit post, comment, or user.`)
        setUrl('')
        console.log(e)
      }
    }

    if([1,3].includes(tnum))
      setContentId(`t${tnum}_${id}`)
  }, [url])

  useEffect(()=>{
    if(!contentId) { setContent(''); return; }
    async function getContent(){
      const json =  await fetchCors(`https://www.reddit.com/api/info.json?id=${contentId}`)
      const item = json.data.children[0]
      const { kind, data } = item

      setRecipient(data.author)
      if(kind === "t3") setContent(data.title)
      else if(kind === "t1") setContent(data.body)
    }
    getContent()
  }, [contentId])

  useEffect(()=>{
    if(!recipient) { setDonutAddress(''); setTorusAddress(''); return; }
    async function getAddress(){
      const user = getUser({username: recipient})
      if(user && !donutAddress) setDonutAddress(user.address)
      const torusAddress = await torus.getPublicAddress({verifier: "reddit", verifierId: recipient})
      setTorusAddress(torusAddress)
    }
    getAddress()
  }, [recipient])

  useEffect(()=>{
    if(!token) { setApproved(false); return; }
    checkApproval()
  }, [token, amount])

  async function checkApproval(){
    const allowance = await token.allowance(account, addresses[chainId].tipping)
    setApproved(allowance.gte(parseEther(amount.replace(/,/g, ''))))
  }

  const setFormattedTipAmount = amount => {
    setAmount(commaNumber(amount.replace(/,/g, '')));
  };

  const buttonDisabled = isSending || !amount;
  const buttonClass = classNames('complete cute-pink-btn', {
    disabled: buttonDisabled,
  });

  const [relayOn, setRelayOn] = useState(true);
  const toggleRelay = () => setRelayOn(!relayOn);

  let address, addressLogo
  if(donutAddress) {
    address = donutAddress
    addressLogo = <span style={{cursor: "default", marginLeft: ".25em"}} title={`Using donut registered address for ${recipient} (${address})`}>🍩</span>
  } else if(torusAddress) {
    address = torusAddress
    addressLogo = <img className="torus-logo" src="/torus_logo.png" alt="Torus Logo" title={`Using Tor.us address for ${recipient} (${address})`} />
  } else {
    addressLogo = <span className="wait"></span>
  }

  let action
  if(active){
    if(chainId === 100) {
      if(approved) {
        action = <div className={buttonClass} onClick={()=>tip(signer, chainId, 'DONUT', address, amount, contentId, setIsSending)}>Send Tip</div>
      } else {
        action = <div className={buttonClass} onClick={()=>approve(token.connect(signer), addresses[chainId].tipping, setIsSending).then(checkApproval)}>Approve</div>
      }
    } else {
      action = <div className={buttonClass} onClick={()=>useXDai(library, setIsSending)}>Use xDai</div>
    }
  } else {
    action = <div className="complete cute-pink-btn disabled">Connect Wallet First</div>
  }

  let recipientHeader
  if(recipient){
    recipientHeader = <React.Fragment>
      <a style={{textDecoration: "none"}} href={`https://www.reddit.com/u/${recipient}`}>u/{recipient}</a>
      <FontAwesomeIcon className="cancel" icon={faTimes} onClick={()=>{setUrl("")}} />
    </React.Fragment>
  }

  return (
    <div className="tipping-interface box">
      <div className="tip-token">🍩</div>
      <div className="cute-header tip-info">Tip {recipientHeader}</div>
      <div className="tip-token-info">EthTrader DONUTs</div>
      { (content || recipient)
        ? <div className="reddit-preview">
            <h3 className="author">
              {recipient} {addressLogo}
            </h3>
            {content && <p className="body">{content}</p>}
          </div>
        : <div className="cute-input target-container">
            <input placeholder="Paste recipient or content url" value={url} onChange={e => setUrl(e.target.value)} onKeyPress={onlyPaste} />
          </div>
      }
      <div className="cute-input quantity-container">
        <input value={amount} onChange={e => setFormattedTipAmount(e.target.value)} />
        <div className="token">DONUT</div>
      </div>
      {/*<div className="relay-container">
        <div className="relay-text">
          Use Relay
        </div>
        <div className={classNames('toggle', relayOn ? 'on' : 'off')} onClick={toggleRelay}>
          <div className="circle" />
        </div>
      </div>*/}
      {action}
    </div>
  )
}

async function approve(token, spender, setIsSending){
  setIsSending(true)
  try {
    let tx = await token.approve(spender, MaxUint256)
    await tx.wait()
  } catch (e){

  }
  setIsSending(false)
}

async function tip(signer, chainId, tokenSymbol, recipientAddress, amount, contentId, setIsSending){
  setIsSending(true)
  const tokenAddress = addresses[chainId][tokenSymbol]
  const tipping = new Contract(addresses[chainId].tipping, abis.Tipping, signer)
  try {
    let tx = await tipping.tip(recipientAddress, parseEther(amount.toString()), tokenAddress, formatBytes32String(contentId))
    await tx.wait()
  } catch(e){

  }
  setIsSending(false)
}

async function useXDai(library, setIsSending){
  setIsSending(true)
  try {
    let reponse = await library.jsonRpcFetchFunc("wallet_addEthereumChain", [{
      chainId: "0x64", // A 0x-prefixed hexadecimal string
      chainName: "xDai",
      nativeCurrency: {
        name: "xDai",
        symbol: "xDai", // 2-6 characters long
        decimals: 18,
      },
      rpcUrls: ["https://rpc.xdaichain.com/"],
      blockExplorerUrls: ["https://blockscout.com/xdai/mainnet"],
      // iconUrls: string[]; // Currently ignored.
    }])
  } catch(e){

  }
  setIsSending(false)
}
//
// async function relayTip(){
//   let response = await postData("http://localhost:3001", lavaPacket)
//   console.log(response)
// }
