import { UserReview } from "@/types/userReview";

const userReviewData: UserReview[] = [
  {
    id: 1,
    name: "John Doe",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque harum architecto pariatur at laborum nesciunt, repudiandae sunt est. Ex, totam!",
    avatar: "https://xsgames.co/randomusers/avatar.php?g=male&id=1",
    rating: 5,
    role: "CEO at XYZ Company",
  },
  {
    id: 2,
    name: "Charlie Brown",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque harum architecto pariatur at",
    avatar: "https://xsgames.co/randomusers/avatar.php?g=male&id=2",
    rating: 4,
    role: "Founder at ABC Company",
  },
  {
    id: 3,
    name: "Christine Doe",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque harum architecto pariatur at laborum nesciunt, repudiandae sunt est. Ex, totam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque harum architecto pariatur at laborum nesciunt, repudiandae sunt est. Ex, totam!",
    avatar: "https://xsgames.co/randomusers/avatar.php?g=female&id=3",
    rating: 5,
    role: "CFO at XYZ Company",
  },
];

export default userReviewData;
