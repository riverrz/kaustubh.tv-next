import styled from "styled-components";

const Footer = ({ className }) => {
  const currentYear = new Date().getFullYear();
  return <footer className={className}>Ⓒ KAUSTUBH SINGH {currentYear}</footer>;
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
`;
