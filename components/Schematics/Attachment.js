import React from 'react';
export default ({ style, fadeIn = true, className }) => (
  <Wrap style={style} fadeIn={fadeIn} className={className}>
    <svg width="50" height="60" xmlns="http://www.w3.org/2000/svg">
      <circle cx="27" cy="45" r="5" stroke="black" strokeWidth="2" fill="none" />
      <path
        fill="none" stroke="#000" strokeWidth="2"
        d="
          M 2, 0
          l 25, 25
          v 15
        "
      />
    </svg>
  </Wrap>
)
;


import styled from 'styled-components';

const Wrap = styled.div` 
  transition: opacity 0.1s;
  opacity: ${props => props.fadeIn ? 1 : 0}; 
  svg {
    display: block;
  }
`;
