import { withRouter } from "next/router";
import styled from "styled-components";
import Layout from "../components/Layout";
import Container from '../components/Container';
import Data from "../data.json";
import ThemeContext from '../context/ThemeContext';

const Description = ({ router, className }) => {
  const {
    query: { type, i }
  } = router;
  if (!type || !i) {
    return null;
  }
  const workType = Data[type][i];
  return (
    <ThemeContext.Provider value="light">
      <Layout>
        <BgContainer className={className} background={workType.img}>
          <h1>{workType.title}</h1>
          <p>{workType.description}</p>
        </BgContainer>
      </Layout>
    </ThemeContext.Provider>
  );
};

const BgContainer = styled(Container)`
  background: ${({ background }) =>
    background ? `url(${background})` : "#222"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-size: cover;
  z-index: -1;
  box-sizing: border-box;
  padding: 8% 0;
`;

export default styled(withRouter(Description))``;
