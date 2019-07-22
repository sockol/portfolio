import React from 'react';
import Schematics from './Schematics';

export default ({ label, left, right, fadeIn = true, style, labelStyle, svgStyle }) => {
  return (
    <Wrap fadeIn={fadeIn} left={left} right={right} style={style}>
      <Schematics.Attachment style={svgStyle}/>
      <span style={labelStyle}>{label}</span>
    </Wrap>
  );
};

import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  flex-direction: column; 
  position: relative;
 
  transition: opacity 0.1s;
  opacity: ${props => props.fadeIn ? 1 : 0};
   
  svg{
    margin-left: auto;
  }

  span{
    margin-left: auto;

    display: block;
  }
`;
