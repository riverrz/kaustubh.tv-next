import styled from "styled-components";
import Layout from "../components/Layout";
import Grid from "../components/Grid";
import Card from "../components/Card";
import Lottie from '../components/Lottie';
import VideoCamAnimation from "../33-video-cam.json";
import EditingAnimation from "../10106-layout-creation.json";
import JumpCoinAnimation from '../9076-jumping-coin.json';

const Work = ({ className }) => {
  return (
    <Layout>
      <main className={className}>
        <Grid style={{ padding: "4% 8%" }}>
          {data.map(({ query, animationData }, i) => (
            <Card key={i} onClick={() => {console.log('clicked./Lottie')}}>
              <div className="svg-container">
                <Lottie animationData={animationData} />        
              </div>
              <h3 className="title">{query}</h3>
            </Card>
          ))}
        </Grid>
      </main>
    </Layout>
  );
};

const data = [
  {
    animationData: VideoCamAnimation,
    query: "production"
  },
  {
    animationData: EditingAnimation,
    query: "editing"
  },
  {
    animationData: JumpCoinAnimation,
    query: "direction"
  }
];

export default styled(Work)`
  h3.title {
    text-transform: uppercase;
    text-align: center;
  }
  .svg-container {
    height: 300px;
  }
`;
