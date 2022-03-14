import { getSession } from "next-auth/react";
import dynamic from "next/dynamic";
import Head from "next/head";
import React, { FC, useState } from "react";

import { AccordionProps } from "../components/accordion";

const Dashboard: FC<unknown> = () => {
  const Accordion = dynamic(() => import("../components/accordion"), { ssr: false });

  const [accordionsConfig] = useState<AccordionProps>({
    split: true,
    accordions: [
      {
        id: "salary",
        title: "Salary",
        content: <h2>Salary</h2>,
      },
      {
        id: "crypto",
        title: "Crypto",
        content: <h2>Crypto</h2>,
      },
    ],
  });
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Accordion split={accordionsConfig.split} accordions={accordionsConfig.accordions} />
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
