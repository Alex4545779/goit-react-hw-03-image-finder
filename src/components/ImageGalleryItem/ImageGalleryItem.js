import "./ImageGalleryItem.css";

export default function ImageGalleryItem({
  id,
  tags,
  smallImage,
  largeImage,
  onClickItem,
}) {
  return (
    <li key={id} className="ImageGalleryItem">
      <img
        className="ImageGalleryItem-image"
        alt={tags}
        src={smallImage}
        data-source={largeImage}
        onClick={() => {
          onClickItem(largeImage);
        }}
      />
    </li>
  );
}
