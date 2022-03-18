import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import "./Header.css";

import me from "./imgs/self.jpg";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

function Header() {
  useEffect(() => {
    // MOUTIN ANIMATION...

    const moutinTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".scrollElement",
        start: "top top",
        end: "40% 100%",
        scrub: 3,
      },
    });
    moutinTl
      .to("#left-moutin", { x: -60, y: 80, ease: "power1.in" }, 0)
      .to("#right-moutin", { x: 60, y: 80, ease: "power1.in" }, 0)
      .to("#small-left-moutin", { x: -70, y: 90, ease: "power1.in" }, 0)
      .to(".text-welcome", { y: 200, ease: "back" }, 0)
      .to("#river", { y: 30 }, 0.1);

    // CLOUD ANIMATION...
    const cloudsTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".scrollElement",
        start: "top top",
        end: "65% top",
        scrub: 1,
      },
    });
    cloudsTl
      .fromTo("#big-cloud", { y: 0, x: 600 }, { y: 0, x: -600 }, 0)
      .fromTo("#flat-cloud", { y: 50, x: -500 }, { y: 50, x: 500 }, 0)
      .fromTo("#medum-cloud", { y: 90, x: 900 }, { y: 90, x: -900 }, 0)
      .fromTo("#small-cloud", { y: 90, x: -700 }, { y: 90, x: 700 }, 0);

    // PERSONAL TEXT ANIMATION...
    const personalTextUpTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".scrollElement",
        start: "15% top",
        end: "40% top",
        toggleActions: "play none none reverse",
        onLeave: () => {
          personalTextSlideTl.play();
        },
        onEnterBack: () => {
          personalTextSlideTl.reverse();
        },
      },
    });
    personalTextUpTl
      .fromTo(
        ".text-prgrammer",
        { opacity: 0, y: 700 },
        { opacity: 1, y: 70, duration: 1, ease: "none" },
        0
      )
      .fromTo(
        ".avatar",
        { opacity: 0, y: -300 },
        { opacity: 1, y: 0, duration: 1, ease: "none", delay: 1 },
        0
      )
      .fromTo(
        ".box1-2",
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: "none", delay: 1.2 },
        1
      )
      .fromTo(
        ".text-design",
        { ease: "back", opacity: 0, y: 400 },
        { ease: "back", opacity: 1, y: 197, duration: 1 },
        0
      );
    // ... PERSONAL TEXT REMOVE ANIMATION...
    const personalTextSlideTl = gsap.timeline().pause();
    personalTextSlideTl
      .to(".text-prgrammer", { x: -800, duration: 0.3, ease: "none" }, 0)
      .to(".text-design", { x: 800, duration: 0.3, ease: "none" }, 0)
      .to(".avatar", { y: 800, opacity: 0, duration: 0.3, ease: "none" }, 0)
      .to(".box1-2", { opacity: 0, duration: 0.3, ease: "none" }, 0.5);

    // ICE MOUTIN ANIMATION...
    const iceMoutinTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".scrollElement",
        start: "35% top",
        end: "60% top",
        scrub: 2,
      },
    });
    iceMoutinTl
      .fromTo("#left-ice-moutin", { y: 250 }, { y: 40, x: -90 }, 0)
      .fromTo("#right-ice-moutin", { y: 250 }, { y: 70, x: 30 }, 0);

    // TOWER ANIMATION...
    gsap.fromTo(
      "#tour",
      { y: 350, x: -30 },
      {
        y: 70,
        x: -30,
        scrollTrigger: {
          trigger: ".scrollElement",
          start: "60% bottom",
          end: "70% top",
          scrub: 2,
        },
      },
      0
    );

    // MOONS ANIMATION...
    const moonsTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".scrollElement",
        start: "60% bottom",
        end: "70% top",
        scrub: 1,
      },
    });
    moonsTl
      .fromTo("#white-moon", { y: 950, x: -110 }, { y: 0, x: -110 }, 0)
      .fromTo("#purpl-moon", { y: 300, x: 300 }, { y: -20, x: -170 }, 0);

    // MOONS ROTATION...
    gsap.to(
      "#white-moon",
      10,
      {
        rotation: 360,
        transformOrigin: "50% 50%",
        repeat: -1,
        ease: "none",
      },
      0
    );
    gsap.to(
      "#purpl-moon",
      15,
      {
        rotation: 360,
        transformOrigin: "50% 50%",
        repeat: -1,
        ease: "none",
      },
      0
    );
    // MOONS SCALING...
    gsap.to(
      "#white-moon",
      {
        scrollTrigger: {
          trigger: ".scrollElement",
          start: "70% top",
          end: "100% 100%",
          scrub: 1,
        },
        transformOrigin: "50% 50%",
        scale: 2.2,
      },
      0
    );

    // ROCKET ANIMATION
    gsap.set("#rocket", { scale: 0.5 });
    const rocketPath = gsap.timeline({
      scrollTrigger: {
        trigger: ".scrollElement",
        start: "30% top",
        end: "100% 100%",
        scrub: 1,
      },
    });
    rocketPath.to("#rocket", {
      rotate: (self) => (self.direction === 1 ? 90 : -90),
      overwrite: "auto",
    });
    rocketPath.to(
      "#rocket",
      {
        duration: 5,
        opacity: 1,
        ease: "power1.inOut",
        motionPath: {
          path: "#path",
          align: "#path",
          alignOrigin: [0.5, 0.5],
          autoRotate: -90,
        },
      },
      0
    );
    rocketPath.to(
      "#rocket",
      {
        duration: 5,
        opacity: 1,
        ease: "power1.inOut",
        motionPath: {
          path: "#path",
          align: "#path",
          alignOrigin: [0.5, 0.5],
          autoRotate: 90,
        },
        onUpdate() {},
      },
      0
    );
  }, []);

  return (
    <React.Fragment>
      <div class="scrollElement">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 800 400.27"
          preserveAspectRatio="xMidYMax slice"
        >
          <defs>
            {/* //rocket */}
            <linearGradient
              id="b787c239-0898-4efb-a5ae-8e48f7d6d13c"
              x1="528.5"
              x2="528.5"
              y1="310.14"
              y2="277.02"
              gradientTransform="matrix(.65 0 0 1.33 385.93 -248.51)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0"></stop>
              <stop offset="0.15" stopColor="#000304"></stop>
              <stop offset="0.32" stopColor="#020d12"></stop>
              <stop offset="0.5" stopColor="#041e27"></stop>
              <stop offset="0.68" stopColor="#083546"></stop>
              <stop offset="0.86" stopColor="#0c526d"></stop>
              <stop offset="1" stopColor="#106d90"></stop>
            </linearGradient>
            <linearGradient
              id="e0a680d8-3ce6-4c51-88d1-b37d9cf9fba8"
              x1="749.65"
              x2="749.65"
              y1="128.41"
              y2="98.92"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#a43440"></stop>
              <stop offset="1" stopColor="#c73634"></stop>
            </linearGradient>
            <linearGradient
              id="ace57d1f-f1b5-4480-a3a3-4ae8c88466d0"
              x1="709.65"
              x2="709.65"
              y1="128.41"
              y2="98.92"
              xlinkHref="#e0a680d8-3ce6-4c51-88d1-b37d9cf9fba8"
            ></linearGradient>
            <radialGradient
              id="b9cccfc2-f57a-471b-8e32-c4e49bd9dbe7"
              cx="787.72"
              cy="-4370.11"
              r="26.36"
              gradientTransform="matrix(1.25 0 0 2.29 -252.99 10066.5)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#f4bab3"></stop>
              <stop offset="0.77" stopColor="#8d6fc7"></stop>
              <stop offset="0.96" stopColor="#b695e5"></stop>
            </radialGradient>
            <radialGradient
              id="ff76e830-e6c4-4476-9e44-67c68d0d3f05"
              cx="729.75"
              cy="814.52"
              r="8.89"
              gradientTransform="matrix(1 0 0 .91 0 -719.67)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.02" stopColor="#ab5e75"></stop>
              <stop offset="0.25" stopColor="#9f577b"></stop>
              <stop offset="0.67" stopColor="#7f458c"></stop>
              <stop offset="0.99" stopColor="#61349c"></stop>
            </radialGradient>
            <linearGradient
              id="a070573a-959a-4a29-afcc-12f58cbe4fb1"
              x1="729.51"
              x2="729.51"
              y1="19.81"
              y2="16.13"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#ffff18"></stop>
              <stop offset="1" stopColor="#ff7400"></stop>
            </linearGradient>
            <radialGradient
              id="b16b1580-aba5-4db9-b6ce-c55e6a9ff27a"
              cx="729.48"
              cy="-3509.1"
              r="15.71"
              gradientTransform="matrix(1 0 0 1.84 0 6555.62)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.02" stopColor="#8881bc"></stop>
              <stop offset="0.29" stopColor="#8375b7"></stop>
              <stop offset="0.77" stopColor="#7555aa"></stop>
              <stop offset="0.99" stopColor="#6d43a3"></stop>
            </radialGradient>
            <radialGradient
              id="a7a39a67-fcd3-4b41-b861-86cf847be103"
              cx="729.56"
              cy="52.4"
              r="16.7"
              xlinkHref="#b16b1580-aba5-4db9-b6ce-c55e6a9ff27a"
            ></radialGradient>
            <radialGradient
              id="b8473ed3-9e3c-4a24-a594-d28f17feb430"
              cx="752.22"
              cy="-3541.96"
              r="18.92"
              gradientTransform="matrix(1.1 0 0 1.84 -95.29 6555.62)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.02" stopColor="#725eb0"></stop>
              <stop offset="0.38" stopColor="#6d52aa"></stop>
              <stop offset="0.99" stopColor="#61349c"></stop>
            </radialGradient>
            <linearGradient
              id="f38e2d1a-6600-4fa5-878e-2851a7b41383"
              x1="729.7"
              x2="729.7"
              y1="62.79"
              y2="37.02"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#ffff29"></stop>
              <stop offset="1" stopColor="#ff7e59"></stop>
            </linearGradient>
            <radialGradient
              id="bc8a20ec-6137-4135-b56f-275bd451ea8f"
              cx="729.76"
              cy="-3495.94"
              r="6.17"
              gradientTransform="matrix(1 0 0 1.84 0 6555.62)"
              xlinkHref="#b8473ed3-9e3c-4a24-a594-d28f17feb430"
            ></radialGradient>
            <radialGradient
              id="f26d3618-12fb-4786-8ccf-776f5b9581f7"
              cx="729.7"
              cy="30.74"
              r="11.37"
              xlinkHref="#b16b1580-aba5-4db9-b6ce-c55e6a9ff27a"
            ></radialGradient>
            <linearGradient
              id="e58c3887-2640-443d-af39-d9b7556eda7f"
              x1="728.83"
              x2="728.83"
              y1="85.52"
              y2="83.96"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#8dc7ff"></stop>
              <stop offset="0.32" stopColor="#5c4d86"></stop>
            </linearGradient>
            <radialGradient
              id="ace3eddd-d354-4d5f-ac90-594af894d0e3"
              cx="24.03"
              cy="69.81"
              r="0.61"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.02" stopColor="#8881bc"></stop>
              <stop offset="0.29" stopColor="#8375b7"></stop>
              <stop offset="0.77" stopColor="#7555aa"></stop>
              <stop offset="1" stopColor="#6d43a3"></stop>
            </radialGradient>
            <linearGradient
              id="be399719-59c8-47ac-8d84-dff09d49a2d5"
              x1="728.83"
              x2="728.83"
              y1="81.68"
              y2="80.13"
              xlinkHref="#e58c3887-2640-443d-af39-d9b7556eda7f"
            ></linearGradient>
            <radialGradient
              id="ad7ba90b-b292-480f-b90d-c10b222e3944"
              cx="24.03"
              cy="65.98"
              r="0.61"
              xlinkHref="#ace3eddd-d354-4d5f-ac90-594af894d0e3"
            ></radialGradient>
            <radialGradient
              id="b9fbe58f-4233-4133-8ccd-044bc9f9f2c1"
              cx="11.23"
              cy="39.84"
              r="0.61"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#f4bab3"></stop>
              <stop offset="1" stopColor="#8d6fc7"></stop>
            </radialGradient>
            <radialGradient
              id="ba40e2f0-aabc-4e10-adfe-36d0a380a04d"
              cx="12.6"
              cy="28.84"
              r="0.61"
              xlinkHref="#b9fbe58f-4233-4133-8ccd-044bc9f9f2c1"
            ></radialGradient>
            <radialGradient
              id="f21747c9-fc92-437e-a452-bdc200a33c73"
              cx="18.51"
              cy="48.53"
              r="0.61"
              xlinkHref="#b9fbe58f-4233-4133-8ccd-044bc9f9f2c1"
            ></radialGradient>
            <radialGradient
              id="f89dc63f-7cd3-4d24-8ea0-47b5d9419a00"
              cx="30.55"
              cy="49.47"
              r="0.61"
              xlinkHref="#b9fbe58f-4233-4133-8ccd-044bc9f9f2c1"
            ></radialGradient>
            <radialGradient
              id="b3af1208-0990-4b51-a74e-2f10dcb31ecd"
              cx="38.7"
              cy="42.21"
              r="0.61"
              xlinkHref="#b9fbe58f-4233-4133-8ccd-044bc9f9f2c1"
            ></radialGradient>
            <radialGradient
              id="a128c5ca-7575-46ec-a2bf-58818c5f9863"
              cx="37.45"
              cy="28.44"
              r="0.61"
              xlinkHref="#b9fbe58f-4233-4133-8ccd-044bc9f9f2c1"
            ></radialGradient>
            <radialGradient
              id="ba909798-77c0-4952-b651-e63b42129236"
              cx="31.32"
              cy="21.34"
              r="0.61"
              xlinkHref="#b9fbe58f-4233-4133-8ccd-044bc9f9f2c1"
            ></radialGradient>
            <radialGradient
              id="e2a01929-c993-4f86-9ed8-be8ed42423cd"
              cx="21.01"
              cy="20.22"
              r="0.61"
              xlinkHref="#b9fbe58f-4233-4133-8ccd-044bc9f9f2c1"
            ></radialGradient>
            <linearGradient
              id="a0142166-1f62-46a8-b776-619b511a5b02"
              x1="30.54"
              x2="30.54"
              y1="113.79"
              y2="81.01"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#a43411"></stop>
              <stop offset="1" stopColor="#c73634"></stop>
            </linearGradient>
            <linearGradient
              id="a032c8f4-c0c2-4712-be00-4a5f201c7038"
              x1="750.85"
              x2="752.79"
              y1="47.61"
              y2="47.61"
              xlinkHref="#a070573a-959a-4a29-afcc-12f58cbe4fb1"
            ></linearGradient>
            <linearGradient
              id="a7dd8f79-d586-4131-8950-571ceaa3b5aa"
              x1="706.91"
              x2="708.73"
              y1="47.08"
              y2="47.08"
              xlinkHref="#a070573a-959a-4a29-afcc-12f58cbe4fb1"
            ></linearGradient>
            <linearGradient
              id="bb88d01f-ae96-4a0b-8ff4-a22210d5bddb"
              x1="716.68"
              x2="716.68"
              y1="96.44"
              y2="94.65"
              xlinkHref="#e58c3887-2640-443d-af39-d9b7556eda7f"
            ></linearGradient>
            <linearGradient
              id="a3517b8d-d7a8-4d5a-89d0-96b0ede6eb7b"
              x1="37.64"
              x2="37.64"
              y1="79.95"
              y2="78.16"
              xlinkHref="#e58c3887-2640-443d-af39-d9b7556eda7f"
            ></linearGradient>
            <linearGradient
              id="ba4d1c1a-99bd-4dbb-8294-fa2a230709c1"
              x1="25.34"
              x2="25.34"
              y1="79.81"
              y2="78.02"
              xlinkHref="#e58c3887-2640-443d-af39-d9b7556eda7f"
            ></linearGradient>
            <radialGradient
              id="f365a936-8290-4262-861f-356011ee252e"
              cx="1034.31"
              cy="-170.44"
              r="3.55"
              gradientTransform="rotate(45.26 712.903 -1027.085) scale(1.47)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#003cee"></stop>
              <stop offset="0.06" stopColor="#0036d6"></stop>
              <stop offset="0.2" stopColor="#00289e"></stop>
              <stop offset="0.34" stopColor="#001c6d"></stop>
              <stop offset="0.48" stopColor="#001246"></stop>
              <stop offset="0.62" stopColor="#000a27"></stop>
              <stop offset="0.75" stopColor="#000412"></stop>
              <stop offset="0.88" stopColor="#000104"></stop>
              <stop offset="1"></stop>
            </radialGradient>
            <radialGradient
              id="bd96bca8-79ff-4adb-8c9a-177c6a01adbd"
              cx="1059.12"
              cy="-194.7"
              r="2.84"
              gradientTransform="rotate(-21.18 2046.456 2036.23) scale(1.47)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#ff9a00"></stop>
              <stop offset="0.09" stopColor="#d68100"></stop>
              <stop offset="0.23" stopColor="#9e5f00"></stop>
              <stop offset="0.36" stopColor="#6e4200"></stop>
              <stop offset="0.5" stopColor="#462a00"></stop>
              <stop offset="0.63" stopColor="#271800"></stop>
              <stop offset="0.76" stopColor="#120b00"></stop>
              <stop offset="0.89" stopColor="#040300"></stop>
              <stop offset="1"></stop>
            </radialGradient>
            <radialGradient
              id="e7fb2378-2b10-4ede-8f52-eec633bb3d4f"
              cx="1051.95"
              cy="-218.1"
              r="2.84"
              xlinkHref="#bd96bca8-79ff-4adb-8c9a-177c6a01adbd"
            ></radialGradient>
            <radialGradient
              id="b8971d96-1fcf-4616-9067-90cfaee7348f"
              cx="1031.4"
              cy="-205.67"
              r="1.47"
              xlinkHref="#bd96bca8-79ff-4adb-8c9a-177c6a01adbd"
            ></radialGradient>
            <radialGradient
              id="b398e9fe-292d-4f51-8be7-845b96392190"
              cx="1041.64"
              cy="-167.5"
              r="1.37"
              gradientTransform="rotate(-21.18 2046.456 2036.23) scale(1.47)"
              xlinkHref="#f365a936-8290-4262-861f-356011ee252e"
            ></radialGradient>
            <radialGradient
              id="bb72127b-3c4e-4ed7-9994-661f40bbfa9c"
              cx="1024.77"
              cy="-172.67"
              r="1.37"
              gradientTransform="rotate(-21.18 2046.456 2036.23) scale(1.47)"
              xlinkHref="#f365a936-8290-4262-861f-356011ee252e"
            ></radialGradient>
            {/* //rocket */}
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_368"
              x1="400"
              x2="400"
              y1="400.27"
              y2="0.1"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#c5aeff"></stop>
              <stop offset="0.11" stopColor="#aea4f3"></stop>
              <stop offset="0.34" stopColor="#738ad3"></stop>
              <stop offset="0.6" stopColor="#2c6cae"></stop>
              <stop offset="0.82" stopColor="#2d347d"></stop>
              <stop offset="1" stopColor="#2e0452"></stop>
            </linearGradient>
            <radialGradient
              id="Áåçûìÿííûé_ãðàäèåíò_553"
              cx="-725.59"
              cy="262.47"
              r="17.06"
              gradientTransform="matrix(2.39 0 0 2.37 2210.13 -546.93)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#e5ccff"></stop>
              <stop offset="0.12" stopColor="#e1c9fb"></stop>
              <stop offset="0.25" stopColor="#d6bfee"></stop>
              <stop offset="0.37" stopColor="#c4aeda"></stop>
              <stop offset="0.5" stopColor="#aa97bd"></stop>
              <stop offset="0.63" stopColor="#887998"></stop>
              <stop offset="0.76" stopColor="#5f556a"></stop>
              <stop offset="0.89" stopColor="#2f2a35"></stop>
              <stop offset="1"></stop>
            </radialGradient>
            <radialGradient
              id="Áåçûìÿííûé_ãðàäèåíò_554"
              cx="-725.22"
              cy="261.82"
              r="14.56"
              gradientTransform="matrix(2.39 0 0 2.37 2208.19 -546.78)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#e5ccff"></stop>
              <stop offset="0.22" stopColor="#e3cafc"></stop>
              <stop offset="0.36" stopColor="#dbc3f4"></stop>
              <stop offset="0.47" stopColor="#ceb8e5"></stop>
              <stop offset="0.57" stopColor="#bca7d1"></stop>
              <stop offset="0.66" stopColor="#a492b6"></stop>
              <stop offset="0.75" stopColor="#867896"></stop>
              <stop offset="0.83" stopColor="#63596f"></stop>
              <stop offset="0.91" stopColor="#3b3442"></stop>
              <stop offset="0.98" stopColor="#0e0d10"></stop>
              <stop offset="1"></stop>
            </radialGradient>
            <radialGradient
              id="Áåçûìÿííûé_ãðàäèåíò_596"
              cx="585.83"
              cy="-161.01"
              r="52.09"
              gradientTransform="rotate(-21.45 1123.724 317.435)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.01" stopColor="#c2b1ff"></stop>
              <stop offset="0.25" stopColor="#bfaefd"></stop>
              <stop offset="0.43" stopColor="#b7a5f9"></stop>
              <stop offset="0.58" stopColor="#a995f0"></stop>
              <stop offset="0.73" stopColor="#957ee5"></stop>
              <stop offset="0.87" stopColor="#7b61d6"></stop>
              <stop offset="1" stopColor="#5c3ec4"></stop>
              <stop offset="1" stopColor="#5b3dc3"></stop>
            </radialGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_559"
              x1="607.13"
              x2="607.13"
              y1="-116.59"
              y2="-173.54"
              gradientTransform="rotate(-21.45 1123.724 317.435)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#e8ddff"></stop>
              <stop offset="1" stopColor="#aa8ad8"></stop>
            </linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_559-2"
              x1="588.57"
              x2="588.57"
              y1="-154.03"
              y2="-162.47"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_559"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_559-3"
              x1="587.42"
              x2="587.42"
              y1="-151.59"
              y2="-152.82"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_559"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_559-4"
              x1="603.25"
              x2="603.25"
              y1="-140.58"
              y2="-168.27"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_559"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_559-5"
              x1="622.26"
              x2="622.26"
              y1="-120.37"
              y2="-147.06"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_559"
            ></linearGradient>
            <radialGradient
              id="Áåçûìÿííûé_ãðàäèåíò_612"
              cx="584.15"
              cy="-165.02"
              r="20.79"
              gradientTransform="rotate(-21.45 1123.724 317.435)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#fffaff"></stop>
              <stop offset="1" stopColor="#e0c8f8"></stop>
            </radialGradient>
            <radialGradient
              id="Áåçûìÿííûé_ãðàäèåíò_6"
              cx="-830.38"
              cy="310.74"
              r="31.57"
              gradientTransform="matrix(2.39 0 0 2.37 2498.06 -624.3)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#6a229d"></stop>
              <stop offset="0.16" stopColor="#672199"></stop>
              <stop offset="0.32" stopColor="#5f1e8c"></stop>
              <stop offset="0.48" stopColor="#511a78"></stop>
              <stop offset="0.64" stopColor="#3d145b"></stop>
              <stop offset="0.81" stopColor="#240c36"></stop>
              <stop offset="0.97" stopColor="#060209"></stop>
              <stop offset="1"></stop>
            </radialGradient>
            <radialGradient
              id="Áåçûìÿííûé_ãðàäèåíò_558"
              cx="-829.7"
              cy="309.53"
              r="26.94"
              gradientTransform="matrix(2.39 0 0 2.37 2495.56 -624.6)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#0037a4"></stop>
              <stop offset="0.15" stopColor="#0036a0"></stop>
              <stop offset="0.31" stopColor="#003294"></stop>
              <stop offset="0.47" stopColor="#002b7f"></stop>
              <stop offset="0.63" stopColor="#002163"></stop>
              <stop offset="0.79" stopColor="#00153e"></stop>
              <stop offset="0.95" stopColor="#000611"></stop>
              <stop offset="1"></stop>
            </radialGradient>
            <radialGradient
              id="Áåçûìÿííûé_ãðàäèåíò_223"
              cx="-830.88"
              cy="309.61"
              r="46.01"
              gradientTransform="matrix(2.39 0 0 2.37 2496.52 -622.68)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#0053c2"></stop>
              <stop offset="1"></stop>
            </radialGradient>
            <radialGradient
              id="Áåçûìÿííûé_ãðàäèåíò_207"
              cx="-830.88"
              cy="309.61"
              r="31.37"
              gradientTransform="matrix(2.39 0 0 2.37 2496.52 -622.68)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#0053c2"></stop>
              <stop offset="0.13" stopColor="#004cb1"></stop>
              <stop offset="0.38" stopColor="#003884"></stop>
              <stop offset="0.73" stopColor="#001a3c"></stop>
              <stop offset="1"></stop>
            </radialGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_48"
              x1="317.74"
              x2="317.74"
              y1="133.09"
              y2="17.8"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#4f4cb3"></stop>
              <stop offset="0.37" stopColor="#5250b4"></stop>
              <stop offset="0.76" stopColor="#595db9"></stop>
              <stop offset="1" stopColor="#6069bd"></stop>
            </linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_149"
              x1="324.56"
              x2="324.56"
              y1="107.69"
              y2="58.44"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#c77cbd"></stop>
              <stop offset="1" stopColor="#974577"></stop>
            </linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_221"
              x1="1248.71"
              x2="1248.71"
              y1="361.74"
              y2="56.15"
              gradientTransform="matrix(-1 0 0 1 1718.67 0)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.2" stopColor="#6e8af3"></stop>
              <stop offset="0.29" stopColor="#6c87ef"></stop>
              <stop offset="0.39" stopColor="#677de3"></stop>
              <stop offset="0.49" stopColor="#5e6ccf"></stop>
              <stop offset="0.58" stopColor="#5155b3"></stop>
              <stop offset="0.62" stopColor="#4b49a5"></stop>
              <stop offset="0.68" stopColor="#47449c"></stop>
              <stop offset="0.78" stopColor="#3a3583"></stop>
              <stop offset="0.91" stopColor="#271d5c"></stop>
              <stop offset="1" stopColor="#16093a"></stop>
            </linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_149-2"
              x1="1230.02"
              x2="1230.02"
              y1="356.28"
              y2="140.1"
              gradientTransform="matrix(-1 0 0 1 1718.67 0)"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_149"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_149-3"
              x1="1275.77"
              x2="1275.77"
              y1="358.29"
              y2="56.15"
              gradientTransform="matrix(-1 0 0 1 1718.67 0)"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_149"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_149-4"
              x1="1243.05"
              x2="1243.05"
              y1="188.12"
              y2="85.6"
              gradientTransform="matrix(-1 0 0 1 1718.67 0)"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_149"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_221-2"
              x1="1321.36"
              x2="1321.36"
              y1="364.95"
              y2="33.96"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_221"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_149-5"
              x1="1311.44"
              x2="1311.44"
              y1="341.75"
              y2="67.77"
              gradientTransform="matrix(-1 0 0 1 1718.67 0)"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_149"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_149-6"
              x1="1342.23"
              x2="1342.23"
              y1="204.91"
              y2="33.96"
              gradientTransform="matrix(-1 0 0 1 1718.67 0)"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_149"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_149-7"
              x1="1328.38"
              x2="1328.38"
              y1="363.53"
              y2="235.68"
              gradientTransform="matrix(-1 0 0 1 1718.67 0)"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_149"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_149-8"
              x1="1362.93"
              x2="1362.93"
              y1="363.49"
              y2="54.76"
              gradientTransform="matrix(-1 0 0 1 1718.67 0)"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_149"
            ></linearGradient>
            <linearGradient
              id="linear-gradient"
              x1="398.13"
              x2="489.18"
              y1="20.98"
              y2="393.37"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#6b9ee3"></stop>
              <stop offset="1" stopColor="#867ea8"></stop>
            </linearGradient>
            <linearGradient
              id="linear-gradient-2"
              x1="479.37"
              x2="479.37"
              y1="350.13"
              y2="-109.85"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#628ccc"></stop>
              <stop offset="1" stopColor="#6253a1"></stop>
            </linearGradient>
            <linearGradient
              id="linear-gradient-3"
              x1="534.29"
              x2="367.12"
              y1="116.73"
              y2="301.77"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#9abff1"></stop>
              <stop offset="1" stopColor="#4e4fbd"></stop>
            </linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_202"
              x1="389.92"
              x2="389.92"
              y1="340.72"
              y2="224.67"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.01" stopColor="#5c44ab"></stop>
              <stop offset="1" stopColor="#6583ff"></stop>
            </linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_99"
              x1="332.32"
              x2="332.32"
              y1="347.35"
              y2="152.35"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.01" stopColor="#5c44ab"></stop>
              <stop offset="1" stopColor="#806fb3"></stop>
            </linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_230"
              x1="466.84"
              x2="466.84"
              y1="161.85"
              y2="124.44"
              gradientTransform="rotate(.45 821.267 329.094)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#7c84fe"></stop>
              <stop offset="0.47" stopColor="#7c87fa"></stop>
              <stop offset="0.97" stopColor="#7b91ed"></stop>
              <stop offset="1" stopColor="#7b92ec"></stop>
            </linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_149-9"
              x1="467.04"
              x2="466"
              y1="161.04"
              y2="147.89"
              gradientTransform="rotate(.45 821.267 329.094)"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_149"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_99-2"
              x1="446.03"
              x2="446.03"
              y1="348.6"
              y2="220.66"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_99"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_231"
              x1="539.32"
              x2="539.32"
              y1="368.85"
              y2="129.35"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.01" stopColor="#571e63"></stop>
              <stop offset="1" stopColor="#4c3b8f"></stop>
            </linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_149-10"
              x1="531.56"
              x2="611.57"
              y1="247.61"
              y2="247.61"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_149"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_149-11"
              x1="476.34"
              x2="498.33"
              y1="268.94"
              y2="268.94"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_149"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_149-12"
              x1="491.33"
              x2="546"
              y1="255.92"
              y2="255.92"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_149"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_149-13"
              x1="531.56"
              x2="553.14"
              y1="243.22"
              y2="243.22"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_149"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_149-14"
              x1="572.5"
              x2="590.52"
              y1="206.08"
              y2="206.08"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_149"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_149-15"
              x1="512.94"
              x2="523.52"
              y1="203.09"
              y2="203.09"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_149"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_149-16"
              x1="484.57"
              x2="546"
              y1="313.1"
              y2="313.1"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_149"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_149-17"
              x1="546"
              x2="559.7"
              y1="302.43"
              y2="302.43"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_149"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_149-18"
              x1="497.35"
              x2="521.5"
              y1="317.86"
              y2="317.86"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_149"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_149-19"
              x1="543.75"
              x2="575.16"
              y1="193.18"
              y2="193.18"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_149"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_56"
              x1="690.25"
              x2="690.25"
              y1="400.1"
              y2="0.1"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.01" stopColor="#1b0033"></stop>
              <stop offset="1" stopColor="#340023"></stop>
            </linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_136"
              x1="616.98"
              x2="616.98"
              y1="400.1"
              y2="82.43"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.01" stopColor="#40135b"></stop>
              <stop offset="1" stopColor="#432c81"></stop>
            </linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_128"
              x1="649.34"
              x2="649.34"
              y1="367.85"
              y2="20.43"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.01" stopColor="#3b003d"></stop>
              <stop offset="1" stopColor="#461d54"></stop>
            </linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_149-20"
              x1="658.14"
              x2="658.14"
              y1="390.55"
              y2="137.1"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_149"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_149-21"
              x1="723.93"
              x2="723.93"
              y1="394.54"
              y2="127.1"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_149"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_149-22"
              x1="728.77"
              x2="728.77"
              y1="161.1"
              y2="10.43"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_149"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_149-23"
              x1="782.9"
              x2="782.9"
              y1="396.92"
              y2="0.1"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_149"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_149-24"
              x1="661.19"
              x2="661.19"
              y1="297.64"
              y2="20.43"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_149"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_149-25"
              x1="667.87"
              x2="667.87"
              y1="159.04"
              y2="82.72"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_149"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_149-26"
              x1="636.91"
              x2="636.91"
              y1="196.38"
              y2="82.43"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_149"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_149-27"
              x1="596.8"
              x2="596.8"
              y1="353.85"
              y2="222.2"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_149"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_149-28"
              x1="676.1"
              x2="676.1"
              y1="394.54"
              y2="169.77"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_149"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_149-29"
              x1="637.74"
              x2="637.74"
              y1="367.85"
              y2="184.1"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_149"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_149-30"
              x1="658.41"
              x2="658.41"
              y1="154.43"
              y2="115.79"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_149"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_149-31"
              x1="744.22"
              x2="800"
              y1="259.79"
              y2="259.79"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_149"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_149-32"
              x1="738.21"
              x2="779.53"
              y1="297.48"
              y2="297.48"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_149"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_149-33"
              x1="741.84"
              x2="772.61"
              y1="45.23"
              y2="45.23"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_149"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_149-34"
              x1="743.67"
              x2="782.61"
              y1="92.81"
              y2="92.81"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_149"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_149-35"
              x1="776.8"
              x2="800"
              y1="310.09"
              y2="310.09"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_149"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_149-36"
              x1="765.81"
              x2="790.64"
              y1="69.75"
              y2="69.75"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_149"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_149-37"
              x1="720.63"
              x2="743.01"
              y1="48.25"
              y2="48.25"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_149"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_60"
              x1="166.1"
              x2="166.1"
              y1="400.1"
              y2="0.1"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.01" stopColor="#1b0033"></stop>
              <stop offset="1" stopColor="#410f37"></stop>
            </linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_149-38"
              x1="84.28"
              x2="84.28"
              y1="384.1"
              y2="0"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_149"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_149-39"
              x1="22.56"
              x2="22.56"
              y1="384.1"
              y2="82.43"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_149"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_149-40"
              x1="51.52"
              x2="51.52"
              y1="145.39"
              y2="0.03"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_149"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_149-41"
              x1="138.82"
              x2="138.82"
              y1="376.24"
              y2="0"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_149"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_149-42"
              x1="97.51"
              x2="97.51"
              y1="381.82"
              y2="161.1"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_149"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_149-43"
              x1="202.31"
              x2="202.31"
              y1="372.54"
              y2="14.77"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_149"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_149-44"
              x1="206.83"
              x2="206.83"
              y1="248.18"
              y2="42.6"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_149"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_149-45"
              x1="256.35"
              x2="256.35"
              y1="326.78"
              y2="127.1"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_149"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_149-46"
              x1="99.99"
              x2="99.99"
              y1="378.42"
              y2="290.26"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_149"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_149-47"
              x1="225.44"
              x2="252.13"
              y1="340.49"
              y2="340.49"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_149"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_149-48"
              x1="170.35"
              x2="195.7"
              y1="322.17"
              y2="322.17"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_149"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_149-49"
              x1="143.5"
              x2="143.5"
              y1="189.1"
              y2="57.1"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_149"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_149-50"
              x1="105.49"
              x2="105.49"
              y1="249.43"
              y2="245.87"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_149"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_149-51"
              x1="205.32"
              x2="205.32"
              y1="335.17"
              y2="315"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_149"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_149-52"
              x1="210.23"
              x2="210.23"
              y1="356.72"
              y2="347.35"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_149"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_149-53"
              x1="154.99"
              x2="154.99"
              y1="268.1"
              y2="197.43"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_149"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_135"
              x1="168.55"
              x2="168.55"
              y1="246.27"
              y2="222.2"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#974577"></stop>
              <stop offset="1" stopColor="#c77cbd"></stop>
            </linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_149-54"
              x1="117.77"
              x2="117.77"
              y1="157.57"
              y2="57.1"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_149"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_149-55"
              x1="199.25"
              x2="199.25"
              y1="277.62"
              y2="228.77"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_149"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_149-56"
              x1="64.7"
              x2="64.7"
              y1="38.97"
              y2="3.83"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_149"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_149-57"
              x1="55.75"
              x2="55.75"
              y1="107.34"
              y2="0.1"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_149"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_149-58"
              x1="89.83"
              x2="89.83"
              y1="36.1"
              y2="0"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_149"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_149-59"
              x1="22.56"
              x2="22.56"
              y1="384.1"
              y2="175.77"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_149"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_149-60"
              x1="199.12"
              x2="199.12"
              y1="166.06"
              y2="82.43"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_149"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_149-61"
              x1="228.86"
              x2="228.86"
              y1="248.18"
              y2="192.06"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_149"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_149-62"
              x1="168.74"
              x2="186.1"
              y1="151.77"
              y2="151.77"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_149"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_149-63"
              x1="229.11"
              x2="274"
              y1="332.35"
              y2="332.35"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_149"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_149-64"
              x1="72.96"
              x2="92.56"
              y1="239.77"
              y2="239.77"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_149"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_149-65"
              x1="64.31"
              x2="64.31"
              y1="381.82"
              y2="322.1"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_149"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_149-66"
              x1="31.03"
              x2="31.03"
              y1="382.29"
              y2="319.77"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_149"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_149-67"
              x1="104.94"
              x2="104.94"
              y1="57.1"
              y2="47.71"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_149"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_149-68"
              x1="239.61"
              x2="254.4"
              y1="198.14"
              y2="198.14"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_149"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_231-2"
              x1="295.76"
              x2="295.76"
              y1="351.77"
              y2="161.1"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_231"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_149-69"
              x1="288.11"
              x2="288.11"
              y1="233.27"
              y2="175.85"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_149"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_149-70"
              x1="281.37"
              x2="281.37"
              y1="275.6"
              y2="230.1"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_149"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_149-71"
              x1="313.97"
              x2="313.97"
              y1="350.72"
              y2="198.1"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_149"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_149-72"
              x1="281.24"
              x2="281.24"
              y1="310.1"
              y2="282.15"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_149"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_149-73"
              x1="269.31"
              x2="269.31"
              y1="241.27"
              y2="230.1"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_149"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_149-74"
              x1="285.51"
              x2="291.57"
              y1="200.29"
              y2="200.29"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_149"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_147"
              x1="400"
              x2="400"
              y1="400.1"
              y2="338.74"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.01" stopColor="#2a0036"></stop>
              <stop offset="0.29" stopColor="#2b0239"></stop>
              <stop offset="0.49" stopColor="#2e0842"></stop>
              <stop offset="0.65" stopColor="#341251"></stop>
              <stop offset="0.81" stopColor="#3d2067"></stop>
              <stop offset="0.95" stopColor="#473282"></stop>
              <stop offset="1" stopColor="#4c3b8f"></stop>
            </linearGradient>
            <radialGradient
              id="Áåçûìÿííûé_ãðàäèåíò_198"
              cx="397.25"
              cy="337.5"
              r="120.25"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#599dff"></stop>
              <stop offset="1" stopColor="#632fd9"></stop>
            </radialGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_169"
              x1="286.29"
              x2="286.29"
              y1="400.1"
              y2="342.73"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#fff"></stop>
              <stop offset="1" stopColor="#6d458b"></stop>
            </linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_169-2"
              x1="511.55"
              x2="511.55"
              y1="400.1"
              y2="341.21"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_169"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_169-3"
              x1="541.95"
              x2="541.95"
              y1="400.1"
              y2="355.33"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_169"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_169-4"
              x1="312.42"
              x2="312.42"
              y1="400.1"
              y2="349.43"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_169"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_178"
              x1="251.27"
              x2="251.27"
              y1="400.1"
              y2="381.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#9090a9"></stop>
              <stop offset="1" stopColor="#402f5c"></stop>
            </linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_60-2"
              x1="479.5"
              x2="623"
              y1="389.97"
              y2="389.97"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_60"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_32"
              x1="529.4"
              x2="529.4"
              y1="400.1"
              y2="382.48"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#7c6de7"></stop>
              <stop offset="0.37" stopColor="#7c71e6"></stop>
              <stop offset="0.76" stopColor="#7b7ee1"></stop>
              <stop offset="1" stopColor="#7b8add"></stop>
            </linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_32-2"
              x1="265.57"
              x2="265.57"
              y1="400.1"
              y2="370.6"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_32"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_159"
              x1="499.43"
              x2="645.57"
              y1="373.96"
              y2="373.96"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.01" stopColor="#1b0033"></stop>
              <stop offset="1" stopColor="#180028"></stop>
            </linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_149-75"
              x1="520.67"
              x2="534.15"
              y1="377.9"
              y2="377.9"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_149"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_60-3"
              x1="580.99"
              x2="580.99"
              y1="390.09"
              y2="381.5"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_60"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_128-2"
              x1="460"
              x2="460"
              y1="807.82"
              y2="781.68"
              gradientTransform="matrix(1 0 0 -.86 0 1072.95)"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_128"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_149-76"
              x1="449.34"
              x2="470.66"
              y1="794.75"
              y2="794.75"
              gradientTransform="matrix(1 0 0 -.86 0 1072.95)"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_149"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_149-77"
              x1="458.68"
              x2="468.72"
              y1="803.84"
              y2="803.84"
              gradientTransform="matrix(1 0 0 -.86 0 1072.95)"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_149"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_128-3"
              x1="432.65"
              x2="432.65"
              y1="400.1"
              y2="376.13"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_128"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_149-78"
              x1="435.26"
              x2="435.26"
              y1="400.1"
              y2="376.13"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_149"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_149-79"
              x1="433.3"
              x2="445.18"
              y1="794.19"
              y2="794.19"
              gradientTransform="matrix(1 0 0 -.86 0 1072.95)"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_149"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_158"
              x1="446.48"
              x2="446.48"
              y1="807.82"
              y2="780.57"
              gradientTransform="matrix(1 0 0 -.86 0 1072.95)"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_135"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_128-4"
              x1="399.47"
              x2="399.47"
              y1="807.34"
              y2="797.57"
              gradientTransform="matrix(1 0 0 -.86 0 1072.95)"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_128"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_149-80"
              x1="407.67"
              x2="409.97"
              y1="804.59"
              y2="804.59"
              gradientTransform="matrix(1 0 0 -.86 0 1072.95)"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_149"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_128-5"
              x1="460"
              x2="460"
              y1="376.13"
              y2="349.99"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_128"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_149-81"
              x1="449.34"
              x2="470.66"
              y1="363.06"
              y2="363.06"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_149"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_149-82"
              x1="458.68"
              x2="468.72"
              y1="372.15"
              y2="372.15"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_149"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_128-6"
              x1="432.86"
              x2="432.86"
              y1="376.13"
              y2="314.81"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_128"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_149-83"
              x1="435.47"
              x2="435.47"
              y1="376.13"
              y2="314.81"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_149"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_149-84"
              x1="433.3"
              x2="445.18"
              y1="362.5"
              y2="362.5"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_149"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_158-2"
              x1="446.48"
              x2="446.48"
              y1="376.13"
              y2="348.88"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_135"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_128-7"
              x1="399.47"
              x2="399.47"
              y1="375.65"
              y2="365.88"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_128"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_149-85"
              x1="407.67"
              x2="409.97"
              y1="372.9"
              y2="372.9"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_149"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_32-3"
              x1="293.58"
              x2="293.58"
              y1="-67.32"
              y2="-112.69"
              gradientTransform="rotate(-13.19 793.97 240.362)"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_32"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_149-86"
              x1="234.84"
              x2="234.84"
              y1="47.74"
              y2="33.02"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_149"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_32-4"
              x1="574.3"
              x2="574.3"
              y1="64.87"
              y2="30.24"
              gradientTransform="rotate(-13.19 793.97 240.362)"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_32"
            ></linearGradient>
            <linearGradient
              id="Áåçûìÿííûé_ãðàäèåíò_149-87"
              x1="538.71"
              x2="538.71"
              y1="114.12"
              y2="102.89"
              xlinkHref="#Áåçûìÿííûé_ãðàäèåíò_149"
            ></linearGradient>
          </defs>
          <g style={{ isolation: "isolate" }}>
            <g>
              <path
                fill="url(#Áåçûìÿííûé_ãðàäèåíò_368)"
                fillRule="evenodd"
                d="M800 0.1L800 400.1 416.44 400.1 416.43 400.27 416.4 400.1 0 400.1 0 0.1 800 0.1z"
              ></path>
              <g id="stars">
                <circle cx="452.88" cy="67.17" r="0.79" fill="#09b9ea"></circle>
                <circle
                  cx="437.62"
                  cy="151.79"
                  r="0.79"
                  fill="#09b9ea"
                ></circle>
                <circle
                  cx="550.35"
                  cy="193.82"
                  r="0.79"
                  fill="#09b9ea"
                ></circle>
                <circle
                  cx="572.61"
                  cy="290.22"
                  r="0.79"
                  fill="#09b9ea"
                ></circle>
                <path
                  fill="#0970c0"
                  fillRule="evenodd"
                  d="M501.62 161.61a.79.79 0 11-.79-.78.79.79 0 01.79.78z"
                ></path>
                <circle
                  cx="463.64"
                  cy="143.68"
                  r="0.79"
                  fill="#0970c0"
                ></circle>
                <circle
                  cx="417.45"
                  cy="107.74"
                  r="0.79"
                  fill="#095cc0"
                ></circle>
                <circle cx="369.88" cy="48.91" r="0.79" fill="#095cc0"></circle>
                <circle cx="462.85" cy="22.01" r="0.79" fill="#095cc0"></circle>
                <circle
                  cx="512.85"
                  cy="160.83"
                  r="0.79"
                  fill="#095cc0"
                ></circle>
                <path
                  fill="#095cc0"
                  fillRule="evenodd"
                  d="M520.14 15.45a.79.79 0 11-.78-.79.79.79 0 01.78.79z"
                ></path>
                <path
                  fill="#09ffff"
                  fillRule="evenodd"
                  d="M361.82 343.8a.79.79 0 11-.82-.8.78.78 0 01.82.8z"
                ></path>
                <circle cx="547.54" cy="32.66" r="0.79" fill="#0970c0"></circle>
                <circle
                  cx="540.76"
                  cy="136.96"
                  r="0.79"
                  fill="#0970c0"
                ></circle>
                <circle cx="339.88" cy="99.25" r="0.79" fill="#0970c0"></circle>
                <circle cx="659.8" cy="25.61" r="0.79" fill="#0970c0"></circle>
                <circle
                  cx="381.42"
                  cy="140.41"
                  r="0.79"
                  fill="#0970c0"
                ></circle>
                <circle
                  cx="453.78"
                  cy="353.55"
                  r="0.79"
                  fill="#0970c0"
                ></circle>
                <path
                  fill="#0970c0"
                  fillRule="evenodd"
                  d="M715 15.47a.79.79 0 11-.79-.78.79.79 0 01.79.78z"
                ></path>
                <circle cx="391.72" cy="43.38" r="0.79" fill="#0970c0"></circle>
                <path
                  fill="#0970c0"
                  fillRule="evenodd"
                  d="M545.35 243.9a.79.79 0 11-.78-.79.79.79 0 01.78.79z"
                ></path>
                <circle
                  cx="294.24"
                  cy="135.44"
                  r="0.79"
                  fill="#0970c0"
                ></circle>
                <circle cx="312.09" cy="23.58" r="0.79" fill="#0970c0"></circle>
                <path
                  fill="#0970c0"
                  fillRule="evenodd"
                  d="M480.46 209.17a.79.79 0 11-.78-.78.78.78 0 01.78.78z"
                ></path>
                <path
                  fill="#0970c0"
                  fillRule="evenodd"
                  d="M419 79.06a.79.79 0 11-.79-.79.78.78 0 01.79.79z"
                ></path>
                <circle
                  cx="602.12"
                  cy="266.69"
                  r="0.79"
                  fill="#0970c0"
                ></circle>
                <circle cx="556.67" cy="82.21" r="0.79" fill="#09b9ea"></circle>
                <circle cx="595.24" cy="88.75" r="0.79" fill="#0970c0"></circle>
                <path
                  fill="#0970c0"
                  fillRule="evenodd"
                  d="M505.47 292.64a.79.79 0 01-1.58 0 .79.79 0 011.58 0z"
                ></path>
                <circle
                  cx="357.35"
                  cy="112.27"
                  r="0.79"
                  fill="#09ffff"
                ></circle>
                <path
                  fill="#09ffff"
                  fillRule="evenodd"
                  d="M431.58 121.77a.79.79 0 11-.78-.79.78.78 0 01.78.79z"
                ></path>
                <circle cx="422.91" cy="22.8" r="0.79" fill="#09ffff"></circle>
                <circle cx="290.19" cy="82.19" r="0.79" fill="#09ffff"></circle>
                <path
                  fill="#92ffff"
                  fillRule="evenodd"
                  d="M478.74 236a.79.79 0 11-.78-.79.78.78 0 01.78.79z"
                ></path>
                <circle cx="445.41" cy="51.36" r="0.79" fill="#09ffff"></circle>
                <circle
                  cx="594.45"
                  cy="158.95"
                  r="0.79"
                  fill="#09ffff"
                ></circle>
                <circle
                  cx="434.81"
                  cy="238.59"
                  r="0.79"
                  fill="#09ffff"
                ></circle>
                <circle
                  cx="326.24"
                  cy="245.45"
                  r="0.79"
                  fill="#09ffff"
                ></circle>
                <path
                  fill="#09ffff"
                  fillRule="evenodd"
                  d="M594.45 10.88a.79.79 0 11-.79-.78.79.79 0 01.79.78z"
                ></path>
                <path
                  fill="#09ffff"
                  fillRule="evenodd"
                  d="M541.11 67.15a.79.79 0 11-1.57 0 .79.79 0 111.57 0z"
                ></path>
                <circle
                  cx="513.63"
                  cy="112.27"
                  r="0.79"
                  fill="#09ffff"
                ></circle>
                <circle
                  cx="432.36"
                  cy="112.53"
                  r="0.79"
                  fill="#09ffff"
                ></circle>
                <circle
                  cx="457.66"
                  cy="249.73"
                  r="0.79"
                  fill="#09ffff"
                ></circle>
                <circle
                  cx="435.61"
                  cy="181.81"
                  r="0.79"
                  fill="#09b9ea"
                ></circle>
                <circle
                  cx="386.09"
                  cy="149.61"
                  r="0.79"
                  fill="#0970c0"
                ></circle>
                <circle cx="348.9" cy="131.67" r="0.79" fill="#0970c0"></circle>
                <circle cx="302.71" cy="95.74" r="0.79" fill="#095cc0"></circle>
                <circle cx="255.14" cy="36.91" r="0.79" fill="#095cc0"></circle>
                <path
                  fill="#095cc0"
                  fillRule="evenodd"
                  d="M348.9 10a.79.79 0 11-.79-.79.78.78 0 01.79.79z"
                ></path>
                <circle
                  cx="268.38"
                  cy="214.32"
                  r="0.79"
                  fill="#095cc0"
                ></circle>
                <path
                  fill="#095cc0"
                  fillRule="evenodd"
                  d="M398.89 148.82a.79.79 0 11-1.57 0 .79.79 0 111.57 0z"
                ></path>
                <circle cx="404.62" cy="3.45" r="0.79" fill="#095cc0"></circle>
                <circle cx="225.14" cy="87.25" r="0.79" fill="#0970c0"></circle>
                <circle cx="266.68" cy="128.4" r="0.79" fill="#0970c0"></circle>
                <circle cx="276.98" cy="31.37" r="0.79" fill="#0970c0"></circle>
                <path
                  fill="#0970c0"
                  fillRule="evenodd"
                  d="M273.44 238.52a.79.79 0 01-1.58 0 .79.79 0 011.58 0z"
                ></path>
                <circle cx="179.5" cy="123.44" r="0.79" fill="#0970c0"></circle>
                <circle cx="197.35" cy="11.58" r="0.79" fill="#0970c0"></circle>
                <circle cx="303.49" cy="67.05" r="0.79" fill="#0970c0"></circle>
                <path
                  fill="#09ffff"
                  fillRule="evenodd"
                  d="M243.4 100.27a.79.79 0 11-1.57 0 .79.79 0 111.57 0z"
                ></path>
                <circle cx="308.17" cy="10.79" r="0.79" fill="#09ffff"></circle>
                <circle cx="363.21" cy="224" r="0.79" fill="#92ffff"></circle>
                <circle
                  cx="320.07"
                  cy="226.58"
                  r="0.79"
                  fill="#09ffff"
                ></circle>
                <circle cx="211.5" cy="233.44" r="0.79" fill="#09ffff"></circle>
                <circle cx="425.58" cy="55.15" r="0.79" fill="#09ffff"></circle>
                <circle
                  cx="398.89"
                  cy="100.27"
                  r="0.79"
                  fill="#09ffff"
                ></circle>
                <circle
                  cx="320.16"
                  cy="106.07"
                  r="0.79"
                  fill="#09ffff"
                ></circle>
                <circle
                  cx="342.92"
                  cy="237.73"
                  r="0.79"
                  fill="#09ffff"
                ></circle>
                <path
                  fill="#09ffff"
                  fillRule="evenodd"
                  d="M540.94 234a.79.79 0 11-.79-.78.79.79 0 01.79.78z"
                ></path>
                <path
                  fill="#0970c0"
                  fillRule="evenodd"
                  d="M650.86 134.66a.79.79 0 11-.78-.79.78.78 0 01.78.79z"
                ></path>
                <path
                  fill="#0970c0"
                  fillRule="evenodd"
                  d="M586 99.93a.79.79 0 11-.79-.79.79.79 0 01.79.79z"
                ></path>
                <circle cx="240.8" cy="20.18" r="0.79" fill="#0970c0"></circle>
                <circle
                  cx="529.74"
                  cy="156.68"
                  r="0.79"
                  fill="#0970c0"
                ></circle>
                <circle cx="610.19" cy="183.4" r="0.79" fill="#0970c0"></circle>
                <circle
                  cx="645.66"
                  cy="124.72"
                  r="0.79"
                  fill="#09ffff"
                ></circle>
              </g>
              <g id="stars2">
                <circle cx="452.88" cy="67.17" r="0.79" fill="#09b9ea"></circle>
                <circle
                  cx="437.62"
                  cy="151.79"
                  r="0.79"
                  fill="#09b9ea"
                ></circle>
                <circle
                  cx="550.35"
                  cy="193.82"
                  r="0.79"
                  fill="#09b9ea"
                ></circle>
                <circle
                  cx="572.61"
                  cy="290.22"
                  r="0.79"
                  fill="#09b9ea"
                ></circle>
                <path
                  fill="#0970c0"
                  fillRule="evenodd"
                  d="M501.62 161.61a.79.79 0 11-.79-.78.79.79 0 01.79.78z"
                ></path>
                <circle
                  cx="463.64"
                  cy="143.68"
                  r="0.79"
                  fill="#0970c0"
                ></circle>
                <circle
                  cx="417.45"
                  cy="107.74"
                  r="0.79"
                  fill="#095cc0"
                ></circle>
                <circle cx="369.88" cy="48.91" r="0.79" fill="#095cc0"></circle>
                <circle cx="462.85" cy="22.01" r="0.79" fill="#095cc0"></circle>
                <circle
                  cx="512.85"
                  cy="160.83"
                  r="0.79"
                  fill="#095cc0"
                ></circle>
                <path
                  fill="#095cc0"
                  fillRule="evenodd"
                  d="M520.14 15.45a.79.79 0 11-.78-.79.79.79 0 01.78.79z"
                ></path>
                <path
                  fill="#09ffff"
                  fillRule="evenodd"
                  d="M361.82 343.8a.79.79 0 11-.82-.8.78.78 0 01.82.8z"
                ></path>
                <circle cx="547.54" cy="32.66" r="0.79" fill="#0970c0"></circle>
                <circle
                  cx="540.76"
                  cy="136.96"
                  r="0.79"
                  fill="#0970c0"
                ></circle>
                <circle cx="339.88" cy="99.25" r="0.79" fill="#0970c0"></circle>
                <circle cx="659.8" cy="25.61" r="0.79" fill="#0970c0"></circle>
                <circle
                  cx="381.42"
                  cy="140.41"
                  r="0.79"
                  fill="#0970c0"
                ></circle>
                <circle
                  cx="453.78"
                  cy="353.55"
                  r="0.79"
                  fill="#0970c0"
                ></circle>
                <path
                  fill="#0970c0"
                  fillRule="evenodd"
                  d="M715 15.47a.79.79 0 11-.79-.78.79.79 0 01.79.78z"
                ></path>
                <circle cx="391.72" cy="43.38" r="0.79" fill="#0970c0"></circle>
                <path
                  fill="#0970c0"
                  fillRule="evenodd"
                  d="M545.35 243.9a.79.79 0 11-.78-.79.79.79 0 01.78.79z"
                ></path>
                <circle
                  cx="294.24"
                  cy="135.44"
                  r="0.79"
                  fill="#0970c0"
                ></circle>
                <circle cx="312.09" cy="23.58" r="0.79" fill="#0970c0"></circle>
                <path
                  fill="#0970c0"
                  fillRule="evenodd"
                  d="M480.46 209.17a.79.79 0 11-.78-.78.78.78 0 01.78.78z"
                ></path>
                <path
                  fill="#0970c0"
                  fillRule="evenodd"
                  d="M419 79.06a.79.79 0 11-.79-.79.78.78 0 01.79.79z"
                ></path>
                <circle
                  cx="602.12"
                  cy="266.69"
                  r="0.79"
                  fill="#0970c0"
                ></circle>
                <circle cx="556.67" cy="82.21" r="0.79" fill="#09b9ea"></circle>
                <circle cx="595.24" cy="88.75" r="0.79" fill="#0970c0"></circle>
                <path
                  fill="#0970c0"
                  fillRule="evenodd"
                  d="M505.47 292.64a.79.79 0 01-1.58 0 .79.79 0 011.58 0z"
                ></path>
                <circle
                  cx="357.35"
                  cy="112.27"
                  r="0.79"
                  fill="#09ffff"
                ></circle>
                <path
                  fill="#09ffff"
                  fillRule="evenodd"
                  d="M431.58 121.77a.79.79 0 11-.78-.79.78.78 0 01.78.79z"
                ></path>
                <circle cx="422.91" cy="22.8" r="0.79" fill="#09ffff"></circle>
                <circle cx="290.19" cy="82.19" r="0.79" fill="#09ffff"></circle>
                <path
                  fill="#92ffff"
                  fillRule="evenodd"
                  d="M478.74 236a.79.79 0 11-.78-.79.78.78 0 01.78.79z"
                ></path>
                <circle cx="445.41" cy="51.36" r="0.79" fill="#09ffff"></circle>
                <circle
                  cx="594.45"
                  cy="158.95"
                  r="0.79"
                  fill="#09ffff"
                ></circle>
                <circle
                  cx="434.81"
                  cy="238.59"
                  r="0.79"
                  fill="#09ffff"
                ></circle>
                <circle
                  cx="326.24"
                  cy="245.45"
                  r="0.79"
                  fill="#09ffff"
                ></circle>
                <path
                  fill="#09ffff"
                  fillRule="evenodd"
                  d="M594.45 10.88a.79.79 0 11-.79-.78.79.79 0 01.79.78z"
                ></path>
                <path
                  fill="#09ffff"
                  fillRule="evenodd"
                  d="M541.11 67.15a.79.79 0 11-1.57 0 .79.79 0 111.57 0z"
                ></path>
                <circle
                  cx="513.63"
                  cy="112.27"
                  r="0.79"
                  fill="#09ffff"
                ></circle>
                <circle
                  cx="432.36"
                  cy="112.53"
                  r="0.79"
                  fill="#09ffff"
                ></circle>
                <circle
                  cx="457.66"
                  cy="249.73"
                  r="0.79"
                  fill="#09ffff"
                ></circle>
                <circle
                  cx="435.61"
                  cy="181.81"
                  r="0.79"
                  fill="#09b9ea"
                ></circle>
                <circle
                  cx="386.09"
                  cy="149.61"
                  r="0.79"
                  fill="#0970c0"
                ></circle>
                <circle cx="348.9" cy="131.67" r="0.79" fill="#0970c0"></circle>
                <circle cx="302.71" cy="95.74" r="0.79" fill="#095cc0"></circle>
                <circle cx="255.14" cy="36.91" r="0.79" fill="#095cc0"></circle>
                <path
                  fill="#095cc0"
                  fillRule="evenodd"
                  d="M348.9 10a.79.79 0 11-.79-.79.78.78 0 01.79.79z"
                ></path>
                <circle
                  cx="268.38"
                  cy="214.32"
                  r="0.79"
                  fill="#095cc0"
                ></circle>
                <path
                  fill="#095cc0"
                  fillRule="evenodd"
                  d="M398.89 148.82a.79.79 0 11-1.57 0 .79.79 0 111.57 0z"
                ></path>
                <circle cx="404.62" cy="3.45" r="0.79" fill="#095cc0"></circle>
                <circle cx="225.14" cy="87.25" r="0.79" fill="#0970c0"></circle>
                <circle cx="266.68" cy="128.4" r="0.79" fill="#0970c0"></circle>
                <circle cx="276.98" cy="31.37" r="0.79" fill="#0970c0"></circle>
                <path
                  fill="#0970c0"
                  fillRule="evenodd"
                  d="M273.44 238.52a.79.79 0 01-1.58 0 .79.79 0 011.58 0z"
                ></path>
                <circle cx="179.5" cy="123.44" r="0.79" fill="#0970c0"></circle>
                <circle cx="197.35" cy="11.58" r="0.79" fill="#0970c0"></circle>
                <circle cx="303.49" cy="67.05" r="0.79" fill="#0970c0"></circle>
                <path
                  fill="#09ffff"
                  fillRule="evenodd"
                  d="M243.4 100.27a.79.79 0 11-1.57 0 .79.79 0 111.57 0z"
                ></path>
                <circle cx="308.17" cy="10.79" r="0.79" fill="#09ffff"></circle>
                <circle cx="363.21" cy="224" r="0.79" fill="#92ffff"></circle>
                <circle
                  cx="320.07"
                  cy="226.58"
                  r="0.79"
                  fill="#09ffff"
                ></circle>
                <circle cx="211.5" cy="233.44" r="0.79" fill="#09ffff"></circle>
                <circle cx="425.58" cy="55.15" r="0.79" fill="#09ffff"></circle>
                <circle
                  cx="398.89"
                  cy="100.27"
                  r="0.79"
                  fill="#09ffff"
                ></circle>
                <circle
                  cx="320.16"
                  cy="106.07"
                  r="0.79"
                  fill="#09ffff"
                ></circle>
                <circle
                  cx="342.92"
                  cy="237.73"
                  r="0.79"
                  fill="#09ffff"
                ></circle>
                <path
                  fill="#09ffff"
                  fillRule="evenodd"
                  d="M540.94 234a.79.79 0 11-.79-.78.79.79 0 01.79.78z"
                ></path>
                <path
                  fill="#0970c0"
                  fillRule="evenodd"
                  d="M650.86 134.66a.79.79 0 11-.78-.79.78.78 0 01.78.79z"
                ></path>
                <path
                  fill="#0970c0"
                  fillRule="evenodd"
                  d="M586 99.93a.79.79 0 11-.79-.79.79.79 0 01.79.79z"
                ></path>
                <circle cx="240.8" cy="20.18" r="0.79" fill="#0970c0"></circle>
                <circle
                  cx="529.74"
                  cy="156.68"
                  r="0.79"
                  fill="#0970c0"
                ></circle>
                <circle cx="610.19" cy="183.4" r="0.79" fill="#0970c0"></circle>
                <circle
                  cx="645.66"
                  cy="124.72"
                  r="0.79"
                  fill="#09ffff"
                ></circle>
              </g>
              <g id="purpl-moon">
                <ellipse
                  cx="473.06"
                  cy="76.15"
                  rx="40.85"
                  ry="40.5"
                  transform="rotate(-66.45 473.076 76.152)"
                  style={{ mixBlendMode: "screen" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_553)"
                ></ellipse>
                <ellipse
                  cx="471.98"
                  cy="74.73"
                  rx="34.85"
                  ry="34.55"
                  transform="rotate(-66.45 472.002 74.728)"
                  style={{ mixBlendMode: "screen" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_554)"
                ></ellipse>
                <path
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_596)"
                  fillRule="evenodd"
                  d="M502.52 63.75c.12.3.24.61.35.91a32 32 0 011.87 9.34 32.53 32.53 0 01-8.66 23.71 32.45 32.45 0 01-47.13.37c-.45-.47-.9-1-1.33-1.47a32.44 32.44 0 0110-49.88c.73-.38 1.47-.72 2.24-1l.62-.26a32.37 32.37 0 016.88-1.86 30 30 0 014.32-.39 32.6 32.6 0 0119.82 6.27 32.19 32.19 0 0111.02 14.26z"
                ></path>
                <path
                  d="M491.5 49.44l-.24-.08a7.2 7.2 0 00-1.39-.23c-.39 0-.76.1-1.11.11a7.89 7.89 0 01-1.87-.21c-.75-.15-1.47-.11-2.22-.24-1.95-.36-3.56-1.77-5.17-2.84a8.93 8.93 0 01-1-.7 2.48 2.48 0 00-.77-.41 3.26 3.26 0 00-2-.32c-.4.1-.64.45-1 .75s-.56.54-.1.88c.8.58 1.88 1.1 1.48 2.31a16.22 16.22 0 01-.79 2.25c-.39.8-.61 1.87-1.4 2.42-.58.41-1.39.17-2.07.18a7 7 0 00-1.83.1 6 6 0 00-1.18.67 1.63 1.63 0 01-2 0c-.22-.19-.17-.29-.49-.37a2.77 2.77 0 00-1 .05c-.86.14-1.68.54-2.54.66a15.06 15.06 0 01-1.78 0 9.43 9.43 0 01-1.14.1c-.2 0-.44-.15-.66-.2a2.3 2.3 0 00-1.65.11 10.74 10.74 0 00-3.47 2.57c-.57.65-.41 1.06.09 1.64s1.22 1 1.32 1.71a12.63 12.63 0 01-.15 1.73 2 2 0 00.44 1.49 26.18 26.18 0 002.49 1.65c.86.68 1.73 2.07 1 3.1a4.68 4.68 0 00-.56 1.65c-.09.4-.11 1-.63 1-.33 0-.75-.26-1.09-.24a1.15 1.15 0 00-.85.58 6.88 6.88 0 00-1 1.49 3.37 3.37 0 001 3.12 5 5 0 002.91 1.76c.78.06 1.6-.26 2.27.31a5.16 5.16 0 01.79 1.25 10.7 10.7 0 01.86 1.26 7.93 7.93 0 00.76 1.24 17 17 0 001.3 1.64 11.46 11.46 0 002 1.28 14.92 14.92 0 001.8.76 7.92 7.92 0 012 1c.43.39.82.83 1.27 1.21 1.27 1 2.27-.38 3-1.37a9.21 9.21 0 001.22-2.1 9.77 9.77 0 01.8-1.81 12.24 12.24 0 011.1-1.63 2.12 2.12 0 00.47-.61 1.78 1.78 0 00-.06-1.26 13.12 13.12 0 00-1.18-2.85c-.59-.86-1.6-.35-2.35-.08a1.37 1.37 0 01-1.36 0c-.34-.29-.43-.73-.83-1a1.08 1.08 0 00-1.34 0c-.19.12-.3.29-.51.41s-.43.07-.53.32c-.22.51.58.77.93 1 .61.36.7.46.63 1.18 0 .41-.13 1.06-.65 1s-.88-.61-1.18-.78c-1.28-.73-2.57-1.46-2.14-3.18.13-.54.43-.62.7-1s.25-1 .58-1.48 1.36-.73 2-1a12.82 12.82 0 012.47-.7 4.06 4.06 0 011.52.08c.54.09 1-.29 1.48-.38a3.91 3.91 0 012.41.76 4.12 4.12 0 011.69 1.59 22.24 22.24 0 012.7 4.74 21 21 0 001.91 4.3 12.72 12.72 0 001.39 1.7c.17.17.22.07.27.36a3.32 3.32 0 01-.07.94 9.49 9.49 0 01-.77 1.48 8.78 8.78 0 01-.82 1.2c-.4.59-.82 1.12-1.23 1.68-.67.92-.19 2.1-.68 3.14-.7 1.47-1.9 2.16-3.08 3.21A31.86 31.86 0 00477.8 98c-.52.59-.85 1.22-1.43 1.77a23.08 23.08 0 01-2.43 1.76 6.45 6.45 0 01-2.11 1.06 12.78 12.78 0 00-1.43.33c-.9.36-1.81.73-2.72 1.07a4.48 4.48 0 01-1.51.12h-1.59c-1.39 0-3.19.46-4.44-.31-.36-.23-.68-.55-1.06-.75a6.75 6.75 0 00-1-.29 5.88 5.88 0 00-.79-.23 4.67 4.67 0 01-1.17-.46 3.84 3.84 0 00-1.1-.31 3.23 3.23 0 01-.71-.07c-.22-.11-.17-.24-.29-.45a6.75 6.75 0 00-.47-.59 3 3 0 00-1.84-1.35 4.58 4.58 0 01-1.1-.17A3.1 3.1 0 01449 98v.06a32.41 32.41 0 0020.2 9.8c.17-.17.35-.34.51-.52a4.15 4.15 0 011.73-1 14.78 14.78 0 002.51-1.27 13.58 13.58 0 012.25-1c1-.37 1.84-1 2.83-1.34a15.08 15.08 0 012.89-.57 10.26 10.26 0 003.83-1.89c.54-.35.95-.88 1.5-1.2.34-.19.69-.3 1-.52a10.44 10.44 0 012.75-1.29c.63-.15 1.06.22 1.61.34s1.12-.37 1.66-.51a1.94 1.94 0 011.77.61 32.53 32.53 0 008.7-23.7c-.84.34-1.83 1.52-2.33 1.67-.3.09-.62 0-.94.14a4.63 4.63 0 00-.76.48c-.4.26-.91.57-1.3.25s-.29-1.27-1-1.12c-.34.08-.54.44-.93.52a3.88 3.88 0 00-.89.23 9.38 9.38 0 00-1.39.78 1.66 1.66 0 01-.73.16 4.9 4.9 0 01-.78.19c-.7-.08-.43-.87-.33-1.31a5.93 5.93 0 00.16-.73c0-.28-.07-.37-.12-.63a2.76 2.76 0 01.42-1.82 9.9 9.9 0 001.07-2.64 2.26 2.26 0 00.12-1.08c-.06-.31-.11-.61-.16-.92a6.32 6.32 0 01-.09-1.06c0-.5-.19-1-.22-1.47a3.47 3.47 0 01.36-1.71c.13-.16.35-.22.47-.41s.07-.38.24-.54c.39-.37 1.42-.31 1.9-.32a5.92 5.92 0 012.27.44 11.9 11.9 0 011.92 1.15 2.69 2.69 0 001.14.42c-.11-.3-.23-.61-.35-.91a32.19 32.19 0 00-10.99-14.32zm-10.07 20.11c0 .23-.36.5-.56.55-.41.09-.88-.24-1.27-.36a1.64 1.64 0 01-1-.77l.36.08c-.44-.28-1-.48-.9-1.13a.6.6 0 01.71-.47 3.74 3.74 0 011.68.33 1.52 1.52 0 01.59.9 4.06 4.06 0 01.39.87zM481.08 50a1.75 1.75 0 01-.58 1 3.44 3.44 0 01-.91.58 3.29 3.29 0 01-2.07-.21c-.36-.1-1.2-.5-.24-.56a1.7 1.7 0 01-.46-.62 3.7 3.7 0 01-.1-.58c-.06-.43 0-.84 0-1.26a5.14 5.14 0 00-.16-1c-.08-.28-.26-.49-.09-.78a.36.36 0 01.43-.19 3 3 0 01.64.34c.21.11.42.22.63.35.61.34 1.06.91 1.64 1.3a3.64 3.64 0 01.87.66 1.33 1.33 0 01.4.97zm17.4 10.43c-.1.66-.84 1.13-1.37 1.43a8 8 0 01-2.79.69 2.19 2.19 0 01-1-.07c-.38-.11-.82-.09-.29-.22a15.14 15.14 0 01-.9-1.25c-.35-.55-.83-1-1.23-1.53a6.57 6.57 0 01-1.6-3 2.4 2.4 0 01.73-2.09 2.93 2.93 0 011.52-.6 5.18 5.18 0 011.9.37 3.5 3.5 0 011.59 1c.28.36.48.78.79 1.12.16.17.31.33.45.51a2.62 2.62 0 00.67.52c.35.25.66.4.83.81s.3.76.45 1.14a2 2 0 01.25 1.12z"
                  style={{ mixBlendMode: "multiply" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_559)"
                  fillRule="evenodd"
                  opacity="0.3"
                ></path>
                <path
                  d="M454.15 72.69c0 .32 0 1-.26 1.31s-.87.09-1.2 0a4.7 4.7 0 00-.84-.1c-.23 0-.45.09-.69.08a2.28 2.28 0 01-.64-.13c-.18-.09-.26-.25-.4-.4a10.9 10.9 0 01-.8-1.27 1.56 1.56 0 01-.23-.8c0-.4-.11-.8-.14-1.2a8 8 0 010-1.76 2.22 2.22 0 01.71-1.26c.16-.15.35-.25.5-.41a3.92 3.92 0 01.6-.55 1.43 1.43 0 01.42-.19h.49a1.13 1.13 0 01.62.16 1.55 1.55 0 01.47.41 12.66 12.66 0 01.83 1 2.43 2.43 0 01.49 1.47 9.45 9.45 0 00.17 1.49 3.78 3.78 0 01.09 1.42 5.73 5.73 0 00-.19.73z"
                  style={{ mixBlendMode: "multiply" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_559-2)"
                  fillRule="evenodd"
                  opacity="0.3"
                ></path>
                <path
                  d="M452.42 75.93a1.06 1.06 0 00-.11.6c.3 0 .47.5.82.44.09-.26.44-.64.11-.89h-.23c-.06 0-.13-.13-.22-.14a2.56 2.56 0 00-.72.28z"
                  style={{ mixBlendMode: "multiply" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_559-3)"
                  fillRule="evenodd"
                  opacity="0.3"
                ></path>
                <path
                  d="M459.64 75.88a1.7 1.7 0 00.63.42c.22.08.48.15.7.22a8.28 8.28 0 011.3.44c.37.2.39.5.56.83s.25.39.37.58a2.11 2.11 0 01.21.31 2.13 2.13 0 00.18.41c.19.26.48.4.66.66a1.81 1.81 0 00.46.57 1.66 1.66 0 00.54.14 2.49 2.49 0 01.63.32c.69.44 1 1.18 1.67 1.66s1.47-.1 2.07-.21h.3a1 1 0 00.25-.26 1.07 1.07 0 01.52-.26c.12 0 .09.09.24 0s.14-.28.16-.38a.94.94 0 00-.26-.79l-.57-.77c-.18-.23-.41-.42-.57-.67s-.2-.55-.35-.8a2.62 2.62 0 00-1.51-1.05c-.58-.24-1.39-.33-1.62-1-.09-.28 0-.33.09-.58a3 3 0 01.16-.83 2.75 2.75 0 01.39-.37 6.55 6.55 0 00.56-.49c.19-.21.11-.39.2-.62s.08-.08.17-.2a.8.8 0 00.21-.37 2.58 2.58 0 00.21-.86 1.8 1.8 0 01.13-.72 6.27 6.27 0 01.43-.86 2.07 2.07 0 01.7-.71 3.47 3.47 0 01.45-.17 3.62 3.62 0 001.09-.97c.48-.48 1.09-1.52 1.9-1.11.24.13.35.4.63.48.58.18 1-.32 1.4-.68a7.5 7.5 0 001.42-2.19 1.84 1.84 0 00.27-1.49c-.37-1.08-1.51-1.46-2.06-2.41a11.62 11.62 0 01-.72-3.16 2.46 2.46 0 00-.87-1.44 2.18 2.18 0 00-.58-.26c-.43-.1-.61.11-1 .2a1 1 0 01-.62-.1c-.61-.2-1.38.34-1.93.55a5.44 5.44 0 01-2.57.43 25 25 0 01-3-.57 15.12 15.12 0 00-2.22-.48 3.83 3.83 0 00-1.56.26 2.15 2.15 0 00-1.49 1.39c-.23.68.11.87.52 1.36.13.16.43.47.39.71s-.63.49-.91.6-.82.2-.84.55a3.28 3.28 0 00.37 1c.09.23.13.52.36.64s.36 0 .55.05.49.26.75.44a2.82 2.82 0 00.63.24 3.57 3.57 0 00.81.34c.48.05.84-.22 1.33 0a2.53 2.53 0 00.51.22 2.24 2.24 0 00.45 0c.36 0 .9 0 1.09.37s-.23.84-.5 1-.66.37-.62.72.3.48.22.8c-.23 1-1.58.81-2.33 1.13-1.13.48-1.36 1.68-1.61 2.74 0 .1-.1.19-.12.29s0 .24 0 .41a.9.9 0 01-.31.56 1.58 1.58 0 01-.58.48c-.29.13-.63.2-.91.35a1 1 0 00-.14 1.51c.23.29.74.39 1 .63a4.64 4.64 0 00.69.57c.15.08.34.12.49.19s.47.27.35.06z"
                  style={{ mixBlendMode: "multiply" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_559-4)"
                  fillRule="evenodd"
                  opacity="0.3"
                ></path>
                <path
                  d="M482.38 70.84a3 3 0 00.24.86 7.62 7.62 0 01.38.69c.27.66.42 1.38.67 2a6.55 6.55 0 00.61 1 9.87 9.87 0 01.49 1.48A3.29 3.29 0 00486 78.7a.84.84 0 00.77.11c.27-.08.43-.31.71-.4a1.7 1.7 0 01.67 0h.92a1.65 1.65 0 01.72.17c.22.09.49.08.65.3s-.05.49-.13.73a3.24 3.24 0 01-.67 1.32.83.83 0 01-.68.31.86.86 0 00-.77.29 2.89 2.89 0 00-.52 1.24 1.69 1.69 0 000 .32c.06.2 0 .06.16.17s.3.18.38.38a2.65 2.65 0 01.09 1.08 1.77 1.77 0 01-.2.64 6.16 6.16 0 01-.34.68 12.29 12.29 0 01-.78 1.29 11.64 11.64 0 00-1.07 1.53 9 9 0 00-1.7 3.4 1.5 1.5 0 00.32 1.18 3.85 3.85 0 00.47.19 2.1 2.1 0 01.57.54 2.18 2.18 0 00.81.67 2.07 2.07 0 001.07-.09 4.4 4.4 0 01.51-.18 2.85 2.85 0 00.39-.06 2.75 2.75 0 011.5-.25 1.56 1.56 0 01.53.22 6 6 0 00.6.43c.43.17 1-.37 1.24-.62a3.09 3.09 0 011.34-1 5.56 5.56 0 011 .07 5 5 0 011.28.07.75.75 0 00.49 0 3.44 3.44 0 001.42-1.23c.47-.56.84-1.18 1.3-1.74a7.84 7.84 0 001.13-1.86 16.57 16.57 0 011.09-1.8c.27-.45.53-.92.8-1.39a11.21 11.21 0 00.63-1.41 7.07 7.07 0 00.44-1.19c.1-.47.16-1 .3-1.43a7.1 7.1 0 00.33-1.45c.06-.47.1-1.36-.58-1.45a3.62 3.62 0 00-1.48.47 2.52 2.52 0 01-2-.31c-.51-.27-1-.62-1.5-.85a2.32 2.32 0 00-.9-.32 1.74 1.74 0 00-.69.28 4 4 0 01-1.44.6 3.09 3.09 0 01-1.57 0c-.28-.12-.54-.34-.81-.49a1.65 1.65 0 01-.54-1.33c0-.92-.28-1.82-.25-2.75 0-.58.74-.7 1.07-1.11a3.37 3.37 0 00.45-1 7.07 7.07 0 01.56-.9 1.74 1.74 0 00-.7-2.61 1.65 1.65 0 00-1.84.14 7.81 7.81 0 00-.71.58 4.24 4.24 0 01-.84.8c-1.35.8-2.88.48-4.32.27a5.54 5.54 0 00-2.07 0c-.37.08-.47.08-.72.4a5.27 5.27 0 01-.55.51c-.26.14-.34.47.04-.02z"
                  style={{ mixBlendMode: "multiply" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_559-5)"
                  fillRule="evenodd"
                  opacity="0.3"
                ></path>
                <path
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_612)"
                  fillRule="evenodd"
                  d="M467.36 43.56l-.13.08a8.74 8.74 0 01-1.86.93 2.47 2.47 0 01-.49.19h-.32c-.28.06-.56.13-.83.16a6.26 6.26 0 00-1.46.53c-.57.23-1.26.19-1.8.47a15.15 15.15 0 01-1.7 1l-.43.17c-.37.16-.45.43-.78.76a2.32 2.32 0 010 1 1.09 1.09 0 01-.22.26 7.31 7.31 0 01-.64.6 8.18 8.18 0 01-1.43.9 10.52 10.52 0 01-1.32.4 4.92 4.92 0 00-2.4 1.14c-.36.37-.72.77-1.09 1.15a4.71 4.71 0 00-.65.69c-.13.19-.21.42-.33.61s-.41.36-.61.55a1.55 1.55 0 00-.44.8c-.12.43.08.81 0 1.22a1.39 1.39 0 01-.36.59c-.67.85-.59 1.88-1 2.85-.28.7-.93 1.18-1.26 1.88a18.06 18.06 0 00-.81 2.16 2.25 2.25 0 01-.72 1 3.84 3.84 0 00-.85 1.26 14.36 14.36 0 01-.55 1.42c-.17.37-.46.66-.62 1a5.73 5.73 0 00-.21 1.08c-.16.8-.1 1.6-.23 2.4s-.48 1.37-.26 2a1.55 1.55 0 00.3.55 5 5 0 01.39 1 2.24 2.24 0 00.32.44 5 5 0 00.42.6 7.66 7.66 0 001 .61 1.35 1.35 0 01.54 1.1v1.38a14.12 14.12 0 00-.22 2.14 1.81 1.81 0 00.36.67c.16.26.33.56.46.83a2.42 2.42 0 01.25.91 2.39 2.39 0 01-.08.64c0 .1-.1.19-.13.29a3.25 3.25 0 000 .54 1.52 1.52 0 01-.14.76c-.29.31-.69-.34-.83 0s.16.54.22.74a2.89 2.89 0 01.07.88c0 .56-.18.76.16 1.22a4.24 4.24 0 00.94 1c.44.35.52.83.82 1.26a4.06 4.06 0 01.33.77 4.53 4.53 0 00.45.63 1.28 1.28 0 01.24.63c0 .14-.13.27-.18.39a1.35 1.35 0 000 .72 3.84 3.84 0 00.27 1.06 32.44 32.44 0 0110-49.88c.73-.38 1.47-.72 2.24-1l.62-.26a32.37 32.37 0 016.98-1.87z"
                ></path>
              </g>
              <g id="white-moon">
                <ellipse
                  cx="510.04"
                  cy="113.32"
                  rx="75.59"
                  ry="74.95"
                  transform="rotate(-45 510.037 113.316)"
                  style={{ mixBlendMode: "screen" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_6)"
                ></ellipse>
                <ellipse
                  cx="509.15"
                  cy="110.14"
                  rx="64.49"
                  ry="63.94"
                  transform="rotate(-45 509.144 110.146)"
                  style={{ mixBlendMode: "screen" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_558)"
                ></ellipse>
                <path
                  fill="#fff"
                  fillRule="evenodd"
                  d="M558.15 110.76a48.55 48.55 0 11-97.09 0 50.93 50.93 0 01.28-5.27 48.55 48.55 0 0196.81 5.27z"
                ></path>
                <g fill="#635eb0" fillRule="evenodd" opacity="0.2">
                  <path d="M497.34 143.58a11.59 11.59 0 002.06 3.52 6.41 6.41 0 003.47 1.82 5.06 5.06 0 002.12.53 11.15 11.15 0 012.38 0c1.54.34 2.36 1.71 4.08 1.8a10.59 10.59 0 004.12-.89c1.34-.4 2.9-1 4.13-1.46s2.57-.87 4-1.32 2.28-1.48 4.16-1c.12.7-.05 1.81.81 2.16.59.24 1.57-.38 2.21-.62 1.64-.64 3.13-1 4.7-1.64a7.45 7.45 0 002.07-.87c.74-.54 1.53-.95 2.3-1.47 1.42-.95 2.81-2 4.23-2.94a21.86 21.86 0 006.11-7.06 21.5 21.5 0 001.91-4.57c.67-2 .45-2.54-.88-4.16-2.37 1-3.32-.48-2.66-3a17.64 17.64 0 00.33-7.52c-.09-.41-.41-.7-.47-1.29a11.83 11.83 0 00-.12-1.78 10.27 10.27 0 01-.46-2.94 13.88 13.88 0 00-.13-3.53 7.37 7.37 0 01-.47-1.76 9.12 9.12 0 00-.12-2.22c-.56-2-2.36-2.51-4-3.07-1.11-.39-1.66-.76-2.37 0s-.56 1.9-.57 2.94c0 2 1.25 3.7 2.35 5.3.49.71 1.35 1.39 1.22 2.37-.07.53-.73.61-.69 1.16s.75.85 1.1 1.3c2.81 3.67-2.48 6.89-5 8.84-1.43 1.11-3.59 1.67-4.14 3.52s.77 3.61 1.48 5.29 1.4 4.84.31 6.49a5 5 0 01-2.07 1.46 14.89 14.89 0 00-2.34 1.78 7.79 7.79 0 01-5.16 1.32 5.51 5.51 0 01-2.94-1.19 10.53 10.53 0 00-2.48-1.63 10.1 10.1 0 00-1.65-.12c-.83-.1-1-.44-1.72-.63-1.25-.32-2.14.56-3.12 1.06a4.17 4.17 0 01-2.82.76c-1-.25-2.1-.88-3-1.07-2.24-.47-5.88-.63-7.67.9-.91.77-1.23 1.84-2 2.65s-2.36.97-2.6 2.78z"></path>
                  <path d="M542 92.42c-2.15 0-4.13-1.58-5.89-2.8a11.1 11.1 0 01-3.66-4.12 12 12 0 01-.44-1.32c0-.1-.56-1.5-.56-1.54a4.22 4.22 0 011.29-2.42c1.76-1.81 4.44-.51 6.19.58a29 29 0 014.68 3.53 11.22 11.22 0 012.08 2c.63 1.07.45 2.38.43 3.68 0 2 2.58 4.28-.57 4.72-1.24.17-5-.87-5.31-2.36z"></path>
                  <path d="M503.22 155.34c-.53.59-1.16.18-1.77 0a5.28 5.28 0 00-1.76-.29 14.42 14.42 0 01-3.67-.29c-1.16-.29-2.27-.46-3.38-.74-.44-.11-.87-.36-1.31-.45-.28-.06-.59 0-.87 0-.13 0-.15-.19-.24-.21s-.44 0-.67-.05a27.8 27.8 0 01-3.15-.83 5.15 5.15 0 01-1.33-.42c-.46-.28-1.07-.58-1.48-.89a37.84 37.84 0 01-4.77-3.61c-1.36-1.36-2.77-2.62-4.2-3.89-.33-.3-.6-.69-.94-1a8.49 8.49 0 01-1.11-.81 17.16 17.16 0 01-1.91-2.43c-1.16-1.67-2.65-3-3.56-4.88-.45-.89-.84-1.75-1.37-2.6a12.27 12.27 0 01-.88-1.78c-.18-.44-.54-1-.67-1.38-.18-.63-.17-1.24-.35-1.85-.07-.27-.25-.45-.32-.72s.1-.72 0-1-.25-.43-.32-.71.1-.72 0-1.06-.26-.42-.32-.7.12-.83 0-1.21-.26-.41-.32-.71a5.17 5.17 0 010-1c0-.76-.26-1.34-.3-2.06a9.62 9.62 0 010-2.21c.07-.3.26-.43.32-.71s-.09-.78 0-1.17c.79-.21.54 1.48.54 1.89 0 .76.31 1.17.29 1.91 0 .91.36 1 .9 1.7a5.34 5.34 0 01.88 1.22c.08.25.07.66.13.9a2.94 2.94 0 01.15.88c0 .72 0 1.08.51 1.55a4.54 4.54 0 001.53.82c.67.15 1.25.14 1.94.27.31 0 .42.25.71.32s.77-.15 1.13 0a2.55 2.55 0 01.87 1.19 2.12 2.12 0 01-.22 1.69c-.11.2-.18.4-.3.59s-.41.43-.53.65c-.55 1 .25 2.67.47 3.53.08.34.59 1.35.31 1.66s-1.94 0-2.26-.14c-.18.37.17 1.08.28 1.48a6.66 6.66 0 00.62 1.57 6.48 6.48 0 002.4 2.16c.6.32 1 .48 1.07-.32.05-.36-.05-.56.13-.9s.37-.27.47-.56-.11-.73 0-1.05.23-.4.28-.61c.16-.69-.1-1.47 0-2.18a2.94 2.94 0 012.52-2.35 21.39 21.39 0 003.66-1.18 5.85 5.85 0 014.13-.36 18 18 0 013 1.58 11.11 11.11 0 001.37.54c.53.21 1.09.41 1.63.57a12.75 12.75 0 013 1 9.1 9.1 0 012.58 2 4.1 4.1 0 01.7 3.37c-.31.74-1.43 1.38-2 2-.9 1.06-.66 1.77 0 2.86a6.44 6.44 0 01.78 1.36 7.26 7.26 0 010 2 2.58 2.58 0 01-.51 1.41c-.29.43-1 .71-1.19 1.15s0 .6.15.9c0 .09.19.12.24.2s0 .41.13.61c.29.67.87.57 1.47.73a2.8 2.8 0 001.78-.14 3.15 3.15 0 01.86-.31c.43-.06.64.17 1 .24.72.15 1.13-.35 1.85-.39a1.71 1.71 0 011.39.67c.37.38.89 1 .83 1.55s-.61.9-1.02 1.43z"></path>
                  <path d="M497.64 133.28c.18-.1.34-.17.51-.25a7 7 0 001.55 1.43c.85.54 1.28.2 1.47-.72.1-.47-.15-.77-.24-1.11s0-.8-.41-1c-.58-.34-2.25-.16-2 .82z"></path>
                  <path d="M469.41 95.36a.49.49 0 01-.54.27 5.11 5.11 0 010-1.87c0-.27.23-.4.27-.75s0-.54.06-.82.38-.94.46-1.31a5.89 5.89 0 01.37-1.4c.21-.47.33-1.09.54-1.63a8.24 8.24 0 01.7-1.31c.54-.89 1-1.75 1.54-2.65a17.84 17.84 0 013.55-4.4c.51-.43 1.08-.74 1.6-1.11.19-.13.33-.34.5-.45s.45-.17.61-.28c.46-.34 1.78-1.67 2.38-1.35-.42 1.09-1.13 2.18-1.66 3.25-.6 1.24-1.74 1.18-2.64 2.06-1.42 1.38.94 2 1.76 2.49s.82 1.28.81 2.14a6.83 6.83 0 00.3 2.21 10.32 10.32 0 01.31 1v.6a.41.41 0 00.25.34 3.21 3.21 0 01-.45 2.06 4.66 4.66 0 01-1 1.92c-.58.54-1.21.36-2 .37a4.12 4.12 0 01-1.17-.23c-.29-.07-.72-.25-.95-.29s-.69-.06-1-.13-.39-.29-.89-.17-1 .71-1.52.83c-.73.17-1.58-.18-2.31 0-.14.15-.16.25.12.61z"></path>
                </g>
                <ellipse
                  cx="507.31"
                  cy="112.27"
                  rx="110.15"
                  ry="109.22"
                  transform="rotate(-45 507.303 112.268)"
                  style={{ mixBlendMode: "screen" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_223)"
                ></ellipse>
                <ellipse
                  cx="507.31"
                  cy="112.27"
                  rx="75.09"
                  ry="74.45"
                  transform="rotate(-45 507.303 112.268)"
                  style={{ mixBlendMode: "screen" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_207)"
                ></ellipse>
              </g>
              <g id="big-cloud" fillRule="evenodd">
                <path
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_48)"
                  d="M420.35 102.32c-12.22 26.17-37.84 30.59-39 30.77.83-.26 14.18-4.6 20.11-17.22 1.28-2.72.78-5.5-1.18-8.24-7.46-10.43-36-20.36-68.87-24.56-38.69-4.93-63.48-1.1-73.19-.29a37.29 37.29 0 01-11-1.24c-1.76-.42-2.92-.79-2.92-.79s-20-7.13-22-15.77 2-10.32 2-10.32-14.5-19.32-2-29.32c0 0-4.34-.5-10.66 2 .39-.28 15.41-10.76 52.16-7.15C301.1 23.84 315.6 48 315.6 48s0-3.41 3-4.05S333.53 54 341.44 67c-.86-1.7-19-38-6.44-46.85 12.84-9.08 35.72 9.93 42.66 23-.18-.69-3.15-11.75-6.29-17.33.47.51 8 9.05 11.77 23.4 0 0 .23-17.64 12.59-19.86s37.12 46.2 24.62 72.96z"
                ></path>
                <path
                  d="M401.85 107.69l-1.56-.06c-7.46-10.43-36-20.36-68.87-24.56-38.69-4.93-63.48-1.1-73.19-.29a37.29 37.29 0 01-11-1.24c.18-3.91 1.89-8.57 8.09-11.44 12.2-5.65 51.87.24 51.87.24l-14.63-9.14s23.82-9.14 48.91 5.89l-13.55 3s31 3.62 52 14.65 21.93 22.95 21.93 22.95z"
                  style={{ mixBlendMode: "multiply" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_149)"
                  opacity="0.4"
                ></path>
              </g>
              <g id="tour" fillRule="evenodd">
                <path
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_221)"
                  d="M511.73 167.13L492.47 142.45 482.81 140.1 478.02 93.2 473.23 85.6 471.15 70.49 458.59 56.16 441.6 66.27 437.4 115.39 427.23 123.1 427.23 356.72 512.7 361.74 511.73 167.13z"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_149-2)"
                  d="M492.47 142.45L494.49 222.42 490.11 225.1 490.11 354.31 486.15 356.28 482.81 140.1 492.47 142.45z"
                  opacity="0.2"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_149-3)"
                  d="M458.59 56.16L458.59 161.92 453.74 166.6 453.14 358.29 441.6 358.29 427.23 356.72 427.23 123.1 437.4 115.39 441.6 66.27 458.59 56.16z"
                  opacity="0.2"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_149-4)"
                  d="M473.23 85.6L473.23 188.12 478.02 93.2 473.23 85.6z"
                  opacity="0.2"
                ></path>
                <path
                  style={{ mixBlendMode: "soft-light" }}
                  fill="#babdff"
                  d="M471.15 70.49L473.23 85.6 472.19 230.1 466.9 258.6 462.46 255.92 458.59 161.92 458.59 56.16 471.15 70.49z"
                  opacity="0.5"
                ></path>
                <path
                  style={{ mixBlendMode: "soft-light" }}
                  fill="#babdff"
                  d="M478.02 93.2L473.23 188.12 479.53 253.4 484.72 263.83 482.81 140.1 478.02 93.2z"
                  opacity="0.5"
                ></path>
                <path
                  style={{ mixBlendMode: "soft-light" }}
                  fill="#babdff"
                  d="M511.73 167.13L513.63 311.84 503.93 299.61 496.89 239.77 494.49 222.42 492.47 142.45 511.73 167.13z"
                  opacity="0.5"
                ></path>
                <path
                  style={{ mixBlendMode: "soft-light" }}
                  fill="#babdff"
                  d="M437.4 115.39L446.35 149.03 439.92 146.77 427.23 123.1 437.4 115.39z"
                  opacity="0.5"
                ></path>
                <path
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_221-2)"
                  d="M446.67 364.95L442.79 187.09 438.16 176.49 433.41 101.1 412.91 67.77 405.13 71.78 404.14 67.04 390.93 39.56 371.79 33.96 367.92 57.88 362.65 55.03 347.96 54.76 350.39 361.74 446.67 364.95z"
                ></path>
                <path
                  style={{ mixBlendMode: "soft-light" }}
                  fill="#babdff"
                  d="M412.91 67.77L417.15 164.37 428.44 181.48 438.16 176.49 433.41 101.1 412.91 67.77z"
                  opacity="0.5"
                ></path>
                <path
                  style={{ mixBlendMode: "soft-light" }}
                  fill="#babdff"
                  d="M404.14 67.04L403.67 96.86 388.33 79.49 385.45 37.96 371.79 33.96 390.93 39.56 404.14 67.04z"
                  opacity="0.5"
                ></path>
                <path
                  style={{ mixBlendMode: "soft-light" }}
                  fill="#babdff"
                  d="M362.65 55.03L364.56 77.18 367.92 57.88 362.65 55.03z"
                  opacity="0.5"
                ></path>
                <path
                  style={{ mixBlendMode: "soft-light" }}
                  fill="#babdff"
                  d="M442.79 187.09L440.33 185.14 426.84 210.69 426.12 246.69 417.15 249.82 415.77 178.53 414.14 175.04 411.09 361.74 441.87 364.39 442.79 187.09z"
                  opacity="0.5"
                ></path>
                <path
                  style={{ mixBlendMode: "soft-light" }}
                  fill="#babdff"
                  d="M397.32 96.86L382.16 79.3 372.52 78.33 399.32 112.62 397.32 96.86z"
                  opacity="0.5"
                ></path>
                <path
                  style={{ mixBlendMode: "soft-light" }}
                  fill="#babdff"
                  d="M433.41 101.1L438.16 176.49 433.41 178.53 429.03 106.33 425.53 100.81 425.53 124.62 417.15 144.94 412.91 67.77 433.41 101.1z"
                  opacity="0.5"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_149-5)"
                  d="M417.15 164.37L414.14 175.04 411.83 341.75 406.06 341.63 405.13 129.71 399.32 112.62 397.32 96.86 403.67 96.86 405.13 71.78 412.91 67.77 417.15 164.37z"
                  opacity="0.2"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_149-6)"
                  d="M372.52 78.33L382.16 79.3 388.33 79.49 385.45 37.96 371.79 33.96 364.56 77.18 368.58 108.14 372.52 204.91 385.92 184.75 383.36 105.25 372.52 78.33z"
                  opacity="0.2"
                ></path>
                <path
                  style={{ mixBlendMode: "soft-light" }}
                  fill="#babdff"
                  d="M405.13 129.71L405.64 247.61 391.92 226.47 388.63 189.1 386.56 182.45 383.36 105.25 405.13 129.71z"
                  opacity="0.5"
                ></path>
                <path
                  style={{ mixBlendMode: "soft-light" }}
                  fill="#babdff"
                  d="M405.13 129.71L405.64 186.27 404.14 178.53 404.14 140.1 397.32 134.6 397.32 180.81 385.88 166.06 383.36 105.25 405.13 129.71z"
                  opacity="0.5"
                ></path>
                <path
                  style={{ mixBlendMode: "soft-light" }}
                  fill="#babdff"
                  d="M368.58 108.14L365.25 82.43 359.53 77.18 359.53 109.46 363.53 225.1 371.61 232.1 372.52 204.91 368.58 108.14z"
                  opacity="0.5"
                ></path>
                <path
                  style={{ mixBlendMode: "soft-light" }}
                  fill="#babdff"
                  d="M405.74 268.57L385.92 235.68 378.28 235.68 388.63 322.1 404.14 350.25 405.74 268.57z"
                  opacity="0.5"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_149-7)"
                  d="M378.28 235.68L388.63 322.1 404.14 350.25 404.14 363.54 382.53 362.81 376.45 243.66 378.28 235.68z"
                  opacity="0.2"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_149-8)"
                  d="M363.53 225.1L361.81 363.49 350.39 361.74 347.96 54.76 362.65 55.03 359.53 77.18 363.53 225.1z"
                  opacity="0.2"
                ></path>
                <path
                  style={{ mixBlendMode: "soft-light" }}
                  fill="#babdff"
                  d="M492.47 142.45L494.49 222.42 497.48 244.77 497.48 157.38 498.5 159.47 500.9 203.07 509.97 223.27 509.97 238.22 512.1 241.27 511.73 167.13 492.47 142.45z"
                  opacity="0.5"
                ></path>
                <path
                  style={{ mixBlendMode: "soft-light" }}
                  fill="#babdff"
                  d="M471.15 70.49L473.23 85.6 473.23 178.53 469.96 164.09 468.23 78.33 465.91 69.75 465.91 178.53 459.69 188.77 458.59 56.16 471.15 70.49z"
                  opacity="0.5"
                ></path>
              </g>
              <g id="ice-moutin">
                <g id="right-ice-moutin">
                  <path
                    fill="url(#linear-gradient)"
                    d="M371.82 221.89L389.5 200.65 392.59 200.53 411.61 198.87 441.94 151.51 451.52 157.09 530.58 254.17 404.68 285.13 371.82 221.89z"
                  ></path>
                  <path
                    fill="url(#linear-gradient-2)"
                    d="M386.6 241.82L411.29 222l9.94 2 11-1.52 24.6-16.6 64.48-62.68 75 173.34s-237.47 4.26-233.83 3.26 24.12-77.98 24.12-77.98z"
                  ></path>
                </g>
                <g id="left-ice-moutin">
                  <path
                    fill="url(#linear-gradient-3)"
                    d="M554.24 338.33L292.17 334.84 292.21 312.84 229.51 275.84 292.56 150.18 327.13 102.56 327.69 101.79 327.92 101.47 335.38 107.92 354.09 159.12 354.28 159.05 362.2 156.13 362.78 155.92 365.68 162.61 368.91 162.61 401.1 234.76 416.69 256.29 419.58 256.29 477.17 224.58 552.34 317.67 554.24 338.33z"
                  ></path>
                  <path
                    d="M364.79 241.57l-1.65-12.06 5.64 4.86-11.28-59.5 2.86-2.43 4.88 5.13-3-21.44v-.26l-7.88 3.18-.16.06-29.45 47.59-4.14-42.55 2.63-2.61 1.87-4.41 2.56 7-2.56-25.92 2.56-4.5 3.53 3.29-3.51-35.18-.56.77-34.57 47.62-27.18 53.18 26.91 71.58-.08 37.9 59.28-32.2 3.76 2.7-6.39-74.37 2.63-.81zm-50.87-17.32L296.8 252l1.41-84.15 3.07-1.32 3.47 13.38 9.92-9.86c-.22 14.18-.67 40.95-.75 54.2z"
                    style={{ mixBlendMode: "multiply" }}
                    fill="#9b8bd6"
                    opacity="0.5"
                  ></path>
                  <path
                    style={{ mixBlendMode: "multiply" }}
                    fill="#9b8bd6"
                    d="M384.86 328.36L384.86 325.29 375.46 325.29 363.89 319.17 367.2 314.13 367.27 307.92 373.06 248.87 382.33 287.69 388.22 284.96 397.63 271.91 400.39 268.49 395.15 254.9 403.26 264.93 406.2 261.29 419.58 256.25 428.61 251.21 476.24 224.65 478.72 264.89 475.04 264.89 475.94 274.34 470.9 283.88 481.12 313.05 468.05 324.84 535.45 334.66 547.33 340.6 367.2 339.52 384.86 328.36z"
                    opacity="0.3"
                  ></path>
                  <path
                    style={{ mixBlendMode: "multiply" }}
                    fill="#9b8bd6"
                    d="M475.04 264.89L407.78 284.96 402.07 283.88 475.94 256.43 478.1 254.86 478.72 264.89 475.04 264.89z"
                    opacity="0.3"
                  ></path>
                  <path
                    style={{ mixBlendMode: "multiply" }}
                    fill="#9b8bd6"
                    d="M469.62 285.95L424.61 312.87 481.12 313.05 469.62 285.95z"
                    opacity="0.3"
                  ></path>
                  <path
                    style={{ mixBlendMode: "multiply" }}
                    fill="#9b8bd6"
                    d="M465.72 326.19L453.39 339.34 379.07 340.78 391.85 330.06 451.29 326.01 451.29 324.03 472.33 319.8 465.72 326.19z"
                    opacity="0.3"
                  ></path>
                  <path
                    style={{ mixBlendMode: "multiply" }}
                    fill="#9b8bd6"
                    d="M346.08 177.03L360.36 172.44 364.73 177.03 363.89 169.56 344.48 174.74 325.26 205.91 305.73 239.77 298.21 264.89 285.89 252.02 280.1 296.49 307.91 281.45 351.49 280.64 355.25 282.89 354.42 277.04 308.21 269.84 310.61 256.34 317.83 251.3 320 244.9 312.04 247.69 324.66 212.68 348.86 209.26 351.49 208.18 364.51 240.85 363.14 229.51 360.66 228.34 352.54 202.86 334.66 201.24 346.08 177.03z"
                    opacity="0.3"
                  ></path>
                  <path
                    style={{ mixBlendMode: "multiply" }}
                    fill="#9b8bd6"
                    d="M327.67 133.73L304.98 138.23 330.49 130.83 331.2 136.97 327.67 133.73z"
                    opacity="0.3"
                  ></path>
                  <path
                    style={{ mixBlendMode: "multiply" }}
                    fill="#9b8bd6"
                    d="M325.12 157.13L289.72 163.34 289.72 159.02 325.12 146.78 327.59 163.34 325.12 157.13z"
                    opacity="0.3"
                  ></path>
                  <path
                    style={{ mixBlendMode: "multiply" }}
                    fill="#9b8bd6"
                    d="M314.05 213L317.83 166.22 303.02 168.84 314.67 169.56 314.05 213z"
                    opacity="0.3"
                  ></path>
                  <path
                    style={{ mixBlendMode: "multiply" }}
                    fill="#9b8bd6"
                    d="M428.29 258.86L396.06 282.26 402.07 283.88 419.88 289.29 407.78 315.48 384.86 324.84 382.29 325.29 375.46 325.29 363.89 319.17 367.2 314.13 379.95 296.44 372.91 247.69 375.54 244 389.17 283.64 397.63 271.91 400.39 268.49 394.78 253.82 396.36 254.9 388.62 239.95 404.13 263.86 406.2 261.29 419.58 256.25 428.61 251.21 431.07 251.3 428.29 258.86z"
                    opacity="0.5"
                  ></path>
                </g>
              </g>
              <g id="small-left-moutin" fillRule="evenodd">
                <path
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_202)"
                  d="M355.31 224.67L372.14 238.22 377.96 262.81 380.6 261.82 389.92 263.21 400 282.15 407.33 287.36 424.53 340.73 372.12 338.74 355.31 224.67z"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="#362072"
                  d="M380.6 261.82L389.92 298.35 394.01 301.85 400 340.49 377.96 262.81 380.6 261.82z"
                  opacity="0.3"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="#362072"
                  d="M400 282.15L409.97 325.08 406.27 298.9 402.14 283.68 400 282.15z"
                  opacity="0.3"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="#362072"
                  d="M355.31 224.67L359.75 232.1 368.17 307.48 371.09 308.43 377.96 338.96 372.12 338.74 355.31 224.67z"
                  opacity="0.3"
                ></path>
                <path
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_99)"
                  d="M372.12 341.47L332.19 347.35 292.52 200.29 295.76 169.77 306.33 161.92 317.6 152.35 321.93 154.43 332.19 175.29 336.63 176.25 348.78 197.43 349.89 199.34 366.2 275.6 370.92 275.6 372.12 341.47z"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="#362072"
                  d="M353 268.85L352.17 269.18 355.16 343 353.82 343.12 348.5 252.85 338.5 220.12 338.83 216.26 325.17 186.27 319.33 192.1 318.83 207.27 330.94 242.77 342.62 256.43 342.62 301.85 345.03 305.19 347.02 343.92 332.19 347.35 292.52 200.29 295.76 169.77 306.33 161.92 317.6 152.35 327 186.27 336 192.1 332.19 175.29 336.63 176.25 335 180.82 353 267.43 366.2 275.6 367.64 275.98 364.08 275.98 353 268.85z"
                  opacity="0.3"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="#362072"
                  d="M336 192.1L331.56 200.29 338.83 216.26 338.5 220.12 348.5 252.85 349.77 274.41 352.17 269.18 353 267.43 335 180.82 332.92 178.53 336 192.1z"
                  opacity="0.3"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="#362072"
                  d="M325.17 186.27L319.33 192.1 312.92 203.07 292.52 203.07 295.76 169.77 317.6 152.35 327 186.27 325.17 186.27z"
                  opacity="0.3"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="#362072"
                  d="M330.94 242.77L317.6 274.41 321.93 288.11 342.62 256.43 330.94 242.77z"
                  opacity="0.3"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="#362072"
                  d="M342.62 301.85L330.08 303.6 330.08 313.1 345.03 305.19 342.62 301.85z"
                  opacity="0.3"
                ></path>
                <path
                  fill="#a2bbff"
                  d="M294.78 179.79L295.76 169.77 317.81 153.11 321.93 154.43 332.19 175.29 336.63 176.25 349.89 199.34 355.31 224.67 370.94 236.94 377.96 262.81 380.6 261.82 389.92 263.21 400 282.15 407.33 287.36 420.45 328.06 407.83 286.18 400 281.27 390.5 261.82 379.58 260.55 377.96 261.18 371.56 236.16 355.75 224 350.63 198.14 337.19 175.85 332.75 174.6 322.63 153.91 317.44 151.54 295.03 169.27 293.46 177.71 294.78 179.79z"
                ></path>
              </g>
              <g id="flat-cloud" fillRule="evenodd">
                <path
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_230)"
                  d="M537.57 153.32s-90.39 0-138.68 5.2a2.93 2.93 0 010-.57c.05-2.06 1.7-8.95 21.76-7.24 0 0-2.7-2-1.78-3.83s8.23-1 8.23-1-10.37-10.63-2.76-17.36 35.62-3.4 48.14 1.73c-2-.9-15.25-6.66-26.43-8.79 0 0 29.06-1.7 56 27.42 0 0-.72-6.13 4.45-8.68 4.58-2.25 15.53 9.23 18 11.86l.48.54a6.68 6.68 0 01.52-.45c1.5-1.21 6.5-4.3 12.07 1.17z"
                ></path>
                <path
                  d="M537.57 153.32s-90.39 0-138.68 5.2a2.93 2.93 0 010-.57c4.08-2.4 11.86-5.22 25.2-4.27l13.26-1.39-4.73-2.54s23.29-6.05 45.86-4 27 4.54 27 4.54l19 1.77 1 .09z"
                  style={{ mixBlendMode: "multiply" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_149-9)"
                  opacity="0.5"
                ></path>
              </g>
              <path
                id="path"
                // stroke="black"
                fill="none"
                d="M-127.13,129.13S35.84,8.36,97,27.72C167.32,50,149.41,122.53,135.71,142.3,116.35,170.23,40.9,166,30.42,126.81,12.61,60.23,90,20.75,178.29,36.23c92.12,16.16,228.28,115.23,163.36,123.1-153.3,18.58-56.52,144-139.36,116.9-69.91-22.87-95.3-139-47.23-122.32,91.36,31.74,61.17-103,132.39-103s87.49,113,136.26,113c51.51,0,107.61-51.09,51.1-109.16s-106.36-60-122.33-35.9C329.26,54,497.26,225.91,548.35,176.36c55.83-54.13,13.17-121.55,91.36-121.55C721,54.81,673,239.07,580.1,239.07c-81.89,0-63.49-106-63.49-145.55,0-49.55,38.71-67.35,106.84-67.35,68.57,0,141.41,9.43,121.77,49.06-75.1,151.52,167,136.74,167,136.74"
              />
              {/* //rocketsvg */}
              <g id="rocket">
                <path
                  fill="url(#b787c239-0898-4efb-a5ae-8e48f7d6d13c)"
                  d="M720.12 122.31l1.25 43.75 17.88-1.58.36-42s-14.22-1.11-19.49-.17z"
                  data-name="rocket-83"
                  transform="translate(-704.91 -14.62)"
                  style={{ mixBlendMode: "screen" }}
                ></path>
                <path
                  fill="url(#e0a680d8-3ce6-4c51-88d1-b37d9cf9fba8)"
                  fillRule="evenodd"
                  d="M746.85 100.3l7.49-1.38s1.2 13.93-7.79 29.49h-.71l.57-20.86h-1.5z"
                  data-name="rocket-82"
                  transform="translate(-704.91 -14.62)"
                ></path>
                <path
                  fill="url(#ace57d1f-f1b5-4480-a3a3-4ae8c88466d0)"
                  fillRule="evenodd"
                  d="M712.66 100.34L705 98.92s-1.2 13.93 7.78 29.49h.71l-.57-20.86h1.5z"
                  data-name="rocket-81"
                  transform="translate(-704.91 -14.62)"
                ></path>
                <path
                  fill="url(#b9cccfc2-f57a-471b-8e32-c4e49bd9dbe7)"
                  fillRule="evenodd"
                  d="M729.72 19.39c-9.69 0-24.88 23.38-23.65 45.12s11.23 53.67 11.23 53.67l12.42.13 12.42-.13s10-31.93 11.23-53.67-14.02-45.12-23.65-45.12z"
                  data-name="rocket-80"
                  transform="translate(-704.91 -14.62)"
                ></path>
                <path
                  fill="#31165f"
                  fillRule="evenodd"
                  d="M717.3 118.18s14.14-1.25 24.84 0c0 0-13.87 1.38-24.84 0z"
                  data-name="rocket-79"
                  transform="translate(-704.91 -14.62)"
                ></path>
                <path
                  fill="url(#ff76e830-e6c4-4476-9e44-67c68d0d3f05)"
                  fillRule="evenodd"
                  d="M716.7 29.23s13.73-4.35 26.8 1.14c0 0-6.74-10.92-13.78-11-6.33-.04-13.02 9.86-13.02 9.86z"
                  data-name="rocket-78"
                  transform="translate(-704.91 -14.62)"
                ></path>
                <g data-name="rocket-group-18">
                  <path
                    fill="#53345f"
                    d="M743.43 30.53c-12.14-5.24-26.54-1.17-26.68-1.13l-.1-.34c.14 0 14.67-4.14 26.92 1.15z"
                    data-name="rocket-77"
                    transform="translate(-704.91 -14.62)"
                  ></path>
                </g>
                <path
                  fill="#53345f"
                  fillRule="evenodd"
                  d="M726.46 20.16l7.26.37s-3.72-2.63-7.26-.37z"
                  data-name="rocket-76"
                  transform="translate(-704.91 -14.62)"
                ></path>
                <path
                  fill="url(#a070573a-959a-4a29-afcc-12f58cbe4fb1)"
                  fillRule="evenodd"
                  d="M727.47 19.81a15.16 15.16 0 014.08-.1s-.8-3.46-2-3.58-2.08 3.68-2.08 3.68z"
                  data-name="rocket-75"
                  transform="translate(-704.91 -14.62)"
                ></path>
                <path
                  fill="url(#b16b1580-aba5-4db9-b6ce-c55e6a9ff27a)"
                  fillRule="evenodd"
                  d="M711.56 97.08s21-6.88 36.81-2c-2.07 9.08-6.23 23.15-6.23 23.15s-9.49-1.33-24.84 0a143.12 143.12 0 01-5.74-21.15z"
                  data-name="rocket-74"
                  transform="translate(-704.91 -14.62)"
                  style={{ mixBlendMode: "multiply" }}
                  opacity="0.5"
                ></path>
                <path
                  fill="url(#a7a39a67-fcd3-4b41-b861-86cf847be103)"
                  fillRule="evenodd"
                  d="M728.91 35.11c-8.75.68-15 11.11-15.38 20.21s7.92 14.65 16.78 14.4 16.21-6.35 15.2-16.31c-.92-9.01-6.89-19.06-16.6-18.3z"
                  data-name="rocket-73"
                  transform="translate(-704.91 -14.62)"
                  style={{ mixBlendMode: "multiply" }}
                  opacity="0.5"
                ></path>
                <path
                  fill="#31165f"
                  fillRule="evenodd"
                  d="M728.91 33.66c-8.75.68-15 11.11-15.38 20.21s7.92 14.66 16.78 14.4 16.21-6.35 15.2-16.31c-.92-8.96-6.89-19.06-16.6-18.3z"
                  data-name="rocket-72"
                  transform="translate(-704.91 -14.62)"
                ></path>
                <path
                  fill="url(#b8473ed3-9e3c-4a24-a594-d28f17feb430)"
                  fillRule="evenodd"
                  d="M728.91 32.65c-8.75.68-15 11.11-15.38 20.21s7.92 14.66 16.78 14.4 16.21-6.35 15.2-16.31c-.92-9.01-6.89-19.06-16.6-18.3z"
                  data-name="rocket-71"
                  transform="translate(-704.91 -14.62)"
                ></path>
                <path
                  fill="#a6345f"
                  fillRule="evenodd"
                  d="M729.49 35.88c-7.84.48-11.77 8.68-12.08 15.78s6.22 11.44 13.18 11.24 12.74-5 11.94-12.73c-.72-7.03-4.85-14.79-13.04-14.29z"
                  data-name="rocket-70"
                  transform="translate(-704.91 -14.62)"
                ></path>
                <path
                  fill="url(#f38e2d1a-6600-4fa5-878e-2851a7b41383)"
                  fillRule="evenodd"
                  d="M737.93 60.35a12.89 12.89 0 01-7.35 2.41c-6.63.19-13.45-4.36-13.15-11.12A18.61 18.61 0 01719 45c1.85-4.16 5.34-7.48 10.55-7.9 7.68-.62 11.73 6.91 12.41 13.6a10.27 10.27 0 01-4.03 9.65z"
                  data-name="rocket-69"
                  transform="translate(-704.91 -14.62)"
                ></path>
                <g data-name="rocket-group-17">
                  <path
                    fill="#53345f"
                    d="M25.25 53.65H25.42V78.91H25.25z"
                    data-name="rocket-68"
                  ></path>
                </g>
                <g data-name="rocket-group-16">
                  <path
                    fill="#53345f"
                    d="M711.58 97.16l-.05-.17c24-6.94 36.74-2.09 36.87-2l-.06.16c-.13-.08-12.85-4.91-36.76 2.01z"
                    data-name="rocket-67"
                    transform="translate(-704.91 -14.62)"
                  ></path>
                </g>
                <g data-name="rocket-group-15">
                  <path
                    fill="#53345f"
                    d="M709.7 88.73l-.1-.14c.08 0 7.49-4.86 20.64-5.57v.17c-13.1.71-20.47 5.5-20.54 5.54z"
                    data-name="rocket-66"
                    transform="translate(-704.91 -14.62)"
                  ></path>
                </g>
                <path
                  fill="#31165f"
                  fillRule="evenodd"
                  d="M28.23 97.09L27.88 86.19 30.86 85.43 30.56 97.09 28.23 97.09z"
                  data-name="rocket-65"
                ></path>
                <path
                  fill="url(#bc8a20ec-6137-4135-b56f-275bd451ea8f)"
                  fillRule="evenodd"
                  d="M719.35 118.41a132.8 132.8 0 0121.36-.1l-.64 4.88-20.07-.53z"
                  data-name="rocket-64"
                  transform="translate(-704.91 -14.62)"
                ></path>
                <path
                  fill="#31165f"
                  fillRule="evenodd"
                  d="M719.66 120.55a18.73 18.73 0 018.49-1.87c4.84.1 12.07 3.38 12.07 3.38l.49-3.75a114.35 114.35 0 00-21.36.1z"
                  data-name="rocket-63"
                  opacity="0.5"
                  transform="translate(-704.91 -14.62)"
                ></path>
                <path
                  fill="#fff"
                  d="M734.32 40.05a18.32 18.32 0 013.47 4.84l1.69-1s-1.3-3.11-3.71-4.21z"
                  data-name="rocket-62"
                  transform="translate(-704.91 -14.62)"
                ></path>
                <path
                  fill="#fff"
                  d="M14.94 39.24L16.33 41.69 14.94 42.52 13.94 40.47 14.94 39.24z"
                  data-name="rocket-61"
                ></path>
                <path
                  fill="url(#f26d3618-12fb-4786-8ccf-776f5b9581f7)"
                  fillRule="evenodd"
                  d="M713.89 33.65s13.74-7.09 31.62 0l-2-3.25s-10.33-4.85-26.8-1.14z"
                  data-name="rocket-60"
                  transform="translate(-704.91 -14.62)"
                  style={{ mixBlendMode: "multiply" }}
                  opacity="0.5"
                ></path>
                <g data-name="rocket-group-14">
                  <path
                    fill="url(#e58c3887-2640-443d-af39-d9b7556eda7f)"
                    fillRule="evenodd"
                    d="M729.61 84.74a.78.78 0 01-.78.78.78.78 0 010-1.56.78.78 0 01.78.78z"
                    data-name="rocket-59"
                    transform="translate(-704.91 -14.62)"
                  ></path>
                  <circle
                    cx="23.92"
                    cy="70.12"
                    r="0.61"
                    fill="url(#ace3eddd-d354-4d5f-ac90-594af894d0e3)"
                    data-name="rocket-elli-17"
                  ></circle>
                </g>
                <g data-name="rocket-group-13">
                  <path
                    fill="url(#be399719-59c8-47ac-8d84-dff09d49a2d5)"
                    fillRule="evenodd"
                    d="M729.61 80.91a.77.77 0 01-.78.77.76.76 0 01-.77-.77.77.77 0 01.77-.78.78.78 0 01.78.78z"
                    data-name="rocket-58"
                    transform="translate(-704.91 -14.62)"
                  ></path>
                  <circle
                    cx="23.92"
                    cy="66.28"
                    r="0.61"
                    fill="url(#ad7ba90b-b292-480f-b90d-c10b222e3944)"
                    data-name="rocket-elli-16"
                  ></circle>
                </g>
                <g data-name="rocket-group-12">
                  <circle
                    cx="11.12"
                    cy="40.15"
                    r="0.78"
                    fill="#31165f"
                    data-name="rocket-elli-15"
                  ></circle>
                  <circle
                    cx="11.12"
                    cy="40.15"
                    r="0.61"
                    fill="url(#b9fbe58f-4233-4133-8ccd-044bc9f9f2c1)"
                    data-name="rocket-elli-14"
                  ></circle>
                </g>
                <g data-name="rocket-group-11">
                  <path
                    fill="#31165f"
                    fillRule="evenodd"
                    d="M718.17 43.77a.77.77 0 01-.77.78.78.78 0 110-1.56.77.77 0 01.77.78z"
                    data-name="rocket-57"
                    transform="translate(-704.91 -14.62)"
                  ></path>
                  <circle
                    cx="12.49"
                    cy="29.14"
                    r="0.61"
                    fill="url(#ba40e2f0-aabc-4e10-adfe-36d0a380a04d)"
                    data-name="rocket-elli-13"
                  ></circle>
                </g>
                <g data-name="rocket-group-10">
                  <path
                    fill="#31165f"
                    fillRule="evenodd"
                    d="M724.09 63.46a.78.78 0 11-.78-.78.78.78 0 01.78.78z"
                    data-name="rocket-56"
                    transform="translate(-704.91 -14.62)"
                  ></path>
                  <circle
                    cx="18.4"
                    cy="48.83"
                    r="0.61"
                    fill="url(#f21747c9-fc92-437e-a452-bdc200a33c73)"
                    data-name="rocket-elli-12"
                  ></circle>
                </g>
                <g data-name="rocket-group-9">
                  <circle
                    cx="30.44"
                    cy="49.77"
                    r="0.78"
                    fill="#31165f"
                    data-name="rocket-elli-11"
                  ></circle>
                  <circle
                    cx="30.44"
                    cy="49.77"
                    r="0.61"
                    fill="url(#f89dc63f-7cd3-4d24-8ea0-47b5d9419a00)"
                    data-name="rocket-elli-10"
                  ></circle>
                </g>
                <g data-name="rocket-group-8">
                  <circle
                    cx="38.59"
                    cy="42.52"
                    r="0.78"
                    fill="#31165f"
                    data-name="rocket-elli-9"
                  ></circle>
                  <circle
                    cx="38.59"
                    cy="42.52"
                    r="0.61"
                    fill="url(#b3af1208-0990-4b51-a74e-2f10dcb31ecd)"
                    data-name="rocket-elli-8"
                  ></circle>
                </g>
                <g data-name="rocket-group-7">
                  <circle
                    cx="37.34"
                    cy="28.74"
                    r="0.78"
                    fill="#31165f"
                    data-name="rocket-elli-7"
                  ></circle>
                  <circle
                    cx="37.34"
                    cy="28.74"
                    r="0.61"
                    fill="url(#a128c5ca-7575-46ec-a2bf-58818c5f9863)"
                    data-name="rocket-elli-6"
                  ></circle>
                </g>
                <g data-name="rocket-group-6">
                  <path
                    fill="#31165f"
                    fillRule="evenodd"
                    d="M736.9 36.26a.78.78 0 11-.78-.78.78.78 0 01.78.78z"
                    data-name="rocket-55"
                    transform="translate(-704.91 -14.62)"
                  ></path>
                  <circle
                    cx="31.21"
                    cy="21.64"
                    r="0.61"
                    fill="url(#ba909798-77c0-4952-b651-e63b42129236)"
                    data-name="rocket-elli-5"
                  ></circle>
                </g>
                <g data-name="rocket-group-5">
                  <path
                    fill="#31165f"
                    fillRule="evenodd"
                    d="M726.59 35.15a.78.78 0 11-.78-.78.78.78 0 01.78.78z"
                    data-name="rocket-54"
                    transform="translate(-704.91 -14.62)"
                  ></path>
                  <circle
                    cx="20.9"
                    cy="20.52"
                    r="0.61"
                    fill="url(#e2a01929-c993-4f86-9ed8-be8ed42423cd)"
                    data-name="rocket-elli-4"
                  ></circle>
                </g>
                <path
                  fill="#6f2561"
                  fillRule="evenodd"
                  d="M8.55 113.79L9.12 113.79 8.55 92.91 7.98 92.93 8.55 113.79z"
                  data-name="rocket-53"
                ></path>
                <path
                  fill="#6f2561"
                  fillRule="evenodd"
                  d="M41.5 92.93L40.93 92.91 40.54 113.79 40.93 113.79 41.5 92.93z"
                  data-name="rocket-52"
                ></path>
                <path
                  fill="url(#a0142166-1f62-46a8-b776-619b511a5b02)"
                  fillRule="evenodd"
                  d="M30.23 81.02L32.28 81.02 30.23 113.79 28.81 113.79 30.23 81.02z"
                  data-name="rocket-51"
                ></path>
                <path
                  fill="#ff4c61"
                  fillRule="evenodd"
                  d="M30.23 81.02L28.81 88.27 28.81 113.79 30.23 81.02z"
                  data-name="rocket-50"
                ></path>
                <path
                  fill="#31165f"
                  fillRule="evenodd"
                  d="M32.22 82.02L37.23 103.56 32.28 103.29 32.22 108.49 30.56 108.49 32.22 82.02z"
                  data-name="rocket-49"
                  opacity="0.5"
                ></path>
                <path
                  fill="#fff"
                  d="M712.33 39.9a5 5 0 011.22-3.64l1.17.06a38 38 0 01-1.81 3.58z"
                  data-name="rocket-48"
                  transform="translate(-704.91 -14.62)"
                ></path>
                <path
                  data-name="rocket-47"
                  style={{ mixBlendMode: "soft-light" }}
                  fill="#fff"
                  d="M43.46 74.88L45.59 65.13 46.19 65.13 44.16 74.88 43.46 74.88z"
                ></path>
                <path
                  fill="url(#a032c8f4-c0c2-4712-be00-4a5f201c7038)"
                  fillRule="evenodd"
                  d="M750.85 45.89s3.61-.75 1 3.49z"
                  data-name="rocket-46"
                  transform="translate(-704.91 -14.62)"
                ></path>
                <path
                  fill="url(#a7dd8f79-d586-4131-8950-571ceaa3b5aa)"
                  fillRule="evenodd"
                  d="M708.73 45.41s-3.35 1-1 3.35z"
                  data-name="rocket-45"
                  transform="translate(-704.91 -14.62)"
                ></path>
                <path
                  fill="#fff"
                  fillRule="evenodd"
                  d="M720.81 117.83s-9.34-28.87-13-50.43l-.91.46s4.39 33.06 10.89 50.28z"
                  data-name="rocket-44"
                  opacity="0.5"
                  transform="translate(-704.91 -14.62)"
                  style={{ mixBlendMode: "soft-light" }}
                ></path>
                <path
                  data-name="rocket-43"
                  style={{ mixBlendMode: "soft-light" }}
                  fill="#fff"
                  fillRule="evenodd"
                  d="M45.92 62.92L47 56.91 47.57 56.91 46.49 62.92 45.92 62.92z"
                ></path>
                <path
                  fill="#fff"
                  fillRule="evenodd"
                  d="M713.17 87.3a45.32 45.32 0 0112.09-3.3s-5.88 1.28-12.09 3.3z"
                  data-name="rocket-42"
                  transform="translate(-704.91 -14.62)"
                  style={{ mixBlendMode: "soft-light" }}
                ></path>
                <path
                  fill="#fff"
                  fillRule="evenodd"
                  d="M730.53 70.63l.15 22.14s.39-8.03-.15-22.14z"
                  data-name="rocket-41"
                  transform="translate(-704.91 -14.62)"
                  style={{ mixBlendMode: "soft-light" }}
                ></path>
                <path
                  fill="#fff"
                  fillRule="evenodd"
                  d="M716 96.16s14.75-4.33 28.88-1.55c.03 0-10.45-2.61-28.88 1.55z"
                  data-name="rocket-40"
                  transform="translate(-704.91 -14.62)"
                  style={{ mixBlendMode: "soft-light" }}
                ></path>
                <path
                  fill="#fff"
                  fillRule="evenodd"
                  d="M719.33 38s2 .81 3.18-2.94a17.71 17.71 0 00-3.18 2.94z"
                  data-name="rocket-39"
                  transform="translate(-704.91 -14.62)"
                ></path>
                <path
                  fill="#fff"
                  fillRule="evenodd"
                  d="M732.07 67.14s4.83-.26 10.54-5.49a15.37 15.37 0 01-10.54 5.49z"
                  data-name="rocket-38"
                  transform="translate(-704.91 -14.62)"
                  style={{ mixBlendMode: "soft-light" }}
                ></path>
                <path
                  fill="#fff"
                  fillRule="evenodd"
                  d="M730.25 62.91a5.45 5.45 0 007.09-1.91s-2.24 2-7.09 1.91z"
                  data-name="rocket-37"
                  transform="translate(-704.91 -14.62)"
                  style={{ mixBlendMode: "soft-light" }}
                ></path>
                <g
                  data-name="rocket-group-4"
                  style={{ mixBlendMode: "soft-light" }}
                  fill="#fff"
                  fillRule="evenodd"
                  opacity="0.36"
                >
                  <path
                    d="M729.43 72.39c-.25.17-.73.41-.65.79 0 .18.14.33.19.5a2.36 2.36 0 01.1.46 1.46 1.46 0 00.28.71c.12.12.24 0 .32-.12a1 1 0 00.18-.42 2.9 2.9 0 01.07-.6 2.18 2.18 0 00.09-.23 1.2 1.2 0 000-.33.83.83 0 00-.58-.76z"
                    data-name="rocket-36"
                    transform="translate(-704.91 -14.62)"
                  ></path>
                  <path
                    d="M728.41 75.56a.25.25 0 01.06-.26c.37 0 .5.75.15.89s-.45-.39-.33-.63z"
                    data-name="rocket-35"
                    transform="translate(-704.91 -14.62)"
                  ></path>
                  <path
                    d="M721.54 80.29c.19-.1.35-.23.57-.18a.84.84 0 01.45.29 1.62 1.62 0 01.28.61.6.6 0 010 .32 1.47 1.47 0 01-1 .87 2.93 2.93 0 01-.69.18l-.49.06a1 1 0 01-.41 0 1.45 1.45 0 01-.32-.18 1 1 0 01-.41-.82c0-.58.7-1 1.17-1.27s1.02-.37.85.12z"
                    data-name="rocket-34"
                    transform="translate(-704.91 -14.62)"
                  ></path>
                  <path
                    d="M723.33 79.51c-.06.16-.1.21 0 .3a.38.38 0 00.33 0c.2-.07.45-.37.3-.58a.8.8 0 00-.38-.3.6.6 0 00-.52.55z"
                    data-name="rocket-33"
                    transform="translate(-704.91 -14.62)"
                  ></path>
                  <path
                    d="M730.8 85.1a.74.74 0 000 .26V86c0 .41-.06.83-.06 1.25a5.51 5.51 0 00.1.91 3.73 3.73 0 00.09.46s0-.08.06-.12.08-.24.14-.35a7.94 7.94 0 00.39-.77.41.41 0 01.07-.15c0-.06.1-.11.14-.16a1 1 0 00.2-.3 2.1 2.1 0 00.1-.86v-.29-.3a1.76 1.76 0 00-.25-.62c-.13-.22-.28-.61-.56-.67s-.19.12-.21.23 0 .29 0 .44a3.16 3.16 0 01-.21.4z"
                    data-name="rocket-32"
                    transform="translate(-704.91 -14.62)"
                  ></path>
                  <path
                    d="M731.1 83.13c.06-.11.15-.31.31-.27s.16.26.14.38c0 .29-.41 0-.39-.2z"
                    data-name="rocket-31"
                    transform="translate(-704.91 -14.62)"
                  ></path>
                  <path
                    d="M733.94 85a.51.51 0 00-.07.34.32.32 0 00.34.26c.27 0 .45-.06.5-.33a.68.68 0 00-.2-.54.31.31 0 00-.22-.09c-.16 0-.24.11-.32.24z"
                    data-name="rocket-30"
                    transform="translate(-704.91 -14.62)"
                  ></path>
                  <path
                    d="M739.92 93.29a6.13 6.13 0 011.24-.45 11.3 11.3 0 011.16-.08 10.8 10.8 0 001.57-.36 2.85 2.85 0 011.39-.06 1.36 1.36 0 01.9.65 2 2 0 01.19.67v.32a1.08 1.08 0 010 .19c0 .1 0 .11-.14.11a.85.85 0 01-.49-.12 2.38 2.38 0 00-.83-.27c-.28 0-.55-.12-.83-.15l-.83-.11-.72-.1a5.52 5.52 0 00-.71 0h-1.24a2.72 2.72 0 00-.28 0 1.88 1.88 0 01-.38-.24z"
                    data-name="rocket-29"
                    transform="translate(-704.91 -14.62)"
                  ></path>
                  <path
                    d="M742.46 91.56c-.06 0-.14.09-.15.17a.48.48 0 000 .12c0 .18.34.19.48.19a1.66 1.66 0 001.15-.41.94.94 0 00.3-.78c-.07-.37-.48-.58-.82-.66a1.12 1.12 0 00-1 .17.54.54 0 00-.18.33 2.85 2.85 0 000 .29c0 .13-.06.25 0 .38a.57.57 0 00.22.2z"
                    data-name="rocket-28"
                    transform="translate(-704.91 -14.62)"
                  ></path>
                  <path
                    d="M744.85 91.59a.19.19 0 010-.21.2.2 0 01.22-.09.26.26 0 01.18.36.32.32 0 01-.26.15.27.27 0 01-.25-.18z"
                    data-name="rocket-27"
                    transform="translate(-704.91 -14.62)"
                  ></path>
                  <path
                    d="M747.93 82.92a.54.54 0 00-.31.24.2.2 0 000 .21 1.06 1.06 0 00.54.48.61.61 0 00.48 0 1.39 1.39 0 00.32-.32 2.37 2.37 0 00.23-.3.51.51 0 00.1-.59.7.7 0 00-.59-.31 1 1 0 00-.44.15.5.5 0 00-.33.44z"
                    data-name="rocket-26"
                    transform="translate(-704.91 -14.62)"
                  ></path>
                  <path
                    d="M747.13 83.81a.83.83 0 01.34.1s.06.08 0 .14-.18.07-.25.06A.35.35 0 01747 84s-.12-.13 0-.14z"
                    data-name="rocket-25"
                    transform="translate(-704.91 -14.62)"
                  ></path>
                  <path
                    d="M736.33 90.81c-.07.14-.16.29 0 .44s.35.1.5 0 .17-.08.18-.17a2.8 2.8 0 000-.29c0-.22.23-.38 0-.6a.51.51 0 00-.39-.14c-.22 0-.34.29-.42.48z"
                    data-name="rocket-24"
                    transform="translate(-704.91 -14.62)"
                  ></path>
                  <path
                    d="M718.22 99.09a1.31 1.31 0 00-.67.37v.1a.63.63 0 000 .52c.27.51.8.45 1.28.44s1.18.06.94-.66a2.18 2.18 0 00-.56-1.06c-.16-.11-.24-.06-.4 0a1.64 1.64 0 00-.61.29z"
                    data-name="rocket-23"
                    transform="translate(-704.91 -14.62)"
                  ></path>
                  <path
                    d="M724.14 99.9c.08-.14.19-.41.39-.44s.23.08.35.17.51.43.25.77a.75.75 0 01-.59.21c-.17 0-.46-.24-.4-.44z"
                    data-name="rocket-22"
                    transform="translate(-704.91 -14.62)"
                  ></path>
                  <path
                    d="M748.89 54.69c-.19.4-.21.42-.1.82a2 2 0 00.37.87c.29.3.7.23 1.07.31a.72.72 0 00.72-.12 2.76 2.76 0 00.64-.76 3.73 3.73 0 00.08-3.1 2.44 2.44 0 00-1.34-1.47 1.63 1.63 0 00-1.63.41 1.89 1.89 0 00-.39 1.65l.12.41a3.11 3.11 0 010 .53c.02.18.13.35.46.45z"
                    data-name="rocket-21"
                    transform="translate(-704.91 -14.62)"
                  ></path>
                  <path
                    d="M747.81 56.22c.38.3.32.25.38.63 0 .16.09.2.06.36a.58.58 0 01-.53.36c-.16 0-.41-.31-.47-.43a.42.42 0 010-.47z"
                    data-name="rocket-20"
                    transform="translate(-704.91 -14.62)"
                  ></path>
                  <path
                    d="M710.06 56.13c-.08.33-.19.71.17.93a.85.85 0 00.84-.16 2.24 2.24 0 00.69-1.22c0-.42-.45-.86-.83-.9-.77-.1-1.19 1.13-1.23 1.71z"
                    data-name="rocket-19"
                    transform="translate(-704.91 -14.62)"
                  ></path>
                  <path
                    d="M709.52 59.72c0-.1-.23-.36-.2-.47s.08-.07.1-.11a.6.6 0 01.39-.33.81.81 0 01.88.41.5.5 0 01-.06.63.62.62 0 01-.84 0z"
                    data-name="rocket-18"
                    transform="translate(-704.91 -14.62)"
                  ></path>
                  <path
                    d="M743.87 101.33a2.85 2.85 0 00-.12 1.76c.08.38.13.89.54 1 1 .4 1.69-1.66 1.88-2.31a4.35 4.35 0 00.11-1.76 2 2 0 00-.67-1.2 1 1 0 00-1.19.39c-.6.79-.45 1.8-.73 2.7z"
                    data-name="rocket-17"
                    transform="translate(-704.91 -14.62)"
                  ></path>
                  <path
                    d="M743.37 101.2a2.1 2.1 0 00-.68.15c-.11.07-.28.18-.31.3a.54.54 0 00.21.47.35.35 0 00.34.1c.08 0 .15-.15.21-.23a1.67 1.67 0 00.23-.44.88.88 0 00.1-.22c0-.12-.06-.17-.1-.27z"
                    data-name="rocket-16"
                    transform="translate(-704.91 -14.62)"
                  ></path>
                  <path
                    d="M742.84 106.22l.32.15c0 .13 0 .27-.1.36a.61.61 0 01-.4 0 .32.32 0 01-.23-.31c0-.17.16-.24.32-.26z"
                    data-name="rocket-15"
                    transform="translate(-704.91 -14.62)"
                  ></path>
                  <path
                    d="M728 113a.35.35 0 00.06.41.48.48 0 00.65.06 1.28 1.28 0 00.52-1.09c-.06-.23-.36-.51-.6-.37a2.09 2.09 0 00-.39.27 1.1 1.1 0 00-.24.68z"
                    data-name="rocket-14"
                    transform="translate(-704.91 -14.62)"
                  ></path>
                  <path
                    d="M739.83 33.8c-.11.1-.17.14-.19.28a.59.59 0 000 .47 1.75 1.75 0 001 .57.89.89 0 00.79-.15 1.16 1.16 0 00.51-.8.79.79 0 00-.33-.84 2.21 2.21 0 00-.89-.42.79.79 0 00-.7.21c-.17.16-.42.45-.19.68z"
                    data-name="rocket-13"
                    transform="translate(-704.91 -14.62)"
                  ></path>
                  <path
                    d="M742.34 34.92c0-.1 0-.2.09-.23a.65.65 0 01.46.18.51.51 0 01.13.35.34.34 0 01-.16.21.32.32 0 01-.36 0c-.08-.05-.28-.15-.25-.27z"
                    data-name="rocket-12"
                    transform="translate(-704.91 -14.62)"
                  ></path>
                  <path
                    d="M734.67 23a.71.71 0 00.09.41 1.71 1.71 0 00.54.53 1.57 1.57 0 00.94.28.64.64 0 00.5-.5 1.31 1.31 0 00-.22-.86 1.69 1.69 0 00-1.4-.71c-.61.08-.63.99-.45.85z"
                    data-name="rocket-11"
                    transform="translate(-704.91 -14.62)"
                  ></path>
                  <path
                    d="M737.32 25.19a.55.55 0 01-.14-.23c.09 0 .12-.14.22-.17a.37.37 0 01.29 0 .36.36 0 01.21.32c0 .16 0 .19-.18.26s-.11.07-.21 0a1.07 1.07 0 01-.19-.13z"
                    data-name="rocket-10"
                    transform="translate(-704.91 -14.62)"
                  ></path>
                </g>
                <g fillRule="evenodd" data-name="rocket-group-3">
                  <path
                    fill="url(#bb88d01f-ae96-4a0b-8ff4-a22210d5bddb)"
                    d="M717.33 95.55c0 .49-.29.89-.65.89s-.65-.4-.65-.89.3-.9.65-.9.65.4.65.9z"
                    data-name="rocket-9"
                    transform="translate(-704.91 -14.62)"
                  ></path>
                  <path
                    fill="#fff"
                    d="M717.2 95.55c0 .39-.23.7-.52.7s-.51-.31-.51-.7.23-.71.51-.71.52.32.52.71z"
                    data-name="rocket-8"
                    transform="translate(-704.91 -14.62)"
                  ></path>
                </g>
                <g data-name="rocket-group-2">
                  <ellipse
                    cx="37.64"
                    cy="79.05"
                    fill="url(#a3517b8d-d7a8-4d5a-89d0-96b0ede6eb7b)"
                    data-name="rocket-elli-3"
                    rx="0.72"
                    ry="0.9"
                  ></ellipse>
                  <path
                    fill="#fff"
                    fillRule="evenodd"
                    d="M743.12 93.68a.58.58 0 11-.56-.71.65.65 0 01.56.71z"
                    data-name="rocket-7"
                    transform="translate(-704.91 -14.62)"
                  ></path>
                </g>
                <g data-name="rocket-group-1">
                  <circle
                    cx="25.34"
                    cy="78.91"
                    r="0.9"
                    fill="url(#ba4d1c1a-99bd-4dbb-8294-fa2a230709c1)"
                    data-name="rocket-elli-2"
                  ></circle>
                  <path
                    fill="#fff"
                    fillRule="evenodd"
                    d="M731 93.54a.71.71 0 01-1.42 0 .71.71 0 011.42 0z"
                    data-name="rocket-6"
                    transform="translate(-704.91 -14.62)"
                  ></path>
                </g>
                <circle
                  cx="730.53"
                  cy="93.54"
                  r="5.22"
                  fill="url(#f365a936-8290-4262-861f-356011ee252e)"
                  data-name="rocket-elli-1"
                  transform="rotate(-66.43 366.96 624.505)"
                  style={{ mixBlendMode: "screen" }}
                ></circle>
                <path
                  fill="url(#bd96bca8-79ff-4adb-8c9a-177c6a01adbd)"
                  d="M755.55 45.57a4.17 4.17 0 11-5.4-2.38 4.18 4.18 0 015.4 2.38z"
                  data-name="rocket-5"
                  transform="translate(-704.91 -14.62)"
                  style={{ mixBlendMode: "screen" }}
                ></path>
                <path
                  fill="url(#e7fb2378-2b10-4ede-8f52-eec633bb3d4f)"
                  d="M733.29 17.29a4.17 4.17 0 11-5.4-2.38 4.17 4.17 0 015.4 2.38z"
                  data-name="rocket-4"
                  transform="translate(-704.91 -14.62)"
                  style={{ mixBlendMode: "screen" }}
                ></path>
                <path
                  fill="url(#b8971d96-1fcf-4616-9067-90cfaee7348f)"
                  d="M709.83 46a2.16 2.16 0 11-2.83-1.24 2.16 2.16 0 012.83 1.24z"
                  data-name="rocket-3"
                  transform="translate(-704.91 -14.62)"
                  style={{ mixBlendMode: "screen" }}
                ></path>
                <path
                  fill="url(#b398e9fe-292d-4f51-8be7-845b96392190)"
                  d="M744 93a2 2 0 11-2.61-1.15A2 2 0 01744 93z"
                  data-name="rocket-2"
                  transform="translate(-704.91 -14.62)"
                  style={{ mixBlendMode: "screen" }}
                ></path>
                <path
                  fill="url(#bb72127b-3c4e-4ed7-9994-661f40bbfa9c)"
                  d="M718.15 94.82a2 2 0 11-2.61-1.15 2 2 0 012.61 1.15z"
                  data-name="rocket-1"
                  transform="translate(-704.91 -14.62)"
                  style={{ mixBlendMode: "screen" }}
                ></path>
              </g>
              {/* //rocketsvg */}
              <g className="text-prgrammer">
                <text className="text">
                  I<tspan className="span">'</tspan>m a programmer
                </text>
              </g>
              <foreignObject width="100" height="100" className="foreinAvatar">
                <div xmlns="http://www.w3.org/1999/xhtml">
                  <div className="avatar-card">
                    <div className="box1-2">
                      <div className="imgBox1"></div>
                      <div className="imgBox2"></div>
                    </div>
                    <div class="avatar">
                      <img src={me} alt="Skytsunami" />
                    </div>
                  </div>
                </div>
              </foreignObject>
              <g className="text-design">
                <text className="textDes">
                  <tspan className="spanAlso">Also</tspan>
                  <tspan className="spanA"> a</tspan>
                  <tspan className="spanDesigner"> designer</tspan>
                </text>
              </g>
              <g id="right-moutin" fillRule="evenodd">
                <path
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_99-2)"
                  d="M415.71 347.52L440.93 249.29 446.57 238.22 454.93 238.22 476.34 220.66 470.16 348.6 429.57 347.52 415.71 347.52z"
                ></path>
                <path
                  style={{ mixBlendMode: "soft-light" }}
                  fill="#a5e5f6"
                  d="M446.57 238.22L440.93 249.29 427.45 301.81 433.86 317.22 449.92 272.87 446.57 238.22z"
                  opacity="0.5"
                ></path>
                <path
                  style={{ mixBlendMode: "soft-light" }}
                  fill="#a5e5f6"
                  d="M454.93 238.22L452.33 251.19 452.33 272.87 448.08 298.27 465.23 281.02 470.6 225.37 454.93 238.22z"
                  opacity="0.5"
                ></path>
                <path
                  style={{ mixBlendMode: "soft-light" }}
                  fill="#a5e5f6"
                  d="M429.57 347.52L442.59 305.72 454.79 293.82 466.93 287.36 454.79 347.52 429.57 347.52z"
                  opacity="0.5"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="#362072"
                  d="M433.86 317.22L427.29 347.52 429.57 347.52 442.59 305.72 448.69 299.76 448.08 298.27 452.33 272.87 452.33 251.19 454.93 238.22 446.57 238.22 449.92 272.87 433.86 317.22z"
                  opacity="0.3"
                ></path>
                <path
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_231)"
                  d="M600.31 129.35L586.91 147.96 574.27 142.45 567.6 145.13 540.47 169.77 531.56 166.6 498.33 172.72 498.33 178.53 477 190.49 471.5 272.49 465.35 346.83 480.5 355.35 481.75 359.35 580.5 368.85 613.28 216.25 600.31 129.35z"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_149-10)"
                  d="M574.27 142.45L576.09 228.77 572.5 263.83 562.57 296.12 554.08 302.2 540.47 169.77 531.56 166.6 541.33 199.46 546 241.27 546 303.6 534.1 364.39 541.34 364.67 557.38 306.52 574.17 275.98 582.03 260.82 586.25 275.6 580.5 322.1 577 324.44 572.5 365.88 580.5 365.88 604.51 256.43 611.57 155.62 600.31 129.35 586.91 147.96 574.27 142.45z"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_149-11)"
                  d="M498.33 178.53L491.33 278.35 488.67 282.15 481.75 359.35 480.5 355.35 476.34 353.85 487.34 280.43 493.75 199.46 495.67 196.38 496.88 179.34 498.33 178.53z"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_149-12)"
                  d="M546 246.43L542.33 246.43 531.56 252.85 508.99 276.48 491.33 278.35 491.5 275.98 503.83 275.98 508.5 273.27 533.25 249.1 545.13 233.48 545.75 239.6 546 246.43z"
                ></path>
                <path
                  fill="#8b89a4"
                  d="M491.33 278.35L488.67 282.15 481.75 359.35 485.92 359.72 512.95 362.13 506.91 282.15 497.35 278.35 491.33 278.35z"
                  opacity="0.2"
                ></path>
                <path
                  fill="#8b89a4"
                  d="M491.5 275.98L498.33 172.72 519.25 168.87 518.15 205.76 512.95 235.68 503.83 275.98 491.5 275.98z"
                  opacity="0.2"
                ></path>
                <path
                  fill="#8b89a4"
                  d="M545.13 233.48L541.33 199.46 531.56 166.6 527.65 167.32 523.52 258.6 533.25 249.1 545.13 233.48z"
                  opacity="0.2"
                ></path>
                <path
                  fill="#8b89a4"
                  d="M554.08 302.2L549.11 253.82 551.6 224.14 565.77 194.14 574.17 181.52 575.03 178.53 576.09 228.77 572.5 263.83 562.57 296.12 554.08 302.2z"
                  opacity="0.2"
                ></path>
                <path
                  fill="#8b89a4"
                  d="M551.49 327.85L580.5 322.1 582.03 292.98 586.25 275.6 582.03 260.82 557.38 306.52 551.49 327.85z"
                  opacity="0.2"
                ></path>
                <path
                  fill="#7f609c"
                  d="M562.57 325.65L577 324.44 580.5 322.1 562.57 325.65z"
                ></path>
                <path
                  fill="#7f609c"
                  d="M488.67 282.15L508.99 276.48 491.33 278.35 488.67 282.15z"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_149-13)"
                  d="M542.33 246.43L531.56 252.85 531.56 249.85 545.13 233.48 541.33 199.46 542.76 192.1 553.13 292.98 546 294.33 546 246.43 542.33 246.43z"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_149-14)"
                  d="M576.09 228.77L574.27 142.45 586.91 147.96 590.52 178.53 590.52 230.1 582.03 260.82 576.09 269.71 572.5 263.83 576.09 228.77z"
                ></path>
                <path
                  fill="#8b89a4"
                  d="M476.34 353.85L485.39 293.46 481.75 282.15 469.97 296.12 465.35 346.83 476.34 353.85z"
                  opacity="0.2"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_149-15)"
                  d="M519.25 168.87L518.51 193.65 518.15 205.76 512.95 238.1 519.25 204.77 521.33 173.77 523.52 168.08 519.25 168.87z"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_149-16)"
                  d="M546 298.35L528.75 308.77 497.35 322.1 484.88 324.44 484.57 327.85 486.33 325.65 502.92 323.88 545.13 300.6 546 301.85 546 298.35z"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_149-17)"
                  d="M546 301.85L552.25 305.85 557.38 306.52 559.7 302.2 556.88 304.18 546 298.35 546 301.85z"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_149-18)"
                  d="M497.35 322.1L502.92 323.88 521.5 313.63 521.5 311.84 497.35 322.1z"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_149-19)"
                  d="M574.17 181.52L545.13 204.56 543.75 201.52 544.55 209.51 545.13 206.08 572.98 183.3 575.16 184.75 574.99 176.85 574.17 181.52z"
                ></path>
                <path
                  style={{ mixBlendMode: "soft-light" }}
                  fill="#a6aeb8"
                  d="M609.08 194.14L590.52 203.09 575.16 203.09 553.13 212.6 545.75 219.1 543.53 219.1 515.29 227.68 506.1 229.77 494 237.87 490.68 238.22 473.36 244.77 473.17 247.61 490.51 240.37 493.8 241.27 507 234.35 543.75 223.72 546 223.58 551.49 219.47 575.63 211.6 590.52 212.6 611.76 206.08 609.08 194.14z"
                ></path>
                <path
                  style={{ mixBlendMode: "soft-light" }}
                  fill="#a6aeb8"
                  d="M612.71 210.76L590.52 216.27 576.09 216.27 546.42 227.68 543.75 227.68 493.38 247.61 489.94 247.61 472.82 252.77 472.52 257.22 489.82 249.1 493.19 250.46 544.72 229.77 546.67 230.1 575.16 220.66 590.52 219.6 613.28 216.25 612.71 210.76z"
                ></path>
                <path
                  fill="#8b89a4"
                  d="M477 190.49L471.5 272.49 471.5 290.26 487.34 222.42 491.33 182.45 477 190.49z"
                  opacity="0.2"
                ></path>
                <path
                  fill="#604b88"
                  d="M515.82 303.6L518.23 292.87 521.5 290.26 518.23 301.85 515.82 303.6z"
                ></path>
                <path
                  fill="#604b88"
                  d="M521.5 288.98L521.5 283.6 522.75 280.6 522.13 288.03 521.5 288.98z"
                ></path>
                <path
                  fill="#604b88"
                  d="M523.52 290.26L524.88 288.98 525.63 290.26 523.52 290.26z"
                ></path>
                <path
                  fill="#604b88"
                  d="M527.33 327.85L530.67 322.1 532.28 320.24 530.67 326.78 527.33 327.85z"
                ></path>
                <path
                  fill="#604b88"
                  d="M502.05 178.53L502.05 186.27 503.94 184.1 503 176.85 502.05 178.53z"
                ></path>
                <path
                  fill="#604b88"
                  d="M530.67 201.35L532.28 207.22 534.33 208.95 531.56 200.1 530.67 201.35z"
                ></path>
                <path
                  fill="#604b88"
                  d="M531.56 208.02L529.75 210.76 531.56 211.77 533.93 211.77 533.87 209.89 531.56 208.02z"
                ></path>
                <path
                  fill="#604b88"
                  d="M562.6 278.35L565 272.1 567.25 272.1 564.92 277.72 562.6 278.35z"
                ></path>
                <path
                  fill="#604b88"
                  d="M587.83 258.6L589.33 252.43 592.71 248.19 587.83 258.6z"
                ></path>
                <path
                  fill="#604b88"
                  d="M551.49 354.31L552.85 347.35 554.08 355.85 552.79 355.85 551.49 354.31z"
                ></path>
                <path
                  fill="#604b88"
                  d="M554.08 345.27L556 340.73 556 345.27 555.04 347.52 554.08 345.27z"
                ></path>
                <path
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_56)"
                  d="M800 0.1L800 400.1 580.5 400.1 580.5 347.35 587 303.92 588.45 294.24 592.81 265.1 596.07 260.43 599.28 230.23 599.33 229.77 600.08 229.16 601.52 227.98 602.18 227.43 602.19 226.38 602.24 217.88 602.26 213.35 602.29 208.99 602.36 197.38 602.58 161.1 600.21 129.49 599.33 117.77 615.2 108.77 631.08 98.77 639.62 85.43 643.29 82.43 653.46 82.43 653.46 66.1 656.72 66.1 682.77 40.01 682.77 40 697.24 25.51 697.56 25.19 702.31 20.43 702.33 13.64 708.82 11.1 741.39 10.43 749.93 5.1 765.81 0.1 800 0.1z"
                ></path>
                <path
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_136)"
                  d="M653.46 82.43L653.46 99.1 610.42 225.6 610.42 231.85 599.43 277.6 599.43 298.6 599.43 305.1 585.38 353.85 580.5 400.1 580.5 347.35 592.81 265.1 596.07 260.43 599.33 229.77 602.17 227.43 602.58 161.1 599.33 117.77 631.08 98.77 639.62 85.43 643.29 82.43 653.46 82.43z"
                ></path>
                <path
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_128)"
                  d="M592.71 367.85L622.93 319.6 632.09 309.6 641.25 290.1 646.14 283.6 653.46 244.6 666.9 235.6 682.77 184.1 705.36 137.1 713.3 72.1 702.31 20.43 656.72 66.1 653.46 66.1 653.46 99.1 610.42 225.6 610.42 231.85 599.43 277.6 599.43 305.1 585.38 353.85 593.02 355.35 592.71 367.85z"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_149-20)"
                  d="M607.45 385L623.75 351.77 649.34 329.43 653.46 315.77 646.54 301.77 662.42 257.22 677.48 249.43 683.59 241.27 697.02 184.77 705.97 161.1 704.03 139.87 705.36 137.1 708.82 163.43 708.82 169.77 686.43 237.43 666.08 326.78 649.34 390.56 607.45 385z"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_149-21)"
                  d="M699.15 393.99L708.82 344.32 733.45 301.77 737.72 284.6 733.45 230.1 737.72 169.77 713.3 149.1 705.82 133.32 706.58 127.1 708.82 136.1 716.15 148.77 744.74 169.77 748.71 175.85 739.86 297.1 724.75 330.85 722.15 342.35 718.05 394.54 699.15 393.99z"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_149-22)"
                  d="M708.82 11.1L720.63 30.1 729.78 57.1 740.77 118.77 748.71 161.1 744.44 108.1 740.16 25.6 741.38 10.43 708.82 11.1z"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_149-23)"
                  d="M800 0.1L800 396.92 791.4 396.67 791.38 396.56 791.37 396.56 784.87 367.85 783.88 363.47 777.61 335.77 777.77 332.35 779.21 301.85 779.21 301.84 779.53 295.03 779.53 294.92 779.86 288.03 779.86 287.92 781.39 255.39 781.53 252.31 782.2 238.1 782.49 232.04 782.9 223.27 790.5 138.61 790.64 137.1 782.61 92.81 775.28 52.35 773.51 42.6 772.61 37.61 771.38 30.86 765.81 0.1 800 0.1z"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_149-24)"
                  d="M702.31 20.43L697.56 25.19 702.31 68.88 692.95 153.77 678.29 188.12 666.9 223.27 658.82 220.1 644.51 226.94 632.3 230.1 616.98 230.1 609.08 237.43 616.98 232.1 623.54 233.27 646.34 239.77 649.34 241.27 640.34 285.6 637.71 297.64 641.25 290.1 646.14 283.6 653.46 244.6 666.9 235.6 682.77 184.1 705.36 137.1 713.3 72.1 702.31 20.43z"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_149-25)"
                  d="M635.86 150.84L640.34 152.35 661.19 139.6 670.86 128.85 676.05 116.35 680.94 110.1 694.98 92.6 700.78 82.72 696.2 93.93 688.06 106.1 670.97 132.93 653.46 149.93 637.59 159.04 634.95 153.51 635.86 150.84z"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_149-26)"
                  d="M643.29 82.43L643.29 101.43 643.29 109.27 635.88 130.88 634.95 127.1 633.52 110.6 631.08 98.77 622.35 105.05 626.47 137.1 625.5 167.9 628.84 149.43 635.88 130.88 634.95 133.6 628.84 149.43 620.36 196.38 653.46 99.1 653.46 82.43 643.29 82.43z"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_149-27)"
                  d="M611.57 222.2L607.26 228.6 599.12 270.93 596.27 281.27 596.27 296.43 590.98 309.43 589.15 309.43 588.45 294.24 587 303.92 588.13 307.1 589.15 311.27 593.22 315.1 590.78 335.13 582.03 351.77 585.38 353.85 599.43 305.1 599.43 277.6 610.42 231.85 610.42 225.6 611.57 222.2z"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_149-28)"
                  d="M699.15 393.99L708.82 344.32 679.92 312.23 670.7 306.52 666.08 326.78 649.34 390.56 607.45 385 623.75 351.77 649.34 329.43 653.46 315.77 646.54 301.77 662.42 257.22 671.78 271.46 675.85 271.46 677.48 249.43 683.59 241.27 697.02 184.77 708.82 169.77 684.76 244.77 673 301.43 679.51 308.43 715.75 332.35 733.45 301.77 737.72 284.6 733.77 234.23 744.75 230.1 739.86 297.1 724.75 330.85 718.05 394.54 699.15 393.99z"
                ></path>
                <path
                  fill="#5c367d"
                  d="M607.45 344.32L616.98 351.77 623.75 351.77 649.34 329.43 653.46 315.77 632.09 309.6 622.93 319.6 607.45 344.32z"
                  opacity="0.5"
                ></path>
                <path
                  fill="#5c367d"
                  d="M662.42 257.22L653.46 244.6 666.9 235.6 681.55 230.1 683.59 231.77 683.59 241.27 677.48 249.43 662.42 257.22z"
                  opacity="0.5"
                ></path>
                <path
                  fill="#8b89a4"
                  d="M638.16 237.43L616.98 232.1 609.08 237.43 599.43 277.6 599.43 305.1 585.38 353.85 593.02 352.04 600.95 346.56 630.46 305.35 637.71 297.64 648.86 243.6 649.34 241.27 638.16 237.43z"
                  opacity="0.2"
                ></path>
                <path
                  fill="#726da7"
                  d="M673 301.43L708.82 169.77 713.3 159.04 716.96 154.43 737.72 169.77 733.45 230.1 737.72 282.85 733.45 301.77 715.75 332.35 679.51 308.43 673 301.43z"
                  opacity="0.2"
                ></path>
                <path
                  fill="#726da7"
                  d="M724.75 330.85L744.75 338.74 777.77 332.35 779.86 288.03 779.86 253.19 744.22 237.43 739.86 297.1 724.75 330.85z"
                  opacity="0.2"
                ></path>
                <path
                  fill="#726da7"
                  d="M706.58 127.1L713.3 72.1 702.31 20.43 702.33 13.64 708.82 11.1 720.63 30.1 729.78 57.1 744.75 161.1 742.2 164.93 716.15 148.77 708.82 132.43 706.58 127.1z"
                  opacity="0.2"
                ></path>
                <path
                  fill="#81462f"
                  d="M741.38 10.43L741.38 43.77 748.71 188.42 782.9 223.27 790.64 137.1 765.81 0.1 741.38 10.43z"
                  opacity="0.2"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_149-29)"
                  d="M593.02 355.35L592.71 367.85 607.45 344.32 622.93 319.6 632.09 309.6 641.25 290.1 646.14 283.6 653.46 244.6 666.9 235.6 682.77 184.1 677.89 190.93 666.9 223.27 658.82 220.1 644.51 226.94 632.3 230.1 616.98 230.1 630.46 233.27 640.5 238.1 649.34 241.27 637.71 297.64 630.46 305.35 600.95 346.56 593.02 352.04 593.02 355.35z"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_149-30)"
                  d="M640.34 152.35L645.62 154.43 653.46 149.93 670.97 132.93 676.49 115.79 670.86 128.85 661.19 139.6 640.34 152.35z"
                ></path>
                <path
                  fill="#b33a4a"
                  d="M716.96 154.43L713.3 159.04 708.82 169.77 683.23 263.83 700.78 275.98 708.82 268.57 723.93 226.94 724.75 161.1 716.96 154.43z"
                  opacity="0.2"
                ></path>
                <path
                  fill="#b33a4a"
                  d="M736.4 188.42L731.62 192.05 728.77 222.2 728.77 232.77 734.32 241.27 733.45 230.1 736.4 188.42z"
                  opacity="0.2"
                ></path>
                <path
                  fill="#5c367d"
                  d="M649.34 390.56L670.7 306.52 679.92 312.23 708.82 344.32 699.15 393.99 668.52 393.1 649.34 390.56z"
                  opacity="0.5"
                ></path>
                <path
                  fill="#8b89a4"
                  d="M610.42 225.6L616.98 230.1 632.3 230.1 661.19 192.05 670.97 132.93 653.46 149.93 637.59 159.04 634.95 153.51 610.42 225.6z"
                  opacity="0.2"
                ></path>
                <path
                  fill="#8b89a4"
                  d="M676.1 124.88L680.8 182.24 692.95 153.77 700.78 82.72 696.2 93.93 676.1 124.88z"
                  opacity="0.2"
                ></path>
                <path
                  fill="#8b89a4"
                  d="M635.86 150.84L653.46 99.1 661.19 85.77 679.11 78.43 683.59 85.77 676.49 115.79 670.86 128.85 661.19 139.6 640.34 152.35 635.86 150.84z"
                  opacity="0.2"
                ></path>
                <path
                  fill="#8b89a4"
                  d="M682.77 39.93L682.77 76.35 686.13 85.77 694.07 85.77 702.31 68.88 697.56 25.19 682.77 39.93z"
                  opacity="0.2"
                ></path>
                <path
                  fill="#5c367d"
                  d="M741.38 10.43L744.44 108.1 748.71 188.42 782.9 223.27 790.64 137.1 765.81 0.1 749.93 5.1 741.38 10.43z"
                  opacity="0.5"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_149-31)"
                  d="M800 274.41L800 282.15 785.16 260.82 785.16 260.8 782.9 257.57 781.39 255.39 779.86 253.19 763.15 245.8 763.14 245.8 761.61 245.12 760.8 244.76 744.22 237.43 745.89 238.09 745.89 238.1 760.86 244.06 761.68 244.39 763.49 245.11 764.16 245.38 781.53 252.31 781.54 252.31 782.9 252.85 800 274.41z"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_149-32)"
                  d="M779.53 295.02L776.8 298.9 741.38 296.96 740.15 293.11 739.86 297.1 738.21 300.79 740.88 298.35 777.51 300.79 779.21 301.85 779.53 295.02z"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_149-33)"
                  d="M741.98 55.48L770.54 33.85 771.38 30.86 772.61 37.61 771.15 35.73 743.83 55.48 741.84 59.6 741.98 55.48z"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_149-34)"
                  d="M781.33 85.77L780.31 88.85 744.75 94.97 743.67 93.1 743.98 99.85 744.75 96.72 781.33 91.1 782.61 92.81 781.33 85.77z"
                ></path>
                <path
                  fill="#8b89a4"
                  d="M666.9 223.27L658.82 220.1 661.19 206.85 670.97 189.1 679.08 186.27 666.9 223.27z"
                  opacity="0.2"
                ></path>
                <path
                  fill="#8b89a4"
                  d="M616.98 232.1L609.08 237.43 607.45 259.79 612.22 290.26 621.71 306.52 628.25 308.43 630.46 305.35 637.71 297.64 649.34 241.27 616.98 232.1z"
                  opacity="0.2"
                ></path>
                <path
                  fill="#8b89a4"
                  d="M599.43 305.1L601.57 301.85 611.57 322.1 609.08 335.17 600.95 346.56 593.02 352.04 585.38 353.85 599.43 305.1z"
                  opacity="0.2"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_149-35)"
                  d="M800 376.93L800 396.92 791.4 396.67 791.38 396.56 785.31 367.95 784.36 363.47 777.77 332.35 779.21 301.85 779.21 301.84 776.8 298.9 779.53 295.03 779.53 294.92 779.86 253.19 781.53 252.31 781.54 252.31 782.21 238.1 782.49 232.04 782.9 223.27 782.9 252.85 785.16 260.8 785.16 260.82 782.9 257.57 782.9 306.52 792.67 357.1 795.02 363.47 795.03 363.47 797.66 370.6 800 376.93z"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_149-36)"
                  d="M771.15 35.73L772.61 37.61 781.33 85.77 780.31 88.85 782.61 92.81 790.64 139.41 790.64 115.79 780.89 65.85 777.41 10.43 778.33 0.1 765.81 0.1 771.38 30.86 771.15 35.73z"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_149-37)"
                  d="M720.63 30.1L740.5 21.4 743.01 75.1 729.78 57.1 720.63 30.1z"
                ></path>
                <path
                  fill="#5c367d"
                  d="M713.3 72.1L731.1 66.27 744.75 161.1 742.2 164.93 716.15 148.77 706.58 127.1 713.3 72.1z"
                  opacity="0.5"
                ></path>
                <path
                  style={{ mixBlendMode: "soft-light" }}
                  fill="#8897c0"
                  d="M800 234.23L800 244.77 782.9 238.36 782.21 238.1 782.2 238.1 768.74 236.73 767.79 236.63 762.41 236.08 761.49 235.99 744.45 234.25 744.43 234.25 744.22 234.23 742.58 233.12 740.49 231.7 733.66 227.08 733.45 226.94 728.77 227.65 723.38 228.46 691.55 233.27 690.25 238.03 687.69 235.63 687.18 235.15 685.43 233.5 683.58 231.77 681.55 230.1 666.9 235.6 669.56 226.94 686.99 226.94 689.63 227.77 690.16 227.94 692.77 228.77 693.77 225.1 723.98 222.92 728.77 222.58 734.01 222.2 739.28 224.48 741.01 225.22 744.98 226.94 762.01 229.26 763 229.39 770.92 230.47 771.97 230.61 782.49 232.04 782.9 232.1 800 234.23z"
                ></path>
                <path
                  style={{ mixBlendMode: "soft-light" }}
                  fill="#8897c0"
                  d="M800 364.85L800 376.93 797.66 370.6 785.31 367.95 784.87 367.85 779.78 368.07 776.8 368.2 720.57 370.6 719.95 370.38 704.77 365.12 703.99 364.85 655.87 364.85 655.38 364.53 655.24 364.45 654.23 363.79 653.12 363.07 652.29 362.53 650.79 361.57 628.81 347.35 609.08 341.72 610.95 338.74 632.28 344.32 651.31 351.33 652.79 351.88 654.11 352.37 656.02 353.07 656.17 353.13 657.63 353.66 658.14 353.85 658.65 353.92 658.7 353.93 658.94 353.97 665.39 354.91 665.74 354.96 670.94 355.73 672.1 355.9 674.12 356.19 676.83 356.59 678.81 356.88 691.13 358.68 692.73 358.92 705.36 360.77 705.6 360.84 720.38 364.85 721.18 364.83 776.8 363.62 778.94 363.58 783.88 363.47 795.03 363.47 800 364.85z"
                ></path>
                <path
                  style={{ mixBlendMode: "soft-light" }}
                  fill="#8897c0"
                  d="M800 42.6L800 52.35 775.28 52.35 743.13 66.05 742.6 66.27 742.53 66.25 742.26 66.17 734.74 63.85 730.76 62.62 730.7 62.6 730.57 62.61 730.5 62.62 711.65 64.32 712.06 66.27 702.31 68.88 682.77 74.11 679.08 75.1 661.19 85.77 654.46 97.38 654.46 92.81 661.19 82.43 679.08 72.71 682.77 70.53 701.3 59.6 710.64 59.6 709.76 55.48 726.71 48.47 726.84 48.41 727.23 48.25 741.57 52.72 741.84 52.81 741.85 52.81 741.97 52.77 742.7 52.53 748.22 50.75 752.09 49.51 773.51 42.6 800 42.6z"
                ></path>
                <path
                  fill="#8b3386"
                  d="M706.58 127.1L713.3 72.1 702.31 20.43 702.33 13.64 708.82 11.1 719.57 28.41 729.78 57.1 731.82 72.71 727.23 72.71 727.23 69.99 723.53 69.99 720.63 118.42 718.75 120.88 720.63 82.72 717.06 85.77 716.15 148.77 706.58 127.1z"
                  opacity="0.5"
                ></path>
                <path
                  fill="#8b3386"
                  d="M748.71 188.42L744.75 96.72 758.92 94.55 765.81 177.6 769.47 178.1 765.81 140.1 769.47 139.41 772.61 193.65 775.27 194.14 779.53 113.69 785.24 107.34 790.64 137.1 782.9 223.27 748.71 188.42z"
                  opacity="0.2"
                ></path>
                <path
                  fill="#6d335b"
                  d="M635.86 150.84L640.34 152.35 661.19 139.6 668.52 113.43 664.29 113.43 654.46 135.11 649.34 137.1 664.29 90.1 661.19 85.77 654.46 97.38 635.86 150.84z"
                  opacity="0.83"
                ></path>
                <path
                  fill="#5b3762"
                  d="M658.82 220.1L661.19 206.85 670.97 189.1 669.9 139.41 666.9 142.6 661.19 192.05 658.41 196.38 662.71 146.77 661.19 148.77 653.46 202.22 640.69 219.04 617.36 220.1 611.21 223.27 610.42 225.6 616.98 230.1 632.3 230.1 643.58 227.18 658.82 220.1z"
                  opacity="0.81"
                ></path>
                <path
                  fill="#8b3386"
                  d="M738.21 300.79L724.75 330.85 744.75 338.74 763.2 335.17 767.69 300.14 766.01 300.14 761.69 332.35 758.87 333.35 763.38 299.85 747.8 298.81 736.4 329.23 733.45 329.23 742.3 298.81 740.88 298.35 738.21 300.79z"
                  opacity="0.2"
                ></path>
                <path
                  fill="#8b3386"
                  d="M723.53 298.9L725.67 288.03 725.67 297.48 723.53 298.9z"
                  opacity="0.2"
                ></path>
                <path
                  fill="#8b3386"
                  d="M717.06 310.1L720.01 306.52 717.06 318.55 708.82 319.9 717.06 310.1z"
                  opacity="0.2"
                ></path>
                <path
                  fill="#8b3386"
                  d="M696.57 351.03L695.17 347.99 696.57 344.96 699.73 349.37 696.57 351.03z"
                  opacity="0.2"
                ></path>
                <path
                  fill="#8b3386"
                  d="M673 301.43L683.23 263.83 676.49 305.19 673 301.43z"
                  opacity="0.2"
                ></path>
                <path
                  fill="#8b3386"
                  d="M767.69 275.6L765.81 263.83 769.01 258.6 767.69 275.6z"
                  opacity="0.5"
                ></path>
                <path
                  fill="#8b3386"
                  d="M769.01 274.98L770.69 271.6 772.11 273.29 770.56 274.98 769.01 274.98z"
                  opacity="0.2"
                ></path>
                <path
                  fill="#8b3386"
                  d="M708.82 198.51L713.3 186.27 717.06 193.65 712.94 200.1 708.82 198.51z"
                  opacity="0.5"
                ></path>
                <path
                  fill="#8b3386"
                  d="M628.4 326.78L634.95 322.17 643.69 322.1 634.95 326.78 628.4 326.78z"
                  opacity="0.2"
                ></path>
                <path
                  fill="#8b3386"
                  d="M634.95 336.43L636.04 333.6 639.22 333.6 634.95 336.43z"
                  opacity="0.2"
                ></path>
                <path
                  fill="#8b89a4"
                  d="M599.33 117.77L602.58 161.1 602.58 204.91 616.98 190.49 626.47 137.1 622.35 105.05 599.33 117.77z"
                  opacity="0.2"
                ></path>
                <path
                  fill="#7f609c"
                  d="M599.33 229.77L607.26 228.6 610.42 225.6 602.17 227.43 599.33 229.77z"
                ></path>
                <path
                  fill="#7f609c"
                  d="M592.81 265.1L596.8 268.94 596.07 260.43 592.81 265.1z"
                ></path>
                <path
                  fill="#7f609c"
                  d="M616.98 232.1L609.08 237.43 630.46 238.1 649.34 241.27 616.98 232.1z"
                ></path>
                <path
                  fill="#8b3386"
                  d="M663.67 347.52L668.52 332.35 668.95 342 663.67 347.52z"
                  opacity="0.2"
                ></path>
                <path
                  fill="#8b3386"
                  d="M688.44 350.25L688.44 345.27 695.67 350.72 688.44 350.25z"
                  opacity="0.2"
                ></path>
                <path
                  fill="#8b3386"
                  d="M736.4 356.28L736.4 350.72 741.38 347.99 736.4 356.28z"
                  opacity="0.2"
                ></path>
                <path
                  fill="#8b3386"
                  d="M782.9 384.73L776.8 352.13 776.8 370.79 782.9 384.73z"
                  opacity="0.2"
                ></path>
                <path
                  fill="#8b3386"
                  d="M757.23 79.93L757.23 67.77 760.25 69.99 760.25 79.93 757.23 79.93z"
                  opacity="0.5"
                ></path>
                <path
                  fill="#8b3386"
                  d="M763.14 82.43L765.81 82.43 765.81 88.02 763.14 82.43z"
                  opacity="0.5"
                ></path>
                <path
                  fill="#462a58"
                  d="M633 200.1L634.95 192.1 635.86 200.1 633 200.1z"
                  opacity="0.81"
                ></path>
                <path
                  fill="#8b3386"
                  d="M645 193.18L640.34 199.46 637.74 209.51 645 193.18z"
                ></path>
                <path
                  fill="#6d335b"
                  d="M668.95 111.68L673 102.89 670.97 115.79 668.95 111.68z"
                ></path>
                <path
                  fill="#8b3386"
                  d="M724.66 123.55L724.66 135.15 722.4 127.29 724.66 123.55z"
                ></path>
                <path
                  fill="#8b3386"
                  d="M756.15 33.96L756.15 20.43 758.87 14.77 760.25 36.1 756.15 33.96z"
                  opacity="0.2"
                ></path>
                <path
                  fill="#8b3386"
                  d="M761.75 37.23L761.75 32.16 763.06 30.86 764.81 37.23 762.5 38.6 761.75 37.23z"
                  opacity="0.2"
                ></path>
                <path
                  fill="#8b3386"
                  d="M713.3 184.75L714.67 178.53 716.5 182.24 713.3 184.75z"
                ></path>
                <path
                  fill="#8b3386"
                  d="M705.36 258.6L706.58 254.1 706.58 259.79 703.99 260.82 705.36 258.6z"
                ></path>
                <path
                  fill="#8b3386"
                  d="M713.3 310.1L717.13 305.19 717.13 300.23 713.3 310.1z"
                ></path>
                <path
                  fill="#462a58"
                  d="M618.67 272.1L621.83 261.82 621.83 269.71 618.67 272.1z"
                  opacity="0.81"
                ></path>
                <path
                  fill="#462a58"
                  d="M623 272.1L621.83 279.31 624.17 273.77 623 272.1z"
                  opacity="0.81"
                ></path>
                <path
                  fill="#462a58"
                  d="M668.52 104.1L670.13 95.47 668.52 98.6 668.52 104.1z"
                  opacity="0.81"
                ></path>
                <path
                  fill="#604b88"
                  d="M609.08 129.35L609.08 137.1 611.76 142.21 609.08 129.35z"
                ></path>
                <path
                  fill="#604b88"
                  d="M609.08 142.21L610.42 143.97 609.75 147.1 609.08 142.21z"
                ></path>
                <path
                  fill="#604b88"
                  d="M601.25 238.1L601.25 249.1 602.63 244.77 601.25 238.1z"
                ></path>
                <path
                  fill="#604b88"
                  d="M602.63 236.36L604.87 231.35 603.75 235.68 602.63 236.36z"
                ></path>
                <path
                  fill="#604b88"
                  d="M615.88 162.35L614.38 173.1 615.88 177.72 617.75 176.85 617.75 161.1 615.88 162.35z"
                ></path>
                <path
                  fill="#604b88"
                  d="M617.75 159.04L617.75 154.43 619.5 152.35 618.63 159.04 617.75 159.04z"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="#401469"
                  d="M800 0.1L800 400.1 580.5 400.1 580.5 368.85 580.05 368.81 562.39 367.11 560.68 366.94 538.53 364.82 535.6 364.54 535.6 364.53 534.09 364.39 534 364.38 533.99 364.38 532.39 364.23 530.53 364.05 515.76 362.62 514.58 362.51 497.02 360.82 496.98 360.82 481.75 359.35 480.5 355.35 476.34 353.85 473.85 352.26 473.3 351.9 473.29 351.9 472.13 351.15 471.59 350.81 471.1 350.5 470.64 350.21 470.64 350.2 470.4 350.05 468.05 348.54 468.03 348.54 464.92 348.46 464.29 348.44 464.21 348.44 453.83 348.16 453.45 348.15 453.17 348.15 452.47 348.13 451.96 348.11 451.7 348.11 451.3 348.1 451.29 348.1 450.1 348.06 448.71 348.03 446.3 347.96 445.67 347.95 441.96 347.85 441.3 347.83 433.19 347.62 429.57 347.52 415.71 347.52 416.25 345.41 416.26 345.4 416.95 342.68 416.97 342.61 416.97 342.6 417.01 342.46 417.42 340.86 417.46 340.72 417.52 340.46 417.54 340.38 417.66 339.95 417.66 339.93 417.72 339.71 419.91 331.17 419.91 331.15 420.59 328.51 420.59 328.5 421.33 325.65 421.42 325.3 427.23 302.67 427.23 302.65 427.45 301.81 440.93 249.29 442.48 246.24 444.01 243.24 446.57 238.22 454.93 238.22 461.51 232.82 470.6 225.37 472.23 224.03 473.17 223.26 474.46 222.2 474.89 221.85 474.9 221.84 475.55 212.15 475.55 212.13 477 190.49 483.53 186.83 491.33 182.45 493.45 181.26 496.88 179.34 497.48 179.01 497.48 179 497.93 178.75 498.33 172.72 499.22 172.56 511.75 170.25 511.77 170.25 519.25 168.87 523.52 168.08 527.65 167.32 531.56 166.6 540.47 169.77 567.6 145.13 574.27 142.45 586.91 147.96 600.21 129.49 599.33 117.77 631.08 98.77 639.62 85.43 643.29 82.43 653.46 82.43 653.46 66.1 656.72 66.1 682.77 40.01 682.77 39.93 697.24 25.51 697.56 25.19 702.31 20.43 702.33 13.64 708.82 11.1 741.39 10.43 749.93 5.1 765.81 0.1 800 0.1z"
                  opacity="0.58"
                ></path>
                <path
                  fill="#a2bbff"
                  d="M765.81 0.1L749.93 5.1 741.38 10.43 708.82 11.1 702.33 13.64 702.31 20.43 697.56 25.19 656.72 66.1 653.46 66.1 653.46 82.43 643.29 82.43 639.62 85.43 631.08 98.77 599.33 117.77 600.31 129.35 586.91 147.96 574.27 142.45 567.6 145.13 540.47 169.77 531.56 166.6 498.33 172.72 498.33 178.53 477 190.49 474.46 222.2 454.93 238.22 446.57 238.22 440.93 249.29 421.33 325.65 440.13 248.19 446.03 236.36 454.93 236.79 473.93 220.88 476.34 189.52 497.67 177.27 497.92 172.06 502.05 171.22 527.08 166.6 531.84 165.27 540.33 168.87 566.5 144.47 574.5 141.35 586.25 146.1 587.75 145.34 599.33 129.35 598.17 117.27 630.92 97.38 638.75 84.86 643 81.42 652.92 81.42 652.54 65.89 653.46 65.35 656.46 65.64 673.25 48.89 698.33 22.35 700.78 20.43 700.78 13.1 708.82 10.1 740.75 9.77 749.92 3.93 760.25 0.1 765.81 0.1z"
                ></path>
                <path
                  fill="#a2bbff"
                  d="M653.46 82.43L654.46 97.38 653.46 97.38 650.86 82.43 653.46 82.43z"
                ></path>
                <path
                  fill="#a2bbff"
                  d="M473.17 223.26L473.49 242.77 477 190.49 473.17 223.26z"
                ></path>
                <path
                  fill="#16011a"
                  d="M616.98 232.1L610.96 235.68 586.25 224.14 587.83 223.27 609.08 233.48 598.25 225.6 599.33 224.47 610.42 231.85 602.63 213.26 607.45 209.51 611.57 222.2 609.08 208.02 610.42 208.02 616.06 230.1 618.67 230.5 626.47 190.85 627.63 190.85 619.54 232.82 616.98 232.1z"
                ></path>
                <path
                  fill="#5c489a"
                  d="M614.93 233.48L607.45 201.35 609.58 199.46 616.98 232.1 614.93 233.48z"
                ></path>
                <path
                  fill="#16011a"
                  d="M744.22 237.43L725.67 188.77 725.67 184.75 745.89 238.1 744.22 237.43z"
                ></path>
                <path
                  fill="#16011a"
                  d="M763.14 245.8L775 222.42 776.05 222.91 763.94 245.8 763.14 245.8z"
                ></path>
                <path
                  fill="#3c1d47"
                  d="M760.8 244.77L763.14 214.84 764.25 215.2 761.61 245.13 760.8 244.77z"
                ></path>
                <path
                  fill="#3c1d47"
                  d="M744.75 96.72L727.23 82.72 728.17 82.43 746.5 96.46 740.67 88.02 741.84 88.02 747.67 96.27 744.75 96.72z"
                ></path>
                <path
                  fill="#16011a"
                  d="M551.49 277.72L539.32 266.6 539.32 265.27 551.49 277 551.49 277.72z"
                ></path>
                <path
                  fill="#16011a"
                  d="M551.31 275.23L536.67 257.22 537.38 255.92 551.31 273.6 551.31 275.23z"
                ></path>
              </g>
              <g id="left-moutin" fillRule="evenodd">
                <path
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_60)"
                  d="M332.16 346.45v53.65H0V.1h135.8l13.46 9.15 3.22 2.18v3.34l.16.15 2.55 2.5 17.32 17 .94.92 4.92 7.25h.09c.78.21 6.48 1.72 13.81 3.86l.49.15c9.73 2.84 22.15 6.74 29.72 10.13l.66.3h.07a178.6 178.6 0 0111.88 19.23v.05a3 3 0 01.18.36 37.41 37.41 0 012.39 5.76l1.81 44.5 8.34 4.43 24.6 13.07-.48 9.18-.38 7.32.23.2 16.71 14.55h3.89l1.91 6.46.08.28.08.26 6.22 17.25 7.27-2 3.37 2 1.47 3 6 12.13v.05l.79 1.6 4 11.92 1.1 3.26v.07l4.91 14.04.28.84 2.33 19.5-2.33 4.75.14 4.65.11 3.64v.25l.07 2.24.66 21.61.28 9.06z"
                ></path>
                <path
                  fill="#7c68a2"
                  d="M139 199.6L146.6 212.66 152.83 220.1 161.82 225.1 171.5 233.77 180.49 237.43 191.21 237.43 191.21 228.77 180.49 189.1 174.96 132.43 165.1 92.43 152.83 43.77 149.26 9.25 135.8 0.1 92.56 0.1 128.62 147.43 139 199.6z"
                  opacity="0.2"
                ></path>
                <path
                  fill="#726da7"
                  d="M194.32 233.1L198.81 248.18 218.87 290.43 244.8 313.1 271.08 329.43 275.23 329.43 244.11 262.1 204 158.77 186.71 146.77 181.87 146.77 184.98 192.06 186.45 202.6 194.32 233.1z"
                  opacity="0.2"
                ></path>
                <path
                  fill="#ff722a"
                  d="M174.78 268.1L191.21 275.6 195.18 275.6 203.66 275.6 207.98 273.77 187.92 244.77 186.71 248.18 172.54 246.27 158.71 237.43 148.16 223.27 174.78 268.1z"
                  opacity="0.2"
                ></path>
                <path
                  fill="#726da7"
                  d="M104.07 188.77L98.2 188.77 81.95 184.8 81.93 184.79 76.11 183.37 72.26 182.43 69.98 180.92 66.73 178.77 55.84 167.16 54.31 165.54 53.59 164.77 50.14 161.45 49.79 161.11 49.79 161.1 29.04 141.1 27.94 138.26 25.47 131.92 23.6 127.1 21.78 122.43 19.88 118.94 0 82.43 0 0.1 13.14 0 13.18 0.1 35.66 60.85 45.99 88.77 64.04 119.95 64.04 119.96 65.06 121.71 65.86 123.09 67.7 126.27 67.7 126.28 68.18 127.1 69.89 130.06 81.12 149.46 81.19 149.57 85.71 157.38 85.78 157.5 97.51 177.77 104.07 188.77z"
                  opacity="0.2"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_149-38)"
                  d="M168.56 377.35L164.98 377.49 164.83 377.5 163.82 377.54 156.03 377.85 154.57 377.91 145.23 378.28 142.28 378.4 142.25 378.4 141.89 378.42 104.62 379.91 102.84 379.98 97.16 380.21 82.65 380.79 82.64 380.79 82.27 380.81 82.26 380.81 57.07 381.81 57.05 381.82 45.12 382.29 0 384.1 0 0.1 13.14 0 13.18 0.1 35.66 60.85 45.99 88.77 64.06 119.88 65.08 121.63 65.93 123.1 67.73 126.19 68.25 127.1 69.93 129.98 70.19 130.43 85.66 157.07 86.07 157.78 86.07 157.79 104.07 188.77 111.75 215.1 111.85 215.45 116.9 232.77 117.47 234.71 117.47 234.72 118.35 237.73 118.35 237.74 118.97 239.86 120.72 245.87 120.73 245.87 121.37 248.07 121.76 249.43 122.76 252.85 123.81 256.43 128.19 271.46 129.98 277.62 129.99 277.62 131.22 281.85 154.99 326.78 158.98 341.66 160.49 347.29 161.39 350.64 162.45 354.59 162.83 355.98 162.88 356.19 164.84 363.47 164.92 363.78 165.77 366.96 167.76 374.37 167.83 374.62 168.03 375.39 168.42 376.81 168.56 377.35z"
                ></path>
                <path
                  fill="#726da7"
                  d="M141.88 378.42L128.97 360.43 68.46 308.43 62.24 308.43 57.05 310.77 57.05 322.1 70.54 351.77 74.08 354.43 82.64 356.1 97.16 380.21 141.88 378.42z"
                  opacity="0.2"
                ></path>
                <path
                  fill="#726da7"
                  d="M223.28 57.1l-3 35v21l3 36 5.27 14.33 6.92 6.34 4.14-42.67-1.81-44.5s-7-18.5-14.52-25.5z"
                  opacity="0.5"
                ></path>
                <path
                  fill="#5c367d"
                  d="M25.41 0.1L45.12 35.6 52.04 40.6 86.09 82.43 99.47 85.6 104.08 85.6 81.95 0 25.41 0.1z"
                  opacity="0.5"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_149-39)"
                  d="M45.12 382.29L0 384.1 0 82.43 19.88 118.94 21.78 122.43 23.6 127.1 25.47 131.92 27.94 138.26 29.04 141.1 27.56 155.24 25.41 175.77 25.41 315.1 25.92 316.84 44.89 381.5 44.97 381.77 45.12 382.29z"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_149-40)"
                  d="M25.41 0.1L45.12 35.6 52.04 40.6 86.09 82.43 77.8 103.1 85.06 145.39 61.11 82.43 58.78 61.1 29.04 31.43 16.94 0.03 25.41 0.1z"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_149-41)"
                  d="M81.95 0L104.08 85.6 104.08 97.6 111.68 110.43 116.87 128.77 128.62 161.1 135.19 197.43 150.75 237.43 174.26 312.43 184.98 357.1 184.98 376.24 195.7 375.51 184.98 347.35 178.07 298.1 174.78 268.1 148.16 223.27 152.83 220.1 139 199.6 130.64 157.57 92.56 0.1 81.95 0z"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_149-42)"
                  d="M49.79 161.1L57.05 188.12 57.05 207.77 57.05 233.27 54.54 311.1 54.54 347.35 57.05 381.81 97.16 380.21 82.64 356.1 74.08 354.43 70.54 351.77 57.05 322.1 57.05 310.77 62.24 308.43 68.46 308.43 128.97 360.43 141.88 378.42 145.23 378.28 130.7 355.77 119.63 341.1 117.56 336.77 119.63 301.77 117.21 297.1 96.81 283.43 77.8 257.43 77.8 249.43 88.17 258.77 92.56 264.43 87.82 238.1 72.96 215.1 72.27 206.77 69.97 180.92 49.79 161.1z"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_149-43)"
                  d="M152.48 14.77L152.83 43.77 171.04 116.54 174.96 132.43 180.49 189.1 191.21 228.77 191.21 237.43 187.92 244.77 207.98 273.77 225.44 318.43 239.61 372.54 252.13 371.69 237.54 351.77 226.13 308.43 218.87 290.43 198.81 248.18 186.45 202.6 181.87 146.77 171.15 103.43 159.05 52.1 152.48 14.77z"
                ></path>
                <path
                  d="M178.41 42.6L175 90.1l3.45 21.5L204 158.77l34.71 89.41-12.93-56.12 2.77-28.63-5.27-14.33-3-36V85.6l3-28.5s-35.88-13-44.87-14.5z"
                  style={{ mixBlendMode: "multiply" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_149-44)"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_149-45)"
                  d="M239.61 127.1L238.71 173.1 239.61 218.6 240.65 253.19 274 326.78 269.44 308.43 253.62 275.6 249.47 258.35 246.88 226.94 259.32 232.1 269.35 230.1 254.4 226.94 249.99 223.27 247.95 131.53 239.61 127.1z"
                ></path>
                <path
                  fill="#593b55"
                  d="M77.8 257.43L77.8 249.43 92.56 264.43 96.81 271.46 111.51 281.35 131.22 284.85 131.22 281.85 154.99 326.78 154.99 326.78 119.63 301.77 117.21 297.1 96.81 283.43 77.8 257.43z"
                  opacity="0.5"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_149-46)"
                  d="M57.05 310.77L54.75 304.6 55.22 290.26 71.92 308.43 100.79 334.27 107.53 335.43 117.56 336.77 119.63 341.1 130.7 355.77 145.23 378.28 141.88 378.42 128.97 360.43 68.46 308.43 62.24 308.43 57.05 310.77z"
                ></path>
                <path
                  fill="#593b55"
                  d="M191.21 237.43L191.21 228.77 180.49 189.1 160.09 154.43 131.04 139.41 131.34 161.1 139 199.6 152.83 220.1 161.82 225.1 171.5 233.77 180.49 237.43 191.21 237.43z"
                  opacity="0.5"
                ></path>
                <path
                  fill="#593b55"
                  d="M104.07 188.77L98.2 188.77 81.95 184.8 81.93 184.79 75.24 182.62 69.98 180.92 55.84 167.16 49.86 161.35 29.04 141.1 27.56 138.11 24.75 132.43 22.11 127.1 17.99 118.77 0 82.43 0 72.1 26.33 83.85 27.56 84.4 27.56 84.41 37.34 88.77 45.99 88.77 64.06 119.88 65.08 121.63 65.93 123.1 67.73 126.19 68.25 127.1 69.93 129.98 70.19 130.43 85.66 157.07 86.07 157.78 86.07 157.79 104.07 188.77z"
                  opacity="0.5"
                ></path>
                <path
                  fill="#5c367d"
                  d="M92.56 0.1L106.52 57.1 128.62 94.38 148.16 100.6 145.23 72.7 138.82 31.6 152.48 85.77 161.13 118.77 174.96 132.43 152.83 43.77 152.48 11.43 135.8 0.1 92.56 0.1z"
                  opacity="0.5"
                ></path>
                <path
                  fill="#7c68a2"
                  d="M85.06 145.39L122.75 161.1 128.62 161.1 116.87 128.77 111.68 110.43 104.08 97.6 77.8 103.1 85.06 145.39z"
                  opacity="0.5"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_149-47)"
                  d="M239.61 372.54L225.44 318.43 226.13 308.43 237.54 351.77 252.13 371.69 239.61 372.54z"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_149-48)"
                  d="M184.98 376.24L184.98 357.1 170.35 299.93 174.78 268.1 184.98 347.35 195.7 375.51 184.98 376.24z"
                ></path>
                <path
                  fill="#202"
                  d="M152.75 36.44L151.27 39.93 138.82 38.19 100.44 28.27 98.54 25.1 99.75 30.93 143.84 39.93 152.83 43.77 152.75 36.44z"
                ></path>
                <path
                  fill="#202"
                  d="M104.08 47.71L154.38 69.77 158.1 69.6 158.44 66.27 160.07 72.71 112.37 52.6 105.28 52.77 104.08 47.71z"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_149-49)"
                  d="M174.96 132.43L161.13 118.77 136.58 116.43 128.62 97.6 128.62 94.38 106.52 57.1 130.64 157.57 131.04 139.41 160.09 154.43 180.49 189.1 174.96 132.43z"
                ></path>
                <path
                  fill="#202"
                  d="M29.04 141.1L81.95 153.85 86.09 157.81 81.12 149.46 80.78 151.97 42.36 143.97 27.56 138.11 29.04 141.1z"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_149-50)"
                  d="M121.77 249.43L106.52 248.18 95.95 249.43 89.64 248.18 89.22 245.87 90.37 247.65 95.82 248.89 106.26 247.65 119.09 247.65 120.72 245.87 121.77 249.43z"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_149-51)"
                  d="M181.87 323.17L223.02 334.34 226.22 334.34 228.55 334.34 229.82 335.17 229.11 332.46 228.03 333.43 222.2 333.77 183.95 321.68 180.82 315 181.87 323.17z"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_149-52)"
                  d="M184.98 347.35L191.21 347.35 226.91 354.31 232.09 353.85 233.9 350.72 235.47 356.72 229.82 355.23 190.6 348.35 185.88 349.71 184.98 347.35z"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_149-53)"
                  d="M139 199.6L152.83 220.1 148.16 223.27 170.35 260.63 174.78 268.1 166.1 259.35 153.4 245.87 135.19 197.43 139 199.6z"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_135)"
                  d="M156.61 222.2L161.13 226.94 158.71 237.43 172.54 246.27 174.78 237.43 178.07 237.43 180.49 237.43 171.5 233.77 161.82 225.1 156.61 222.2z"
                  opacity="0.2"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_149-54)"
                  d="M136.58 116.43L131.04 139.41 130.64 157.57 121.26 118.77 111.68 110.43 104.08 97.6 104.08 85.6 98.95 65.79 106.52 57.1 128.62 94.38 128.62 97.6 136.58 116.43z"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_149-55)"
                  d="M187.92 244.77L191.21 237.43 191.21 228.77 193.55 228.77 198.81 248.18 210.57 272.96 209.48 277.62 207.98 273.77 187.92 244.77z"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_149-56)"
                  d="M45.12 35.6L49.79 38.98 49.79 34.43 81.95 8.1 84.28 9.03 82.94 3.83 81.95 6.34 47.59 34.43 45.12 35.6z"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_149-57)"
                  d="M29.04 31.43L40.11 34.43 25.41 0.1 45.12 35.6 52.04 40.6 86.09 82.43 77.8 103.1 70.58 107.34 61.11 82.43 58.78 61.1 29.04 31.43z"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_149-58)"
                  d="M81.95 0L91.28 36.1 97.72 21.4 92.56 0.1 81.95 0z"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_149-59)"
                  d="M45.12 382.29L0 384.1 0 212.66 25.41 175.77 25.58 223.32 25.6 227 25.66 244.12 25.72 261.87 25.78 277.28 25.78 277.68 25.89 308.43 25.92 316.84 25.93 319.77 44.88 381.5 44.96 381.77 45.12 382.29z"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_149-60)"
                  d="M174.96 90.1L220.59 82.43 220.25 113.1 223.28 149.1 206.83 166.06 178.41 111.6 174.96 90.1z"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_149-61)"
                  d="M219.01 197.43L225.78 192.06 238.71 248.18 219.01 197.43z"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_149-62)"
                  d="M168.74 107.34L171.15 103.43 181.87 146.77 186.1 200.1 180.49 189.1 174.96 132.43 168.74 107.34z"
                ></path>
                <path
                  style={{ mixBlendMode: "soft-light" }}
                  fill="#8897c0"
                  d="M263.51 262.1L255.02 259.83 251.65 258.93 249.47 258.35 245.92 264.81 243.42 264.81 214.61 261.14 204.35 259.84 200.64 263.15 200.63 263.15 199.72 262.75 176.64 252.72 161.82 246.27 157.79 250.53 155.59 252.85 122.76 252.85 121.64 249.43 121.63 249.42 121.26 248.3 120.54 246.08 120.42 245.74 119.12 241.77 118.17 238.71 117.34 236.04 117.28 236.04 114.17 235.86 86.1 234.23 84.28 234.23 74.4 235.34 56.92 237.3 55.75 237.43 41.94 232.65 25.6 227 25.41 226.94 0 228.77 0 226.94 25.41 223.27 25.58 223.32 42.26 228.59 57.05 233.27 73.41 231.24 82.65 230.1 113.25 232.49 116.9 232.77 117.47 234.71 117.47 234.72 118.35 237.73 118.35 237.74 118.97 239.86 118.98 239.86 124.94 240.5 126.05 240.61 128.47 240.87 138.74 241.97 149.89 243.15 152.48 243.43 160.14 243.43 173.49 247.76 194.77 254.67 201.03 252.85 202.51 253.17 203.3 253.34 212.45 255.3 238.82 260.96 244.11 262.1 244.31 261.88 244.5 261.68 249.31 256.43 262.72 256.43 262.83 257.22 263.51 262.1z"
                ></path>
                <path
                  style={{ mixBlendMode: "soft-light" }}
                  fill="#8897c0"
                  d="M269.91 293.1L269.91 293.11 260.69 290.26 260.68 290.26 259.32 293.11 258.71 293.04 258.39 293 224.88 288.97 217.77 288.11 217.76 288.11 215.54 293.11 177.42 279.1 176.14 278.7 175.94 278.64 173.42 277.86 162.34 274.41 129.99 277.62 129.98 277.62 125.06 263.6 92.56 264.43 85.61 256.46 85.58 256.43 85.56 256.42 83.95 255.68 77.8 252.85 56.04 264.65 55.75 264.81 39.42 264.81 25.72 261.87 25.41 261.81 25.24 261.77 0 264.81 0 246.27 25.41 244.04 25.66 244.12 36.31 247.65 40.67 248.85 56.41 253.19 77.8 249.43 89.22 252.85 90.5 252.98 123.81 256.43 128.19 271.46 161.12 270.52 161.13 270.52 173.83 274.93 175.6 275.55 175.75 275.6 199.25 283.1 213.04 286.71 215.76 283.89 215.77 283.89 223.33 284.77 256.36 288.6 256.65 288.49 259.32 287.44 259.33 287.44 260.85 287.63 265.33 288.19 266.38 288.32 268.6 288.6 269.91 293.1z"
                ></path>
                <path
                  style={{ mixBlendMode: "soft-light" }}
                  fill="#8897c0"
                  d="M272.07 153.78L271.69 161.1 271.25 169.77 271.24 169.76 269.31 168.24 263.89 163.97 248.4 151.77 239.13 151.77 239.13 151.75 238.23 142.43 238.16 142.06 236.24 132.43 233.39 130.26 220.9 120.76 220.68 120.6 191.21 135.18 191.2 135.18 190.65 135.06 178.33 132.43 178.33 132.44 175.51 138.1 175.51 138.11 176.47 147.96 145.23 129.35 133.91 130.37 133.2 130.43 127.36 142.27 127.09 142.8 127.08 142.83 127.08 142.84 127.07 142.85 118.2 132.43 118.2 132.42 116.42 127.17 116.39 127.09 81.95 123.1 81.42 124.2 78.96 129.35 70.19 130.43 69.93 129.98 68.25 127.1 22.11 127.1 0 145.39 0 130.43 17.99 118.77 19.88 118.94 35.27 120.33 49.81 121.64 50.71 121.73 50.8 121.73 63.29 122.86 64.72 122.99 65.86 123.09 65.93 123.1 69.28 121.49 74.93 118.77 76.71 116.72 79.57 113.43 112.53 113.43 115.26 123.1 115.27 123.1 121.81 121.05 121.87 121.03 122.14 120.95 136.58 116.43 161.13 118.77 174.96 132.43 176.94 126.85 177.12 126.35 188.6 131.13 189.12 131.35 189.44 131.48 219.91 110.43 220.28 110.8 233.39 124 238.71 129.35 238.71 138.11 239.39 138.2 239.7 138.25 247.95 139.38 248.12 139.4 248.13 139.4 265.86 150.05 269.31 152.12 272.07 153.78z"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_149-63)"
                  d="M229.82 335.17L232.3 331.86 245.15 333.52 274 336.43 244.97 331.86 231.35 328.26 229.11 332.46 229.82 335.17z"
                ></path>
                <path
                  fill="#ff4824"
                  d="M229.82 335.17L233.9 350.72 232.09 353.85 226.91 354.31 191.21 347.35 184.98 347.35 181.87 323.17 223.02 334.34 228.55 334.34 229.82 335.17z"
                  opacity="0.2"
                ></path>
                <path
                  fill="#ff4824"
                  d="M97.16 380.21L82.64 356.1 97.16 336.43 96.29 332.35 128.97 360.43 141.88 378.42 97.16 380.21z"
                  opacity="0.2"
                ></path>
                <path
                  fill="#ff4824"
                  d="M29.04 141.1L69.97 180.92 98.2 188.77 104.08 188.77 86.09 157.81 80.78 151.97 42.01 145.39 29.04 141.1z"
                  opacity="0.2"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_149-64)"
                  d="M77.8 249.43L73.13 230.1 72.96 215.1 87.82 238.1 92.56 264.43 77.8 249.43z"
                ></path>
                <path
                  style={{ mixBlendMode: "soft-light" }}
                  fill="#8897c0"
                  d="M55.75 282.43L55.41 290.47 54.81 304.76 54.54 311.1 25.89 308.43 0 308.43 0 277.62 25.41 277.62 25.78 277.68 55.47 282.38 55.75 282.43z"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_149-65)"
                  d="M74.08 354.43L63.27 380.21 57.05 381.81 54.54 323.17 57.05 322.1 70.54 351.77 74.08 354.43z"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_149-66)"
                  d="M25.93 319.77L22.56 352.04 16.94 381.81 45.12 382.29 25.93 319.77z"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_149-67)"
                  d="M104.08 47.71L97.51 57.1 105.28 52.77 112.37 52.6 104.08 47.71z"
                ></path>
                <path
                  fill="#726da7"
                  d="M268.1 327.58L260.56 310.99 259.32 295.02 275.23 329.43 271.08 329.43 268.1 327.58z"
                  opacity="0.2"
                ></path>
                <path
                  fill="#726da7"
                  d="M228.55 298.9L212.45 255.3 199.25 233.27 191.77 222.2 198.81 248.18 218.87 290.43 228.55 298.9z"
                  opacity="0.2"
                ></path>
                <path
                  fill="#726da7"
                  d="M160.09 154.43L172.54 185.77 186.1 218.1 189.43 222.2 180.49 189.1 160.09 154.43z"
                  opacity="0.2"
                ></path>
                <path
                  fill="#726da7"
                  d="M136.04 184.71L145.23 188.12 156.61 210.77 161.82 225.1 152.83 220.1 139 199.6 136.04 184.71z"
                  opacity="0.2"
                ></path>
                <path
                  fill="#726da7"
                  d="M172.54 246.27L191.21 275.6 203.66 275.6 207.98 273.77 187.92 244.77 186.71 248.18 172.54 246.27z"
                  opacity="0.2"
                ></path>
                <path
                  fill="#726da7"
                  d="M27.56 84.4L45.12 115.77 55.75 127.1 69.15 148.77 80.78 151.97 81.12 149.46 45.99 88.77 37.34 88.77 27.56 84.4z"
                  opacity="0.2"
                ></path>
                <path
                  fill="#726da7"
                  d="M49.79 38.98L49.79 34.43 61.19 25.1 94.41 84.4 86.09 82.43 49.79 38.98z"
                  opacity="0.2"
                ></path>
                <path
                  fill="#928986"
                  d="M223.28 57.1L228.55 91.1 233.39 100.43 233.39 145.39 233.39 167.87 235.47 169.77 239.61 127.1 237.8 82.6 223.28 57.1z"
                  opacity="0.2"
                ></path>
                <path
                  fill="#726da7"
                  d="M215.39 188.12L206.83 188.12 202.31 208.1 210.57 237.43 229.11 249.43 240.65 253.19 215.39 188.12z"
                  opacity="0.2"
                ></path>
                <path
                  fill="#726da7"
                  d="M96.29 332.35L97.16 336.43 89.22 347.19 108.92 360.77 128.97 360.43 96.29 332.35z"
                  opacity="0.2"
                ></path>
                <path
                  fill="#726da7"
                  d="M57.05 310.77L74.08 319.77 87.83 325.08 68.46 308.43 62.24 308.43 57.05 310.77z"
                  opacity="0.2"
                ></path>
                <path
                  fill="#726da7"
                  d="M25.41 175.77L27.56 155.24 31.03 164.93 45.12 192.05 39.42 264.81 25.41 277.62 25.41 175.77z"
                  opacity="0.2"
                ></path>
                <path
                  fill="#726da7"
                  d="M111.75 215.1L111.75 226.94 116.39 244.04 120.72 245.87 111.75 215.1z"
                  opacity="0.2"
                ></path>
                <path
                  fill="#726da7"
                  d="M131.04 139.41L136.04 161.1 141.88 175.77 168.74 188.77 168.74 183.1 160.09 154.43 131.04 139.41z"
                  opacity="0.2"
                ></path>
                <path
                  fill="#726da7"
                  d="M35.27 120.33L30.1 127.1 27.56 130.43 25.47 131.92 24.75 132.43 22.11 127.1 17.99 118.77 0 82.43 0 72.1 11.41 82.43 29.04 97.6 35.27 120.33z"
                  opacity="0.2"
                ></path>
                <path
                  fill="#726da7"
                  d="M47.72 0L58.87 14.77 67.62 18.05 81.95 6.34 82.94 3.83 81.95 0 47.72 0z"
                  opacity="0.2"
                ></path>
                <path
                  fill="#928986"
                  d="M131.04 0.1L116.24 9.03 117.56 32.69 151.27 39.93 152.75 36.44 152.48 11.43 131.04 0.1z"
                  opacity="0.2"
                ></path>
                <path
                  fill="#726da7"
                  d="M259.32 232.1L246.88 226.94 249.47 258.35 253.62 275.6 269.44 308.43 275.23 311.43 265.94 279.43 259.32 232.1z"
                  opacity="0.2"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_149-68)"
                  d="M239.61 127.1L247.95 131.53 247.95 184.71 249.99 223.27 254.4 226.94 246.88 226.94 249.47 258.35 247.38 269.19 240.65 253.19 239.61 127.1z"
                ></path>
                <path
                  fill="#6d335b"
                  d="M178.33 132.43L191.21 135.18 204 158.77 191.77 143.1 179.73 138.11 178.33 132.43z"
                  opacity="0.5"
                ></path>
                <path
                  fill="#4a2d54"
                  d="M238.71 248.18L230.32 211.76 234.51 173.8 235.47 169.77 231.44 210.1 234.51 216.43 237.23 161.1 239.13 151.77 238.71 248.18z"
                ></path>
                <path
                  fill="#4a2d54"
                  d="M128.62 161.1L135.19 197.43 152.48 243.43 149.89 243.16 131.76 197.43 124.99 195.6 138.74 241.97 128.62 241.27 109.1 190.49 108.69 155.24 122.75 161.1 128.62 161.1z"
                ></path>
                <path
                  fill="#6d335b"
                  d="M155.23 17.46L162.39 66.27 166.1 66.27 161.82 34.43 168.74 38.51 172.54 85.6 174.96 90.1 178.41 42.6 173.49 35.35 155.23 17.46z"
                  opacity="0.5"
                ></path>
                <path
                  fill="#4a2d54"
                  d="M19.02 30.43L32.33 72.1 31.98 76.6 29.74 79.27 31.29 85.6 26.33 83.85 7.26 14.77 5.19 15.93 5.19 25.1 14.52 53.05 19.55 70.69 18.84 72.1 8.13 34.43 0 28.27 0 0.1 13.14 0 13.18 0.1 35.66 60.85 31.46 58.6 27.56 42.8 25.41 40.93 19.02 30.43z"
                ></path>
                <path
                  fill="#4a2d54"
                  d="M58.78 61.1L64.7 56.16 66.21 58.63 60.81 64.97 61.46 66.27 67.5 60.17 76.11 70.22 65.21 93.2 64.7 91.87 74.56 71.1 73 68.6 61.11 82.43 58.78 61.1z"
                  opacity="0.81"
                ></path>
                <path
                  fill="#37154f"
                  d="M247.95 131.53L249.41 197.43 252.13 202.6 252.13 164.09 254.4 161.1 254.4 169.77 259.32 182.28 261.05 184.1 266.73 143.85 269.31 145.39 269.31 218.93 269.35 230.1 272.55 144.6 247.95 131.53z"
                  opacity="0.5"
                ></path>
                <path
                  fill="#37154f"
                  d="M259.32 232.1L246.88 226.94 249.47 258.35 253.62 275.6 259.32 287.44 261.05 288.11 253.96 271.46 251.56 258.43 256.79 260.55 258.77 268.1 253.96 271.46 269.91 293.11 259.32 232.1z"
                  opacity="0.5"
                ></path>
                <path
                  fill="#462a58"
                  d="M249.99 223.27L254.4 226.94 258.39 227.78 249.62 216.25 249.99 223.27z"
                  opacity="0.81"
                ></path>
                <path
                  fill="#462a58"
                  d="M259.32 222.2L256.36 216.25 259.32 204.56 259.32 222.2z"
                  opacity="0.81"
                ></path>
                <path
                  fill="#462a58"
                  d="M199.25 169.77L202.31 179.35 206.83 180.81 199.25 169.77z"
                  opacity="0.81"
                ></path>
                <path
                  fill="#462a58"
                  d="M145.23 253.4L149.89 270.27 148.93 260.03 145.23 253.4z"
                  opacity="0.81"
                ></path>
                <path
                  fill="#462a58"
                  d="M77.8 161.1L86.09 172.1 89.22 172.1 77.8 161.1z"
                  opacity="0.81"
                ></path>
                <path
                  fill="#462a58"
                  d="M136.58 137.1L145.23 129.35 143.5 133.22 143.5 136.22 136.58 137.1z"
                  opacity="0.81"
                ></path>
                <path
                  fill="#462a58"
                  d="M168.74 153.1L169.53 151.77 172.4 151.77 172.4 159.47 170.57 157.57 168.74 153.1z"
                  opacity="0.81"
                ></path>
                <path
                  fill="#462a58"
                  d="M173.25 161.92L174.76 166.6 175.98 164.93 173.25 161.92z"
                  opacity="0.81"
                ></path>
                <path
                  fill="#462a58"
                  d="M199.25 102.27L199.12 107.34 202.31 113.07 199.25 102.27z"
                  opacity="0.81"
                ></path>
                <path
                  fill="#462a58"
                  d="M180.49 83.39L185.37 79.1 189.43 78.43 189.35 81.24 180.49 83.39z"
                  opacity="0.81"
                ></path>
                <path
                  fill="#462a58"
                  d="M86.09 311.43L94.41 292.98 92.56 306.52 86.09 311.43z"
                  opacity="0.81"
                ></path>
                <path
                  fill="#462a58"
                  d="M83.51 306.52L81.12 302.2 77.8 303.6 77.8 306.52 83.51 306.52z"
                  opacity="0.81"
                ></path>
                <path
                  fill="#462a58"
                  d="M111.75 327.85L112.26 325.08 116.24 332.35 111.75 332.35 111.75 327.85z"
                  opacity="0.81"
                ></path>
                <path
                  fill="#462a58"
                  d="M66.56 362.13L64.31 356.28 65.44 350.72 66.56 362.13z"
                  opacity="0.81"
                ></path>
                <path
                  fill="#462a58"
                  d="M58.78 166.6L69.5 177.71 76.11 183.37 81.95 184.8 58.78 166.6z"
                  opacity="0.81"
                ></path>
                <path
                  fill="#462a58"
                  d="M72.96 215.1L70.97 192.1 74.08 208.95 72.96 215.1z"
                  opacity="0.81"
                ></path>
                <path
                  fill="#462a58"
                  d="M105.49 220.12L104.08 204.91 108.69 220.12 108.69 227.15 105.49 220.12z"
                  opacity="0.81"
                ></path>
                <path
                  fill="#462a58"
                  d="M101.5 270.27L111.75 275.6 106.63 275.6 101.5 270.27z"
                  opacity="0.81"
                ></path>
                <path
                  fill="#462a58"
                  d="M22.56 149.03L21 172.1 17.83 161.92 22.56 149.03z"
                  opacity="0.81"
                ></path>
                <path
                  fill="#462a58"
                  d="M20.2 146.77L22.56 137.1 21.38 133.22 20.2 146.77z"
                  opacity="0.81"
                ></path>
                <path
                  fill="#462a58"
                  d="M24.5 353.48L25.77 362.13 31.03 360.77 24.5 353.48z"
                  opacity="0.81"
                ></path>
                <path
                  fill="#462a58"
                  d="M25.41 363.43L23.67 369.42 27.88 373.77 27.88 368.6 25.41 363.43z"
                  opacity="0.81"
                ></path>
                <path
                  fill="#462a58"
                  d="M66.56 188.12L64.83 198.14 68.17 202.27 66.56 188.12z"
                  opacity="0.81"
                ></path>
                <path
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_231-2)"
                  d="M271.69 161.1L269.35 206.43 269.35 230.1 259.32 232.1 265.94 279.43 275.23 311.43 275.23 329.43 289.4 351.77 332.19 347.35 332.19 340.1 329.86 271.1 332.19 266.35 329.86 246.85 319.75 216.85 311.45 200.1 308.07 198.1 300.81 200.1 292.52 175.85 288.63 175.85 271.69 161.1z"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_149-69)"
                  d="M288.63 175.85L285.51 210.1 285.51 221.85 283.7 233.27 288.63 220.85 291.48 193.65 292.52 175.85 288.63 175.85z"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_149-70)"
                  d="M260.07 237.43L270.47 241.27 288.11 253.1 299.78 275.6 299.78 275.6 303.41 260.1 303.41 260.1 290.7 245.85 269.35 230.1 259.32 232.1 260.07 237.43z"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_149-71)"
                  d="M299.59 350.72L295.76 303.6 299.78 275.6 299.78 275.6 303.41 260.1 303.41 260.1 306 221.1 306 215.35 300.81 200.1 308.07 198.1 311.45 200.1 311.45 215.6 313.52 238.1 322.34 248.18 329.51 258.43 332.19 266.35 329.86 271.1 328.48 260.93 325.71 256.77 312.92 246.43 307.56 265.1 308.77 280.77 307.73 315.43 308.43 349.8 299.59 350.72z"
                ></path>
                <path
                  fill="#6558b1"
                  d="M288.11 253.1L283.7 282.15 288.11 297.64 295.76 303.6 299.78 275.6 289.84 256.43 288.11 253.1z"
                  opacity="0.5"
                ></path>
                <path
                  fill="#6558b1"
                  d="M299.59 350.72L289.4 351.77 282.66 340.49 277.3 290.26 282.66 288.03 288.11 301.85 295.76 310.1 299.59 350.72z"
                  opacity="0.5"
                ></path>
                <path
                  fill="#6558b1"
                  d="M312.92 246.43L307.56 265.1 308.43 349.8 332.19 347.35 328.48 260.93 325.71 256.77 312.92 246.43z"
                  opacity="0.5"
                ></path>
                <path
                  fill="#6558b1"
                  d="M311.45 200.1L311.45 212.1 313.52 238.1 322.34 248.18 323.76 228.77 318.93 215.2 311.45 200.1z"
                  opacity="0.5"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="#362072"
                  d="M308.43 349.8L308.08 303.6 303.41 309.6 295.76 310.1 299.59 350.72 308.43 349.8z"
                  opacity="0.3"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_149-72)"
                  d="M267.82 285.93L275.23 285.93 282.66 288.03 288.11 301.85 295.76 310.1 295.76 303.6 288.11 297.64 284.64 285.45 277.3 285.04 273.41 283.6 266.73 282.15 267.82 285.93z"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_149-73)"
                  d="M270.47 241.27L279.29 237.43 269.35 230.1 259.32 232.1 260.07 237.43 270.47 241.27z"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_149-74)"
                  d="M285.51 210.1L290.03 207.46 291.57 192.05 287.3 190.49 285.51 210.1z"
                ></path>
                <path
                  style={{ mixBlendMode: "soft-light" }}
                  fill="#a6aeb8"
                  d="M263.98 265.44L286 269.19 298.25 286.23 308.43 284.63 330.32 295.02 330.5 298.35 308.57 287.36 297.67 290.26 285.51 273.27 265 272.74 263.98 265.44z"
                ></path>
                <path
                  style={{ mixBlendMode: "soft-light" }}
                  fill="#a6aeb8"
                  d="M262.42 254.25L287.6 256.43 299.47 277.72 308.37 275.6 330.11 279.39 330.22 281.89 308.43 277.62 299.24 279.31 287.06 260.03 262.83 257.22 262.42 254.25z"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="#5f3464"
                  d="M297.44 366.85L294.07 368.85 293.75 368.87 293.74 368.87 290.59 369.07 289 369.17 271.62 370.27 270.36 370.35 269.1 370.43 267.23 370.55 252 371.52 239.55 372.3 224.47 373.26 222.83 373.36 221.88 373.42 215.84 373.81 214.77 373.87 213.56 373.95 213.36 373.96 212.16 374.04 204.53 374.52 195.54 375.09 190.13 375.44 184.98 375.76 168.42 376.81 165.01 377.03 164.84 377.04 163.85 377.1 156.07 377.59 153.59 377.75 145.23 378.28 142.28 378.4 142.25 378.4 141.89 378.41 104.62 379.91 102.84 379.98 97.16 380.21 82.65 380.79 82.64 380.79 82.27 380.81 82.26 380.81 57.07 381.81 57.07 381.82 57.05 381.82 45.12 382.29 0 384.1 0 0.1 25.41 0.1 34.4 16.28 48.2 33.93 49.79 35.97 86.1 82.43 94.1 83.84 104.07 85.6 104.07 97.6 118.1 105.73 118.2 105.79 118.46 105.94 136.58 116.43 133.91 130.37 132.08 139.94 131.67 142.12 131.12 144.99 131.04 145.39 131.13 146.03 136.72 184.96 138.36 196.38 154.28 206.14 191.21 228.77 193.46 229.78 193.87 229.96 198.37 231.97 210.58 237.43 238.82 260.96 243.43 264.81 246.18 267.1 246.69 267.68 246.8 267.81 247.49 268.6 247.78 268.93 253.62 275.6 257.5 279.77 265.33 288.19 269.91 293.1 269.91 293.11 272.44 301.85 275.23 311.43 275.23 329.43 292.05 357.76 292.77 358.98 293.31 359.89 297.44 366.85z"
                ></path>
                <path
                  fill="#7570a9"
                  d="M311.45 315L309.5 298.35 311.45 305.43 311.45 315z"
                ></path>
                <path
                  fill="#7570a9"
                  d="M312.12 310.69L312.12 318.33 313.98 316.42 312.12 310.69z"
                ></path>
                <path
                  fill="#7570a9"
                  d="M323.76 285.3L325.99 281.89 325.99 284.63 323.76 285.3z"
                ></path>
                <path
                  fill="#7570a9"
                  d="M315.83 252.85L314.9 256.43 314.9 260.55 315.83 252.85z"
                ></path>
                <path
                  fill="#7570a9"
                  d="M317.6 224.14L319.87 231.1 319.87 225.37 317.6 224.14z"
                ></path>
                <path
                  fill="#7570a9"
                  d="M288.54 231.1L291.74 224.14 290.14 230.1 288.54 231.1z"
                ></path>
                <path
                  fill="#7570a9"
                  d="M326.51 336.25L327.67 347 330.08 346.59 326.51 336.25z"
                ></path>
                <path
                  fill="#7570a9"
                  d="M290.14 344.1L291.74 338.74 291.74 342.94 290.14 344.1z"
                ></path>
                <path
                  fill="#a2bbff"
                  d="M135.8 0.1L152.48 11.43 152.75 16.29 172.55 34.43 178.41 42.6 223.28 57.1 237.8 82.6 239.61 127.1 272.55 144.6 271.69 161.1 288.63 175.85 292.52 175.85 300.81 200.1 308.07 198.1 311.45 200.1 324.89 232.1 329.86 246.85 332.19 266.35 329.86 271.1 332.19 347.35 330.5 270.85 333.5 265.44 330.5 244.66 326.25 231.1 312.42 199.46 308.25 196.77 301.92 198.68 293.08 175.29 289.42 175.29 272.55 161.1 273.08 143.85 272.07 142.93 240.42 126.02 238.71 82.19 231.44 67.93 223.28 56.02 180.49 41.48 174.13 34.43 153.75 15.72 153.75 10.04 140.81 0.1 135.8 0.1z"
                ></path>
                <path
                  fill="#16011a"
                  d="M83.51 103.43L71.36 127.18 60.5 148.43 56.83 147.8 65.4 114.71 70.97 93.2 72.96 91.6 66.36 116.73 58.17 147.96 61.33 145.6 69.02 122.27 70.36 118.19 83.51 103.43z"
                ></path>
                <path
                  fill="#16011a"
                  d="M51.81 146.63L48.38 103.85 49.43 102.27 52.56 146.77 51.81 146.63z"
                ></path>
                <path
                  fill="#5c489a"
                  d="M72.96 91.6L66.36 116.73 65.4 114.71 70.97 93.2 72.96 91.6z"
                ></path>
                <path
                  fill="#5c489a"
                  d="M83.51 103.43L71.36 127.18 69.02 122.27 70.36 118.19 83.51 103.43z"
                ></path>
                <path
                  fill="#16011a"
                  d="M121.77 249.43L136.04 220.12 134.95 219.22 120.72 249.43 121.77 249.43z"
                ></path>
                <path
                  fill="#16011a"
                  d="M115.5 248.18L118.88 225.1 120.72 225.1 116.24 248.98 115.5 248.18z"
                ></path>
                <path
                  fill="#16011a"
                  d="M173.25 125.53L189.43 107.34 191.16 107.67 173.64 127.1 173.25 125.53z"
                ></path>
                <path
                  fill="#5c489a"
                  d="M170.12 113.07L180.49 94.38 179.34 93.73 169.73 111.47 170.12 113.07z"
                ></path>
                <path
                  fill="#16011a"
                  d="M199.72 261.83L206.83 239.77 207.88 241.27 199.72 262.75 199.72 261.83z"
                ></path>
              </g>
              <g className="text-welcome">
                <g className="mouse">
                  <path
                    fill="#fff"
                    d="M398.87 255.8a12.56 12.56 0 0012.56 12.56h5A12.56 12.56 0 00429 255.8v-10h-30.13zm13.81-27.62h-1.25a12.55 12.55 0 00-12.56 12.55v2.52h13.81zm3.77 0h-1.26v15.07H429v-2.52a12.55 12.55 0 00-12.55-12.55z"
                  ></path>
                  <rect
                    className="weel"
                    width="5.33"
                    height="10.36"
                    x="411.27"
                    y="231.97"
                    fill="#4fd3c4"
                    rx="2.39"
                  ></rect>
                </g>
                <text className="text">
                  welcome
                  <tspan className="span">!</tspan>
                </text>
              </g>
              <g id="river" fillRule="evenodd">
                <path
                  fill="#16011a"
                  d="M128.03 373.61L125.35 351.85 125.92 346.57 126.54 356.56 125.92 324.18 130 318.3 133.17 344.08 132.94 333.64 134.04 335.52 139.16 369.41 140.31 369.27 140.76 334.69 142.13 334.53 141.41 370.96 143.44 336.47 145.66 334.93 143.25 368.9 144.15 368.79 146.26 346.33 148.41 343.57 162.57 351.29 161.88 369.45 162.53 368.99 163 348.28 165.02 347.53 164.82 379.57 128.03 373.61z"
                ></path>
                <path
                  fill="#3c1d47"
                  d="M143.88 375.93L147.64 329.95 149.71 327.06 145.09 376.37 143.88 375.93z"
                ></path>
                <path
                  fill="#3c1d47"
                  d="M146.06 376.53L151.72 343.4 154.88 344.43 150.08 370.9 156.71 341.94 161.36 341.37 155.99 378.14 146.06 376.53z"
                ></path>
                <path
                  fill="#3c1d4f"
                  d="M163.69 379.39L166.47 340.74 167.82 339.82 164.82 379.57 163.69 379.39z"
                ></path>
                <path
                  fill="#3c1d4f"
                  d="M128.03 373.61L118.66 337.41 119.44 333.8 128.9 373.75 128.03 373.61z"
                ></path>
                <path
                  fill="#3c1d4f"
                  d="M136.98 375.06L133.69 330.62 134.38 330.53 137.86 375.2 136.98 375.06z"
                ></path>
                <path
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_147)"
                  d="M800 396.92L800 400.1 0 400.1 0 384.1 37.36 382.16 37.39 382.16 44.96 381.77 44.97 381.77 57 381.14 57.02 381.14 60.33 380.97 84.58 379.71 84.59 379.71 85.09 379.69 85.1 379.69 96.49 379.1 102.35 378.79 133.41 377.18 133.42 377.18 140.73 376.8 144.16 376.62 146.04 376.53 146.06 376.53 149.94 376.32 149.96 376.32 156.3 375.99 160.84 375.76 160.86 375.76 163.96 375.6 164.85 375.55 165.12 375.54 168.03 375.39 184.98 374.51 190.35 374.23 195.12 373.98 204.74 373.48 204.75 373.48 212.54 373.08 213.77 373.01 214.16 372.99 215.41 372.93 216.49 372.87 222.41 372.57 223.35 372.52 224.9 372.44 239.39 371.69 251.66 371.05 267.16 370.25 269.03 370.15 270.3 370.08 271.57 370.02 289.01 369.11 289.02 369.11 290.6 369.03 293.74 368.87 293.75 368.87 294.07 368.85 297.44 366.85 293.46 359.39 293.46 359.38 293.02 358.55 293.01 358.55 292.27 357.14 292.23 357.08 292.23 357.07 291.52 355.74 289.4 351.77 293.79 351.22 295.96 350.95 295.97 350.95 299.57 350.5 308.42 349.4 308.43 349.4 327.67 347 331.95 346.47 332.15 346.45 332.16 346.45 332.17 346.44 332.19 346.44 340.69 345.38 340.73 345.38 350.25 344.19 362.06 342.72 372.12 341.47 372.12 338.74 377.95 338.86 379.76 338.9 379.77 338.9 381.31 338.94 398.1 339.29 399.67 339.33 399.82 339.33 404.35 339.43 406.05 339.46 411.45 339.58 411.86 339.59 413.25 339.61 413.25 339.62 414.38 339.64 415.71 339.67 415.88 339.67 416.2 339.68 416.8 339.69 417.69 339.71 417.72 339.71 418.62 339.84 423.09 340.51 423.24 340.54 424.14 340.67 424.41 340.72 424.46 340.72 426.04 340.95 426.13 340.97 426.14 340.97 426.93 341.09 427.23 341.13 428.63 341.34 431.37 341.75 435.4 342.35 441.98 343.34 442.17 343.37 442.18 343.37 442.87 343.47 442.88 343.47 446.21 343.97 447.65 344.18 449.92 344.52 453.18 345.01 453.74 345.09 454.64 345.23 455.08 345.29 455.23 345.32 464.5 346.7 464.57 346.71 465.2 346.81 465.35 346.83 468.41 348.55 468.43 348.55 471.24 350.14 471.77 350.44 472.29 350.74 472.3 350.74 473.52 351.42 474.08 351.74 476.46 353.08 480.5 355.35 481.75 359.35 500.51 361.02 500.6 361.03 512.94 362.13 514.56 362.28 515.73 362.38 530.63 363.71 530.64 363.71 532.5 363.88 534.12 364.02 534.16 364.03 535.73 364.17 538.89 364.45 541.34 364.67 561.14 366.44 561.15 366.44 562.88 366.59 577 367.85 580.01 368.8 580.02 368.81 580.05 368.81 580.35 368.9 580.5 368.95 583.68 369.95 596.7 374.03 605.44 376.77 608.7 377.8 610.68 378.42 620.5 381.5 629.75 384.41 629.76 384.41 629.88 384.45 629.89 384.45 645.43 389.32 649.34 390.55 670.11 391.43 672.56 391.53 672.57 391.53 676.32 391.69 676.42 391.69 678.44 391.78 699.41 392.67 718.13 393.46 718.16 393.46 791.37 396.56 791.38 396.56 800 396.92z"
                ></path>
                <path
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_198)"
                  d="M623 400.1L163.5 400.1 205.77 393.62 265.28 384.49 270.32 383.27 272.02 382.86 273.2 382.57 274.14 382.34 286.27 379.4 287.62 379.07 291.62 378.1 291.95 378.02 291.96 378.02 313.98 372.68 314.04 372.64 319.87 369.42 319.51 369.08 318.42 368.06 297.44 366.85 293.46 359.39 293.46 359.38 293.02 358.55 293.02 358.54 292.27 357.14 292.23 357.08 292.23 357.07 291.52 355.74 292.64 355.55 292.64 355.54 294.71 355.19 294.71 355.18 332.19 348.66 350.26 345.52 351.67 345.27 360.31 344.09 361.81 343.88 362.05 343.85 369.45 342.84 369.51 342.84 381.43 341.2 384.92 340.72 381.34 339.46 380.19 339.05 380.18 339.04 380.17 339.04 379.77 338.9 381.31 338.93 398.1 339.29 399.67 339.33 399.82 339.33 404.35 339.43 406.05 339.46 411.45 339.58 411.86 339.59 413.25 339.62 414.38 339.64 415.71 339.67 415.88 339.67 416.2 339.68 416.81 340 416.82 340 417.54 340.38 417.59 340.4 417.71 340.46 418.46 340.85 418.47 340.85 418.47 340.86 419.15 341.21 420.67 342 422.92 342.39 423.09 342.41 423.98 342.57 425.48 342.82 425.59 342.84 426.37 342.97 427.23 343.12 428.21 343.29 430.75 343.72 435.14 344.47 435.15 344.47 441.97 345.64 442.09 345.66 446.26 346.38 446.48 346.41 449.37 346.91 449.92 347 450.23 347.1 451.51 347.52 452.58 347.87 453.17 348.06 453.29 348.1 453.44 348.15 453.45 348.15 453.46 348.16 453.78 348.26 463.69 351.5 463.8 351.53 464.37 351.72 465.25 352.01 465.26 352.01 465.35 352.04 465.2 352.08 465.19 352.08 464.42 352.29 464.27 352.33 464.27 352.34 464.26 352.34 464.1 352.38 464.09 352.38 463.65 352.5 463.51 352.54 462.52 352.81 461.5 353.09 463.27 353.95 463.41 354.02 463.42 354.02 463.46 354.04 463.46 354.05 463.64 354.13 463.92 354.27 463.94 354.28 464.07 354.34 464.08 354.34 464.46 354.53 466.1 355.33 467.2 355.86 467.72 356.11 467.72 356.12 468.82 356.65 469.73 357.09 469.92 357.18 469.92 357.19 470.67 357.55 471.31 357.86 474.7 359.51 474.71 359.51 478.25 361.23 515.12 367.39 516.26 367.58 528.81 369.67 530.66 369.98 531.94 370.19 531.95 370.19 533.54 370.46 536.09 370.89 546 372.54 541.99 373.78 541.97 373.78 541.96 373.79 539.32 374.6 539.31 374.6 536.43 374.86 534.83 375.01 531.87 375.28 530.7 375.39 530.69 375.39 530.1 375.44 528.99 375.54 526.96 375.73 520.85 376.28 517.18 376.62 516.15 376.71 501.79 378.02 501.78 378.02 481.75 379.85 482.88 380.25 487.34 381.82 517.11 385.41 518.09 385.52 523.75 386.21 525.71 386.44 526.2 386.5 527.9 386.71 540.89 388.27 542.21 388.43 556 390.09 580.5 393.75 581.16 393.85 601.58 396.9 618.54 399.43 623 400.1z"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_169)"
                  d="M373.33 400.1L199.25 400.1 205.77 393.62 265.28 384.49 270.32 383.27 272.02 382.86 273.2 382.57 274.14 382.34 286.27 379.4 287.62 379.07 291.62 378.1 291.95 378.02 291.96 378.02 313.98 372.68 314.04 372.64 319.87 369.42 319.51 369.08 318.42 368.06 297.44 366.85 293.46 359.38 293.02 358.55 293.02 358.54 292.27 357.14 292.23 357.07 291.52 355.74 292.64 355.55 292.64 355.54 294.71 355.19 294.71 355.18 332.19 348.66 350.26 345.52 351.67 345.27 360.31 344.09 361.81 343.88 362.05 343.85 369.45 342.84 369.51 342.84 372.12 342.73 372.14 343.62 372.14 343.82 372.45 358.21 372.47 359.41 372.54 362.48 372.68 369.19 372.71 370.49 372.88 378.96 373.33 400.1z"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_169-2)"
                  d="M604.87 400.1L420.83 400.1 420.5 392.6 420.5 392.57 420.42 390.75 419.92 379.51 419.78 376.47 419.77 376.25 419.76 375.98 419.76 375.91 419.56 371.43 419.49 369.87 419.23 364.04 419.16 362.43 419.09 360.73 419.04 359.8 418.99 358.66 418.97 358.23 418.97 358.08 418.5 347.52 418.28 342.64 418.28 342.5 418.26 342.23 418.26 342.2 418.23 341.42 418.39 341.38 419.15 341.21 420.67 342 422.92 342.39 423.09 342.41 423.98 342.57 425.48 342.82 425.59 342.84 426.37 342.97 427.23 343.12 428.21 343.29 430.75 343.72 435.14 344.47 435.15 344.47 441.97 345.64 442.09 345.66 446.26 346.38 446.48 346.41 449.37 346.91 449.92 347 450.23 347.1 451.51 347.52 452.58 347.87 453.17 348.06 453.29 348.1 453.44 348.15 453.45 348.15 453.46 348.16 453.78 348.26 463.69 351.5 463.8 351.53 464.37 351.72 465.25 352.01 465.26 352.01 465.35 352.04 465.2 352.08 465.19 352.08 464.42 352.29 464.27 352.33 464.27 352.34 464.26 352.34 464.1 352.38 464.09 352.38 463.65 352.5 463.51 352.54 462.52 352.81 461.5 353.09 463.27 353.95 463.41 354.02 463.42 354.02 463.46 354.04 463.47 354.04 463.64 354.13 463.92 354.27 463.94 354.28 464.07 354.34 464.08 354.34 464.46 354.53 466.1 355.33 467.2 355.86 467.72 356.11 467.72 356.12 468.82 356.65 469.73 357.09 469.92 357.18 470.67 357.54 470.67 357.55 471.31 357.86 474.7 359.51 474.71 359.51 478.25 361.23 515.12 367.39 516.26 367.58 528.81 369.67 530.66 369.98 531.94 370.19 531.95 370.19 533.54 370.46 536.09 370.89 546 372.54 541.99 373.78 541.97 373.78 541.96 373.79 539.32 374.6 539.31 374.6 536.43 374.86 534.83 375.01 531.87 375.28 530.7 375.39 530.69 375.39 530.1 375.44 528.99 375.54 526.96 375.73 520.85 376.28 517.18 376.62 516.15 376.71 501.79 378.02 501.78 378.02 481.75 379.85 482.88 380.25 487.34 381.82 517.11 385.41 518.09 385.52 523.75 386.21 525.71 386.44 526.2 386.5 527.9 386.71 540.89 388.27 542.21 388.43 556 390.09 580.5 393.75 581.16 393.85 601.58 396.9 604.87 400.1z"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_169-3)"
                  d="M618.56 400.1L465.35 400.1 465.35 355.76 466.1 355.33 467.2 355.86 467.72 356.11 467.72 356.12 468.82 356.65 469.73 357.09 469.92 357.18 469.92 357.19 470.67 357.55 471.31 357.86 474.7 359.51 474.71 359.51 478.25 361.23 515.12 367.39 516.26 367.58 528.81 369.67 530.66 369.98 531.94 370.19 533.54 370.46 536.09 370.89 546 372.54 541.99 373.78 541.98 373.78 541.96 373.79 539.32 374.6 539.31 374.6 536.43 374.86 534.83 375.01 531.87 375.28 530.69 375.39 530.1 375.44 528.99 375.54 526.96 375.73 520.85 376.28 517.18 376.62 516.15 376.71 501.78 378.02 481.75 379.85 482.88 380.25 487.34 381.82 517.11 385.41 518.09 385.52 523.75 386.21 525.71 386.44 526.2 386.5 527.9 386.71 540.89 388.27 542.21 388.43 556 390.09 580.5 393.75 581.16 393.85 601.58 396.9 618.54 399.43 618.56 400.1z"
                ></path>
                <path
                  d="M333.89 400.1h-42.95l.49-15.79v-2.16l.12-4 .45-.15 22-5.34h.06l5.83-3.22-.36-.34-1.09-1-21-1.21-4-7.47-.44-.83-.75-1.4 1.74-.33.23-.05 4.9-.93 6.34-1.21 12.54-2.44h.05l14.12-2.69.52-.1v.39l.17 7.48v1l.25 11v.44l.21 8.81z"
                  style={{ mixBlendMode: "multiply" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_169-4)"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_178)"
                  d="M295.7 381.5L295.7 400.1 206.83 400.1 207.98 393.99 270.76 385.05 272.48 384.81 273.68 384.64 274.59 384.51 285.31 382.98 286.51 382.81 291.5 382.1 292.29 381.99 295.7 381.5z"
                ></path>
                <path
                  fill="#1a002e"
                  d="M293.01 358.55L292.27 357.14 293.02 358.54 293.02 358.55 293.01 358.55z"
                ></path>
                <path
                  fill="#1a002e"
                  d="M293.46 359.38L297.44 366.85 293.46 359.39 293.46 359.38z"
                ></path>
                <path
                  fill="#1a002e"
                  d="M320.04 369.42L321.44 370.6 316.75 374.35 315.5 375.35 306.42 378.19 300.55 380.03 298.35 380.71 295.7 381.54 291.47 382.87 285.99 384.58 284.78 384.96 277.8 387.14 275.3 387.92 274.5 388.17 274 388.33 273.33 388.44 271.65 388.73 263.55 390.11 216.5 398.1 212.25 396.1 206.83 400.1 163.5 400.1 205.77 393.62 265.28 384.49 270.32 383.27 272.02 382.86 273.2 382.57 274.14 382.34 286.27 379.4 287.62 379.07 291.62 378.1 291.95 378.02 291.96 378.02 313.98 372.68 314.04 372.64 319.51 369.08 318.42 368.06 320.03 369.42 320.04 369.42z"
                ></path>
                <path
                  fill="#1a002e"
                  d="M385.25 340.89l-3.81.53-9.32 1.31-9.25 1.3h-.27l-.54.07-.32.05-1.23.17-8.67 1.22h-.27l-.47.07-.82.16-18.07 3.52-19 3.71-2.4.47-.33.06h-.16l-.25.05h-.53l-6.85 1.34-.54.1-3.05.6-4.82.94h-.22l-1.75.34v-.06l-.71-1.33 1.12-.2 2.07-.36 37.48-6.57 18.07-3.17.52-.09 9.52-1.29 1.51-.21h.24l19.38-2.63 3.49-.47z"
                ></path>
                <path
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_60-2)"
                  d="M623 400.1L584.19 400.1 580.59 399.2 580.5 399.18 559.7 393.99 539.31 391.49 538.05 391.34 526.77 389.96 525.05 389.75 524.73 389.71 522.75 389.47 518.44 388.94 517.49 388.82 486.93 385.08 479.5 383.03 479.88 382.5 481.48 380.23 481.75 379.85 482.88 380.25 487.34 381.82 517.11 385.41 518.09 385.52 523.75 386.21 525.71 386.44 526.2 386.5 527.9 386.71 540.89 388.27 542.21 388.43 556 390.09 580.5 393.75 581.16 393.85 601.58 396.9 618.54 399.43 623 400.1z"
                ></path>
                <path
                  fill="#1a002e"
                  d="M541.99 373.78L477.79 362.39 461.13 353.51 461.5 353.09 464.42 352.29 449.92 347.52 419.92 342.6 415.71 339.67 416.2 339.68 420.67 342 449.92 347 465.35 352.04 461.5 353.09 478.25 361.23 546 372.54 541.99 373.78z"
                ></path>
                <path
                  fill="#6a81ff"
                  d="M309.5 353.78l42.33-8.22s-.67 1.19-3.1.91l-1.71.25s-3.57 1.44-15.9 3.35-21.62 3.71-21.62 3.71z"
                ></path>
                <path
                  fill="#6a81ff"
                  d="M298.94 355.79l6.56-1.19a7.92 7.92 0 01-6.56 1.19z"
                ></path>
                <path
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_32)"
                  d="M584.19 400.1L578.12 400.1 537.28 393.64 536.09 393.45 526.1 391.87 524.4 391.6 524.17 391.57 522.21 391.26 518.62 390.69 517.68 390.54 486.93 385.68 474.62 383.78 479.88 382.5 479.94 382.48 479.5 383.03 486.93 385.08 517.49 388.82 518.44 388.94 522.75 389.47 524.73 389.71 525.05 389.75 526.77 389.96 538.05 391.34 539.31 391.49 559.7 393.99 580.5 399.18 580.59 399.2 584.19 400.1z"
                ></path>
                <path
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_32-2)"
                  d="M324.3 370.99L316.5 375.6 309.09 378.22 295.7 382.96 292.52 384.08 291.43 384.31 285.72 385.5 284.58 385.73 277.8 387.14 275.25 387.67 274.43 387.84 273.25 388.09 271.58 388.44 263.55 390.11 215.5 400.1 206.83 400.1 212.25 396.1 217.88 397.6 271.09 386.43 272.78 386.08 273.96 385.83 274.82 385.65 285.18 383.48 286.39 383.22 291.49 382.15 292.29 381.99 298.35 380.71 298.94 380.59 300.55 380.03 305.81 378.18 316.75 374.35 321.44 370.6 324.3 370.99z"
                ></path>
                <path
                  fill="#6a81ff"
                  d="M419.92 342.6L421.19 343.41 429.81 344.33 431.96 344.81 449.92 347.52 462.52 352.81 464.42 352.29 450.16 347.51 449.69 347.45 419.92 342.6z"
                ></path>
                <path
                  fill="#6a81ff"
                  d="M461.77 353.85L477.31 362.13 517.87 369.5 541.99 373.78 537 374.73 517.92 369.98 475.83 362.66 475.37 361.74 461.77 353.85z"
                ></path>
                <path
                  d="M319.87 369.42l191.68 3.87s-94.09-5.44-191.68-3.87z"
                  style={{ mixBlendMode: "soft-light" }}
                  fill="#b0b8ff"
                ></path>
                <path
                  d="M292.27 357.14l185.52 5.25s-120.46-6.11-185.52-5.25z"
                  style={{ mixBlendMode: "soft-light" }}
                  fill="#b0b8ff"
                ></path>
                <path
                  d="M419.92 342.6l-58.59 1.5s49.25-2.37 58.59-1.5z"
                  style={{ mixBlendMode: "soft-light" }}
                  fill="#cfd4ff"
                ></path>
                <path
                  d="M375.58 342.41l41.88-1.69-1.26-1s-28.2 1.58-40.62 2.69z"
                  style={{ mixBlendMode: "soft-light" }}
                  fill="#cfd4ff"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="#5f3464"
                  d="M800 396.92L800 400.1 0 400.1 0 384.1 34.32 382.11 44.88 381.5 44.89 381.5 56.98 380.8 57.01 380.79 62.17 380.49 62.19 380.49 85.84 379.12 86.43 379.09 96.14 378.52 102.1 378.18 129.21 376.6 129.24 376.6 140.13 375.97 141.96 375.87 141.98 375.87 143.61 375.77 143.89 375.75 145.15 375.68 146.22 375.62 146.92 375.58 156.44 375.03 164.04 374.59 164.85 374.54 165.2 374.52 167.76 374.37 170.28 374.22 170.33 374.22 184.98 373.37 190.56 373.05 194.67 372.81 205.01 372.21 213.06 371.74 214.34 371.67 215.01 371.63 216.34 371.55 217.45 371.49 217.46 371.49 223.3 371.15 224.21 371.1 225.64 371.01 239.01 370.24 250.58 369.57 266.76 368.63 266.77 368.63 268.64 368.52 269.92 368.45 271.23 368.37 289.5 367.31 291.14 367.22 297.44 366.85 293.75 368.87 293.74 368.87 290.05 370.89 288.28 371.85 277.3 377.85 286.65 377.96 287.95 377.97 291.95 378.02 291.96 378.02 305.81 378.18 306.42 378.19 309.09 378.22 332.19 378.49 333.39 378.5 372.88 378.96 389.1 379.15 389.11 379.15 400.67 379.29 400.68 379.29 407.67 379.37 409.97 379.4 410.14 379.4 410.75 379.41 410.78 379.41 411.63 379.42 412.82 379.43 413.78 379.44 415.91 379.47 417.99 379.49 418.76 379.5 419.92 379.51 420.75 379.52 421.49 379.53 433.7 379.67 442.12 379.77 442.51 379.78 443.48 379.79 444.11 379.79 444.75 379.8 445.29 379.81 446.84 379.83 447.12 379.83 450.79 379.87 451.48 379.88 459.03 379.97 460.52 379.99 461 379.99 463.26 380.02 463.87 380.03 464.12 380.03 465.09 380.04 465.35 380.04 467.09 380.06 481.48 380.23 482.88 380.25 499.43 380.44 516.3 378.03 517.31 377.89 521.52 377.29 526.71 376.55 528.77 376.26 528.78 376.26 529.86 376.1 531.39 375.88 531.67 375.84 534.71 375.41 536.55 375.15 539.54 374.72 555.25 372.48 555.59 372.43 557.63 372.14 580.35 368.9 580.5 368.88 583.84 368.4 586.25 368.06 598.74 372.51 606.29 375.21 606.3 375.21 609.2 376.24 611.37 377.01 623.95 381.5 631.08 384.04 631.17 384.07 645.23 389.09 645.26 389.1 649.34 390.55 670.11 391.43 672.56 391.53 672.57 391.53 676.32 391.69 676.42 391.69 678.44 391.78 699.41 392.67 718.13 393.46 718.16 393.46 791.37 396.56 791.38 396.56 800 396.92z"
                ></path>
                <path
                  fill="#16011a"
                  d="M209.94 379.75L224.35 356.66 226.41 356.66 210.99 379.46 211.99 379.33 231.01 352.04 234.85 352.63 218.41 378.98 219.41 378.98 227.26 366.1 228.21 366.1 221.48 378.98 214.65 378.98 209.94 379.75z"
                ></path>
                <path
                  fill="#3c1d47"
                  d="M209.94 379.75L217.86 359.4 220.08 358.35 210.99 379.46 209.94 379.75z"
                ></path>
                <path
                  fill="#3c1d47"
                  d="M221.48 378.98L227.71 373.06 228.29 373.66 222.39 378.98 221.48 378.98z"
                ></path>
                <path
                  fill="#3c1d47"
                  d="M233.76 349.35L224.89 365.24 233.21 352.38 234.27 352.54 235.26 351.1 233.76 349.35z"
                ></path>
                <path
                  fill="#190031"
                  d="M75.33 384.08L127.16 359.62 206.08 352.04 207.97 358.06 203.34 380.2 152.91 384.08 75.33 384.08z"
                ></path>
                <path
                  fill="#281147"
                  d="M127.16 359.62L112.83 367.22 152.91 377.06 190.96 370.86 207.97 358.06 206.08 352.04 127.16 359.62z"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="#5f3464"
                  d="M190.96 370.86L189.07 381.3 154.03 383.99 75.33 384.08 112.83 367.22 152.91 377.06 190.96 370.86z"
                ></path>
                <path
                  fill="#281147"
                  d="M99.78 372.54L150.95 379.6 184.66 378.42 150.58 381.81 102.95 380.26 99.78 372.54z"
                ></path>
                <path
                  fill="#190031"
                  d="M139.16 390.56L152.79 386.1 210.83 378.42 226.16 378.42 234.33 381.81 236.08 384.49 207.97 390.56 139.16 390.56z"
                ></path>
                <path
                  fill="#281147"
                  d="M152.79 386.1L206.08 387.27 212.5 386.1 234.33 381.81 226.16 378.42 210.83 378.42 152.79 386.1z"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="#5f3464"
                  d="M206.08 387.27L207.97 390.56 139.16 390.56 152.79 386.1 206.08 387.27z"
                ></path>
                <path
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_159)"
                  d="M499.43 380.44L510.74 368.81 521.42 368.81 534 377.73 537.67 365.71 541.08 362.19 610.08 357.84 613.92 361.23 601.65 383.72 607.54 381.5 632.08 381.5 645.58 389.28 642.75 390.09 588.42 390.09 499.43 380.44z"
                ></path>
                <path
                  fill="#9081cf"
                  d="M541.08 362.19L537.67 365.71 564.42 376.01 595.42 374.98 613.92 361.23 610.08 357.84 541.08 362.19z"
                  opacity="0.2"
                ></path>
                <path
                  fill="#9081cf"
                  d="M510.74 368.81L502.13 377.65 520.67 376.01 525.33 371.59 521.42 368.81 510.74 368.81z"
                  opacity="0.2"
                ></path>
                <path
                  fill="#9081cf"
                  d="M607.54 381.5L601.65 383.72 590.92 387.16 617.81 387.71 629.36 384.6 634.73 383.02 632.08 381.5 607.54 381.5z"
                  opacity="0.2"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="#5f3464"
                  d="M595.42 374.98L597.42 385.08 607.54 381.5 613.92 361.23 595.42 374.98z"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="#5f3464"
                  d="M617.81 387.71L638.42 390.09 642.75 390.09 645.58 389.28 634.73 383.02 617.81 387.71z"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_149-75)"
                  d="M520.67 376.01L525.33 383.02 534.15 384.2 534 377.73 525.33 371.59 520.67 376.01z"
                  opacity="0.5"
                ></path>
                <path
                  fill="#9081cf"
                  d="M535.54 372.67L548.42 379.27 564.42 380.44 549.98 383.02 537.67 377.89 535.54 372.67z"
                  opacity="0.2"
                ></path>
                <path
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_60-3)"
                  d="M569.39 390.09L575.79 383.72 590.92 381.5 592.58 383.72 590.24 390.09 569.39 390.09z"
                ></path>
                <path
                  fill="#6d81e5"
                  d="M575.79 383.72L581.08 387.71 591.5 385.08 592.58 383.72 590.92 381.5 575.79 383.72z"
                  opacity="0.2"
                ></path>
                <path
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_128-2)"
                  d="M449.34 376.13L452.61 384.55 466.06 397.72 470.66 398.67 468.72 382.31 467.25 380.95 466.45 376.13 449.34 376.13z"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_149-76)"
                  d="M452.61 384.55L451.15 378.51 458.68 378.48 464.18 382.98 469.43 398.42 470.66 398.67 468.72 382.31 467.25 380.95 466.45 376.13 449.34 376.13 452.61 384.55z"
                  opacity="0.5"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_149-77)"
                  d="M468.72 382.31L464.18 382.98 458.68 378.48 458.68 376.27 466.45 376.13 467.25 380.95 468.72 382.31z"
                  opacity="0.5"
                ></path>
                <path
                  fill="#7f757c"
                  d="M452.61 384.55L451.15 378.51 458.68 378.48 461.02 388.4 466.06 397.72 452.61 384.55z"
                  opacity="0.2"
                ></path>
                <path
                  fill="#7f757c"
                  d="M467.6 398.04L467 391.26 469.43 398.42 467.6 398.04z"
                  opacity="0.2"
                ></path>
                <path
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_128-3)"
                  d="M450.07 400.1L423.99 400.1 423.29 398.02 423.29 398 422.12 394.54 422.12 394.52 422.08 394.41 421.7 393.3 420.5 392.6 420.5 392.59 420.45 392.56 418.42 391.38 418.05 389.62 417.44 386.75 415.91 379.47 415.27 376.42 415.24 376.27 419.77 376.25 433.31 376.19 439.94 376.16 440 376.16 446.58 376.13 446.68 376.79 447.12 379.83 447.83 384.73 448.15 386.94 448.15 386.95 448.58 389.88 449.08 393.3 450.07 400.1z"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_149-78)"
                  d="M450.07 400.1L448.53 400.1 448.21 399.63 445.25 385.42 444.75 383.01 443.48 381.77 442.09 380.41 445.18 399.63 445.47 400.1 441.12 400.1 440.67 399 438.28 393.29 422.44 393.29 422.1 394.34 422.08 394.41 421.7 393.3 420.5 392.59 420.45 392.56 420.5 392.57 421.97 392.93 422.22 392.99 422.8 392.97 438.28 392.56 434.7 388.4 433.7 379.67 433.36 376.63 433.31 376.19 433.3 376.13 446.58 376.13 446.68 376.79 447.12 379.83 447.83 384.73 448.15 386.94 448.15 386.95 448.58 389.88 449.08 393.3 450.07 400.1z"
                ></path>
                <path
                  fill="#8b89a4"
                  d="M418.42 391.38L425.77 389.05 434.7 388.4 438.28 392.56 422.22 392.99 420.45 392.56 418.42 391.38z"
                  opacity="0.2"
                ></path>
                <path
                  fill="#7f757c"
                  d="M432.74 400.1L423.99 400.1 423.29 398.02 423.29 398 422.12 394.54 422.12 394.52 422.08 394.41 422.1 394.34 422.44 393.29 422.83 393.33 428.22 393.84 432.74 400.1z"
                  opacity="0.2"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_149-79)"
                  d="M433.3 376.13L434.7 388.4 438.28 392.56 434.79 392.65 434.78 393.29 438.28 393.29 440.67 399 445.18 399.63 442.1 380.41 442.26 376.17 433.3 376.13z"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_158)"
                  d="M448.21 399.63L446.58 376.13 444.75 376.27 444.75 383.01 448 399.29 448.21 399.63z"
                  opacity="0.5"
                ></path>
                <path
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_128-4)"
                  d="M409.97 376.54L409.97 381.29 406.27 384.97 388.98 379.11 393.25 376.54 409.97 376.54z"
                ></path>
                <path
                  fill="#8b89a4"
                  d="M388.98 379.11L391.83 378.15 407.67 380.19 409.97 381.29 406.27 384.97 388.98 379.11z"
                  opacity="0.2"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_149-80)"
                  d="M407.67 380.19L407.67 376.54 409.97 376.54 409.97 381.29 407.67 380.19z"
                  opacity="0.5"
                ></path>
                <path
                  fill="#16011a"
                  d="M418.98 376.29L418.97 376.46 418.76 379.5 418.05 389.62 417.33 399.97 417.32 400.1 416.44 400.1 416.72 396.45 417.44 386.75 417.99 379.49 418.22 376.45 418.23 376.29 418.98 376.29z"
                ></path>
                <path
                  fill="#3c1d47"
                  d="M423.49 400.1L422.63 400.1 422.12 394.54 422.12 394.52 422.1 394.34 421.97 392.93 421.73 390.33 420.75 379.52 420.47 376.48 420.45 376.29 421.17 376.29 421.19 376.49 421.49 379.53 422.52 390.08 422.8 392.97 422.83 393.29 422.83 393.33 423.29 398 423.29 398.02 423.49 400.1z"
                ></path>
                <path
                  fill="#16011a"
                  d="M453.75 400.1L452.38 400.1 449.08 393.3 447.55 390.16 445.25 385.42 445.22 385.35 443.48 381.77 442.51 379.78 442.15 379.02 441.03 376.72 440.93 376.52 441.85 376.57 441.93 376.73 442.22 377.29 443.48 379.79 444.75 382.3 447.37 387.48 448.58 389.88 453.75 400.1z"
                ></path>
                <path
                  fill="#16011a"
                  d="M442.26 376.53L452.63 394.84 453.31 395.34 443.6 376.54 442.26 376.53z"
                ></path>
                <path
                  fill="#3c1d47"
                  d="M410.78 379.41L410.67 378.15 410.75 379.41 412.11 400.1 411.4 400.1 410.14 379.4 409.97 376.54 411.33 376.4 411.63 379.42 413.65 400.1 412.59 400.1 410.78 379.41z"
                ></path>
                <path
                  fill="#16011a"
                  d="M417.35 400.1L416.44 400.1 416.43 400.27 416.4 400.1 412.82 379.43 412.32 376.57 413.25 376.4 413.78 379.44 416.72 396.45 417.33 399.97 417.35 400.1z"
                ></path>
                <path
                  fill="#16011a"
                  d="M461.77 376.57L462.25 376.57 463.87 380.03 465.18 382.83 465.35 383.19 470 393.13 473.27 400.1 471.91 400.1 470.42 396.64 465.35 384.88 464.51 382.93 463.26 380.02 461.77 376.57z"
                ></path>
                <path
                  fill="#16011a"
                  d="M464.12 380.03L462.25 376.57 463.27 376.57 465.09 380.04 465.35 380.53 466.46 382.64 469.43 388.31 474.37 397.72 473.67 397.72 469.67 390.31 465.6 382.77 465.35 382.31 464.12 380.03z"
                ></path>
                <path
                  fill="#3c1d47"
                  d="M464.95 400.1L464.31 400.1 463.4 395.11 462.75 391.61 460.64 380.09 460.63 379.99 460 376.57 460.33 376.57 461 379.99 461.09 380.45 463.58 393.13 464.1 395.8 464.95 400.1z"
                ></path>
                <path
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_128-5)"
                  d="M449.34 376.13L452.61 366.36 466.06 351.1 470.66 349.99 468.72 368.95 467.25 370.53 466.45 376.13 449.34 376.13z"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_149-81)"
                  d="M452.61 366.36L451.15 373.37 458.68 373.4 464.18 368.18 469.43 350.29 470.66 349.99 468.72 368.95 467.25 370.53 466.45 376.13 449.34 376.13 452.61 366.36z"
                  opacity="0.5"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_149-82)"
                  d="M468.72 368.95L464.18 368.18 458.68 373.4 458.68 375.96 466.45 376.13 467.25 370.53 468.72 368.95z"
                  opacity="0.5"
                ></path>
                <path
                  fill="#7f757c"
                  d="M452.61 366.36L451.15 373.37 458.68 373.4 461.02 361.9 466.06 351.1 452.61 366.36z"
                  opacity="0.2"
                ></path>
                <path
                  fill="#7f757c"
                  d="M467.6 350.73L467 358.59 469.43 350.29 467.6 350.73z"
                  opacity="0.2"
                ></path>
                <path
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_128-6)"
                  d="M415.24 375.96L418.42 358.45 421.7 356.22 430.23 326.88 442.25 316.27 445.47 314.81 448.21 343.12 450.49 344.99 446.58 376.13 415.24 375.96z"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_149-83)"
                  d="M442.25 316.27L445.59 335.93 438.28 356.24 422.44 356.24 422.08 354.93 421.7 356.22 420.45 357.07 422.22 356.58 438.28 357.07 434.7 361.9 433.3 376.13 446.58 376.13 450.49 344.99 448.21 348.88 444.75 368.15 442.1 371.16 445.18 348.88 448.21 343.12 445.47 314.81 442.25 316.27z"
                ></path>
                <path
                  fill="#8b89b3"
                  d="M418.42 358.45L425.77 361.14 434.7 361.9 438.28 357.07 422.22 356.58 420.45 357.07 418.42 358.45z"
                  opacity="0.2"
                ></path>
                <path
                  fill="#7f757c"
                  d="M430.23 326.88L422.08 354.93 422.44 356.24 428.22 355.59 435.47 343.95 434.68 326.88 435.47 322.26 430.23 326.88z"
                  opacity="0.2"
                ></path>
                <path
                  fill="#7f757c"
                  d="M443.26 322.26L441.08 335.93 441.08 341.58 442.64 344.13 445.59 335.93 443.26 322.26z"
                  opacity="0.2"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_149-84)"
                  d="M433.3 376.13L434.7 361.9 438.28 357.07 434.79 356.97 434.78 356.24 438.28 356.24 440.67 349.61 445.18 348.88 442.1 371.16 442.26 376.07 433.3 376.13z"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_158-2)"
                  d="M448.21 348.88L446.58 376.13 444.75 375.96 444.75 368.15 448 349.27 448.21 348.88z"
                  opacity="0.5"
                ></path>
                <path
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_128-7)"
                  d="M409.97 375.65L409.97 370.15 406.27 365.88 388.98 372.67 393.25 375.65 409.97 375.65z"
                ></path>
                <path
                  fill="#8b89a4"
                  d="M388.98 372.67L391.83 373.78 407.67 371.42 409.97 370.15 406.27 365.88 388.98 372.67z"
                  opacity="0.2"
                ></path>
                <path
                  style={{ mixBlendMode: "multiply" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_149-85)"
                  d="M407.67 371.42L407.67 375.65 409.97 375.65 409.97 370.15 407.67 371.42z"
                  opacity="0.5"
                ></path>
                <path
                  fill="#6a81ff"
                  d="M466.52 375.61L481.75 375.81 453.65 376.6 455.29 376.89 383.09 376.04 393.25 375.65 409.97 375.65 409.97 374.73 415.46 374.73 415.24 375.96 446.58 375.61 446.76 374.73 449.81 374.73 449.51 375.61 466.52 375.61z"
                ></path>
                <path
                  fill="#16011a"
                  d="M418.23 375.94L415.24 329.76 416.2 329.76 418.98 375.94 418.23 375.94z"
                ></path>
                <path
                  fill="#5c489a"
                  d="M420.45 375.94L424.53 324.2 425.51 324.37 421.17 375.94 420.45 375.94z"
                ></path>
                <path
                  fill="#16011a"
                  d="M440.93 375.68L459.34 331.73 461 331.73 441.85 375.61 440.93 375.68z"
                ></path>
                <path
                  fill="#16011a"
                  d="M442.26 375.66L452.63 354.44 453.31 353.85 443.6 375.65 442.26 375.66z"
                ></path>
                <path
                  fill="#3c1d47"
                  d="M409.97 375.65L411.83 340.24 412.59 339.89 410.67 373.78 413.42 337.35 414.67 336.25 411.33 375.81 409.97 375.65z"
                ></path>
                <path
                  fill="#16011a"
                  d="M412.32 375.61L418.98 331.1 419.92 331.1 413.25 375.81 412.32 375.61z"
                ></path>
                <path
                  fill="#16011a"
                  d="M461.77 375.61L474.63 341.04 476.34 340.73 462.25 375.61 473.67 351.1 474.37 351.1 463.27 375.61 461.77 375.61z"
                ></path>
                <path
                  fill="#3c1d47"
                  d="M460 375.61L465.35 341.75 466.06 341.75 460.33 375.61 460 375.61z"
                ></path>
                <path
                  fill="#a2bbff"
                  d="M388.98 372.67L391.08 374.13 389.92 372.67 404.85 366.85 406.5 366.85 409.49 370.41 409.97 371.93 409.97 370.15 406.27 365.88 388.98 372.67z"
                ></path>
                <path
                  fill="#a2bbff"
                  d="M418.42 358.45L421.7 356.22 424.53 324.2 425.51 324.37 423.35 349.99 430.23 326.88 442.25 316.27 445.47 314.81 446.38 324.2 444.75 316.18 442.26 317.22 431 327.35 422.44 356.24 422.88 352.23 422.27 352.76 421.94 357.06 418.42 358.45z"
                ></path>
                <path
                  fill="#a2bbff"
                  d="M449.08 356.22L449.08 357.06 461 331.73 459.34 331.73 449.08 356.22z"
                ></path>
                <path
                  fill="#a2bbff"
                  d="M415.5 354.34L418.98 331.1 419.92 331.1 416.72 352.56 415.5 354.34z"
                ></path>
                <path
                  fill="#a2bbff"
                  d="M416.89 355.33L415.24 329.76 416.2 329.76 417.33 348.6 416.89 355.33z"
                ></path>
                <path
                  fill="#a2bbff"
                  d="M412.33 351.77L413.5 350.07 414.67 336.25 413.42 337.35 412.33 351.77z"
                ></path>
                <path
                  fill="#a2bbff"
                  d="M450.49 372.69L452.61 366.36 463.2 354.34 465.35 341.75 466.06 341.75 464.1 353.31 466.06 351.1 470.66 349.99 470.42 352.34 474.63 341.04 476.34 340.73 470.3 353.55 470.09 350.79 463.91 354.44 464.13 351.98 463.7 352.21 463.2 355.33 453.31 366.29 450.49 372.69z"
                ></path>
                <path
                  fill="#16011a"
                  d="M649.34 390.56L661.19 325.65 663.67 324.44 652.47 378.66 667.64 318.55 674.67 318.55 668.52 379.85 674.67 338.74 676.1 338.74 670.11 391.43 681.5 332.35 683.23 332.35 672.56 391.54 692.05 357.06 693.83 356.72 676.1 392.14 649.34 390.56z"
                ></path>
                <path
                  fill="#3c1d47"
                  d="M649.34 390.56L651.88 339.93 653.46 337.6 651.4 381.5 656.75 324.05 658.13 322.1 653.46 390.56 649.34 390.56z"
                ></path>
                <path
                  fill="#3c1d47"
                  d="M676.1 392.14L695.67 364.29 697.45 363.54 678.12 392.26 676.1 392.14z"
                ></path>
                <path
                  fill="#3c1d47"
                  d="M663.67 366.85L671.59 311.84 673 313.21 673 318.55 672.13 318.41 663.67 366.85z"
                ></path>
                <path
                  fill="#5c489a"
                  d="M275.23 391.3L256.36 310.1 258.39 306.67 276 391.3 275.23 391.3z"
                ></path>
                <path
                  fill="#16011a"
                  d="M274.27 392.42L252.13 298.35 249.62 298.12 272.55 392.42 274.27 392.42z"
                ></path>
                <path
                  fill="#16011a"
                  d="M283.7 389.02L296.32 341.75 298.73 341.63 284.67 389.02 283.7 389.02z"
                ></path>
                <path
                  fill="#3c1d47"
                  d="M276 391.86L275.85 392.42 273.73 400.1 272.69 400.1 275.06 392.42 275.23 391.86 276 391.86z"
                ></path>
                <path
                  fill="#16011a"
                  d="M274.27 392.42L271.87 400.1 270.08 400.1 272.55 392.42 274.27 392.42z"
                  opacity="0.5"
                ></path>
                <path
                  fill="#16011a"
                  d="M288.94 400.1L287.55 400.1 284.83 392.42 284.71 392.08 283.7 389.23 284.67 389.23 285.83 392.19 285.92 392.42 288.94 400.1z"
                  opacity="0.5"
                ></path>
                <path
                  fill="#6a81ff"
                  d="M266.18 391.61L276 391.3 288.44 392.42 272.55 392.42 266.18 391.61z"
                ></path>
                <path
                  fill="#6a81ff"
                  d="M281.44 389.02L284.67 389.02 288.44 389.44 281.44 389.02z"
                ></path>
                <path
                  fill="#9897ef"
                  d="M256.36 310.1L266.18 342.73 258.39 306.67 256.36 310.1z"
                ></path>
                <path
                  fill="#9897ef"
                  d="M249.62 298.12L257.84 331.93 261.27 337.18 252.13 298.35 249.62 298.12z"
                ></path>
                <path
                  fill="#9897ef"
                  d="M296.32 341.75L290.81 362.39 294.46 356.03 298.73 341.63 296.32 341.75z"
                ></path>
                <path
                  fill="#16011a"
                  d="M523.93 400.1L521.87 400.1 520.77 396.28 520.72 396.12 520.67 395.94 522.75 395.94 522.8 396.1 522.8 396.13 522.85 396.28 523.93 400.1z"
                ></path>
                <path
                  fill="#16011a"
                  d="M519.19 395.94L519.17 396.12 519.16 396.28 518.79 400.1 517.88 400.1 518.27 396.28 518.29 396.12 518.31 395.94 519.19 395.94z"
                ></path>
                <path
                  fill="#3c1d47"
                  d="M536.74 400.1L535.38 400.1 532.95 397.31 532.74 397.06 532.67 396.98 532.51 396.8 533.81 396.8 533.85 396.85 534.04 397.06 534.26 397.31 536.74 400.1z"
                ></path>
                <path
                  fill="#3c1d47"
                  d="M525.93 400.1L524.13 400.1 522.86 396.28 522.81 396.12 522.8 396.1 522.75 395.94 524.57 395.94 524.63 396.12 524.68 396.28 525.93 400.1z"
                ></path>
                <path
                  fill="#16011a"
                  d="M520.67 396.28L537.67 340.73 551.49 311.43 554.08 311.84 539.32 341.21 522.75 396.28 520.67 396.28z"
                ></path>
                <path
                  fill="#16011a"
                  d="M519.19 396.28L512.95 335.02 511.55 335.02 518.31 396.28 519.19 396.28z"
                ></path>
                <path
                  fill="#3c1d47"
                  d="M532.51 397.31L578.22 348.03 580.45 348.03 533.8 397.31 532.51 397.31z"
                ></path>
                <path
                  fill="#3c1d47"
                  d="M522.75 396.28L546.87 327.85 549.11 325.65 524.57 396.28 522.75 396.28z"
                ></path>
                <path
                  fill="#b38bff"
                  d="M511.55 396.28L521.75 395.77 532.25 396.28 511.55 396.28z"
                ></path>
                <path
                  fill="#b38bff"
                  d="M529.64 397.31L534.29 396.8 537.76 397.31 529.64 397.31z"
                ></path>
              </g>
              <g id="medum-cloud" fillRule="evenodd">
                <path
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_32-3)"
                  d="M202.12 38.63a204.74 204.74 0 0165.45 9.11s-8.81-5.5-19.82-12.32c0 0-15.76-23.78-33.09-21.76-15.43 1.79-8.39 20.06-8.39 20.06s-5.11-1.72-6.66-.33c-1.95 1.75 2.51 5.24 2.51 5.24z"
                ></path>
                <path
                  d="M202.12 38.63a31.05 31.05 0 0113-5.16c10-1.19 21.67 3.07 21.67 3.07L235 33s20.11 5.91 32.56 14.72c.01.02-27.87-9.85-65.44-9.09z"
                  style={{ mixBlendMode: "multiply" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_149-86)"
                  opacity="0.5"
                ></path>
              </g>
              <g id="small-cloud" fillRule="evenodd">
                <path
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_32-4)"
                  d="M513.74 107.17a156.34 156.34 0 0150 7s-6.73-4.2-15.13-9.41c0 0-12-18.15-25.27-16.61-11.77 1.37-6.4 15.31-6.4 15.31s-3.9-1.3-5.09-.24c-1.52 1.29 1.89 3.95 1.89 3.95z"
                ></path>
                <path
                  d="M563.54 114a45.41 45.41 0 00-4.24-2.64.6.6 0 00-.15-.09c-1.33-.75-2.71-1.46-4.09-2.12l-2.33-1.08c-2.39-1.07-4.72-2-6.77-2.77-4.14-1.55-7.11-2.43-7.11-2.43l1.37 2.69a47 47 0 00-6.09-1.65l-1.31-.26a32.61 32.61 0 00-9.14-.44h-.16a23.53 23.53 0 00-9.23 3.55c-.36.23-.55.37-.55.37h4.57c3.9 0 7.62.21 11.16.49l2 .17c4.47.4 8.6 1 12.3 1.58 1.17.19 2.3.39 3.38.59l1.13.22 1.1.22c.71.14 1.41.29 2.08.44.9.19 1.76.38 2.57.58 5.45 1.28 8.85 2.41 9.54 2.65h.11z"
                  style={{ mixBlendMode: "multiply" }}
                  fill="url(#Áåçûìÿííûé_ãðàäèåíò_149-87)"
                  opacity="0.5"
                ></path>
              </g>
            </g>
          </g>
        </svg>
      </div>
    </React.Fragment>
  );
}

export default Header;
