import { Payment } from "@/types/payment";

const paymentData: Payment[] = [
  {
    id: 1,
    description: [
      "Buat Permohonan Pengamanan. Jika sudah selesai klik Simpan. Anda akan diarahkan ke halaman pembayaran",
    ],
    image: "/images/payment/payment-1.jpg",
  },
  {
    id: 2,
    description: ["Atau Pilih dari Riwayat Penugasan yang belum dibayar"],
    image: "/images/payment/payment-2.jpg",
  },
  {
    id: 3,
    description: [
      "Anda akan diarahkan ke halaman Permohonan Pengamanan yang sudah diisi. Silakan klik Bayar dan anda akan diarahkan ke halaman Ringkasan Pembayaran",
    ],
    image: "/images/payment/payment-3.jpg",
  },
  {
    id: 4,
    description: ["Silakan periksa total bayar dan klik Pilih Cara Bayar"],
    image: "/images/payment/payment-4.jpg",
  },
  {
    id: 5,
    description: ["Pilih Virtual Account yang anda miliki"],
    image: "/images/payment/payment-5.jpg",
  },
  {
    id: 6,
    description: [
      "Silakan salin No Virtual Account dan silakan lakukan pembayaran menggunakan Aplikasi Bank yang anda miliki. Setelah itu kembali ke halaman ini dan klik Periksa Pembayaran.",
      "Jika sudah berhasil maka akan muncul notifikasi Penugasan",
    ],
    image: "/images/payment/payment-6.jpg",
  },
];

export default paymentData;
