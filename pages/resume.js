import Container from "../components/Container";
import Layout from "../components/Layout";
import ThemeContext from "../context/ThemeContext";

function Resume(props) {
  return (
    <ThemeContext.Provider value="dark">
      <Layout>
        <Container>
          Download my resume from <a href="">here.</a>
        </Container>
      </Layout>
    </ThemeContext.Provider>
  );
}

export default Resume;
