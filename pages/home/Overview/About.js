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

    {/* $('#line-2').getBoundingClientRect().height */}
    {/* $('#line-2').getTotalLength() */}
    <Line
      pathLength={420}
      progress={progress}
      width="1000"
      height="172"
      id="line-0"
      d="
        M 500, 0
        v 20
        h 20
        v 10
        h -40
        v 10
        h 20

        h 20
        v 10
        h -40
        v 10
        h 20

        h 20
        v 10
        h -40
        v 10
        h 20

        v 100
      "
    />
    <Box fadeIn={progress > .9}>

      Having developed an appreciation for design through my work at IBM, I approach every problem with the end-user in mind.
      <br/><br/>
      On the front-end, I seek to gain a deeper understanding of the user to be able to build better experiences.
      <br/>
      On the back-end, I strive to improve upon the development processes and tooling for my team.
      <br/><br/>
      Since graduating from the University of Texas at Austin, I had the opportunity to work on a cross functional team of developers and designers, contribute across the full stack on multiple applications using React, Node and Postgres, and take a green-field project from the initial scoping to scaling it as it gained traction.

    </Box>

    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>


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

  opacity: ${props => props.fadeIn ? 1 : 0}; 
`
;
