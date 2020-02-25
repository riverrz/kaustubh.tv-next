import { withRouter } from "next/router";
import styled from "styled-components";
import Layout from "../components/Layout";
import Flex from "../components/Flex";
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
        <div className={className}>
          <BgContainer background={workType.img}>
            <img src={workType.img} alt="image" />
          </BgContainer>
          <div className="centered-container">
            {workType.director && <h3>A film by {workType.director}</h3>}
            <h1 className="title">{workType.title}</h1>
          </div>
          <Flex align="center" justify="space-around" className="synopsis-container">
            <div>
              <h2>SYNOPSIS</h2>
            </div>
            <p className="description">{workType.description}</p>
          </Flex>
        </div>
      </Layout>
    </ThemeContext.Provider>
  );
};

const BgContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
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
  color: #fff;
  z-index: -1;
  position: relative;
  .centered-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
  .synopsis-container {
    min-height: 15rem;
    color: #fff;
    background-color: #333;
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
