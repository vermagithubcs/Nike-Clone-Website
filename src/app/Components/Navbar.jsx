import React, { useRef, useState } from "react";
import Menu from "../../../public/images/menu.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { RxCross1 } from "react-icons/rx";
import { SplitText } from "gsap/all";
import Image from "next/image";
gsap.registerPlugin(SplitText);
const Navbar = () => {
  const animRef = useRef(null);
  const sliderRef = useRef(null);
  const [Open, isOpen] = useState(false);
  useGSAP(() => {
    gsap.from(animRef.current, {
      y: "-100",
      duration: 1,
      stagger: {
        amount: 0.3,
      },
      ease: "power1.inOut",
    });
    if (Open) {
      let split = SplitText.create(".text", { type: "words, chars" });
      gsap.from(split.chars, {
        duration: 1,
        y: 100,
        autoAlpha: 0,
        stagger: {
          amount: 0.05,
        },
      });
    }
  }, [Open]);
  const sliderClick = () => {
    isOpen(true);
    gsap.to(sliderRef.current, {
      x: "-110%",
      duration: 1,
      delay: 0.5,
      ease: "power1.inOut",
      rotate: 0,
    });
  };
  const crossClick = () => {
    gsap.to(sliderRef.current, {
      x: "0",
      duration: 1,
      delay: 0.5,
      ease: "power1.inOut",
      rotate: 10,
    });
  };
  return (
    <>
      <div
        ref={sliderRef}
        className="h-screen w-screen bg-[#d8dadb] absolute right-[-110%] transform rotate-4 top-0 z-[9999]"
      >
        <RxCross1
          onClick={() => crossClick()}
          className="text-[8vw] absolute right-6 top-2 cursor-pointer hover:invert"
        />

        <div className="text text-[3vw] uppercase font-[Nike] text-black leading-10 flex flex-col items-center -rotate-10 justify-around w-screen h-1/2 absolute top-1/2 transform -translate-y-1/2">
          <h1 className="text hover:text-gray-400 cursor-pointer">
            Create your <br />
            React Runner
          </h1>
          <h1 className="text hover:text-gray-400 cursor-pointer">
            View Gallery
          </h1>
          <h1 className="text hover:text-gray-400 cursor-pointer">
            Discover Nike React
          </h1>
          <h1 className="text hover:text-gray-400 cursor-pointer">
            Privacy Statement <br />
            Discalimer
          </h1>
        </div>
      </div>
      <div
        ref={animRef}
        className="h-20 w-screen fixed top-0 left-0 flex items-center justify-between p-6"
      >
        <div className="nike-logo">
          <svg
            className="h-10 cursor-pointer hover:invert swoosh___-gUo6"
            viewBox="0 0 100 36"
          >
            <path d="M98,1.5L28.6,19.8c-5.8,1.5-10.5,1.3-13.2-0.6c-6.8-5-1.6-15,0.2-18C12.3,4.8,9,8.5,6.4,12.5c-4.1,6.3-5.8,13.1-3.1,17.5c4.9,7.9,16.8,4.3,24.4,1.1L98,1.5z"></path>
          </svg>
        </div>
        <div onClick={() => sliderClick()} className="menu">
          <Image height={50} className="cursor-pointer" src={Menu} alt="MenuIcon" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
