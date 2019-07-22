import React from 'react';
import { Controller, Scene } from 'react-scrollmagic';

import { Tween, Timeline } from 'react-gsap';

import Schematics from 'components/Schematics';
import AttachmentWithLabel from 'components/AttachmentWithLabel';
import AndGate from 'components/Schematics/And.js';
import Line from 'components/Line';

const DBUG = process.env.NODE_ENV === `development`;


export default ({ progress }) => (
  <CenterWrap>

    <StyledAnd rotationDegrees={90}/>

    <IntroWrapAttachments>
      <AttachmentWithLabel
        style={{
          left: `50%`,
          marginLeft: `6rem`,
          marginTop: `14rem`,
        }}
        labelStyle={{
          marginLeft: `4rem`,
          marginTop: `-2.8rem`,
        }}
        svgStyle={{
          transform: `rotate(-90deg)`,
        }}
        fadeIn={progress > .07}
        label={
          <BubbleLink href="https://github.com/sockol">Github profile</BubbleLink>
        }
      />
      <AttachmentWithLabel
        style={{
          left: `50%`,
          marginLeft: `-6.01rem`,
          marginTop: `16.5rem`,
        }}
        labelStyle={{
          marginLeft: `-13rem`,
          marginTop: `-1.5rem`,
        }}
        svgStyle={{
          transform: `rotate(-226deg)`,
        }}
        fadeIn={progress > .12}
        label={
          <BubbleLink href="https://medium.com/@semur.nabiev">Medium articles</BubbleLink>
        }
      />
      <AttachmentWithLabel
        style={{
          left: `50%`,
          marginLeft: `18rem`,
          marginTop: `19.5rem`,
        }}
        labelStyle={{
          marginLeft: `4.5rem`,
          marginTop: `0rem`,
        }}
        svgStyle={{
          transform: `rotate(-45deg)`,
        }}
        fadeIn={progress > .23}
        label={
          <BubbleLink href="https://www.linkedin.com/in/semur-nabiev-15305382/">LinkedIn</BubbleLink>
        }
      />
    </IntroWrapAttachments>

    <Line
      pathLength={2500}
      progress={progress}
      width="1000"
      height="600"
      id="line-1"
      d="
        M 500, 0
        v 200
        h 100

        v 50
        h -200

        v 50
        h 400

        v 50
        h -800

        v 50
        h 500


        v 100
      "
    >
    </Line>

  </CenterWrap>
);


import styled from 'styled-components';

const CenterWrap = styled.div`
  display: block;
  margin: 0 auto;
  width: 100%;
`;

const StyledAnd = styled(AndGate)` 
  transform: rotate(${props => props.rotationDegrees || 0}deg);
  margin: 0 auto;
  display: block;
  height: 50px;
  width: 72px; 
  margin-top: -12px;
  margin-bottom: 10px;
`;


const IntroWrapAttachments = styled.div` 
  position: relative;  
  div {
    position: absolute; 
    display: block;
    height: 0;
    width: 0;

    span {
      white-space: nowrap;
      display: block;    
    } 
  }
`;

const Box = styled.div`
  border: 4px solid black;
  border-radius: .5rem;
  margin: 0 auto;
  text-align: left;
  padding: 1rem;
  display: table;
  max-width: 30rem;
  width: 100%;
  line-height: 1.5rem;
`
;

const BubbleLink = styled.a`
  background: black;
  font-weight: bold;
  color: white;
  display: inline-block;
  text-decoration: none;
  width: auto;
  padding: .05rem 1rem ;
  border-radius: 1rem;
`;
