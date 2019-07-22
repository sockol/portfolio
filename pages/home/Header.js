import React from 'react';
import { Controller, Scene } from 'react-scrollmagic';

export default () => (
  <Wrap>
    <h2>Hello</h2>
    <h1>I am a full-stack engineer, with a passion for technology and people</h1>
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
