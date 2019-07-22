// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import React from 'react';
import Document, { Head, Main, NextScript, NextCss } from 'next/document';
import Heap from 'react-heap';

// Import styled components ServerStyleSheet
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {

  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);

    // Step 1: Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet();

    // Step 2: Retrieve styles from components in the page
    const page = ctx.renderPage(App => props =>
      sheet.collectStyles(<App {...props} />),
    );

    // Step 3: Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement();

    // Step 4: Pass styleTags as a prop
    return { ...initialProps, ...page, styleTags };
  }

  render() {
    return (
      <html lang="en-US">

        {/* NOTE: next does not compose nested HEAD tags into one. just takes the latest one. so this can get overridden by SeoInjector  */}
        <Head>

          { process.env.HEAP_KEY && <Heap appId={process.env.HEAP_KEY} /> }

          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="robots" content="index,follow" />

          <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet"/>

          {this.props.styleTags}
        </Head>

        <Body id="ibm-com" className="ibm-type">
          <Main/>
          <NextScript />
        </Body>
      </html>
    );
  }

}


import styled from 'styled-components';

const Body = styled.body`
  
  background-image: url('/static/background.png'); 
  background-repeat: repeat;

  font-family: Roboto, sans-serif;
  font-size: 16px;
  * {
    font-family: Roboto, sans-serif; 
  }
`
;
