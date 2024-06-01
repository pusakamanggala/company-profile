import React from "react";
import userReviewData from "./userReviewData";
import UserReviewCard from "./UserReviewCard";

const UserReview = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {userReviewData.map((review) => (
        <UserReviewCard key={review.id} review={review} />
      ))}
    </div>
  );
};

export default UserReview;
