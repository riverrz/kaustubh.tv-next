import Link from "next/link";
import styled from "styled-components";
import Grid from "./Grid";
import Card from "./Card";
import Flex from './Flex';

const ModalComponent = ({ data, query, className }) => {
  return (
    <Grid className={className} cols={5}>
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
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  max-height: 75vh;
  min-width: 75vw;
  overflow: auto;
  .img-container {
    width: 100%;
    img {
      height: 100%;
      width: 100%;
      min-height: 150px;
    }
  }
`;
