import React from 'react'
import classNames from 'classnames';
import { Root, Routes, addPrefetchExcludes } from 'react-static';
import { ConnectionRejectedError, UseWalletProvider, useWallet } from 'use-wallet';
import { UseDonutsProvider, useDonuts} from 'hooks/useDonuts';
import { Link, Router } from 'components/Router';
import Dynamic from 'containers/Dynamic';
import WalletInfo from 'components/WalletInfo';

import './App.css'

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

function App() {
  const wallet = useWallet();

  return (
    <Root>
      <div className="app">
        <nav>
          <WalletInfo />
          {wallet.error && wallet.error.name === "ChainUnsupportedError" && <p>Switch to {wallet.networkName}</p>}
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
  const wallet = useWallet();
  return <UseDonutsProvider wallet={wallet}>
    {children}
  </UseDonutsProvider>
}

export default () => (
  <UseWalletProvider chainId={100} connectors={{}}>
    <DonutProvider>
      <App />
    </DonutProvider>
  </UseWalletProvider>
)
