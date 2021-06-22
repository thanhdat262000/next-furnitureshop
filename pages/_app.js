import CssBaseline from "@material-ui/core/CssBaseline";
import Head from "next/head";
import { useEffect } from "react";
import Layout from "../components/Layout/Layout";
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <Layout>
      <Head>
        <title>New Furniture</title>
      </Head>
      <CssBaseline />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
