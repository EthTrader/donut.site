import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { useWeb3React } from '@web3-react/core'
import { InjectedConnector, NoEthereumProviderError, UserRejectedRequestError } from '@web3-react/injected-connector'
import { useDonuts} from 'hooks/useDonuts';
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon';
import { shortNum } from '../utils';
import { formatEther } from "@ethersproject/units"
import 'components/WalletInfo.scss';

const ConnectYourWalletButton = ({connect}) => {
  return <div className="connect-wallet-button cute-pink-btn" onClick={connect}>
    Connect Wallet
  </div>
}

const WalletDetails = ({ account, donuts, disconnect }) => {
  const shorthand = account.substr(0, 6) + '...' + account.substr(account.length - 4);
  return <div className="wallet-details box">
    <div className="donut-bal">{shortNum(formatEther(donuts.donutBalance))}  🍩</div>
    <div className="address-container">
      <div className="short-address">{shorthand}</div>
      <Jazzicon diameter={18} seed={jsNumberForAddress(account)} />
    </div>
    <FontAwesomeIcon className="disconnect" onClick={disconnect} icon={faTimes} />
  </div>
};

export default () => {
  const donuts = useDonuts();
  const { account, active, activate, deactivate } = useWeb3React();
  return <div className="wallet-info">
    {active ?
      <WalletDetails account={account} donuts={donuts} disconnect={deactivate} /> :
      <ConnectYourWalletButton connect={()=>{activate(new InjectedConnector(), undefined, true)}} />
    }
  </div>
};
