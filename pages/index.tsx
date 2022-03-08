import { getSession } from "next-auth/react";
import { FC } from "react";

import { Accordion } from "../components";

const Home: FC<unknown> = () => {
  return (
    <>
      <h1>Home</h1>
      <Accordion />
    </>
  );
};

export async function getServerSideProps(ctx) {
  const session = await getSession(ctx);

  return { props: { pets: "re" } };
}

export default Home;
