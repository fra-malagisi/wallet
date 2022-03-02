import { NextPage } from "next";
import React from "react";

import Layout from "../components/layout";

import "../styles/globals.css";

export type NextApplicationPage<P = unknown, IP = P> = NextPage<P, IP> & {
  requireAuth?: boolean;
};

const MyApp = ({ Component, pageProps: { session, ...pageProps } }: { Component: NextApplicationPage; pageProps: any }): JSX.Element => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
