import AuthLayout from "../components/layout/AuthLayout";
import Layout from "../components/layout/Layout";
import "../styles/globals.css";
import Head from "next/head";
import NextNProgress from "nextjs-progressbar";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  
  const router = useRouter()

return (
    <>
   {router.asPath.includes('auth') ? <AuthLayout> <Component {...pageProps} /></AuthLayout>:   <Layout>
        <NextNProgress color="#626FC1" />
        <Component {...pageProps} />
      </Layout>}
    </>
  );
}
