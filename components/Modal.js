import Modal from "react-modal";
import { useState } from "react";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRigyourAppElementht: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: '#454545'
  }
};

Modal.setAppElement("#modal");
222
function AppModal({ children, ...props }) {
  return (
    <Modal style={customStyles} {...props}>
      {children}
    </Modal>
  );
}

export default AppModal;
