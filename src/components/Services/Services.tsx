import serviceData from "./serviceData";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className="flex flex-wrap gap-5 justify-center">
      {serviceData.map((service) => (
        <div className="md:w-80 lg:w-96" key={service.id}>
          <ServiceCard service={service} />
        </div>
      ))}
    </div>
  );
};

export default Services;
