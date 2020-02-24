import { useState } from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import Grid from "../components/Grid";
import Card from "../components/Card";
import Lottie from "../components/Lottie";
import Modal from "../components/Modal";
import ModalComponent from "../components/ModalComponent";
import VideoCamAnimation from "../33-video-cam.json";
import EditingAnimation from "../10106-layout-creation.json";
import JumpCoinAnimation from "../9076-jumping-coin.json";
import EffectsAnimation from "../3608-fabulous-onboarding-animation.json";
import Data from "../data.json";
import ThemeContext from "../context/ThemeContext";

const Work = ({ className }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState(false);
  const openModal = ({ content, title }) => {
    setIsModalOpen(true);
    setModalData({ content, title });
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalData(false);
  };

  return (
    <ThemeContext.Provider value="dark">
      <Layout>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel={modalData.title || ""}
        >
          {modalData.content}
        </Modal>
        <main className={className}>
          <Grid style={{ padding: "4% 8%" }}>
            {data.map(({ query, animationData }, i) => (
              <Card
                key={i}
                onClick={() =>
                  openModal({
                    content: (
                      <ModalComponent data={Data[query]} query={query} />
                    ),
                    title: query
                  })
                }
              >
                <div className="svg-container">
                  <Lottie animationData={animationData} />
                </div>
                <h3 className="title">{query}</h3>
              </Card>
            ))}
          </Grid>
        </main>
      </Layout>
    </ThemeContext.Provider>
  );
};

const data = [
  {
    animationData: VideoCamAnimation,
    query: "cinematography"
  },
  {
    animationData: EditingAnimation,
    query: "editing"
  },
  {
    animationData: JumpCoinAnimation,
    query: "producing"
  },
  {
    animationData: EffectsAnimation,
    query: "visual effects"
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
