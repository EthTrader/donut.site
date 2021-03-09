import React, { useContext } from 'react';
import { useWallet } from 'use-wallet';
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

const WalletDetails = ({ wallet, donuts, disconnect }) => {
  const address = wallet.account;
  const shorthand = address.substr(0, 6) + '...' + address.substr(address.length - 4);
  return <div className="wallet-details box">
    <div className="donut-bal">{shortNum(formatEther(donuts.balance))}  🍩</div>
    <div className="address-container">
      <div className="short-address">{shorthand}</div>
      <Jazzicon diameter={18} seed={jsNumberForAddress(address)} />
    </div>
    <div className="disconnect" onClick={disconnect}>X</div>
  </div>
};

export default () => {
  const wallet = useWallet();
  const donuts = useDonuts();
  return <div className="wallet-info">
    {wallet.status !== 'connected' && <ConnectYourWalletButton connect={()=>wallet.connect()} />}
    {wallet.status === 'connected' && <WalletDetails wallet={wallet} donuts={donuts} disconnect={()=>wallet.reset()} />}
  </div>
};
