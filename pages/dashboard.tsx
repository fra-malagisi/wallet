import axios from "axios";
import { getSession } from "next-auth/react";
import dynamic from "next/dynamic";
import Head from "next/head";
import React, { FC, useEffect, useState } from "react";
import { Upload } from "../components";

import { AccordionProps } from "../components/accordion";

const Dashboard: FC<unknown> = () => {
  // const Accordion = dynamic(() => import("../components/accordion"), { ssr: false });

  useEffect(() => {
    const serverCall = async () => {
      await axios.post("/api/data", {});
    };
    serverCall();
  });

  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="flex justify-center">
        <Upload label="Choose a csv file:" />
      </div>
    </>
  );
};

export async function getServerSideProps(ctx) {
  const session = await getSession(ctx);
  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {
      user: session.user,
    },
  };
}

export default Dashboard;
