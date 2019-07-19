import React from 'react';
import { Controller, Scene } from 'react-scrollmagic';

import { Tween, Timeline } from 'react-gsap';

import Schematics from 'components/Schematics';
import AttachmentWithLabel from 'components/AttachmentWithLabel';

/*
i am
  - from uzbekistan
  - a UTexas graduate
  - a naturalized citizen
  - a fan of: Node/React/PG

  line going down, with lbocks popping up


  make this look like a cpu schema. throw in db and other cloud logos into project pages
*/

const DBUG = process.env.NODE_ENV === `development`;


const scrollFn = ({ path, pathLength }) => () => {
  if (!path || !pathLength)
    return;
  // What % down is it?
  // https://stackoverflow.com/questions/2387136/cross-browser-method-to-determine-vertical-scroll-percentage-in-javascript/2387222#2387222
  // Had to try three or four differnet methods here. Kind of a cross-browser nightmare.
  const scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

  // Length to offset the dashes
  const drawLength = pathLength * scrollPercentage;

  // Draw in reverse
  path.style.strokeDashoffset = pathLength - drawLength;

  // When complete, remove the dash array, otherwise shape isn't quite sharp
  // Accounts for fuzzy math
  if (scrollPercentage >= 0.99)
    path.style.strokeDasharray = `none`;

  else
    path.style.strokeDasharray = pathLength + ` ` + pathLength;
};

class Page extends React.Component {

  componentDidMount() {
    // Get a reference to the <path>
    const path = document.querySelector(`#star-path`);
    if (!path)
      return;
    // Get length of path... ~577px in this case
    const pathLength = path.getTotalLength();

    // Make very long dashes (the length of the path itself)
    path.style.strokeDasharray = pathLength + ` ` + pathLength;

    // Offset the dashes so the it appears hidden entirely
    path.style.strokeDashoffset = pathLength;

    // Jake Archibald says so
    // https://jakearchibald.com/2013/animated-line-drawing-svg/
    path.getBoundingClientRect();

    // When the page scrolls...
    window.addEventListener(`scroll`, scrollFn({ path, pathLength }));
  }

  componentWillUnmount() {
    window.removeEventListener(`scroll`, scrollFn());
  }

  render() {
    return (


      <Wrap>
        {/* <Schematics.Attachment/>
        <Schematics.And/>
        <Schematics.Not/>
        <Schematics.Xor/>
        <Schematics.Or/> */}

        <Schematics.And
          style={{
            transform: `rotate(90deg)`,
            margin: `0 auto`,
          }}
        />

        <StyledSVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 712">
          <path
            // id="star-path"
            fill="none" stroke="black" strokeWidth="2"
            d="
              M 500, 0
              v 100
              h 50

              v 50
              h -100

              v 50
              h 200

              v 50
              h -400

              v 50
              h 250


              v 400
              h 450
              v 10
              h -900
            "
            // d="
            //   M 50, 50
            //   L 100, 100
            //   l 25 0
            //   z"
          />
        </StyledSVG>

        <Attachments>
          <AttachmentWithLabel label="Node"/>
          <AttachmentWithLabel label="React"/>
          <AttachmentWithLabel label="Postgres"/>
          <AttachmentWithLabel label="MongoDB"/>
          <AttachmentWithLabel label="Docker"/>
          <AttachmentWithLabel label="GraphQL/Apollo"/>
          <AttachmentWithLabel label="ElasticSearch"/>
          <AttachmentWithLabel label="AWS"/>
        </Attachments>

        then put together my projects.

        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      </Wrap>
    );
  }

}

export default Page;

import styled from 'styled-components';

const Wrap = styled.section`
  display: flex;
  flex-direction: column; 
`;

const StyledSVG = styled.svg`
  display: flex;
  margin: 0 auto;
  width: 100%;
`;

const Attachments = styled.div`
  position: relative;
  top: -2px;
  display: flex;
  margin: 0 auto;

  & > div {
    width: 7rem;
  }
`
;
