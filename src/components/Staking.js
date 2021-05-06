import React, { useState, useEffect, useContext, useRef } from 'react'
import { Contract } from "@ethersproject/contracts";
import { chains, abis } from "contracts";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { useWeb3React } from '@web3-react/core'
import { useDonuts} from 'hooks/useDonuts';
import { commaNumber, fetchCors, postData, getUser, onlyPaste, isRedditUsername, useXDai } from 'utils'
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon';
import { shortNum } from '../utils';
import { formatEther } from "@ethersproject/units"

export default () => {
  const { account, active, chainId, library } = useWeb3React();
  const donuts = useDonuts();
  const { signer, feeBalance, donutBalance, token, tipping } = donuts;
  const [chainData, setChainData] = useState({})
  const [lpToken, setLpToken] = useState()
  const [staking, setStaking] = useState()
  const [lpBalance, setLpBalance] = useState(0)
  const [stakedBalance, setStakedBalance] = useState(0)
  const [claimable, setClaimable] = useState(0)
  const [totalStaked, setTotalStaked] = useState(0)
  const [approved, setApproved] = useState(false)

  useEffect(()=>{
    if(!chainId) {setChainData({}); setLpToken(null); setStaking(null); return;}
    const chainData = chains[chainId.toString()]
    setChainData(chainData)
    if(signer) setContracts(signer)
  }, [chainId])

  useEffect(()=>{
    if(signer) setContracts(signer)
  }, [signer])

  function setContracts(signer){
    setLpToken(new Contract(chainData.lpToken, abis.IERC20, signer))
    setStaking(new Contract(chainData.stakingContract, abis.Staking, signer))
  }

  async function checkBalances(){
    const balance = await lpToken.balanceOf(account)
    const allowance = await lpToken.allowance(account, chainData.stakingContract)
    const stakedBalance = await staking.balanceOf(account)
    const claimable = await staking.earned(account);
    const totalStaked = await staking.totalSupply();
    setApproved(allowance.gte(balance))
    setLpBalance(balance)
    setStakedBalance(stakedBalance)
    setClaimable(claimable)
    setTotalStaked(totalStaked)
  }

  useEffect(()=>{
    if(!lpToken) {setLpBalance(0); return;}
    async function getBalances(){ await checkBalances() }
    getBalances()
  }, [lpToken, staking])

  return <div className="staking" style={{"position": "absolute"}}>
    <p>You are connected to {chainData.label || "an unsupported chain"} {chainData.label=="mainnet" && <button onClick={()=>useXDai(library, ()=>{})}>Switch to xDai</button>}</p>
    You have:
    <p>{formatEther(feeBalance)} {chainData?.feeToken?.toUpperCase()}</p>
    <p>{formatEther(donutBalance)} DONUTS</p>
    <p>{formatEther(lpBalance)} LP tokens</p>

    <p>To stake, you need HONEY-V2 DONUT-WXDAI tokens: <a target="_blank" href={`${chainData.poolAddPath}${chainData.donut}/ETH`}>get them by pooling DONUT and {chainData?.feeToken?.toUpperCase()} on {chainData.swapMarketLabel}.</a></p>
    <p>{!approved && <button onClick={()=>approveLP(lpToken, chainData.stakingContract).then(checkBalances)}>Approve token spending to stake</button>}</p>
    {approved && lpBalance && lpBalance.gt(0) && <p id="stake">
      You can <button onClick={()=>staking.stake(lpBalance).then(res=>res.wait()).then(checkBalances)}>stake</button> {formatEther(lpBalance)} LP tokens
    </p>}
    <p>You are staking {formatEther(stakedBalance)} LP tokens.</p>
    {stakedBalance && stakedBalance.gt(0) && <p id="unstake">
      You can <button onClick={()=>staking.withdraw().then(res=>res.wait()).then(checkBalances)}>unstake</button>
    </p>}
    <p>
      You can <button onClick={()=>staking.getReward().then(res=>res.wait()).then(checkBalances)}>claim</button> {formatEther(claimable)} DONUTs, or <button onClick={()=>staking.exit().then(res=>res.wait()).then(checkBalances)}>claim and unstake</button>
    </p>
    <p>There are {formatEther(totalStaked)} total staked LP tokens.</p>
    <p>Daily return: <span id="dailyRoi"></span>%</p>
    <p>APY: <span id="yearlyRoi"></span>%</p>
    <p></p><table>
      <tbody><tr><td>Staking contract:</td><td><a target="_blank" href={`${chainData.explorerPath}${chainData.stakingContract}`}>{chainData.stakingContract}</a></td></tr>
      <tr><td>DONUT:</td><td><a target="_blank" href={`${chainData.explorerPath}${chainData.donut}`}>{chainData.donut}</a></td></tr>
      <tr><td>LP Token:</td><td><a target="_blank" href={`${chainData.explorerPath}${chainData.lpToken}`}>{chainData.lpToken}</a></td></tr>
    </tbody></table><p></p>
  </div>
};

async function approveLP(lpToken, stakingContract) {
  const res = await lpToken.approve(stakingContract, "0xffffffffffffffffffffffffffffffffffffffff");
  await res.wait()
}
