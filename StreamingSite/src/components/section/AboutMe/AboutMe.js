import React, { useEffect } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { RoughEase } from "gsap/EasePack";

import "./AboutMe.css";

const AboutMe = () => {
  gsap.registerPlugin(TextPlugin, RoughEase);

  useEffect(() => {
    const titleAnimation = gsap.timeline();
    titleAnimation
      .fromTo(
        ".about-me-container",
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: "none" },
        0
      )
      .fromTo(
        ".about-me-title",
        {
          scaleY: 0,
          opacity: 0,
          duration: 1,
        },
        {
          scaleY: 1,
          opacity: 1,
          duration: 1,
        },
        0
      )
      .fromTo(
        ".about-me-paraghraph",
        {
          x: 700,
          opacity: 0,
          duration: 1,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
        },
        0
      );

    const words = [" Sal.", " A Developer.", " An engineer.", " A designer."];
    gsap.to(".ruesor", {
      opacity: 0,
      ease: "power2.inOut",
      repeat: -1,
    });
    let hiddenBoxAnimation = gsap.timeline();
    hiddenBoxAnimation
      .to(".hiddenBox", {
        duration: 1,
        width: 99,
        delay: 0.5,
        ease: "power4.inOut",
      })
      .from(".mainTItle", {
        duration: 1,
        y: 50,
        ease: "power3.out",
        onComplete: () => masterAnimation.play(),
      })
      .to(".hiddenBox", {
        duration: 1,
        height: 35,
        ease: "elastic.out",
      });

    let masterAnimation = gsap
      .timeline({
        repeat: -1,
      })
      .pause();
    words.forEach((word) => {
      let tl = gsap.timeline({
        repeat: 1,
        yoyo: true,
        repeatDelay: 1,
      });
      tl.to(".texts", {
        duration: 1,
        text: word,
      });
      masterAnimation.add(tl);
    });
  }, []);

  return (
    <div className="about-me-container">
      <div className="about-me-inner">
        <h1 className="about-me-title">
          <span className="hiddenBox"></span>
          <span className="mainTItle">Hi!, I'm</span>
          <span className="texts"></span>
          <span className="ruesor"> _</span>
        </h1>
        <p className="about-me-paraghraph">
          Since the beginning of my journey in web developing I've done many
          projects, some are big and some are small.The thing is I'm happy with
          what I'm doing and I want to go on with it. I'm confident, curious to
          learn, and absolutely working on improving my skills.
          <br />
          <br />
          <span>P.S</span>: I really enjoy solving problems as well as making
          things pretty and easy to use.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
