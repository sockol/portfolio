import React from 'react';
import Schematics from './Schematics';

export default ({ label }) => {
  return (
    <Wrap>
      <Schematics.Attachment/>
      <span>{label}</span>
    </Wrap>
  );
};

import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  flex-direction: column; 
  position: relative;
  
  
  svg{
    margin: 0 auto;
  }

  span{
    margin: 0 auto;
  }
`;
