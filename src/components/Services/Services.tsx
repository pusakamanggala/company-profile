import React from "react";
import serviceData from "./serviceData";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className="flex flex-wrap gap-5 justify-center">
      {serviceData.map((service) => (
        <ServiceCard service={service} key={service.id} />
      ))}
    </div>
  );
};

export default Services;
