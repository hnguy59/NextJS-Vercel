import Head from "next/head";

import "../styles/globals.css";
import Layout from "../components/layout";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>Henry Nguyen | Graduate Developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Component {...pageProps} dir="ltr" />
    </Layout>
  );
}

export default MyApp;
