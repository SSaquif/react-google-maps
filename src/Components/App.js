// import { useState, useRef, useCallback } from "react";
import styled from "styled-components";
import Normalize from "../Styles/Normalize";
import ReducedMotion from "../Styles/ReducedMotion";
import CSSVariables from "../Styles/CSSVariables";

import GMap from "./GMap";

const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Header = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  height: var(--nav-height);
  background-color: var(--nav-bg);
`;

function App() {
  return (
    <>
      <Normalize />
      <ReducedMotion />
      <CSSVariables />
      <AppWrapper>
        <Header />
        <GMap />
      </AppWrapper>
    </>
  );
}

export default App;
