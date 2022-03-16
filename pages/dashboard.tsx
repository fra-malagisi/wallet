import axios from "axios";
import { getSession } from "next-auth/react";
import * as dfd from "danfojs";
import dynamic from "next/dynamic";
import Head from "next/head";
import React, { FC, useEffect } from "react";

const Dashboard: FC<unknown> = () => {
  const Upload = dynamic(() => import("../components/upload"), { ssr: false });

  const readCsv = (file: File) => {
    dfd.readCSV(file).then((df) => df.print());
  };

  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="flex justify-center">
        <Upload label="Choose a csv file:" onChange={(evt) => readCsv(evt.target.files[0])} />
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
