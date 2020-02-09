import Head from "next/head";
import Navbar from "./Navbar";

const Layout = props => (
  <div>
    <Head>
      <title>Kaustubh.tv</title>
      <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet" />
    </Head>
    <Navbar />
    <div>
        {props.children}
    </div>
  </div>
);

export default Layout;
