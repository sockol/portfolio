import React from 'react';
import { Controller, Scene } from 'react-scrollmagic';

import { Tween, Timeline } from 'react-gsap';

import Schematics from 'components/Schematics';
import AttachmentWithLabel from 'components/AttachmentWithLabel';
import AndGate from 'components/Schematics/And.js';
import Line from 'components/Line';

const DBUG = process.env.NODE_ENV === `development`;


export default ({ progress }) => (

  <ResumeBoxWrap fadeIn={progress > .7}>

    <Schematics.Attachment
      style={{
        left: `50%`,
        top: `50%`,
        marginLeft: `6rem`,
      }}
    />
    <Schematics.Attachment
      style={{
        left: `50%`,
        top: `50%`,
        marginLeft: `-6rem`,
        transform: `rotate(180deg)`,
      }}
    />
    <Schematics.Attachment
      style={{
        left: `50%`,
        top: `50%`,
        marginTop: `6rem`,
        marginTop: `1.7rem`,
        marginLeft: `4rem`,
      }}
    />
    <Schematics.Attachment
      style={{
        left: `50%`,
        top: `50%`,
        marginTop: `1.7rem`,
        marginLeft: `-5rem`,
        transform: `rotate(90deg)`,
      }}
    />
    Resume
  </ResumeBoxWrap>
);

import styled from 'styled-components';


const Box = styled.div`
  border: 4px solid black;
  border-radius: .5rem;
  margin: 0 auto;
  text-align: left;
  padding: 1rem;
  display: table;
  max-width: 30rem;
  width: 100%;
`
;

const ResumeBoxWrap = styled(Box)`
  
  max-width: 10rem;
  transition: opacity 0.1s;
  opacity: ${props => props.fadeIn ? 1 : 0 }; 
  
  z-index: 1;
  text-align: center;
  position: relative;
  margin-top: -100px;
  cursor: pointer;
  font-weight: bold;

  background: black;
  color: white; 

  div {
    position: absolute; 
    display: block;
    height: 0;
    width: 0;
  }
`
;
