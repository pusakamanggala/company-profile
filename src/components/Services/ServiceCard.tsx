import { Service } from "@/types/service";
import React from "react";

const ServiceCard = ({ service }: { service: Service }) => {
  return (
    <div
      key={service.id}
      className="w-full md:w-80 lg:w-96 bg-gray-light p-10 rounded-[50px] rounded-tl-none space-y-5"
    >
      <hgroup>
        <h3>{service.title}</h3>
        <p className="font-medium">{service.subtitle}</p>
      </hgroup>

      <p>{service.description}</p>
      <ul className="space-y-3 border-t border-opacity-30 border-body-color pt-3">
        {service.benefits.map((benefit, index) => (
          <li key={index} className="text-body-color flex gap-2 items-center">
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
  );
};

export default ServiceCard;
