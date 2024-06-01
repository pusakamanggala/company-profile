import React from "react";
import Hero from "../Hero";
import Services from "../Services/Services";
import CompanyExcelence from "../Services/companyExcelence";
import VideoIntro from "../VideoIntro";
import Contact from "../Contact";
import UserReview from "../UserReview";

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
            <h2>Services</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde
              odio, fugiat a optio sed maiores beatae ullam fugit voluptate non?
              Dignissimos doloribus similique maiores molestias temporibus
              inventore quo natus possimus.
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
            <h2>Get to know us</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi vel
              delectus sequi libero quis exercitationem iste aspernatur corporis
              reiciendis placeat!
            </p>
          </hgroup>
          <VideoIntro />
        </div>
        <div className="container border-t border-body-color border-opacity-40">
          <hgroup className="section-title">
            <h2>Get in touch</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
              quod.
            </p>
          </hgroup>
          <Contact />
        </div>
      </section>

      <section id="review" className="bg-gray">
        <div className="container">
          <hgroup className="section-title">
            <h2>Our Happy Clients</h2>
          </hgroup>
          <UserReview />
        </div>
      </section>
    </main>
  );
};

export default HomePage;
