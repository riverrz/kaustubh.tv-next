import { Children, cloneElement } from 'react';
import Head from "next/head";
import Navbar from "./Navbar";
import ThemeContext from '../context/ThemeContext';

const Layout = props => (
  <ThemeContext.Consumer>
    {theme => (
    <div>
      <Head>
        <title>Kaustubh.tv</title>
      </Head>
      <Navbar theme={theme} />
      {Children.map(props.children, child => cloneElement(child, { theme }))}
    </div>
    )}
  </ThemeContext.Consumer>
);

export default Layout;
