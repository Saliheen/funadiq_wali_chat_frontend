import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";
import Head from "next/head";
import NextNProgress from "nextjs-progressbar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <NextNProgress color="#626FC1" />
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
