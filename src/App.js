import React from 'react'
import classNames from 'classnames';
import { Web3Provider, getDefaultProvider } from "@ethersproject/providers";
import { Root, Routes, addPrefetchExcludes } from 'react-static';
import { Web3ReactProvider, useWeb3React } from '@web3-react/core'
import { UseDonutsProvider, useDonuts} from 'hooks/useDonuts';
import { Link, Router } from 'components/Router';
import Dynamic from 'containers/Dynamic';
import WalletInfo from 'components/WalletInfo';

import './App.css'

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

function App() {

  return (
    <Root>
      <div className="app">
        <nav style={{position: "relative", zIndex: 100}}>
          <WalletInfo />
        </nav>
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router>
            <Dynamic path="dynamic" />
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </div>
    </Root>
  )
}

function DonutProvider({children}){
  const web3React = useWeb3React();
  return <UseDonutsProvider web3React={web3React}>
    {children}
  </UseDonutsProvider>
}

function getLibrary(provider, connector) {
  return new Web3Provider(provider)
}

export default () => (
  <Web3ReactProvider getLibrary={getLibrary}>
    <DonutProvider>
      <App />
    </DonutProvider>
  </Web3ReactProvider>
)
