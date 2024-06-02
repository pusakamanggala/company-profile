import Link from "next/link";

const Hero = () => {
  return (
    <div className="container">
      <div className="-mx-4 flex flex-wrap">
        <div className="w-full px-4">
          <hgroup className="section-title !mb-10">
            <h1>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Distinctio, atque?
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
              delectus cum quos, consectetur voluptate animi odit expedita
              temporibus commodi illo dolorem quod vitae quisquam minima qui,
              saepe esse ipsum magnam distinctio dolorum?
            </p>
          </hgroup>
          <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Link
              href="/contact"
              className="rounded-md bg-primary py-4 px-8 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
            >
              Contact Us
            </Link>
            <Link
              href="/service"
              className="rounded-md  py-4 px-8 text-base font-semibold duration-300 ease-in-out bg-white/20 text-white hover:bg-white/30"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
