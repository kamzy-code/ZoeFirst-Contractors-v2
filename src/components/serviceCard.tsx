import { ServiceType } from "../data/serviceData";

export interface ServiceCardProps {
  key: number;
  title: string;
  description: string;
  imageUrl: string;
  services?: string[];
  toggleFullDetails: (cardDetails: ServiceType) => void;
}

function ServiceCard({
  title,
  description,
  imageUrl,
  services,
  toggleFullDetails,
}: ServiceCardProps) {
  return (
    <div className="service-card-container">
      <div className="service-card-img-container">
        <img src={imageUrl} alt={`${title} Image`} />
      </div>

      <div className="service-card-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <button
          onClick={() =>
            toggleFullDetails({ title, description, imageUrl, services })
          }
        >
          View More
        </button>
      </div>
    </div>
  );
}

export default ServiceCard;
