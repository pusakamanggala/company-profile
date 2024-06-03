import companyExcellenceData from "./companyExcellenceData";
import Image from "next/image";

const CompanyExcelence = () => {
  return (
    <div className="flex lg:flex-row flex-col gap-8">
      <div className="relative h-[440px] w-full mx-auto overflow-hidden z-10">
        <Image
          src="/images/team/team-work.jpg"
          alt="author"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <ul className="space-y-7 w-full z-10">
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
