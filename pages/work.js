import styled from "styled-components";
import Layout from "../components/Layout";
import Grid from "../components/Grid";
import Card from "../components/Card";
import VideoCamAnimation from "../33-video-cam.json";
import EditingAnimation from "../10106-layout-creation.json";
import JumpCoinAnimation from '../9076-jumping-coin.json';

const Work = ({ className }) => {
  return (
    <Layout>
      <main className={className}>
        <Grid style={{ padding: "4% 8%" }}>
          {data.map(({ ...data }, i) => {
            return <Card {...data} key={i} />;
          })}
        </Grid>
      </main>
    </Layout>
  );
};

const data = [
  {
    animationData: VideoCamAnimation,
    title: "Production"
  },
  {
    animationData: EditingAnimation,
    title: "Editing"
  },
  {
    animationData: JumpCoinAnimation,
    title: "Direction"
  }
];

export default styled(Work)``;
