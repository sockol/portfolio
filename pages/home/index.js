import React from 'react';

import Head from 'next/head';

import Main from 'components/Layout/Main';
import Header from './Header';
import Overview from './Overview';


import { isServer } from 'utils/helpers';


const Page = () => isServer() ? null : (

  <>

    <Head>
      <title>Portfolio</title>
    </Head>

    <Main>
      <Header/>
      <Overview/>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/>

      <Construction>My projects - This part is under construction</Construction>

    </Main>
  </>
);

export default Page;

Page.getInitialProps = async ({ req }) => {
  return {
    ...req.params,
  };
};

import styled from 'styled-components';

const Construction = styled.div`
  display: block;
  margin: 0 auto;
  width: 100%;
  margin-top: 10rem;
  margin-bottom: 10rem;
  text-align: center;
  opacity: 0.5;
  font-size: 2rem;
`;
