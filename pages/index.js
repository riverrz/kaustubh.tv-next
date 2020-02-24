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
          Kaustubh is a senior Film and Television student at the reputed Dodge College of Film and Media Art at Chapman University. He has worked on films and documentaries around the globe, including Alaska, Australia, British Columbia, California, India, Mexico, Kenya, and Singapore. 

Although often touted as a non-fiction filmmaker, Kaustubh strives to bring the art of film, irrespective of genre and medium, to underrepresented communities in the industry. 

He likes to read. His three daily pillars, he maintains, are the Washington Post, The Economist, and The New Yorker.
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
