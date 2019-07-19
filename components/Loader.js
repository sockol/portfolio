import React from 'react';

export default () => (
  <Wrap>
    <StyledLoading withOverlay={false}/>
  </Wrap>
);

import styled from 'styled-components';

const StyledLoading = styled.div`
  margin: auto;
  color: ${props => props.theme.colors.BLUE_50};
  content: 'Loading...';
`;
const Wrap = styled.div`
  margin: auto;
  display: flex;
  height: 100vh;
`
;
