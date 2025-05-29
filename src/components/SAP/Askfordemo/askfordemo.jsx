import React, { useState } from "react";
import "./askfordemo.css";
import ContactModal from "../../Hero-Section/ContactModal";

const AskForDemo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="ask-for-demo" onClick={openModal} style={{ cursor: 'pointer' }}>
        <span className="icon">▶</span>
        <span className="text">Ask For</span>
        <span className="demo">DEMO</span>
      </div>

      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default AskForDemo;
