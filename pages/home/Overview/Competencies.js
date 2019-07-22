import React from 'react';
import { Controller, Scene } from 'react-scrollmagic';

import { Tween, Timeline } from 'react-gsap';

import Schematics from 'components/Schematics';
import AttachmentWithLabel from 'components/AttachmentWithLabel';
import Line from 'components/Line';

import AndGate from 'components/Schematics/And.js';

const DBUG = process.env.NODE_ENV === `development`;


// { /* <Box>Projects (list of 9, which shift the screen to the right where you can view them. with history shifts )</Box> */ }

// the line will squiggle into right, then left, then right again
// on each end, there will be a box with nodes stretching otu into tech i know


const FrontEndWrap = ({ progress }) => (

  <BoxWrap
    fadeIn={progress > .05}
    style={{
      marginTop: `18%`,
      marginLeft: `19%`,
    }}
  >

    <AttachmentWithLabel
      style={{
        marginLeft: `0rem`,
        marginTop: `4rem`,
      }}
      svgStyle={{
        transform: `rotate(-180deg)`,
        marginLeft: `-3rem`,
        marginTop: `-5rem`,
      }}
      labelStyle={{
        marginLeft: `-15rem`,
        marginTop: `-10rem`,
      }}
      label="StyledComponents"
    />
    <AttachmentWithLabel
      style={{
        marginLeft: `3rem`,
        marginTop: `4rem`,
      }}
      svgStyle={{
        transform: `rotate(-180deg)`,
        marginLeft: `-3rem`,
        marginTop: `-5rem`,
      }}
      labelStyle={{
        marginLeft: `-10rem`,
        marginTop: `-12rem`,
      }}
      label="NextJS/Gatsby"
    />
    <AttachmentWithLabel
      style={{
        marginLeft: `6rem`,
        marginTop: `4rem`,
      }}
      svgStyle={{
        transform: `rotate(-180deg)`,
        marginLeft: `-3rem`,
        marginTop: `-5rem`,
      }}
      labelStyle={{
        marginLeft: `-8rem`,
        marginTop: `-10rem`,
      }}
      label="Webpack"
    />

    <AttachmentWithLabel
      style={{
        marginLeft: `9rem`,
        marginTop: `4rem`,
      }}
      svgStyle={{
        transform: `rotate(-180deg)`,
        marginLeft: `-3rem`,
        marginTop: `-5rem`,
      }}
      labelStyle={{
        marginLeft: `-10rem`,
        marginTop: `-12rem`,
      }}
      label={<Bubble>React</Bubble>}
    />

    <AttachmentWithLabel
      style={{
        marginLeft: `9.5rem`,
        marginTop: `4.5rem`,
      }}
      svgStyle={{
        transform: `rotate(-90deg)`,
        marginLeft: `-1rem`,
        marginTop: `-5rem`,
      }}
      labelStyle={{
        marginLeft: `3rem`,
        marginTop: `-8rem`,
      }}
      label="Apollo Client"
    />

    <AttachmentWithLabel
      style={{
        marginLeft: `9.5rem`,
        marginTop: `7rem`,
      }}
      svgStyle={{
        transform: `rotate(-90deg)`,
        marginLeft: `-1rem`,
        marginTop: `-5rem`,
      }}
      labelStyle={{
        marginLeft: `3rem`,
        marginTop: `-8rem`,
      }}
      label="Redux"
    />
  Front-End
  </BoxWrap>

);


const BackEndWrap = ({ progress }) => (

  <BoxWrap
    fadeIn={progress > .19}
    style={{
      marginTop: `26%`,
      marginLeft: `-39%`,
    }}
  >

    <AttachmentWithLabel
      style={{
        marginLeft: `0rem`,
        marginTop: `4rem`,
      }}
      svgStyle={{
        transform: `rotate(-180deg)`,
        marginLeft: `-3rem`,
        marginTop: `-5rem`,
      }}
      labelStyle={{
        marginLeft: `-10rem`,
        marginTop: `-10rem`,
      }}
      label={<Bubble>Node</Bubble>}
    />
    <AttachmentWithLabel
      style={{
        marginLeft: `9rem`,
        marginTop: `4rem`,
      }}
      svgStyle={{
        transform: `rotate(-90deg)`,
        marginLeft: `-0.6rem`,
        marginTop: `-4rem`,
      }}
      labelStyle={{
        marginLeft: `1rem`,
        marginTop: `-8rem`,
        whiteSpace: `nowrap`,
      }}
      label="GraphQL & Apollo Server"
    />
    <AttachmentWithLabel
      style={{
        marginLeft: `4rem`,
        marginTop: `4rem`,
      }}
      svgStyle={{
        transform: `rotate(-180deg)`,
        marginLeft: `-3rem`,
        marginTop: `-5rem`,
      }}
      labelStyle={{
        marginLeft: `-8rem`,
        marginTop: `-10rem`,
      }}
      label="SocketIO"
    />

    <AttachmentWithLabel
      style={{
        marginLeft: `11rem`,
        marginTop: `4rem`,
      }}
      svgStyle={{
        transform: `rotate(-180deg)`,
        marginLeft: `-3rem`,
        marginTop: `-5rem`,
      }}
      labelStyle={{
        marginLeft: `-10rem`,
        marginTop: `-10rem`,
      }}
      label={<Bubble>Postgres</Bubble>}
    />

    <AttachmentWithLabel
      style={{
        marginLeft: `-3.5rem`,
        marginTop: `2.5rem`,
      }}
      svgStyle={{
        transform: `rotate(90deg)`,
        marginLeft: `-.5rem`,
        marginTop: `-3rem`,
      }}
      labelStyle={{
        marginLeft: `-13rem`,
        marginTop: `-2rem`,
      }}
      label="MongoDB"
    />

    <AttachmentWithLabel
      style={{
        marginLeft: `-3.5rem`,
        marginTop: `4.5rem`,
      }}
      svgStyle={{
        transform: `rotate(90deg)`,
        marginLeft: `-.5rem`,
        marginTop: `-3rem`,
      }}
      labelStyle={{
        marginLeft: `-14rem`,
        marginTop: `-2rem`,
      }}
      label="ElasticSearch"
    />
  Back-End
  </BoxWrap>

);


