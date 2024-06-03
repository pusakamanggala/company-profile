import { Service } from "@/types/service";
import Image from "next/image";

const ServiceCard = ({ service }: { service: Service }) => {
  return (
    <div
      key={service.id}
      className="w-full bg-gray-light p-10 rounded-[50px] rounded-tl-none space-y-5 h-full  flex flex-col justify-between relative z-10"
    >
      <div className="space-y-5 min-h">
        <hgroup>
          <h3>{service.title}</h3>
          <p className="font-medium text-base">{service.subtitle}</p>
        </hgroup>
        <p>{service.description}</p>
      </div>

      <ul className="space-y-3 min-h-[160px] border-t border-opacity-30 z-[1] border-body-color pt-3">
        {service.benefits.map((benefit, index) => {
          const parts = benefit.split(":");
          const boldText = parts[0] + ":";
          const restOfText = parts[1];

          return (
            <li key={index} className="text-body-color flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="size-5 bg-primary rounded-full p-1 stroke-white mt-[5px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
              <p className="w-full text-base">
                <strong>{boldText}</strong>
                {restOfText}
              </p>
            </li>
          );
        })}
      </ul>
      <Image
        src={"/images/decoration/decor-5.svg"}
        alt="decor-5"
        width={130}
        height={130}
        className="absolute bottom-0 right-0 opacity-60"
      />
    </div>
  );
};

export default ServiceCard;
