import type { NextPage } from "next";
import Head from "next/head";

import Landing from "../components/sections/Landing";
import About from "../components/sections/About";
import Work from "../components/sections/Work";
import Contact from "../components/sections/Contact";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Henry Nguyen | Graduate Developer</title>
      </Head>
      <Landing />
      <About />
      <Work />
      <Contact />
    </>
  );
};

export default Home;
