import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* video part */}
      <section>
        <div className="relative w-full h-[375px] md:h-[540px] lg:h-[744px]">
          <video
            src="/HomeAssets/Herovideo.mp4"
            className="w-full h-full object-cover"
            type="video/mp4"
            autoPlay
            loop
            playsInline
          >
            Your browser does not support the video tag.
          </video>

          {/* Overlay Text */}
          <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-8 md:px-10 lg:px-20 bg-opacity-10 pt-3">
            <div className="flex flex-col items-start text-white w-full max-w-screen-xl mx-auto">
              <span className="text-[24px] sm:text-[36px] md:text-[48px] lg:text-[64px] xl:text-[80px] font-bold font-['Oswald'] leading-snug tracking-wider ">
                Premium Solutions for Modern Aquaculture
              </span>

              <p
                className="py-3 text-[14px] sm:text-[16px] md:text-[20px] lg:text-[24px] font-medium max-w-[60rem] leading-snug font-[' Mulish']"
                style={{ wordSpacing: "0.3rem" }}
              >
                Advanced formulations like Planktomin, Spirumin, and Phytocare to maximize yield and maintain tank health.
              </p>

              <div className="flex md:flex-wrap  gap-4 pt-4 md:pt-8">
                <button className="relative group overflow-hidden py-3 px-4 md:py-4 md:px-12 font-['Mulish'] font-bold rounded-2xl bg-white text-gray-900">
                  <span className="relative z-10 text-sm sm:text-base lg:text-lg group-hover:text-white transition-colors duration-300">
                    View Products
                  </span>
                  <span className="absolute bottom-0 left-1/2 w-96 h-96 bg-[#53724C] rounded-full transform -translate-x-1/2 translate-y-full scale-0 group-hover:translate-y-1/2 group-hover:scale-150 transition-all duration-900 ease-out z-0"></span>
                </button>

                <button className="relative group overflow-hidden py-3 px-8 md:py-4 md:px-12 font-[Mulish] font-bold rounded-2xl bg-white text-gray-900">
                  <span className="relative z-10 text-sm sm:text-base lg:text-lg group-hover:text-white transition-colors duration-300">
                    Contact Us
                  </span>
                  <span className="absolute bottom-0 left-1/2 w-96 h-96 bg-[#53724C] rounded-full transform -translate-x-1/2 translate-y-full scale-0 group-hover:translate-y-1/2 group-hover:scale-150 transition-all duration-900 ease-out z-0"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    
    </>
  )
}

export const HomeCard = ({ title, image }) => {
  return (
    <div className="relative w-full max-w-[300px] md:max-w-[320px] lg:max-w-[350px] h-[320px] md:h-[360px] lg:h-[403px] bg-white rounded-3xl hover:shadow-xl hover:bg-[#DFF0DB] duration-500 group overflow-hidden mx-auto">
      <div className="flex flex-col justify-center items-center h-full transition-transform duration-500 group-hover:scale-105">
        <img
          src={image}
          className="w-[120px] md:w-[150px] lg:w-[190px] h-auto object-contain z-10"
          alt=""
        />
        <img
          src="/HomeAssets/water.png"
          className="absolute z-10 bottom-16 md:bottom-20 lg:bottom-19 w-[180px] md:w-[240px] lg:w-[330px] h-[140px] md:h-[170px] lg:h-[203px]"
          alt=""
        />
        <div className="text-base md:text-lg lg:text-2xl font-semibold z-10 transition-transform duration-300 group-hover:scale-110 mt-2">
          {title}
        </div>
      </div>
    </div>
  );
};

export default Home