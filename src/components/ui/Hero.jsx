import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="h-screen w-full relative">
        <img
          src="https://img.freepik.com/free-photo/chicken-fried-hot-pot-with-spicy-sauce-korean-style_1150-42864.jpg?t=st=1724951393~exp=1724954993~hmac=c9c05f2b2292125d27fde950cd0001ca8729f6a6c85eec3ca6ffac952c15c6f9&w=900"
          alt=""
          className="w-full absolute h-full bg-cover bg-center object-cover"
              />
              <div className="absolute top-0 left-0 h-full w-full bg-[rgba(0,0,0,0.34)]"></div>
        <div className="absolute top-[20%] left-[5%] text-6xl sm:text-8xl font-semibold text-white/90">
          <h1 className="tracking-widest">
            Family
            <br/> Favourite <br />
            Recipes
                  </h1>
                  <p className="text-base py-10 pr-[50%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique vel, porro Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, placeat. </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
