import Image from "next/image";

const TopDecoration = () => {
  return (
    <>
      <Image
        src={"/images/decoration/decor-8.svg"}
        alt="decor-8"
        width={300}
        height={300}
        className="absolute z-[1] left-0 top-0"
      />
      <Image
        src={"/images/decoration/decor-9.svg"}
        alt="decor-9"
        width={260}
        height={260}
        className="absolute z-[1] right-0 top-24"
      />
    </>
  );
};

export default TopDecoration;
