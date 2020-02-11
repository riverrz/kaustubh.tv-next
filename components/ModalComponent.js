import styled from "styled-components";
import Grid from "./Grid";
import Link from "../components/Link";
import Card from "./Card";

const ModalComponent = ({ data, query, className }) => {
  return (
    <Grid className={className}>
      {data.map(({ title, img }, i) => (
        <Link href={`/description?type=${query}&i=${i}`}>
          <Card key={i}>
            <div className="img-container">
              <img src={img} alt="Work" />
            </div>
            <div className="text-container">{title}</div>
          </Card>
        </Link>
      ))}
    </Grid>
  );
};

export default styled(ModalComponent)`
  padding: 2rem;
  grid-gap: 5%;
  max-height: 75vh;
  min-width: 75vw;
  grid-template-columns: repeat(4, 1fr);
  overflow: auto;
  .img-container {
    width: 100%;
    height: 75%;
    img {
      height: 100%;
      width: 100%;
    }
  }
  .text-container {
    padding: 10px 5px;
  }
`;
