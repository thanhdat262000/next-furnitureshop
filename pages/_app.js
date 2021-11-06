import CssBaseline from "@material-ui/core/CssBaseline";
import Head from "next/head";
import { useEffect } from "react";
import Layout from "../components/Layout/Layout";
import MessengerCustomerChat from "react-messenger-customer-chat";
import ContactIcon from "../components/ContactIcon/ContactIcon";

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
      <MessengerCustomerChat pageId="106189040983304" appId="394734905518135" />
      <ContactIcon />
    </Layout>
  );
}

export default MyApp;
