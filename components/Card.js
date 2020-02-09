import styled from "styled-components";
import LottieComponent from './LottieComponent';

const Card = ({ className, title, animationData }) => {
  return (
    <div className={className}>
      <div className="svg-container">
        <LottieComponent animationData={animationData} />        
      </div>
      <h3 className="title">{title}</h3>
    </div>
  );
};

export default styled(Card)`
  background-color: #eee;
  color: #222;
  border-radius: 10px;
  h3.title {
    text-transform: uppercase;
    text-align: center;
  }
  .svg-container {
    height: 300px;
  }
`;
