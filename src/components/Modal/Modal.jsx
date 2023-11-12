import Modal from 'react-modal';
import { LargeImage } from './Modal.styled';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },

  overlay: {
    position: `fixed`,
    top: `0`,
    left: `0`,
    width: `100vw`,
    height: `100vh`,
    display: `flex`,
    justifyContent: `center`,
    alignItems: `center`,
    backgroundColor: `rgba(0, 0, 0, 0.8)`,
    zIndex: `1200`,
  },

  modal: {
    maxWidth: `calc(100vw - 48px)`,
    maxHeight: `calc(100vh - 24px)`,
  },
};

Modal.setAppElement('#root');

export const ModalWindow = ({ modalIsOpen, closeModal, largeImage, topic }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Image Gallery Modal"
    >
      <div>
        <LargeImage src={largeImage} alt={topic} />
      </div>
    </Modal>
  );
};
