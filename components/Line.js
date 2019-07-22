import React from 'react';

import { Tween, Timeline } from 'react-gsap';

class Component extends React.Component {

  render() {
    return (
      <StyledSVG pathLength={this.props.pathLength} xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${this.props.width} ${this.props.height}`}>
        <Tween
          from={{
            css: {
              strokeDashoffset: this.props.pathLength,
            },
            // ease: `Strong.easeOut`,
          }}
          to={{
            css: {
              strokeDashoffset: 0,
            },
            // ease: `Strong.easeOut`,
          }}
          totalProgress={this.props.progress}
          paused
        >
          <path
            id={this.props.id}
            fill="none" stroke="black" strokeWidth="4" d={this.props.d}
          />
        </Tween>
      </StyledSVG>
    );
  }

}

export default Component;

import styled from 'styled-components';

const StyledSVG = styled.svg`
  display: flex;
  margin: 0 auto;
  width: 100%;
  path { 
    stroke-dasharray: ${props => `${props.pathLength} ${props.pathLength}`}; 
  }
`;
