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
          <div className="centered-container">
            <h1 className="title">{workType.title}</h1>
            <p className="description">{workType.description}</p>
          </div>
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
  animation: zoom 30s infinite;

  background-position: center center;
  background-repeat: no-repeat;

  @keyframes zoom {
    0% {
      background-size: 100%;
    }
    50% {
      background-size: 110%;
    }
    100% {
      background-size: 100%;
    }
  }

  .centered-container {
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }

  .title {
    font-size: 70px;
    font-weight: 700;
    line-height: 122px;
    text-transform: uppercase;
    font-family: 'Barlow Condensed', sans-serif;  
  }

  .description {
    font-size: 1.5rem;
    font-weight: 400;
  }
`;

export default withRouter(Description);
