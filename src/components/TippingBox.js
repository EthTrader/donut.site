import React, { useState, useEffect, useContext, useRef } from 'react'
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
import { commaNumber, fetchCors, postData, getUser, onlyPaste, isRedditUsername, useXDai } from 'utils'
import { chains, abis } from "contracts";

import './TippingBox.scss';

let timeout;

export default (props) => {
  const { account, active, chainId, library } = useWeb3React();
  const donuts = useDonuts();
  const { signer, feeBalance, donutBalance, token, tipping } = donuts;

  const [isSending, setIsSending] = useState(false);
  // const [useRelay, setUseRelay] = useState(false)
  const [url, setUrl] = useState("")
  const [contentId, setContentId] = useState(props.contentId)
  const [recipient, setRecipient] = useState(props.recipient || '')
  const [donutAddress, setDonutAddress] = useState(props.address)
  const [amount, setAmount] = useState("1")
  const [approved, setApproved] = useState(false)
  const [content, setContent] = useState('')

  const urlRef = useRef(null);
  const [userMode, setUserMode] = useState(true);

  // first time setup
  useEffect(() => {
    if (recipient) {
      setUrl(props.recipient);
    }
  }, []);

  function clear() {
    setUrl('');
    setContentId('');
    setContent('');
    setRecipient('');
    if(urlRef && urlRef.current){
      urlRef.current.focus()
    }
  }

  useEffect(()=>{
    // if(!url) { console.log("NO URL"); setContentId(''); setRecipient(''); return; }
    if(!url) return;
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
      } else badUrl(url)
    } catch(e) {
      if(!url.includes("/")) {
        clearTimeout(timeout);
        timeout = setTimeout(() => isRedditUsername(url).then(valid=>{
          if(valid) setRecipient(url)
          else if (!userMode) badUrl(url)
        }), 250);
      } else if (!userMode) badUrl(url)
    }

    if([1,3].includes(tnum)){
      setContentId(`t${tnum}_${id}`)
    }
  }, [url]);

  const badUrl = (url)=>{
    alert(`${url} could not be identified as a Reddit post, comment, or user.`)
    setUrl('')
  }

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
    if(!recipient) { setDonutAddress(''); return; }
    if(contentId) setUserMode(false);
    else setUserMode(true);
    async function getAddress(){
      const { error } = await fetchCors(`https://old.reddit.com/user/${recipient}/about.json`)
      if(error) {
        setUrl('');
        setRecipient('');
        return;
      }
      const user = await getUser({username: recipient})
      if(user && !donutAddress) setDonutAddress(user.address)
    }
    getAddress()
  }, [recipient])

  useEffect(()=>{
    if(!token) { setApproved(false); return; }
    checkApproval()
  }, [token, amount])

  async function checkApproval(){
    const allowance = await token.allowance(account, chains[chainId].tipping)
    setApproved(allowance.gte(parseEther(amount.replace(/,/g, ''))))
  }

  function updateRecipient(e){
    let name = e.target.value
    clearTimeout(timeout);
    timeout = setTimeout(() => isRedditUsername(name).then(valid=>valid && setRecipient(name)), 250);
  }

  const setFormattedTipAmount = amount => {
    setAmount(commaNumber(amount.replace(/,/g, '')));
  };

  const [relayOn, setRelayOn] = useState(true);
  const toggleRelay = () => setRelayOn(!relayOn);

  let address, addressLogo
  if(donutAddress) {
    address = donutAddress
    addressLogo = <span className="address-logo donut" style={{marginLeft: ".25em"}} title={`Using donut registered address for ${recipient} (${address})`}>🍩</span>
  }  else if(recipient && chainId) {
    address = chains[chainId].treasuryMultiSig
    addressLogo = <span className="address-logo donut" style={{marginLeft: ".25em"}} title={`${recipient} can collect from Treasury Multisig (${chains[chainId].treasuryMultiSig})`}>🏦</span>
  }

  const buttonDisabled = isSending || !amount || !address;
  const buttonClass = classNames('complete cute-pink-btn', {
    disabled: buttonDisabled,
  });

  let action
  if(active){
    if(chainId === 100) {
      if(approved) {
        action = <div className={buttonClass} onClick={()=>tip(signer, chainId, 'DONUT', address, amount, contentId, setIsSending)}>Send Tip</div>
      } else {
        action = <div className={buttonClass} onClick={()=>approve(token.connect(signer), chains[chainId].tipping, setIsSending).then(checkApproval)}>Approve</div>
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
      <a style={{textDecoration: "none"}} target="blank" href={`https://www.reddit.com/u/${recipient}`}>/u/{recipient}</a>
      <FontAwesomeIcon className="cancel" icon={faTimes} onClick={clear} />
    </React.Fragment>
  }

  let inputArea
  if(userMode) {
    inputArea = <div className="cute-input target-container">
        <span className="user-prefix" onClick={() => urlRef.current.focus()}>/u/</span>
        <input ref={urlRef} value={recipient} onChange={updateRecipient} placeholder={'vitalik'}/>
        {addressLogo}
      </div>
  } else {
    inputArea = <div className="cute-input target-container">
        <input ref={urlRef} value={url} onChange={e => setUrl(e.target.value)} onKeyPress={onlyPaste} placeholder={'Paste a reddit post here'}/>
      </div>
  }


  return (
    <div className="tipping-interface box">
      <div className="tip-token">🍩</div>
      <div className="cute-header tip-info">
        {recipientHeader ? <span>Tipping {recipientHeader}</span> : `Choose a ${userMode ? 'User' : 'Post'} to Tip`}
      </div>
      <div className="tip-token-info">
        {recipientHeader ? 'EthTrader DONUTs' : <span>Or <a onClick={() => clear() || setUserMode(!userMode)}>click here</a> to tip a {userMode ? 'post' : 'user'}</span>}
      </div>
      { !userMode && (content || recipient)
        ? <div className="reddit-preview">
            <h3 className="author">
              {recipient} {addressLogo}
            </h3>
            {content && <p className="body">{content}</p>}
          </div>
        : inputArea
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
    throw e
  }
  setIsSending(false)
}

async function tip(signer, chainId, tokenSymbol, recipientAddress, amount, contentId, setIsSending){
  amount = amount.replace(/,/g, '')
  console.log(tokenSymbol, recipientAddress, amount, contentId)
  setIsSending(true)
  const tokenAddress = chains[chainId][tokenSymbol.toLowerCase()]
  const tipping = new Contract(chains[chainId].tipping, abis.Tipping, signer)
  try {
    let tx = await tipping.tip(recipientAddress, parseEther(amount), tokenAddress, formatBytes32String(contentId))
    await tx.wait()
  } catch(e){
    throw e
  }
  setIsSending(false)
}
//
// async function relayTip(){
//   let response = await postData("http://localhost:3001", lavaPacket)
//   console.log(response)
// }
