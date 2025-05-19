import { GalleryCategory } from "./Carousel";

interface GalleryBtnProps {
  title: GalleryCategory;
  setCategory: (title: GalleryCategory) => void;
  active?: boolean;
}

function GalleryBtn({ title, setCategory, active: actiive}: GalleryBtnProps) {


  return (
    <div className={`gallery-btn-container${actiive ? "-active" : ""}`}>
      <button onClick={()=>setCategory(title)}>{title}</button>
    </div>
  );
}

export default GalleryBtn;
