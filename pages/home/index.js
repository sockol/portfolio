import React from 'react';

import Link from 'next/link';

import Navigation from 'components/Layout/Navigation';
import Main from 'components/Layout/Main';
import Header from './Header';
import Overview from './Overview';


const Page = () => (

  <>
    <Main>
      <Header/>
      <Overview/>
      intro
      resume
      projects
      <Navigation/>
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