const DevOpsWrap = ({ progress }) => (

  <BoxWrap
    fadeIn={progress > .43}
    style={{
      marginTop: `45%`,
      marginLeft: `11%`,
    }}
  >

    <AttachmentWithLabel
      style={{
        marginLeft: `0rem`,
        marginTop: `4rem`,
      }}
      svgStyle={{
        transform: `rotate(-180deg)`,
        marginLeft: `-3rem`,
        marginTop: `-5rem`,
      }}
      labelStyle={{
        marginLeft: `-15rem`,
        marginTop: `-10rem`,
      }}
      label={<Bubble>Docker</Bubble>}
    />
    <AttachmentWithLabel
      style={{
        marginLeft: `3rem`,
        marginTop: `4rem`,
      }}
      svgStyle={{
        transform: `rotate(-180deg)`,
        marginLeft: `-3rem`,
        marginTop: `-5rem`,
      }}
      labelStyle={{
        marginLeft: `-10rem`,
        marginTop: `-10rem`,
      }}
      label="AWS"
    />
    <AttachmentWithLabel
      style={{
        marginLeft: `6rem`,
        marginTop: `4rem`,
      }}
      svgStyle={{
        transform: `rotate(-180deg)`,
        marginLeft: `-3rem`,
        marginTop: `-5rem`,
      }}
      labelStyle={{
        marginLeft: `-8rem`,
        marginTop: `-10rem`,
      }}
      label="TravisCI"
    />
    <AttachmentWithLabel
      style={{
        marginLeft: `9rem`,
        marginTop: `4rem`,
      }}
      svgStyle={{
        transform: `rotate(-90deg)`,
        marginLeft: `-1.5rem`,
        marginTop: `-4rem`,
      }}
      labelStyle={{
        marginLeft: `1rem`,
        marginTop: `-8rem`,
        whiteSpace: `nowrap`,
      }}
      label="IBM Cloud"
    />
  DevOps
  </BoxWrap>

);

export default ({ progress }) => (
  <div>
    <CenterWrap>
      <StyledAnd rotationDegrees={90}/>

      <Line
        pathLength={2200}
        progress={progress}
        width="1000"
        height="700"
        id="line-2"
        d="
          M 500, 0
          v 140
          h 230

          v 100
          h -600

          v 150
          h 500

          v 50
          h -130

          v 300
        "
      />

      <FrontEndWrap progress={progress}/>
      <BackEndWrap progress={progress}/>
      <DevOpsWrap progress={progress}/>

      <Box fadeIn={progress > .9}>My projects</Box>
    </CenterWrap>


  </div>
);


import styled from 'styled-components';

const StyledAnd = styled(AndGate)` 
  transform: rotate(${props => props.rotationDegrees || 0}deg);
  margin: 0 auto;
  display: block;
  height: 50px;
  width: 72px; 
  margin-top: 2px;
  margin-bottom: 10px;
`;

const CenterWrap = styled.div`
  display: block;
  margin: 0 auto;
  width: 100%;
`;

const Competences = styled.div`
  position: absolute;
  width: 100%;
`;
const Attachments = styled.div`
  position: absolute;
  display: flex;
  margin: 0 auto;

  & > div {
    width: 7rem;
  }
`
;


const Box = styled.div`
   
  transition: opacity 0.1s;
  opacity: ${props => props.fadeIn ? 1 : 0 }; 
    
  z-index: 1;
  text-align: center;  
  font-weight: bold;
  display: table;

  background: white;

  border: 4px solid black;
  border-radius: .5rem;
  margin: 0 auto; 
  padding: 1rem;
`
;

const BoxWrap = styled.div`
  
  position: absolute; 
  top: 0;
  left: 50%;
  transition: opacity 0.1s;
  opacity: ${props => props.fadeIn ? 1 : 0 }; 
    
  z-index: 1;
  text-align: center;  
  font-weight: bold;
  display: block;

  background: white;

  border: 4px solid black;
  border-radius: .5rem;
  margin: 0 auto;

  padding: 1rem 4rem;
 
  div {
    position: absolute;
    
    display: block;
    height: 0;
    width: 0;
  }
`
;

const Bubble = styled.span`
  background: black;
  font-weight: bold;
  color: white;
  display: inline-block !important;
  width: auto;
  padding: .05rem 1rem ;
  border-radius: 1rem;
`;
