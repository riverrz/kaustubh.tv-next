import Link from "next/link";
import styled from "styled-components";
import Grid from "./Grid";
import Card from "./Card";
import Flex from './Flex';

const ModalComponent = ({ data, query, className }) => {
  return (
    <Grid className={className}>
      {data.map(({ title, img }, i) => (
        <Link href={`/description?type=${query}&i=${i}`} key={title}>
          <Card key={i}>
            <div className="img-container">
              <img src={img} alt="Work" />
            </div>
            <Flex style={{ padding: '10px 5px', height: '20%' }} justify="center" align="center">{title}</Flex>
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
  grid-template-columns: repeat(3, 1fr);
  overflow: auto;
  .img-container {
    width: 100%;
    height: 80%;
    img {
      height: 100%;
      width: 100%;
      max-height: 300px;
    }
  }
`;
