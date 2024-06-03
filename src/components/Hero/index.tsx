import Link from "next/link";

const Hero = () => {
  return (
    <div className="container">
      <div className="-mx-4 flex flex-wrap">
        <div className="w-full px-4">
          <hgroup className="section-title !mb-10">
            <h1>Keamanan Terjamin dengan Sumber Daya Pengamanan Profesional</h1>
            <p>
              PT. Mitra Jaya Arya Sanika menghadirkan solusi pengamanan terbaik
              dengan tim profesional yang siap melindungi Anda dan aset berharga
              Anda. Kami menggabungkan profesionalisme dengan keandalan untuk
              memberikan pelayanan terbaik bagi Anda. Mari bersama kami, rasakan
              perbedaan nyata dalam setiap layanan yang kami tawarkan! Keamanan
              Anda, prioritas kami.
            </p>
          </hgroup>
          <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Link
              href="/contact"
              className="rounded-md bg-primary py-4 px-8 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
            >
              Hubungi Kami
            </Link>
            <Link
              href="/service"
              className="rounded-md  py-4 px-8 text-base font-semibold duration-300 ease-in-out bg-white/20 text-white hover:bg-white/30"
            >
              Selengkapnya
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
