import Hero from "../Hero";
import Services from "../Services/Services";
import VideoIntro from "../VideoIntro";
import Contact from "../Contact";
import UserReview from "../UserReview";
import CompanyExcelence from "../Services/CompanyExcelence";
import Image from "next/image";

const HomePage = () => {
  return (
    <main>
      <section
        id="hero"
        className="relative overflow-hidden pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] bg-gray-light bg-[url(/images/decoration/decor-1.svg)] bg-cover bg-center bg-no-repeat md:h-screen md:flex md:items-center"
      >
        <Hero />
      </section>

      <section className="bg-gray relative" id="services">
        <div className="container relative z-10">
          <hgroup className="section-title">
            <h2>Layanan</h2>
            <p>
              Temukan Layanan Terbaik Kami. Kami menyediakan berbagai layanan
              unggulan yang dirancang untuk memenuhi kebutuhan Anda. Dari
              pengamanan profesional hingga pengemudi handal, kami siap
              memberikan pelayanan yang Anda butuhkan dengan standar tertinggi.
            </p>
          </hgroup>
          <Services />
        </div>
        <div className="container border-t border-body-color border-opacity-40">
          <CompanyExcelence />
        </div>
        <Image
          src={"/images/decoration/decor-6.svg"}
          alt="decor-6"
          width={220}
          height={250}
          className="absolute z-[1] right-0 top-10 opacity-20"
        />
        <Image
          src={"/images/decoration/decor-4.svg"}
          alt="decor-4"
          width={220}
          height={250}
          className="absolute bottom-0 right-0 md:right-0"
        />
        <Image
          src={"/images/decoration/decor-6.svg"}
          alt="decor-6"
          width={220}
          height={250}
          className="absolute z-[1] left-0 md:bottom-[500px] bottom-[800px]"
        />
      </section>

      <section id="intro" className="bg-gray-light relative">
        <div className="container">
          <hgroup className="section-title">
            <h2>Kenali Kami</h2>
            <p>
              Di PT. Mitra Jaya Arya Sanika, kami bangga dengan dedikasi kami
              untuk memberikan layanan berkualitas tinggi. Kami fokus pada
              kepuasan pelanggan dan profesionalisme dalam setiap aspek
              pekerjaan kami.
            </p>
          </hgroup>
          <VideoIntro />
        </div>
        <div className="container relative z-10 border-t border-body-color border-opacity-40">
          <hgroup className="section-title">
            <h2>Hubungi Kami</h2>
            <p>Hubungi kami untuk layanan terbaik:</p>
          </hgroup>
          <Contact />
        </div>

        <Image
          src={"/images/decoration/decor-7.svg"}
          alt="decor-6"
          width={220}
          height={250}
          className="absolute z-[1] left-0 bottom-0"
        />
        <Image
          src={"/images/decoration/decor-7.svg"}
          alt="decor-6"
          width={220}
          height={250}
          // flip horizontally and vertically
          className="absolute z-[1] right-0 bottom-[500px] rotate-180"
        />
      </section>

      <section id="review" className="bg-gray">
        <div className="container">
          <hgroup className="section-title">
            <h2>Ulasan Pelanggan</h2>
          </hgroup>
          <UserReview />
        </div>
      </section>
    </main>
  );
};

export default HomePage;
