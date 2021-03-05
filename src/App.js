import React from 'react'
import { Button, Nav } from 'rsuite';
import { Root, Routes, addPrefetchExcludes } from 'react-static'
import useWeb3Modal from "./hooks/useWeb3Modal";
import { Link, Router } from 'components/Router'
import Dynamic from 'containers/Dynamic'

import 'rsuite/dist/styles/rsuite-default.css';
import "typeface-roboto";
import './app.css'

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

function WalletButton({ provider, loadWeb3Modal, logoutOfWeb3Modal }) {
  return (
    <Button onClick={() => {if (!provider) { loadWeb3Modal();} else {logoutOfWeb3Modal();}  }}>
      {!provider ? "Connect Wallet" : "Disconnect Wallet"}
    </Button>
  );
}

function App() {
  let provider, loadWeb3Modal, logoutOfWeb3Modal
  if(typeof window !== 'undefined')
    [provider, loadWeb3Modal, logoutOfWeb3Modal] = useWeb3Modal();

  return (
    <Root>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/tip?contentId=t3_kf251b&recipient=EthTraderCommunity&address=0xf7927bf0230c7b0E82376ac944AeedC3EA8dFa25">Tip</Link>
        {/*<Link to="/about">About</Link>*/}
        {/*<Link to="/dynamic">Dynamic</Link>*/}
        <WalletButton provider={provider} loadWeb3Modal={loadWeb3Modal} logoutOfWeb3Modal={logoutOfWeb3Modal} />
      </Nav>
      <div>
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

export default App
