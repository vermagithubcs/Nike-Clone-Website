import gsap from "gsap";
import { SplitText } from "gsap/all";
import React, { useEffect, useRef } from "react";
gsap.registerPlugin(SplitText);
const PreLoader = () => {
  const loaderRef = useRef(null);
  useEffect(() => {
    let split = SplitText.create(loaderRef.current, { type: "words, chars" });
    gsap.to(split.chars, {
      duration: 1,
      delay: 0.5,
      y: 100,
      autoAlpha: 0,
      stagger: 0.05,
    });
  },[]);
  return (
    <div className="preloader">
      <div
        ref={loaderRef}
        className="loader text-[5vw] font-[Nike] h-screen w-screen flex flex-col items-center justify-center leading-20 uppercase transform -rotate-10"
      >
        <h1>Nike Reactor</h1>
        <h1>Build Your</h1>
        <h1>React Runner</h1>
      </div>
    </div>
  );
};

export default PreLoader;
