import React from 'react';
import App, { Container } from 'next/app';

import { ThemeProvider } from 'styled-components';

import colors from 'config/colors';
import breakpoints from 'config/breakpoints';

class MyApp extends App {

  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={{ colors, breakpoints }}>
        <Container>
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    );
  }

}

export default MyApp
;
