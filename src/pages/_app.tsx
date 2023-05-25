import { AppType } from "next/app";
import "../styles/globals.css";
import { Layout } from "@/components/Layout";

const MyApp: AppType = ({
  Component,
  pageProps: { session, ...pageProps },
}: any) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
