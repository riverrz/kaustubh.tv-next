import styled from 'styled-components';
import Layout from "../components/Layout";
import Flex from '../components/Flex';
import Container from '../components/Container';
import ThemeContext from '../context/ThemeContext';

const Index = ({ className }) => (
  <ThemeContext.Provider value="dark">
    <Layout>
      <Container>
        <Flex className={ className } justify="center">
          <div className="main-content">
            Kaustubh Singh is a peculiar figure in the world of cinema. Although he
            claims that he is a visual journalist, his frequent attempts at film
            making suggest otherwise. Currently he is studying Television
            Production/Documentary Film at Dodge College of Film And Media Arts,
            Chapman University and wishes to delve himself more into the many
            pathways of world cinema.
          </div>
          <div className="img-container">
            <img src="/kaustubh.jpg" alt="Kaustubh"/>
          </div>
        </Flex>
      </Container>
    </Layout>
  </ThemeContext.Provider>
);

const StyledIndex = styled(Index)`
  .main-content {
    line-height: 2rem;
    padding: 1rem 0;
  }
  .img-container {
    padding: 0 1rem;
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export default StyledIndex;
