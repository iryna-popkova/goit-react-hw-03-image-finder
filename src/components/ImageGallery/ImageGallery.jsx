import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { GalleryList } from './ImageGallery.styled';

export const ImageGallery = ({ images }) => {
  if (images.length === 0) {
    return <p>No images available, please try another search</p>;
  }

  return (
    <GalleryList className="gallery">
      {images.map(image => {
        return (
          <ImageGalleryItem
            key={image.id}
            img={image.webformatURL}
            largeImage={image.largeImageURL}
            tag={image.tags}
          />
        );
      })}
    </GalleryList>
  );
};
