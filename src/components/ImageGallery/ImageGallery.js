import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

import "./ImageGallery.css";

export default function ImageGallery({ images, toggleModal }) {
  return (
    <ul className="ImageGallery">
      {images.map(({ id, tags, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          tags={tags}
          smallImage={webformatURL}
          largeImage={largeImageURL}
          onClickItem={() => {
            toggleModal(largeImageURL);
          }}
        />
      ))}
    </ul>
  );
}
