import { aboutData } from "../data/AboutData";
import AboutItem from "../components/AboutItem";
import "../styles/About.css";
import QuoteBtn from "../components/QuoteBtn";
import { useEffect, useState } from "react";
import QuoteForm from "../components/quoteForm";

function AboutPage() {
const [isModalOpen, setIsMmodalOpen] = useState(false);

useEffect(()=>{
    document.body.classList.toggle("no-scroll", isModalOpen);
    return () => document.body.classList.remove("no-scroll");
}, [isModalOpen])

  return (
    <div id="about" style={{display:"flex", flexDirection:"column", alignItems:"center", paddingBottom: "30px"}}>
      {aboutData.map((about, index) => {
        return (
          <AboutItem key={index}
            title={about.title}
            paragraphs={about.paragraphs}
            imageUrl={about.imageUrl}
            direction={about.direction}
          />
        );
      })}

      <QuoteBtn toggleForm={() => setIsMmodalOpen(!isModalOpen)}/>

        {isModalOpen && <QuoteForm toggleForm={() => setIsMmodalOpen(!setIsMmodalOpen)}/>}
    </div>
  );
}

export default AboutPage;
