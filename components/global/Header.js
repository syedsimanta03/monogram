import React, { useState, useEffect, useRef } from "react";
import HALO from "vanta/dist/vanta.halo.min";
import MouseDown from "./MouseDown";

const Header = () => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        VANTA.HALO({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          backgroundColor: 0x151515,
        })
      );
    }
  }, [vantaEffect]);
  return (
    <header className="min-h-screen w-full z-10 relative" ref={myRef}>
      <div className="flex flex-wrap">
        {/* Text */}
        <div className="pl-12 pt-14 md:pl-32 md:pt-28">
          <h1 className="font-extrabold text-4xl sm:text-6xl md:text-8xl text-jm-orange whitespace-nowrap">
            jamstack{" "}
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-indigo-500">
              101
            </span>
          </h1>
          <p className="max-w-1/2 md:w-[500px] mt-4 pr-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu augue
            massa, tincidunt proin nunc viverra tristique tempor, ipsum. At
            lectus vel pretium tempor ut dui vivamus sit.{" "}
          </p>
          <img src="/dotline.svg" alt="dotline" className="-rotate-[25deg] ml-40 hidden xl:block" />
        </div>
        {/* Img graphics */}
        <div className="mt-24 ml-auto">
          <img
            src="/herographics.svg"
            alt="herographics"
            className="max-w-md"
          />
        </div>
      </div>

      <MouseDown />
    </header>
  );
};

export default Header;
