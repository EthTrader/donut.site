import React from 'react'
import TippingBox from '../components/TippingBox'
import dayjs from 'dayjs'
import styled, { keyframes } from "styled-components";
import utcPlugin from 'dayjs/plugin/utc'
dayjs.extend(utcPlugin)

const Time = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 10vh;
`;

function useQuery() {
  let search = ""
  if(typeof window !== 'undefined') search = window.location.search
  return new URLSearchParams(search);
}

//  ?contentId=t3_kf251b&recipient=EthTraderCommunity&address=0xf7927bf0230c7b0E82376ac944AeedC3EA8dFa25
export default () => {
  let query = useQuery();
  let utc = query.get("utc")

  return <Time>{dayjs(utc).format("h:ma")}</Time>
}
