import { getSession } from "next-auth/react";
import React, { FC } from "react";

import { Accordion } from "../components";

const Dashboard: FC<unknown> = () => {
  return (
    <div>
      Dashboard
      <Accordion />
    </div>
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
