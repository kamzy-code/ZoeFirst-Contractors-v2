import { ServiceType } from "../data/serviceData";

interface ServiceCardModalProp{
    title: string;
    description: string;
    imageUrl: string;
    services?: string[];
    toggleCard: (cardDetails:ServiceType | null)=>void;

}

function ServiceCardModal({
  title,
  description,
  imageUrl,
  services,
  toggleCard,
}: ServiceCardModalProp) {


  return (
        <div className="service-card-detailed-container">
      <div className="service-card-detailed-backdrop" onClick={()=> toggleCard(null)}></div>
      <div className="service-card-detailed-content">
        <div className="service-card-detailed-img-container">
          <img src={imageUrl} alt={`${title} Image`} />
        </div>

        <div className="service-card-detailed-content-text">
          <h2>{title}</h2>
          <p>{description}</p>
          <h2>Sevices Inlcudes:</h2>
          <ul>
            {services &&
              services.map((service, index) => <li key={index}>{service}</li>)}
          </ul>
        </div>
      </div>
    </div>
    
  );
}

export default ServiceCardModal;
