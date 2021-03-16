import React from 'react'
import { Link } from 'components/Router'
import styled, { keyframes } from "styled-components";

const heart = keyframes`
  0% {
    transform: scale(0.8);
  }
  5% {
    transform: scale(0.9);
  }
  10% {
    transform: scale(0.8);
  }
  15% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.8);
  }
  100% {
    transform: scale(0.8);
  }
`;

const DonutContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  animation: ${heart} 2.5s infinite;
`;


export default () => (
  <DonutContainer>
    <h1 style={{fontSize: "4em"}}>🍩</h1>
  </DonutContainer>
)
