import galleryData from "../data/galleryData";
import GalleryBtn from "../components/galleryBtn";
import { useEffect, useState } from "react";
import "../styles/Gallery.css";
import ImageSlider from "../components/Carousel";
import { GalleryCategory } from "../components/Carousel";


function GalleryPage() {
  const [currentCategory, setCurrentCategory] = useState<GalleryCategory>("Kitchen");

  return (
    <div className="gallery-page" id="gallery">
      <h2> Inspiration Gallery</h2>

      <div className="gallery-filters">
        <GalleryBtn
          title="Kitchen"
          setCategory={setCurrentCategory}
          active={currentCategory === "Kitchen"}
        />
        <GalleryBtn
          title="Bathroom"
          setCategory={setCurrentCategory}
          active={currentCategory === "Bathroom"}
        />
        <GalleryBtn
          title="Basement"
          setCategory={setCurrentCategory}
          active={currentCategory === "Basement"}
        />
        <GalleryBtn
          title="Roof"
          setCategory={setCurrentCategory}
          active={currentCategory === "Roof"}
        />
        <GalleryBtn
          title="Stairs"
          setCategory={setCurrentCategory}
          active={currentCategory === "Stairs"}
        />
      </div>

      <div className="carousel-container">
        <ImageSlider activeCategory={currentCategory}/>
      </div>
    </div>
  );
}

export default GalleryPage;
