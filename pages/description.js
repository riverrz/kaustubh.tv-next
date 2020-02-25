import { withRouter } from "next/router";
import styled from "styled-components";
import Layout from "../components/Layout";
import Container from "../components/Container";
import Data from "../data.json";
import ThemeContext from "../context/ThemeContext";

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
        <Container className={className}>
          <BgContainer background={workType.img}>
            <img src={workType.img} alt="image"/>
          </BgContainer>
          <div className="centered-container">
            <h1 className="title">{workType.title}</h1>
            <p className="description">{workType.description}</p>
          </div>
        </Container>
      </Layout>
    </ThemeContext.Provider>
  );
};

const BgContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  overflow: hidden;
  box-sizing: border-box;
  img {
    transform-origin: center center;
    animation: zoom 30s infinite;
    width: 100%;
    height: 100%;
  }
  @keyframes zoom {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.05);
    }
  }
`;

export default styled(withRouter(Description))`
  .centered-container {
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
  .overflow-container {
    overflow: hidden;
    width: 100vw;
    height: 100vh;
  }
  .title {
    font-size: 4.5rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  .description {
    font-size: 1.5rem;
    font-weight: 400;
  }

  @media only screen and (max-width: 768px) {
    .title {
      font-size: 1.9rem;
    }
    .description {
      font-size: 1rem;
    }
  }
`;
