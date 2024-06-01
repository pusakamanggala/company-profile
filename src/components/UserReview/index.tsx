import React from "react";
import userReviewData from "./userReviewData";
import UserReviewCard from "./UserReviewCard";

const UserReview = () => {
  return (
    <section className="bg-gray">
      <div className="container">
        <hgroup className="section-title">
          <h2>Our Happy Clients</h2>
        </hgroup>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {userReviewData.map((review) => (
            <UserReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserReview;
