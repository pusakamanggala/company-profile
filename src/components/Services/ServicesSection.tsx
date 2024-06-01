import React from "react";
import serviceData from "./serviceData";
import companyExcellenceData from "./companyExcellenceData";
import ServiceCard from "./ServiceCard";

const ServicesSection = () => {
  return (
    <section className="bg-gray" id="services">
      <div className="container">
        <hgroup className="section-title">
          <h2>Services</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde odio,
            fugiat a optio sed maiores beatae ullam fugit voluptate non?
            Dignissimos doloribus similique maiores molestias temporibus
            inventore quo natus possimus.
          </p>
        </hgroup>
        <div className="flex flex-wrap gap-5 justify-center">
          {serviceData.map((service) => (
            <ServiceCard service={service} key={service.id} />
          ))}
        </div>
      </div>
      <div className="container flex md:flex-row flex-col gap-8 border-t border-body-color border-opacity-40">
        <div className="bg-gray-light md:w-[900px]">image here</div>
        <ul className="space-y-7 w-full">
          {companyExcellenceData.map((excellence) => (
            <li key={excellence.id}>
              <hgroup className="space-y-3">
                <h3>{excellence.title} </h3>
                <p>{excellence.description}</p>
              </hgroup>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ServicesSection;
