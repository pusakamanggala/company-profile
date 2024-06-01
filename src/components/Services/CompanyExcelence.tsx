import React from "react";
import companyExcellenceData from "./companyExcellenceData";

const CompanyExcelence = () => {
  return (
    <div className="flex md:flex-row flex-col gap-8 ">
      <div className="bg-gray-light md:w-[900px]">image here</div>
      <ul className="space-y-7 w-full">
        {companyExcellenceData.map((excellence) => (
          <li key={excellence.id}>
            <hgroup className="space-y-3">
              <h3>{excellence.title} </h3>
              <p>{excellence.description}</p>
            </hgroup>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyExcelence;
