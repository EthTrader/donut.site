import React, { useEffect, useState } from 'react';

class Model {

  constructor() {
    this.data = {
      balance: 0,
      address: 'na',
      isConnected: false,
    };
    this.context = React.createContext(this.data);
    this.observers = [];
    this.askForWallet = this.askForWallet.bind(this);
  }

  askForWallet() {
    // THIS is where you could do web3 stuff to obtain wallet data
    // and assign a new object to this.data then call
    // this.updateObservers() to update the
    // context object for components
    this.data = {
      balance: 4000,
      address: '0x009af493e9A3a3Ba3DFfBF734E1B2a5B0352dF46',
      isConnected: true,
    };
    this.updateObservers();
  }

  async sendTip(user, amount) {
    await new Promise(r => setTimeout(r, 5000));
  }

  updateObservers() {
    this.observers.forEach(observer => observer.setData(this.data));
  }

}


const instance = new Model();

export default instance;

export const WalletProvider = (props) => {
  const [data, setData] = useState(instance.data);
  const [id, _] = useState(Date.now());
  useEffect(() => {
    instance.observers.push({ id, setData });
    return () => instance.observers.filter(instance => instance.id != id);
  }, []);
  console.log('wallet data changed', id, data);
  return <instance.context.Provider value={data}>
    {props.children}
  </instance.context.Provider>
}
