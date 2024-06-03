import TopDecoration from "@/components/Common/TopDecoration";
import Contact from "@/components/Contact";

const Contacts = () => {
  return (
    <main className="pt-10 bg-gray">
      <TopDecoration />
      <div className="container space-y-10 md:space-y-12 lg:max-w-[1000px] z-10 relative">
        <hgroup className="page-title">
          <h2>Hubungi Kami</h2>
          <p>Hubungi kami untuk layanan terbaik:</p>
        </hgroup>
        <div className="space-y-5">
          <p className="text-justify">
            Mitra Jaya Arya Sanika selalu siap untuk membantu Anda kapanpun Anda
            membutuhkan. Kami berkomitmen untuk memberikan layanan terbaik dan
            menjawab setiap pertanyaan atau kebutuhan Anda dengan cepat dan
            efektif. Jangan ragu untuk menghubungi kami melalui WhatsApp kapan
            saja dengan mengklik nomor telepon kami di bawah ini.
          </p>
          <p className="text-justify">
            Kami memahami bahwa setiap kebutuhan pengamanan dan pelayanan adalah
            unik, dan kami di sini untuk memberikan solusi yang tepat bagi Anda.
            Tim profesional kami siap mendengarkan dan memberikan respon cepat
            untuk memastikan Anda mendapatkan bantuan yang Anda butuhkan.
          </p>
          <p className="text-justify">
            Kepuasan dan kepercayaan Anda adalah prioritas utama kami. Oleh
            karena itu, kami menyediakan saluran komunikasi yang mudah diakses
            agar Anda dapat dengan mudah menghubungi kami. Apakah Anda memiliki
            pertanyaan, memerlukan konsultasi, atau ingin mengetahui lebih
            lanjut tentang layanan kami, kami siap membantu Anda setiap saat.
          </p>
          <p className="text-justify">
            Jangan ragu untuk menghubungi kami di alamat berikut atau klik nomor
            telepon untuk terhubung langsung melalui WhatsApp. Kami berkomitmen
            untuk memberikan respon cepat dan layanan terbaik untuk memastikan
            kebutuhan Anda terpenuhi dengan sempurna.
          </p>
        </div>
        <Contact />
      </div>
    </main>
  );
};

export default Contacts;
