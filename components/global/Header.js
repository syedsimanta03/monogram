/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useRef } from "react";
import HALO from "vanta/dist/vanta.halo.min";

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
    <header className="min-h-screen grid grid-cols-1 xl:grid-cols-2" ref={myRef}>
      <h1 className="font-extrabold text-8xl text-jm-orange pl-32 pt-28">
        jamstack{" "}
        <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-indigo-500">
          101
        </span>
      </h1>
      <div className="flex justify-between w-full">
        <p className="w-[650px] mr-auto pl-32 -mt-20">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu augue
          massa, tincidunt proin nunc viverra tristique tempor, ipsum. At lectus
          vel pretium tempor ut dui vivamus sit.{" "}
        </p>
        <div className="-mt-20">
          <img
            src="/herographics.svg"
            alt="herographics"
            className="max-w-md"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
