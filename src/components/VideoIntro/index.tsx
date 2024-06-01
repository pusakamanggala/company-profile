import React from "react";

const VideoIntro = () => {
  return (
    <section className="bg-gray-light">
      <div className="container">
        <hgroup className="section-title">
          <h2>Get to know us</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi vel
            delectus sequi libero quis exercitationem iste aspernatur corporis
            reiciendis placeat!
          </p>
        </hgroup>
        <iframe
          src="https://www.youtube.com/embed/VCPGMjCW0is"
          className="aspect-video w-full max-w-[800px] mx-auto"
        />
      </div>
    </section>
  );
};

export default VideoIntro;
