import ServiceCard from "../components/serviceCard";
import "../styles/Services.css";
import QuoteBtn from "../components/QuoteBtn";
import { useState, useEffect } from "react";
import QuoteForm from "../components/quoteForm";
import serviceList, { ServiceType } from "../data/serviceData";
import ServiceCardModal from "../components/ServicCardDetailed";

function Services() {
  const [ServiceQuoteBtn, setServiceQuoteBtn] = useState(false);
  const [serviceCardDetailed, setServiceCardDetailed] =
    useState<ServiceType | null>(null);

  const toggleServiceQuoteBtnForm = () => {
    setServiceQuoteBtn(!ServiceQuoteBtn);
  };

  const toggleServiceCardDetailed = (cardDetails: ServiceType | null) => {
    setServiceCardDetailed(cardDetails);
  };

  const isModalOpen = ()=>{
    return ServiceQuoteBtn || serviceCardDetailed ? true : false;
  }

  useEffect(() => {
    document.body.classList.toggle("no-scroll", isModalOpen());
    return () => document.body.classList.remove("no-scroll");
  }, [ServiceQuoteBtn, serviceCardDetailed]);

  return (
    <div className="services-container" id="services">
      <div className="service-content">
      <div className="service-header">
        <div className="service_header-stroke"> </div>
        <h2 className="service-header-title"> What We Do</h2>
      </div>

      <div className="service-card-list">
        {serviceList.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            imageUrl={service.imageUrl}
            services={service.services}
            toggleFullDetails={toggleServiceCardDetailed}
          />
        ))}
      </div>

      <div className="service-quote-btn-container">
        <QuoteBtn toggleForm={toggleServiceQuoteBtnForm} />
      </div>

      {ServiceQuoteBtn && <QuoteForm toggleForm={toggleServiceQuoteBtnForm} />}

      </div>

      {serviceCardDetailed && (
        <ServiceCardModal
          title={serviceCardDetailed.title}
          description={serviceCardDetailed.description}
          imageUrl={serviceCardDetailed.imageUrl}
          services={serviceCardDetailed.services}
          toggleCard={toggleServiceCardDetailed}
        />
      )}
    </div>
  );
}

export default Services;
