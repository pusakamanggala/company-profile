import TopDecoration from "@/components/Common/TopDecoration";
import CompanyExcelence from "@/components/Services/CompanyExcelence";
import ServiceCard from "@/components/Services/ServiceCard";
import serviceData from "@/components/Services/serviceData";
import UserReview from "@/components/UserReview";

const Service = () => {
  return (
    <main className="pt-10 bg-gray z-10">
      <TopDecoration />
      <div className="container space-y-10 md:space-y-12 lg:max-w-[1000px] z-10 relative">
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
        <p className="text-justify">
          PT. Mitra Jaya Arya Sanika menghadirkan solusi pengamanan terbaik
          dengan tim profesional yang siap melindungi Anda dan aset berharga
          Anda. Kami menggabungkan profesionalisme dengan keandalan untuk
          memberikan pelayanan terbaik bagi Anda. Mari bersama kami, rasakan
          perbedaan nyata dalam setiap layanan yang kami tawarkan! Keamanan
          Anda, prioritas kami.
        </p>
        <UserReview />
      </div>
    </main>
  );
};

export default Service;
