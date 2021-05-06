import React, { useState, useEffect, useContext, createContext } from "react";
import { Contract } from "@ethersproject/contracts";
import { Web3Provider } from "@ethersproject/providers";
import { Zero } from "@ethersproject/constants";
import { chains, abis } from "contracts";

const donutContext = createContext();

export function UseDonutsProvider({ web3React, children }){
  const donuts = useProvideDonuts(web3React);
  return <donutContext.Provider value={donuts}>{children}</donutContext.Provider>;
}

export const useDonuts = () => {
  return useContext(donutContext);
};

function useProvideDonuts({account, active, library, chainId}){
  const [signer, setSigner] = useState(null);
  const [feeBalance, setFeeBalance] = useState(Zero);
  const [donutBalance, setDonutBalance] = useState(Zero);
  const [token, setToken] = useState(null);
  const [tipping, setTipping] = useState(null);

  useEffect(() => {
    if(!active) { setSigner(null); setFeeBalance(Zero); setDonutBalance(Zero); setToken(null); setTipping(null); return; }
    setSigner(library.getSigner())
    const token = new Contract(chains[chainId.toString()].donut, abis.IERC20, library);
    const tipping = new Contract(chains[chainId.toString()].tipping, abis.Tipping, library);
    setToken(token);
    setTipping(tipping);
    async function getBalance(account){
      setFeeBalance(await library.getBalance(account));
      setDonutBalance(await token.balanceOf(account));
    }
    account && getBalance(account);
  }, [active, chainId])

  return {
    signer,
    feeBalance,
    donutBalance,
    token,
    tipping
  };
}
