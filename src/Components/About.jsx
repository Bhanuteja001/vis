import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";

export const AboutBottom = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section>
      <div className=" my-5 md:my-10 lg:my-10 xl:my-15 relative h-[360px] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/AboutAssets/aboutbtm.png')] bg-cover bg-center blur-[2.5px] "></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-[28px] md:text-[36px] lg:text-[48px]  font-bold font-[Oswald] tracking-[2px] mb-2">Have Questions About Our Products?</h1>
          <p className="text-[16px] md:text-[20px] lg:text-[24px] font-medium font-[Mulish] md:w-150">Reach out to our team — we're here to help.</p>
          <button onClick={() => navigate("/contact")} className="relative group overflow-hidden p-2 md:p-4 text-xl font-[Mulish] font-bold px-8 md:px-12 rounded-2xl bg-white text-gray-900 my-5">
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
              Contact Us
            </span>
            <span className="absolute bottom-0 left-1/2 w-96 h-96 bg-[#53724C] rounded-full transform -translate-x-1/2 translate-y-full scale-0 group-hover:translate-y-1/2 group-hover:scale-150 transition-all duration-900 ease-out z-0"></span>
          </button>
        </div>
      </div>
    </section>
  )
}

export const MainCard = (a) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section>
      <div className="relative h-[500px] bg-cover bg-center flex items-center justify-center px-4 md:px-10 text-white"
        style={{ backgroundImage: "url('/AboutAssets/AboutImage.png')" }}>

        {/* Text Content */}
        <div className="relative z-10 text-center">
          <h1 className="text-[48px] md:text-[64px] font-bold mb-3 font-['Oswald'] tracking-wide">{a.title}</h1>
          <p className="text-[20px] md:text-[24px] max-w-4xl font-['Mulish'] mb-2">
            {a.para}
          </p>
          {a.showBreadcrumb && (
            <div className="text-[20px] md:text-[24px] font-['Mulish'] font-bold py-2">
              <a href="/">Home</a> &gt; <a href="/about">{a.page}</a>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

const About = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Main Card */}
      <MainCard title="About Us" para="Delivering trusted aquaculture products that support clean water and healthy growth." page="About" showBreadcrumb={true} />
      {/* We are here */}
      <section>
        <div className="flex flex-wrap xl:flex-nowrap md:flex-col lg:flex-row items-start justify-center gap-5 px-4 md:px-20 md:py-3 lg:py-6 mt-8 md:mt-4">
          {/* Right Content */}
          <div className="w-full xl:w-[50%]">
            <h2 className="text-[28px] md:text-[36px] lg:text-[48px] font-semibold font-['Oswald'] text-[#53724C]">Who We Are</h2>
            <p className="text-[16px] md:text-[20px] font-medium leading-snug pt-3">
              Sree Datta Sai Aqua Solutions is dedicated to supporting aquaculture farmers with reliable, science-based solutions.
              Our focus is on improving water quality and nutrition for healthier, more productive fish and prawns.
              With strong roots in Andhra Pradesh, we combine experience, care, and innovation to empower every stage of the farming journey.
            </p>

            {/* Feature Boxes */}
            <div className=" flex flex-wrap md:flex-nowrap space-y-8  md:space-x-6 lg:space-x-0 md:space-y-10 mt-5">
              {/* Feature 1 */}
              <div className="w-full  md:w-[340px]   flex flex-col gap-2 group hover:cursor-pointer">
                {/* Top section with icon and headings */}
                <div className="flex items-start gap-3">
                  <img src="/HomeAssets/Shrimp.png" alt="Shrimp" className="w-[50px] h-[50px] mt-1 transition-transform duration-500 group-hover:rotate-y-180" />
                  <div>
                    <h4 className="font-medium text-[14px] font-['Mulish'] text-gray-700">Smart Feed</h4>
                    <p className="text-[20px] font-['Oswald'] font-bold text-[#375B2B]">Fish & Shrimp</p>
                  </div>
                </div>

                {/* Description aligned below the icon */}
                <p className="text-[16px] font-['Mulish'] font-semibold text-[#444444] tracking-wide">
                  Nutrient-rich supplements that boost growth, immunity, and performance in prawns and fish.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="w-full md:w-[340px] flex flex-col gap-2 group hover:cursor-pointer">
                <div className="flex items-start gap-3">
                  <img
                    src="/HomeAssets/FishSm.png"
                    alt="Water"
                    className="w-[50px] h-[50px] mt-1 transition-transform duration-500 group-hover:rotate-y-180"
                  />
                  <div>
                    <h4 className="font-medium text-[14px] font-['Mulish']  text-gray-700">Clean Water</h4>
                    <p className="text-[20px] font-['Oswald'] font-bold text-[#375B2B]">Aqua Essentials</p>
                  </div>
                </div>
                <p className="text-[16px] font-['Mulish'] font-semibold text-[#444444] tracking-wide">
                  Effective water care solutions to maintain healthy tanks and reduce stress on aquatic life.
                </p>
              </div>
            </div>
          </div>
          {/* Left Images */}
          <div className="w-full flex justify-center items-center relative xl:w-[50%]">
            <img src="/AboutAssets/Rectangle.png" className='w-full h-full ' alt="" />
          </div>
        </div>
      </section>
      {/* Strengths */}
      <section>
        <div className="bg-[#DFF0DB] overflow-x-hidden my-5">
          <div className="flex flex-col justify-center items-center py-10 text-center">
            <div className="text-[28px] md:text-[48px] font-['Oswald'] text-[#3F573A] font-bold mystyle">
              Our Core Strengths
            </div>
            <div className="text-[16px] md:text-[24px] font-['Mulish'] font-semibold">
              Expertly formulated solutions for sustainable, successful aquaculture.
            </div>
          </div>

          {/* Card wrapper */}
          <div className="flex flex-wrap xl:flex-nowrap justify-center gap-8 px-4 py-10 lg:px-10 max-w-[1600px] mx-auto ">
            {[
              {
                title: ['Expert', 'Formulations'],
                img: 'Flask.png',
                desc: 'Products developed with deep knowledge of aquaculture science.'
              },
              {
                title: ['Water Quality', 'First'],
                img: 'Flask3.png',
                desc: 'Clear, healthy water for stronger fish and prawns.'
              },
              {
                title: ['Growth &', 'Nutrition'],
                img: 'Flask2.png',
                desc: 'Nutritional support at every life stage for better outcomes.'
              },
              {
                title: ['Trusted by Aqua', 'Framers'],
                img: 'Flask1.png',
                desc: 'Reliable support and trusted by aqua professionals across Andhra Pradesh.'
              }
            ].map((card, i) => (
              <div
                key={i}
                className="w-[300px] min-h-[360px] p-6 bg-white border border-gray-200 rounded-3xl shadow-sm text-gray-900 group hover:bg-[#6B9362] hover:text-white transition-colors duration-300 text-center"
              >
                <div className="relative flex items-center justify-center h-[100px] w-[100px] mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="101"
                    height="100"
                    viewBox="0 0 101 100"
                    fill="none"
                    className="group-hover:stroke-white"
                  >
                    <circle
                      cx="50.5"
                      cy="50"
                      r="49"
                      fill="white"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinejoin="round"
                      strokeDasharray="6 4"
                      className="group-hover:bg-[#6B9362] group-hover:stroke-white group-hover:fill-[#6B9362]"
                    />
                  </svg>
                  <img
                    src={`/HomeAssets/${card.img}`}
                    className="absolute h-[48px] w-[48px]"
                    alt={card.title.join(' ')}
                  />
                </div>
                <div className="py-4">
                  <h5 className="text-2xl font-bold">{card.title[0]}</h5>
                  <h5 className="text-2xl font-bold">{card.title[1]}</h5>
                </div>
                <p className="pb-5 text-md leading-snug">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Journey */}
      <section>
        <div className="py-10">
          <h1 className='text-[32px] sm:text-[40px] md:text-[48px] font-["Oswald"] font-bold text-[#53724C] text-center md:pb-20 lg:pb-25'>
            Our Journey
          </h1>
          <div className="relative flex flex-col md:flex-row justify-center items-center gap-28 py-10 md:py-20 px-4">
            {/* Timeline Line - Horizontal for md+ */}
            <div className="absolute top-[40%] left-0 right-0 mx-auto w-full md:w-[calc(100%-300px)] lg:w-[calc(100%-500px)] h-2 bg-[#DFF0DB] rounded hidden md:block"></div>

            {/* Vertical line for small screens */}
            <div className="absolute top-[18%] bottom-[20%] left-1/2 transform -translate-x-1/2 w-1 bg-[#DFF0DB] rounded block md:hidden"></div>

            {/* Step 1 */}
            <div className="relative flex flex-col items-center text-center md:mr-auto z-10 md:absolute left-0 md:top-[18%] lg:top-[40%] lg:left-[10%] lg:translate-y-[-28%]">
              {/* Circle */}
              <div className="relative group h-[70px] w-[70px] md:h-[80px] md:w-[80px] lg:h-[120px] lg:w-[120px] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 121 120" fill="none" className="absolute h-full w-full">
                  <circle cx="60.5" cy="60" r="56" className="fill-white stroke-[#53724C] stroke-[8] transition-all duration-300 group-hover:fill-[#53724C]" />
                </svg>
                <div className="text-[#53724C] text-[32px] md:text-[36px] lg:text-[48px] font-['Oswald'] z-10 transition-all duration-300 group-hover:text-white">01</div>
              </div>

              {/* Text - md+ */}
              <p className="mt-6 w-[250px] text-[16px] md:text-[20px] font-['Mulish'] font-bold hidden md:block">
                Started with a mission to help local farmers
              </p>

              {/* Text - mobile only */}
              <p className="absolute left-[calc(100%+10px)] top-1/2 -translate-y-1/2 w-[110px] text-[14px] md:text-[20px] font-['Mulish'] font-bold block text-start md:hidden">
                Started with a mission to help local farmers
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative flex flex-col items-center text-center z-10 md:absolute md:left-1/2 md:top-[22%] md:-translate-x-1/2 md:-translate-y-1/2 lg:top-[40%] lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-[65%]">

              {/* Text - mobile only (right side of circle) */}
              <p className="absolute right-[calc(100%+10px)] top-1/2 -translate-y-1/2 w-[110px] text-start text-[14px] font-['Mulish'] font-bold block md:hidden">
                Expanded into multiple product lines
              </p>

              {/* Text - md only */}
              <p className="hidden md:block lg:hidden mb-4 text-[16px] md:text-[18px] font-['Mulish'] font-bold w-[250px] text-center">
                Expanded into multiple product lines
              </p>

              {/* Text - lg only (above the circle) */}
              <p className="hidden lg:block mb-4 text-[18px] font-['Mulish'] font-bold w-[250px] text-center">
                Expanded into multiple product lines
              </p>

              {/* Circle */}
              <div className="relative group h-[70px] w-[70px] md:h-[80px] md:w-[80px] lg:h-[120px] lg:w-[120px] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 121 120" fill="none" className="absolute h-full w-full">
                  <circle cx="60.5" cy="60" r="56" className="fill-white stroke-[#53724C] stroke-[8] transition-all duration-300 group-hover:fill-[#53724C]" />
                </svg>
                <div className="text-[#53724C] text-[32px] md:text-[36px] lg:text-[48px] font-['Oswald'] z-10 transition-all duration-300 group-hover:text-white">02</div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative flex flex-col items-center text-center md:ml-auto z-10 md:absolute right-0 md:top-[20%] lg:top-[40%] lg:right-[10%] lg:translate-y-[-25%]">
              {/* Circle */}
              <div className="relative group h-[70px] w-[70px] md:h-[80px] md:w-[80px] lg:h-[120px] lg:w-[120px] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 121 120" fill="none" className="absolute h-full w-full">
                  <circle cx="60.5" cy="60" r="56" className="fill-white stroke-[#53724C] stroke-[8] transition-all duration-300 group-hover:fill-[#53724C]" />
                </svg>
                <div className="text-[#53724C] text-[32px] md:text-[36px] lg:text-[48px] font-['Oswald'] z-10 transition-all duration-300 group-hover:text-white">03</div>
              </div>

              {/* Text - md+ */}
              <p className="mt-6 w-[250px] text-[16px] sm:text-[18px] font-['Mulish'] font-bold hidden md:block">
                Continuing to innovate for the future
              </p>

              {/* Text - mobile only */}
              <p className="absolute left-[calc(100%+10px)] top-1/2 -translate-y-1/2 w-[110px] text-start text-[14px] font-['Mulish'] font-bold block md:hidden">
                Continuing to innovate for the future
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* About Bottom */}
      <AboutBottom />

    </>
  )
}

export default About



