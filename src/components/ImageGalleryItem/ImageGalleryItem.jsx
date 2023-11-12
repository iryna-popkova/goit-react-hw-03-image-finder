import { Component } from 'react';
import { ModalWindow } from '../Modal/Modal';
import { GalleryItem, GalleryImage } from './ImageGalleryItem.styled';

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
    const { isModalOpen } = this.state;
    const { img, largeImage, tags } = this.props;

    return (
      <GalleryItem className="gallery-item">
        <GalleryImage onClick={this.openModal} src={img} alt={tags} />
        <ModalWindow
          modalIsOpen={isModalOpen}
          closeModal={this.closeModal}
          largeImage={largeImage}
          topic={tags}
        />
      </GalleryItem>
    );
  }
}
