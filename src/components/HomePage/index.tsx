import React from "react";
import Hero from "../Hero";
import Services from "../Services/Services";
import VideoIntro from "../VideoIntro";
import Contact from "../Contact";
import UserReview from "../UserReview";
import CompanyExcelence from "../Services/CompanyExcelence";

const HomePage = () => {
  return (
    <main>
      <section
        id="hero"
        className="relative z-10 overflow-hidden pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] bg-gray-light bg-[url(/images/decoration/decor-1.svg)] bg-cover bg-center bg-no-repeat md:h-screen md:flex md:items-center"
      >
        <Hero />
      </section>

      <section className="bg-gray" id="services">
        <div className="container">
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
      </section>

      <section id="intro" className="bg-gray-light">
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
        <div className="container border-t border-body-color border-opacity-40">
          <hgroup className="section-title">
            <h2>Hubungi Kami</h2>
            <p>Hubungi kami untuk layanan terbaik:</p>
          </hgroup>
          <Contact />
        </div>
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
