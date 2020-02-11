import { withRouter } from "next/router";
import styled from "styled-components";
import Layout from "../components/Layout";
import Data from "../data.json";

const Description = ({ router, className }) => {
  const {
    query: { type, i }
  } = router;
  if (!type || !i) {
    return null;
  }
  const workType = Data[type][i];
  return (
    <Layout>
      <main className={className}>
        <h1>{workType.title}</h1>
        <div className="img-container">
          <img src={workType.img} alt="work" />
        </div>
        <p>{workType.description}</p>
      </main>
    </Layout>
  );
};

export default styled(withRouter(Description))``;
