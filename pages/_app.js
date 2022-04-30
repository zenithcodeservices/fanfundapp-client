import FullLayout from "../src/layouts/FullLayout";
import Head from "next/head";
import "../styles/style.scss";
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import Amplify from 'aws-amplify';
import awsconfig from '../src/aws-exports';

// TODO: check whether the below is right or not
// Amplify.configure({...awsconfig, ssr: true});
Amplify.configure({...awsconfig, ssr: true});


function MyApp({ Component, pageProps }) {

  const Layout = Component.Layout || FullLayout;

  return (
    <>
      <Head>
        <title>Fanfund </title>
        <meta
          name="description"
          content="An online crowdfunding platform that rewards early adopter fans. "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <Layout>
          <Component {...pageProps} />
        </Layout>
    </>
  );
}

export default MyApp;
