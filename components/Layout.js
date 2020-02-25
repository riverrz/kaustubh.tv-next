import { Children, cloneElement, Fragment } from 'react';
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from '../components/Footer';
import ThemeContext from '../context/ThemeContext';

const Layout = props => (
  <ThemeContext.Consumer>
    {theme => (
    <Fragment>
      <Head>
        <title>Kaustubh.tv</title>
      </Head>
      <Navbar theme={theme} />
      {Children.map(props.children, child => cloneElement(child, { theme }))}
      <Footer />
    </Fragment>
    )}
  </ThemeContext.Consumer>
);

export default Layout;
