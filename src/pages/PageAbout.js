import React from "react";
import fullAvatar from "../images/full-body.png";
import halfAvatar from "../images/top-half.png";

export default function PageAbout() {
  return (
    <div className="about">
      <div className="fullAvatar">
        <img src={fullAvatar} alt=" full body avatar" />
      </div>
      <div className="aboutText">
        <h2>I am Avi, a Full Stack Developer.</h2>
        <p>
          I recently graduated from Software System Developer program at BCIT,
          an intensive 10 months program where we get trained in multiple
          technologies.
        </p>
        <p>
          In my time at BCIT, I have worked on many projects that I am proud to
          have added value by creating flawless and efficient backends with
          smooth, eye pleasing and easy to use frontends. In the small free time
          I got in the intensive program that is Software systems development, I
          created a passion project which was a stock trading platform.
        </p>
        <p>
          Previous to coding I worked as Poker Supervisor, a job which mainly
          entails conflict resolutions and working in a team while taking
          initiative to and leading by example.
        </p>
        <p>
          For fun, I love being in nature. May that be on a hike or chilling on
          a beach or even in my backyard, just mowing the lawn.
        </p>
      </div>
    </div>
  );
}
