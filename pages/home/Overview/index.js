import React from 'react';
import { Controller, Scene } from 'react-scrollmagic';

import { Tween, Timeline } from 'react-gsap';

import Schematics from 'components/Schematics';
import AttachmentWithLabel from 'components/AttachmentWithLabel';
import Line from 'components/Line';

import AndGate from 'components/Schematics/And.js';

import Intro from './Intro';
import About from './About';

import ResumeBox from './ResumeBox';
import Competencies from './Competencies';


/*
https://github.com/bitworking/react-scrollmagic

i am
  - from uzbekistan
  - a UTexas graduate
  - a naturalized citizen
  - a fan of: Node/React/PG

  line going down, with lbocks popping up


  make this look like a cpu schema. throw in db and other cloud logos into project pages

-----

rework this. in the intro write a shift overview instead of the line
shift paragraph

then squggle line. small loop for main technologies (node react postgres mongo).
bigger for supporting tech like Docker/DockerCompose Graphql Redux Apollo AWS
and biggest for ternary things like StyledComponents and what not.

bio with overview.

timeline of what i have done. no. liks to profiles. github, linkedin, medium, resume

technologies, with an increasing squjggle.

projects


I am a full stack developer, with a passion for people and technology.
Having developed an appreciation for design through my work at IBM, I beleieve that engineering,
when enhanced by a deep understanding of the user, leads to real impact for the product.
I strive to improve upon my craft as an front-end developer by closely collaborating with Research and UX.
As a back-end developer, I make it a point to seek out and improve upon any inefficiencies in the development process.

As a front-end engineer, my responsibility is to the user.
As a back-end engineer, my responsibility is to my engineering team.


FINAL:

I am a full stack developer, with a passion for people and technology.
Having developed an appreciation for design through my work at IBM, I beleieve that engineering,
when enhanced by a deep understanding of the user, leads to real impact for the product.
*/

/*
I am a full-stack engineer, with a passion for people and technology. <br/><br/>
Having developed an appreciation for design through my work at IBM,
I believe that engineering, when enhanced by a deep understanding of the user,
leads to real impact for the product.
*/
const DBUG = process.env.NODE_ENV === `development`;


class Page extends React.Component {

  render() {
    return (
      <Wrap>
        {/* <Box
          style={{
            marginBottom: `1rem`,
          }}
          ref={e => this.introRef = e}
          id="introRef"
        >
        Having developed an appreciation for design through my work at IBM, I strive to approach every problem with the end-user in mind.
          <br/><br/>

        On the back-end, I strive to improve upon the development processes and tooling for my team.
        On the front-end, I seek to gain a deeper understanding of the user to be able to build better experiences.
        </Box> */}
        <Box
          style={{
            marginBottom: `1rem`,
          }}
          ref={e => this.introRef = e}
          id="introRef"
        >
        About me
        </Box>


        <Controller>
          <Scene
            duration={200}
            offset={window.innerHeight / 2}
            indicators={DBUG}
            pin
          >
            {progress => (
              <div>
                <About progress={progress}/>
              </div>
            )}
          </Scene>
          <Scene
            duration={1000}
            offset={window.innerHeight / 2}
            indicators={DBUG}
            pin
          >
            {progress => (
              <div style={{ marginTop: `25vh` }}>
                <Intro progress={progress}/>
                <ResumeBox fadeIn={progress > .9}/>
              </div>
            )}
          </Scene>

          <Box style={{ marginTop: `25vh` }}>I have worked the most with Node, React & Postgres</Box>

          <Scene
            duration={1000}
            offset={window.innerHeight / 2}
            indicators={DBUG}
            pin
          >
            {progress => (
              <div>
                <Competencies progress={progress}/>
              </div>
            )}
          </Scene>

        </Controller>
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


const Box = styled.div`
  border: 4px solid black;
  border-radius: .5rem;
  margin: 0 auto;
  text-align: left;
  padding: 1rem;
  display: table; 
  max-width: 30rem; 
`
;

