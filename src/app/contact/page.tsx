import Contact from "@/components/Contact";
import React from "react";

const Contacts = () => {
  return (
    <main className="pt-10 bg-gray">
      <div className="container space-y-10 md:space-y-12 lg:max-w-[1000px]">
        <hgroup className="page-title">
          <h2>Reach Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perferendis, dolore. Magni nemo harum error numquam tempora minus
          </p>
        </hgroup>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente sit
          et rerum obcaecati nostrum illum delectus modi. Sapiente, odit nisi
          doloremque unde maiores velit reiciendis quisquam obcaecati quia quas
          nesciunt pariatur saepe temporibus placeat cumque sit ut fuga, vero at
          debitis molestiae. Provident, iusto! Adipisci minima ab quam autem,
          est distinctio dolor in sunt! Aliquid sequi reiciendis fugiat labore
          voluptas magni, sed earum officiis libero incidunt porro quod
          laboriosam quo debitis, corrupti distinctio a voluptatum, quas quasi
          excepturi beatae odit doloremque corporis!
        </p>
        <Contact />
      </div>
    </main>
  );
};

export default Contacts;
