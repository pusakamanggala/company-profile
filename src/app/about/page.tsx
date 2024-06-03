import TopDecoration from "@/components/Common/TopDecoration";
import Team from "@/components/Team";
import Image from "next/image";

const About = () => {
  return (
    <main className="pt-10 bg-gray">
      <TopDecoration />
      <div className="container space-y-10 md:space-y-12 lg:max-w-[1000px] z-10 relative">
        <hgroup className="page-title">
          <h2>Tentang Kami</h2>
        </hgroup>
        <div className="space-y-5">
          <div className="relative h-96 w-full mx-auto overflow-hidden">
            <Image
              src="/images/about/about-1.jpg"
              alt="author"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <p className="text-justify">
            Mitra Jaya Arya Sanika didirikan dengan visi yang jelas dan
            ambisius: menjadi mitra terpercaya dalam menyediakan solusi terbaik
            untuk pengamanan dan pelayanan. Sejak awal berdiri, kami telah
            berkomitmen untuk memberikan layanan yang unggul dan inovatif.
            Dengan tim yang terdiri dari para profesional berpengalaman, kami
            selalu memastikan setiap proyek dikerjakan dengan standar kualitas
            tertinggi. Kami memahami bahwa setiap kebutuhan pengamanan dan
            pelayanan memiliki tantangan unik, dan kami bangga mampu memberikan
            solusi yang tepat dan efektif untuk setiap klien.
          </p>
          <p className="text-justify">
            Perjalanan kami dimulai dari proyek-proyek kecil, di mana kami
            membangun reputasi kami dengan kerja keras, dedikasi, dan perhatian
            terhadap detail. Keberhasilan dalam proyek-proyek awal ini memberi
            kami kepercayaan untuk menangani proyek yang lebih besar dan
            kompleks. Kini, Mitra Jaya Arya Sanika telah terlibat dalam berbagai
            proyek besar yang mencakup berbagai sektor, termasuk perumahan,
            komersial, dan publik. Kami selalu berusaha untuk melampaui
            ekspektasi klien kami, memastikan bahwa setiap layanan pengamanan
            dan pelayanan selesai tepat waktu dan sesuai kebutuhan
          </p>
        </div>
        <div className="space-y-5">
          <div className="relative h-96 w-full mx-auto overflow-hidden">
            <Image
              src="/images/about/about-2.jpg"
              alt="author"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <p className="text-justify">
            Salah satu kunci keberhasilan kami adalah pendekatan kolaboratif
            dalam setiap proyek. Kami bekerja erat dengan klien untuk memastikan
            bahwa setiap aspek layanan pengamanan dan pelayanan berjalan lancar.
            Pendekatan ini memungkinkan kami untuk mengidentifikasi dan
            mengatasi potensi masalah sebelum mereka menjadi hambatan, serta
            memastikan bahwa semua pihak terlibat dalam proses pengambilan
            keputusan. Komunikasi yang terbuka dan transparan adalah prinsip
            yang kami junjung tinggi dalam setiap langkah kerja kami.
          </p>
          <p className="text-justify">
            Kami juga sangat peduli terhadap keberlanjutan dan dampak sosial
            dari setiap proyek yang kami tangani. Mitra Jaya Arya Sanika
            berkomitmen untuk menerapkan praktik pengamanan dan pelayanan yang
            ramah lingkungan dan berkelanjutan. Kami berusaha untuk meminimalkan
            dampak lingkungan dengan menggunakan teknologi terbaru dan metode
            yang efisien. Kami percaya bahwa tanggung jawab kami tidak hanya
            kepada klien, tetapi juga kepada masyarakat dan lingkungan sekitar.
          </p>
          <p className="text-justify">
            Kepercayaan dan kepuasan klien adalah prioritas utama kami. Kami
            selalu mendengarkan kebutuhan dan harapan klien, serta memberikan
            solusi yang terbaik untuk memenuhi atau bahkan melampaui harapan
            tersebut. Dengan pengalaman bertahun-tahun dan rekam jejak yang
            solid, Mitra Jaya Arya Sanika terus berupaya untuk menjadi pemimpin
            dalam industri pengamanan dan pelayanan. Kami bangga menjadi bagian
            dari pembangunan masyarakat yang aman dan memberikan kontribusi
            positif bagi kehidupan sehari-hari
          </p>
        </div>
        <div className="space-y-9">
          <h2 className="text-center">Team Kami</h2>
          <Team />
        </div>
      </div>
    </main>
  );
};

export default About;
