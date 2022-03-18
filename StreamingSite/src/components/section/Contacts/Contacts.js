import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faGithubSquare,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";
import { gsap } from "gsap";
import "./Contacts.css";

const Contacts = () => {
  useEffect(() => {
    const titleAnimation = gsap.timeline();
    titleAnimation
      .fromTo(
        ".contacts-container",
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: "none" },
        0
      )
      .fromTo(
        ".soical-media",
        {
          scaleY: 0,
          opacity: 0,
        },
        {
          scaleY: 1,
          opacity: 1,
          duration: 1.5,
          onComplete: () => iconsAnimation.play(),
        },
        0
      )
      .fromTo(
        ".form-wrapper",
        {
          x: 700,
          opacity: 0,
          duration: 1,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          onComplete: () => formAnimation.play(),
        },
        0
      );
    const iconsAnimation = gsap.timeline().pause();
    iconsAnimation
      .fromTo(
        ".facebook-gsap",
        {
          x: -100,
          y: -100,
          rotate: 350 * 2,
          opacity: 0,
        },
        {
          x: 0,
          y: 0,
          rotate: 0,
          opacity: 1,
          duration: 1,
          ease: "back.out(1.7)",
        },
        0
      )
      .fromTo(
        ".gitHub-gsap",
        {
          rotateY: 350 * 2,
          y: -100,
          opacity: 0,
        },
        {
          rotateY: 0,
          duration: 1,
          y: 0,
          opacity: 1,
          ease: "back.out(1.7)",
        },
        0
      )
      .fromTo(
        ".youTube-gsap",
        {
          x: 100,
          y: -100,
          rotate: -350 * 2,
          opacity: 0,
        },
        {
          x: 0,
          y: 0,
          rotate: 0,
          opacity: 1,
          duration: 1,
          ease: "back.out(1.7)",
        },
        0
      );

    const formAnimation = gsap.timeline().pause();
    formAnimation
      .fromTo(
        ".name-gsap ",
        {
          scaleX: 0,
          opacity: 0,
        },
        {
          scaleX: 1,
          opacity: 1,
        },
        0
      )
      .fromTo(
        ".email-gsap",
        {
          scaleX: 0,
          opacity: 0,
        },
        {
          scaleX: 1,
          opacity: 1,
          // ease: "back.out(1.7)",
        },
        0
      )
      .fromTo(
        ".comment-gsap",
        {
          scaleX: 0,
          opacity: 0,
        },
        {
          scaleX: 1,
          opacity: 1,
        },
        0
      );
  }, []);

  return (
    <div className="contacts-container">
      <div className="contacts-inner-container">
        <div className="soical-media">
          <a href="/#">
            <div className="facebook-gsap">
              <FontAwesomeIcon
                className="icon facebook"
                icon={faFacebookSquare}
              />
            </div>
          </a>
          <a href="/#">
            <div className="gitHub-gsap">
              <FontAwesomeIcon className="icon gitHub" icon={faGithubSquare} />
            </div>
          </a>
          <a href="/#">
            <div className="youTube-gsap">
              <FontAwesomeIcon
                className="icon youTube"
                icon={faYoutubeSquare}
              />
            </div>
          </a>
        </div>
        <form className="form-wrapper">
          <div className="name-email">
            <input placeholder="Name" className="name-gsap input" type="text" />
            <input
              placeholder="Email"
              className="email-gsap input"
              type="email"
            />
          </div>
          <textarea
            placeholder="What's up? 😁"
            className="comment-gsap input textarea"
          ></textarea>
          <button className="send-button" type="submit">
            Send!
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
