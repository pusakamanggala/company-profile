import TopDecoration from "@/components/Common/TopDecoration";
import paymentData from "@/components/payment/paymentData";
import Image from "next/image";

const page = () => {
  return (
    <main className="pt-10 bg-gray">
      <TopDecoration />
      <div className="container space-y-10 md:space-y-12 lg:max-w-[1000px] z-10 relative">
        <h2 className="text-2xl text-center md:mb-24">
          Cara Pembayaran menggunakan MySekuriti Client
        </h2>
        <div className="space-y-5">
          {paymentData.map((payment, index) => (
            <div
              key={payment.id}
              className={`flex items-center flex-col md:flex-row border-b py-5 md:py-10 gap-2 md:gap-5 border-body-color border-opacity-40 last:border-none ${
                index % 2 && "md:flex-row-reverse"
              }`}
            >
              <div className="relative h-[500px] w-[200px] md:h-[600px] md:w-[300px] mx-auto overflow-hidden">
                <Image
                  src={payment.image}
                  alt={`${payment}_${payment.id}`}
                  fill
                  style={{ objectFit: "contain" }}
                  sizes="100%"
                />
              </div>
              <div className="flex-1">
                {payment.description.map((desc, index) => (
                  <p key={index}>{desc}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default page;
