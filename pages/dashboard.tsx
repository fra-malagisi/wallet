import { getSession } from "next-auth/react";
import Head from "next/head";
import React, { FC } from "react";

import { Accordion } from "../components";

const Dashboard: FC<unknown> = () => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        Dashboard
        <Accordion text="salary" content={<h2>Salary</h2>} />
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
