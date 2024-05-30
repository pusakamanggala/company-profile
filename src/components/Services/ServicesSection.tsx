import React from "react";
import serviceData from "./serviceData";
import companyExcellenceData from "./companyExcellenceData";

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
            <div
              key={service.id}
              className="w-96 bg-gray-light p-10 rounded-[50px] rounded-tl-none space-y-5"
            >
              <hgroup>
                <h3>{service.title}</h3>
                <p className="font-medium">{service.subtitle}</p>
              </hgroup>

              <p>{service.description}</p>
              <ul className="space-y-3 border-t border-opacity-30 border-body-color pt-3">
                {service.benefits.map((benefit, index) => (
                  <li
                    key={index}
                    className="text-body-color flex gap-2 items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={3}
                      stroke="currentColor"
                      className="size-5 bg-primary rounded-full p-1 stroke-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
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
