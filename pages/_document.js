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
          <meta name="robots" content="noindex,nofollow" />

          <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet"/>

          {this.props.styleTags}

          {
            process.env.NODE_ENV === `production` &&
            <script type="text/javascript">{` 
              window.heap=window.heap||[],heap.load=function(e,t){window.heap.appid=e,window.heap.config=t=t||{};var r=t.forceSSL||"https:"===document.location.protocol,a=document.createElement("script");a.type="text/javascript",a.async=!0,a.src=(r?"https:":"http:")+"//cdn.heapanalytics.com/js/heap-"+e+".js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(a,n);for(var o=function(e){return function(){heap.push([e].concat(Array.prototype.slice.call(arguments,0)))}},p=["addEventProperties","addUserProperties","clearEventProperties","identify","resetIdentity","removeEventProperty","setEventProperties","track","unsetEventProperty"],c=0;c<p.length;c++)heap[p[c]]=o(p[c])};
              heap.load("1475914233"); 
            `}</script>
          }

          <link rel="apple-touch-icon" sizes="57x57" href="/static/apple-icon-57x57.png"/>
          <link rel="apple-touch-icon" sizes="60x60" href="/static/apple-icon-60x60.png"/>
          <link rel="apple-touch-icon" sizes="72x72" href="/static/apple-icon-72x72.png"/>
          <link rel="apple-touch-icon" sizes="76x76" href="/static/apple-icon-76x76.png"/>
          <link rel="apple-touch-icon" sizes="114x114" href="/static/apple-icon-114x114.png"/>
          <link rel="apple-touch-icon" sizes="120x120" href="/static/apple-icon-120x120.png"/>
          <link rel="apple-touch-icon" sizes="144x144" href="/static/apple-icon-144x144.png"/>
          <link rel="apple-touch-icon" sizes="152x152" href="/static/apple-icon-152x152.png"/>
          <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-icon-180x180.png"/>
          <link rel="icon" type="image/png" sizes="192x192" href="/static/android-icon-192x192.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="96x96" href="/static/favicon-96x96.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png"/>
          <link rel="manifest" href="/static/manifest.json"/>
          <meta name="msapplication-TileColor" content="#ffffff"/>
          <meta name="msapplication-TileImage" content="/static/ms-icon-144x144.png"/>
          <meta name="theme-color" content="#ffffff"/>
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
