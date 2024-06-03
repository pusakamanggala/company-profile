import CompanyExcelence from "@/components/Services/CompanyExcelence";
import ServiceCard from "@/components/Services/ServiceCard";
import Services from "@/components/Services/Services";
import serviceData from "@/components/Services/serviceData";
import UserReview from "@/components/UserReview";
import React from "react";

const Service = () => {
  return (
    <main className="pt-10 bg-gray">
      <div className="container space-y-10 md:space-y-12 lg:max-w-[1000px]">
        <hgroup className="page-title">
          <h2>Layanan Kami</h2>
          <p>
            Temukan Layanan Terbaik Kami. Kami menyediakan berbagai layanan
            unggulan yang dirancang untuk memenuhi kebutuhan Anda. Dari
            pengamanan profesional hingga pengemudi handal, kami siap memberikan
            pelayanan yang Anda butuhkan dengan standar tertinggi.
          </p>
        </hgroup>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {serviceData.map((service) => (
            <ServiceCard service={service} key={service.id} />
          ))}
        </div>
        <div className="py-10 md:py-12 border-y border-gray-light">
          <CompanyExcelence />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
          pariatur officiis, atque quae rem magni, cum a nihil at doloremque
          earum inventore harum dolore quod culpa. Exercitationem culpa fugiat
          earum!
        </p>
        <UserReview />
      </div>
    </main>
  );
};

export default Service;
