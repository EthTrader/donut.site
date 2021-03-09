import React, { useState, useEffect, useContext, createContext } from "react";
import { Contract } from "@ethersproject/contracts";
import { Web3Provider, getDefaultProvider } from "@ethersproject/providers";
import { Zero } from "@ethersproject/constants";
import { addresses, abis } from "contracts";

const donutContext = createContext();

export function UseDonutsProvider({ wallet, children }){
  const donuts = useProvideDonuts(wallet);
  return <donutContext.Provider value={donuts}>{children}</donutContext.Provider>;
}

export const useDonuts = () => {
  return useContext(donutContext);
};

function useProvideDonuts(wallet){
  const [provider, setProvider] = useState(null);
  const [balance, setBalance] = useState(Zero);
  const [token, setToken] = useState(null);

  useEffect(() => {
    if(wallet.status !== "connected") {setProvider(null);return;}
    setProvider(new Web3Provider(wallet.ethereum))
  }, [wallet]);

  useEffect(() => {
    if(!provider) {
      setBalance(Zero);
      setToken(null);
      return;
    }
    const token = new Contract(addresses[wallet.chainId.toString()].DONUT, abis.IERC20, provider);
    setToken(token);
    async function getBalance(){
      console.log(addresses[wallet.chainId.toString()].DONUT)
      const balance = await token.balanceOf(wallet.account);
      setBalance(balance);
    }
    getBalance();
  }, [provider])

  return {
    provider,
    balance,
    token
  };
}
