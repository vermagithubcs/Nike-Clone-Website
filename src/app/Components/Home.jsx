import gsap from "gsap";
import React, { useRef } from "react";
import { useState } from "react";
import Images from "../Common/Image";
import Image from "next/image";
const Home = () => {
  const images = Images();
  const textRef = useRef([]);
  const ImageRefs = useRef([]);
  const [color, setColor] = useState("");
  const [text, setText] = useState(images[0].name);
  const [Img, setImage] = useState(images[0].src);
  const handleClick = () => {
    gsap.from(ImageRefs.current[0], {
      opacity: 0,
      x: "-100",
      duration: 1,
      ease: "power1.inOut",
    });
    gsap.from(textRef.current[0], {
      y: "-50",
      opacity: 0,
      duration: 1,
      ease: "power1.inOut",
    });
  };

  return (
    <div
      className={`min-h-screen w-screen flex justify-center bg-[#df6f8a]`}
      style={{ backgroundColor: `${color}` }}
    >
      <h1
        ref={(el) => (textRef.current[0] = el)}
        className="text-[4vw] text-white font-[Nike] mt-25 absolute top-[24vw] transform -translate-x-1/2 -translate-y-1/2 left-[50%] text-center  z-[999]"
      >
        {text ? text : "Click a shoe"}
      </h1>
      <Image
        className="absolute top-60 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        src={Img}
        alt="Img"
        height={400}
        width={400}
        ref={(el) => (ImageRefs.current[0] = el)}
      />
      <div className="flex items-center h-40 w-full justify-around relative top-[35vw]">
        {images.map((image, index) => (
          <div
            className="rounded-full h-40 w-40 hover:border hover:border-white hover:scale-110 flex items-center justify-around  cursor-pointer"
            key={index}
          >
            <Image
            width={100}
            height={100}
              onClick={() => {
                setColor(image.color);
                setText(image.name);
                setImage(image.src);
                handleClick();
              }}
              className="images h-20"
              src={image.src}
              alt={image.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
