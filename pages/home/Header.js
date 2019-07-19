import React from 'react';
import { Controller, Scene } from 'react-scrollmagic';

export default () => (
  <Wrap>
    <h2>Portfolio</h2>
    <h1>Semur Nabiev</h1>
  </Wrap>
);


import styled from 'styled-components';

const Wrap = styled.section`
  display: flex;
  flex-direction: column;
  margin: auto;
  padding-bottom: 15rem;
  h1 {
    font-size: 2rem;
    margin: 0;
    margin-left: auto;
  }
  h2{ 
    font-size: 10rem; 
    margin: 0;  
    padding-top: 10rem;
    padding-bottom: 5rem;
  }
`
;
