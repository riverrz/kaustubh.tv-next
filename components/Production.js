import styled from "styled-components";
import Flex from "../components/Flex";

function Production({ workType, className }) {
  if (!workType) {
    return null;
  }
  return (
    <div className={className}>
      <h1 className="heading">Production</h1>
      <Flex className="content-container" justify="space-around">
        {workType.director && (
          <div className="individual-card">
            <div className="icon-container">
              <img src="/icon.png" />
            </div>
            <div>
              <h3>DIRECTOR</h3>
              <p className="content">{workType.director}</p>
            </div>
          </div>
        )}
        {workType.producer && (
          <div className="individual-card">
            <div className="icon-container">
              <img src="/icon.png" />
            </div>
            <div>
              <h3>PRODUCER</h3>
              <p className="content">{workType.producer}</p>
            </div>
          </div>
        )}
        {workType.editor && (
          <div className="individual-card">
            <div className="icon-container">
              <img src="/icon.png" />
            </div>
            <div>
              <h3>EDITOR</h3>
              <p className="content">{workType.editor}</p>
            </div>
          </div>
        )}
        {workType.cinematography && (
          <div className="individual-card">
            <div className="icon-container">
              <img src="/icon.png" />
            </div>
            <div>
              <h3>cinematography</h3>
              <p className="content">{workType.cinematography}</p>
            </div>
          </div>
        )}
        {workType.role && (
          <div className="individual-card">
            <div className="icon-container">
              <img src="/icon.png" />
            </div>
            <div>
              <h3>role</h3>
              <p className="content">{workType.role}</p>
            </div>
          </div>
        )}
        {workType.award && (
          <div className="individual-card">
            <div className="icon-container">
              <img src="/award.png" />
            </div>
            <div>
              <h3>award</h3>
              <p className="content">{workType.award}</p>
            </div>
          </div>
        )}
      </Flex>
    </div>
  );
}

export default styled(Production)`
  color: #222;
  padding: 4rem 0;
  .heading {
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 3rem;
  }
  .content-container {
    font-size: 1.1rem;
    h3 {
      text-transform: uppercase;
    }
  }
  .content {
    max-width: 100%;
    line-height: 1.1rem;
  }
  .individual-card {
    text-align: center;
  }
  .icon-container {
    text-align: center;
  }
  @media (max-width: 768px) {
    .content-container {
      flex-direction: column;
    }
  }
`;
