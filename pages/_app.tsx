import { NextUIProvider } from "@nextui-org/react";
import { NextPage } from "next";
import { SessionProvider } from "next-auth/react";
import React from "react";

import { Layout, Header } from "../components";

import "../styles/globals.css";

export type NextApplicationPage<P = unknown, IP = P> = NextPage<P, IP> & {
  requireAuth?: boolean;
};

const MyApp = ({ Component, pageProps: { session, ...pageProps } }: { Component: NextApplicationPage; pageProps: any }): JSX.Element => {
  return (
    <SessionProvider session={session}>
      <NextUIProvider>
        <Header />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </NextUIProvider>
    </SessionProvider>
  );
};

export default MyApp;
