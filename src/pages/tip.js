import React from 'react'
import TippingBox from '../components/TippingBox'

function useQuery() {
  let search = ""
  if(typeof window !== 'undefined') search = window.location.search
  return new URLSearchParams(search);
}

//  ?contentId=t3_kf251b&recipient=EthTraderCommunity&address=0xf7927bf0230c7b0E82376ac944AeedC3EA8dFa25
export default () => {
  let query = useQuery();

  return <TippingBox recipient={query.get("recipient")} address={query.get("address")} contentId={query.get("contentId")} />
}
