import { withRouter } from "next/router";
import styled from "styled-components";
import Layout from "../components/Layout";
import Flex from "../components/Flex";
import Production from "../components/Production";
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
            <div className="centered-container img-container">
              <img src={workType.img} alt="image" />
            </div>
            {workType.showTitle && (
              <div className="centered-container">
                {workType.filmBy && (
                  <h3
                    style={{
                      color: workType.titleColor ? workType.titleColor : ""
                    }}
                  >
                    A film by {workType.filmBy}
                  </h3>
                )}
                <h1
                  className="title"
                  style={{
                    color: workType.titleColor ? workType.titleColor : ""
                  }}
                >
                  {workType.title}
                </h1>
              </div>
            )}
          </BgContainer>
          <Flex
            align="center"
            justify="space-around"
            className="synopsis-container"
          >
            <div>
              <h2>SYNOPSIS</h2>
            </div>
            <p className="description">{workType.description}</p>
          </Flex>
          {workType.link && (
            <div className="trailer">
              <h1>Latest Trailer</h1>
              <a href={workType.link}>Watch Trailer</a>
            </div>
          )}
          <Production workType={workType} />
        </div>
      </Layout>
    </ThemeContext.Provider>
  );
};

const BgContainer = styled.div`
  width: 100%;
  height: 80vh;
  position: relative;
  background-color: #333;
  img {
    transform-origin: center center;
    max-width: 100%;
    max-height: 65vh;
  }
  .img-container {
    width: 100%;
  }
  @keyframes zoom {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.3);
    }
  }

  @media only screen and (min-width: 768px) {
    img {
      animation: zoom 30s infinite alternate;
    }
    .img-container {
      width: auto;
    }
    height: 90vh;
  }
`;

export default styled(withRouter(Description))`
  color: #ccc;
  z-index: -1;
  height: 100%;
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
    border-top: 1px solid #ccc;
    line-height: 2rem;
  }
  .title {
    font-size: 4.5rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  .description {
    font-size: 1.5rem;
    font-weight: 400;
    flex: 0 0 50%;
  }

  .trailer {
    min-height: 20rem;
    background: url("/Alfa-home-parallax-img.jpg");
    background-size: cover;
    text-align: center;
    padding: 4rem;
    color: #fff;
    a {
      display: inline-block;
      text-decoration: none;
      border: 1px solid #fff;
      font-size: 1.5rem;
      padding: 1rem 2rem;
      transition: all 0.3s;
      background-color: transparent;
    }
    a: hover {
      background-color: #fff;
      color: #222;
    }

    h1 {
      margin-top: 0;
      margin-bottom: 4rem;
    }
  }

  @media only screen and (max-width: 768px) {
    .title {
      font-size: 1.9rem;
    }
    .description {
      font-size: 1rem;
    }
    .synopsis-container {
      flex-direction: column;
      padding: 0 1rem;
    }
    .trailer {
      a {
        font-size: 1rem;
        padding: 1rem;
      }
      h1 {
        font-size: 1.5rem;
      }
    }
  }
`;
