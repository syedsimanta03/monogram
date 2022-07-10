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
          backgroundColor: 0x141414,
        })
      );
    }
  }, [vantaEffect]);
  return (
    <header className="min-h-screen w-full z-10 relative" ref={myRef}>
      <div className="flex flex-wrap">
        {/* Text */}
        <div className="pl-12 pt-14 md:pl-32 md:pt-20">
          <h1
            id="jamstack"
            className="font-extrabold text-4xl sm:text-6xl md:text-8xl text-jm-orange whitespace-nowrap slide-up"
          >
            jamstack{" "}
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-indigo-500">
              101
            </span>
          </h1>
          <p
            id="jam-text"
            className="max-w-1/2 md:w-[500px] mt-4 pr-4 slide-up"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu augue
            massa, tincidunt proin nunc viverra tristique tempor, ipsum. At
            lectus vel pretium tempor ut dui vivamus sit.{" "}
          </p>
          <img
            src="/dotline.svg"
            loading="lazy"
            alt="dotline"
            className="-rotate-[60deg] h-[300px] -mt-8 ml-40 hidden xl:block"
          />
        </div>
        {/* Img graphics */}
        <div className="mt-24 ml-auto">
          <img
            src="/herographics.png"
            loading="lazy"
            alt="herographics"
            className="max-h-[40rem] pb-32 slide-up"
          />
        </div>
      </div>

      <MouseDown />
    </header>
  );
};

export default Header;
