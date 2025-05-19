import Carousel from "react-bootstrap/Carousel";
import galleryData from "../data/galleryData";


export type GalleryCategory =
  | "Kitchen"
  | "Bathroom"
  | "Basement"
  | "Stairs"
  | "Roof";

interface CarouselItemProp {
  activeCategory: GalleryCategory;
}

function ImageSlider({ activeCategory }: CarouselItemProp) {
  const images = galleryData[activeCategory];
  return (
    <Carousel>
      {images.map((image, index) => {
        return (
          <Carousel.Item interval={2000}>
            <img src={image.src} alt={image.alt} />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default ImageSlider;
