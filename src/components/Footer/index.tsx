import Image from "next/image";
import Link from "next/link";
import React from "react";
import menuData from "../Header/menuData";
import serviceData from "../Services/serviceData";
import contactData from "../Contact/contactData";
import privacyPolicyData from "./privacyPolicyData";

const Footer = () => {
  return (
    <footer className="bg-gray-light">
      <div className="container grid gap-9 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 md:gap-5">
        <div className="space-y-3 xl:col-span-2">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo/logo-1.png"
              alt="logo"
              width={40}
              height={40}
            />
            <h1 className="text-xl font-medium text-secondary">
              Mitra Jaya Arya Sanika
            </h1>
          </div>
          <p className="text-base">
            Mitra Jaya Arya Sanika adalah partner bisnis yang terpercaya dan
            profesional. Kami menyediakan solusi terbaik untuk kebutuhan Anda
            dengan kualitas dan layanan yang luar biasa.
          </p>
          <address className="not-italic text-body-color">
            {contactData.address}
          </address>
        </div>
        <div className="space-y-5">
          <h3 className="text-xl">Site Map</h3>
          <nav className="text-body-color flex flex-col space-y-3">
            {menuData.map((menu) => (
              <Link
                key={menu.id}
                href={menu.path}
                className="hover:underline w-fit"
              >
                {menu.title}
              </Link>
            ))}
          </nav>
        </div>
        <div className="space-y-5">
          <h3 className="text-xl">Service</h3>
          <ul className="space-y-3">
            {serviceData.map((service) => (
              <li key={service.id} className="text-body-color">
                {service.website ? (
                  <a
                    href={service.website}
                    className="hover:underline hover:text-secondary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {service.title}
                  </a>
                ) : (
                  service.title
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-5">
          <h3 className="text-xl">Contact</h3>
          <ul className="space-y-3">
            <li className="flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="size-5 fill-body-color"
              >
                <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
              </svg>
              <p className="text-base">{contactData.phone}</p>
            </li>
            <li className="flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="size-5 fill-body-color"
              >
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
              </svg>
              <a
                href={`https://wa.me/${contactData.whatsapp.replace(
                  "08",
                  "628"
                )}`}
                target="_blank"
                rel="noreferrer"
                className="hover:underline text-body-color"
              >
                {contactData.whatsapp}
              </a>
            </li>
            <li className="flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="size-5 fill-body-color"
              >
                <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
              </svg>
              <a
                href={`mailto:${contactData.email}`}
                target="_blank"
                rel="noreferrer"
                className="hover:underline text-body-color"
              >
                {contactData.email}
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-5">
          <h3 className="text-xl">Kebijakan Privasi</h3>
          <nav className="text-body-color flex flex-col space-y-3">
            {privacyPolicyData.map((item) => (
              <Link
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="hover:underline w-fit"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
