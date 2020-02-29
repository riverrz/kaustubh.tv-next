import styled from "styled-components";
import Icon from 'react-icons-kit';
import { facebookF } from 'react-icons-kit/fa/facebookF';
import { instagram } from "react-icons-kit/fa/instagram";
import { twitter } from "react-icons-kit/fa/twitter";

const Footer = ({ className }) => {
  const currentYear = new Date().getFullYear();
  return <footer className={className}>
    <div className="social-container">
      <a href="https://www.facebook.com/cawstub">
        <Icon icon={facebookF} />
      </a>
      <a href="https://www.instagram.com/cawstub">
        <Icon icon={instagram} />
      </a>
      <a href="https://twitter.com/cawstub">
        <Icon icon={twitter} />
      </a>
    </div>
    <div>
      Ⓒ KAUSTUBH SINGH {currentYear}
    </div>
  </footer>;
};

export default styled(Footer)`
  padding: 0.5rem;
  color: #fff;
  background-color: #333;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .social-container {
    margin-right: 1rem;
    a {
      margin: 0 0.4rem;
    }
  }
`;
