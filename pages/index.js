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
          Kaustubh has worked on documentaries in Alaska, Australia, British Columbia, California, India, Mexico, Kenya, and Singapore. He’s studying News and Documentary film with a minor in Law, Justice and Social Control. Often touted as a non-fiction filmmaker, he considers himself a journalist first. As an active volunteer at the IDA and a member of the Society of Professional Journalists, he strives to bring the art of documentary film to underrepresented communities in the industry. He likes to read. His three daily pillars, he maintains, are the Washington Post, The Economist, and The New Yorker.
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
    
    img {
      width: 100%;
      height: 100%;
    }
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export default StyledIndex;
