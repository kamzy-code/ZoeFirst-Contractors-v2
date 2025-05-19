import { AboutType } from "../data/AboutData";

function AboutItem ({title, paragraphs, imageUrl, direction}: AboutType,){
    return(
        <div className={`about-item-container ${direction}`}>
            <div className="about-item-image-container">
            <img src={imageUrl} alt={`${title} image`} />
            </div>

            <div className="about-item-text-Container">
                <h2>{title}</h2>
                {paragraphs.map((pItem, index)=>{
                    return <p key={index}>{pItem}</p>
                })}
            </div>

        </div>
    )
}

export default AboutItem;