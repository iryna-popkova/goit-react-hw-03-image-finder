import { Component } from 'react';
import { ModalWindow } from './Modal';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({
      isModalOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  render() {
    const { image, largeImage, tags } = this.props;
    return (
      <>
        <li className="gallery-item" onClick={this.openModal}>
          <img src={image} alt={tags} />
        </li>
        {this.state.isModalOpen && (
          <ModalWindow
            largeImage={largeImage}
            alt={tags}
            onCloseModal={this.closeModal}
          />
        )}
      </>
    );
  }
}
