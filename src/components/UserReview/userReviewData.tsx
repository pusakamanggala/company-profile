import { UserReview } from "@/types/userReview";

const userReviewData: UserReview[] = [
  {
    id: 1,
    name: "John Doe",
    description:
      "Mitra Jaya memberikan pelayanan yang luar biasa! Proyek kami selesai tepat waktu dengan kualitas yang melebihi harapan kami.",
    avatar: "https://xsgames.co/randomusers/avatar.php?g=male&id=1",
    rating: 5,
    role: "CEO at XYZ Company",
  },
  {
    id: 2,
    name: "Charlie Brown",
    description:
      "Kerja sama dengan Mitra Jaya sangat profesional. Tim mereka sangat responsif dan selalu siap membantu dalam setiap situasi.",
    avatar: "https://xsgames.co/randomusers/avatar.php?g=male&id=2",
    rating: 4,
    role: "Founder at ABC Company",
  },
  {
    id: 3,
    name: "Christine Doe",
    description:
      "Kami sangat puas dengan hasil kerja Mitra Jaya. Mereka sangat detail dan selalu memastikan semua berjalan dengan lancar.",
    avatar: "https://xsgames.co/randomusers/avatar.php?g=female&id=3",
    rating: 5,
    role: "CFO at XYZ Company",
  },
];

export default userReviewData;
