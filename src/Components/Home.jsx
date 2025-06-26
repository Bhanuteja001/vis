import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  return (
    <>
      {/* video part */}
      <section>
        <div className="relative w-full h-[500px] md:h-[540px] lg:h-[744px]">
          <video
            src="/HomeAssets/Herovideo.mp4"
            className="w-full h-full object-fill md:object-cover"
            type="video/mp4"
            autoPlay
            loop
            muted
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

      {/*product list */}
      <section>
        <div className="bg-[#DFF0DB] py-8 md:py-12 lg:py-15">
          <div className="px-4 md:px-8 lg:px-25 flex flex-col md:flex-row lg:flex-row justify-center lg:justify-between items-center text-center md:text-start gap-4">
            <div className="flex flex-col">
              <div className="font-['Oswald'] text-[28px] md:text-[36px] lg:text-[48px] not-italic font-bold leading-none text-[#3F573A]">
                Aquaculture Product Line
              </div>
              <div className="py-3 font-['Mulish'] text-[16px] md:text-[20px] lg:text-[24px] not-italic font-semibold ">
                Tested, trusted, and tailored for sustainable aquaculture
              </div>
            </div>
            <NavLink to="/product" className="lg:pb-8">
              <button className='p-2 px-8 bg-[#53724C] font-medium text-white rounded-2xl hover:bg-white hover:text-gray-900'>
                View All
              </button>
            </NavLink>
          </div>

          {/* Product Cards Container */}
          <div className="w-full py-2 md:py-10 md:px-8 lg:px-5">
            {/* Mobile Layout - Single Column */}
            <div className="flex flex-col items-center justify-center md:hidden">
              <HomeCard title="Pravit" image="/HomeAssets/FishFeed1.png" />
              <HomeCard title="Ayushman" image="/HomeAssets/FishFeed2.png" />
              <HomeCard title="Fish Planktomin" image="/HomeAssets/FishFeed3.png" />
            </div>

            {/* Tablet Layout - 2x2 Grid (with 3rd card below) */}
            <div className="hidden md:flex lg:hidden flex-wrap justify-center items-center gap-6">
              <div className="flex justify-center gap-6 w-full">
                <HomeCard title="Pravit" image="/HomeAssets/FishFeed1.png" />
                <HomeCard title="Ayushman" image="/HomeAssets/FishFeed2.png" />
              </div>
              <div className="flex justify-center w-full">
                <HomeCard title="Fish Planktomin" image="/HomeAssets/FishFeed3.png" />
              </div>
            </div>

            {/* Desktop Layout - 3 Cards in a Row */}
            <div className="hidden lg:flex justify-center items-center gap-2 px-10">
              <HomeCard title="Pravit" image="/HomeAssets/FishFeed1.png" />
              <HomeCard title="Ayushman" image="/HomeAssets/FishFeed2.png" />
              <HomeCard title="Fish Planktomin" image="/HomeAssets/FishFeed3.png" />
            </div>
          </div>
        </div>
      </section>

      {/* about page */}
      <section>
        <div className="px-4 py-8 md:py-5 lg:py-8 xl:py-15 md:mt-5 lg:mt-8 xl:mt-15">
          {/* MOBILE Layout */}
          <div className="block md:hidden">
            {/* Content First on Mobile */}
            <div className="mb-8">
              <h2 className="text-[28px] font-semibold font-['Oswald'] text-[#375B2B] mb-4">About Us</h2>
              <p className="text-[14px] font-semibold leading-relaxed mb-6 text-gray-800">
                At Sree Datta Sai Aqua Solutions, we focus on delivering reliable, science-backed products that support the growth and well-being of fish and prawns. From advanced water care treatments to high-quality feed supplements, our solutions are designed to meet the real needs of aqua farmers across Andhra Pradesh. With a passion for sustainability and farmer success, we aim to make aquaculture more efficient, healthy, and profitable.
              </p>

              {/* Feature Boxes Stacked Vertically on Mobile */}
              <div className="space-y-6">
                {/* Feature 1 */}
                <div className="group hover:cursor-pointer">
                  <div className="flex items-start gap-3 mb-2">
                    <img src="/HomeAssets/Shrimp.png" alt="Shrimp" className="w-[40px] h-[40px] mt-1 transition-transform duration-500 group-hover:rotate-y-180" />
                    <div>
                      <h4 className="font-medium text-xs text-gray-700">Smart Feed</h4>
                      <p className="text-base font-bold text-[#375B2B]">Fish & Shrimp</p>
                    </div>
                  </div>
                  <p className="text-[13px] font-['Mulish'] font-semibold text-[#444444] tracking-wide">
                    Nutrient-rich supplements that boost growth, immunity, and performance in prawns and fish.
                  </p>
                </div>

                {/* Feature 2 */}
                <div className="group hover:cursor-pointer">
                  <div className="flex items-start gap-3 mb-2">
                    <img src="/HomeAssets/FishSm.png" alt="Water" className="w-[40px] h-[40px] mt-1 transition-transform duration-500 group-hover:rotate-y-180" />
                    <div>
                      <h4 className="font-medium text-xs text-gray-700">Clean Water</h4>
                      <p className="text-base font-bold text-[#375B2B]">Aqua Essentials</p>
                    </div>
                  </div>
                  <p className="text-[13px] font-['Mulish'] font-semibold text-[#444444] tracking-wide">
                    Effective water care solutions to maintain healthy tanks and reduce stress on aquatic life.
                  </p>
                </div>
              </div>
            </div>

            {/* Images at Bottom on Mobile */}
            <div className="flex justify-center gap-3">
              <img src="/HomeAssets/HomeAbout1.png" alt="Aqua 1" className="w-[140px] h-[200px] object-cover rounded-lg" />
              <img src="/HomeAssets/HomeAbout2.png" alt="Aqua 2" className="w-[140px] h-[200px] mt-10 object-cover rounded-lg" />
            </div>
          </div>

          {/* Medium, Large, and Extra Large Layout */}
          <div className="hidden md:flex flex-col-reverse xl:flex-row px-5  items-start justify-center gap-6 md:gap-18 lg:gap-20 xl:gap-18 2xl:gap-10">
            {/* Left Images */}
            <div className="flex md:w-full xl:w-1/2 md:justify-center gap-3 md:gap-4 lg:gap-6 flex-shrink-0">
              <img
                src="/HomeAssets/HomeAbout1.png"
                alt="Aqua 1"
                className="w-[120px] md:w-[340px] lg:w-[380px] xl:w-[400px]  h-[170px] md:h-[440px] lg:h-[480px] xl:h-[500px]  object-cover rounded-lg -mt-8 md:-mt-12 lg:-mt-15 xl:-mt-20 2xl:-mt-24"
              />
              <img
                src="/HomeAssets/HomeAbout2.png"
                alt="Aqua 2"
                className="w-[120px] md:w-[340px] lg:w-[380px] xl:w-[400px]  h-[170px] md:h-[440px] lg:h-[480px] xl:h-[500px]  object-cover rounded-lg"
              />
            </div>

            {/* Right Content */}
            <div className=" justify-center w-full xl:w-1/2 2xl:max-w-4xl flex-1">
              <h2 className="text-[28px] md:text-[32px] lg:text-[40px] xl:text-[48px] 2xl:text-[56px] font-semibold font-['Oswald'] text-[#375B2B] mb-3 md:mb-4 lg:mb-1 xl:mb-1">
                About Us
              </h2>
              <p className="text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] font-semibold leading-snug mb-4 md:mb-5 lg:mb-5 xl:mb-5 2xl:mb-4 text-gray-800">
                At Sree Datta Sai Aqua Solutions, we focus on delivering reliable, science-backed products that support the growth and well-being of fish and prawns. From advanced water care treatments to high-quality feed supplements, our solutions are designed to meet the real needs of aqua farmers across Andhra Pradesh. With a passion for sustainability and farmer success, we aim to make aquaculture more efficient, healthy, and profitable.
              </p>

              {/* Feature Boxes Side by Side */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-10 xl:gap-12 ">
                {/* Feature 1 */}
                <div className="w-full md:w-[300px] lg:w-[360px] xl:w-[280px]  flex flex-col  gap-2 group hover:cursor-pointer">
                  <div className="flex items-start gap-3">
                    <img
                      src="/HomeAssets/Shrimp.png"
                      alt="Shrimp"
                      className="w-[40px] md:w-[45px] lg:w-[50px] xl:w-[55px] 2xl:w-[60px] h-[40px] md:h-[45px] lg:h-[50px] xl:h-[55px] 2xl:h-[60px] mt-1 transition-transform duration-500 group-hover:rotate-y-180"
                    />
                    <div>
                      <h4 className="font-medium text-xs md:text-sm lg:text-sm xl:text-base text-gray-700">Smart Feed</h4>
                      <p className="text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl font-bold text-[#375B2B]">Fish & Shrimp</p>
                    </div>
                  </div>
                  <p className="text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[17px] font-['Mulish'] font-semibold text-[#444444] tracking-wide">
                    Nutrient-rich supplements that boost growth, immunity, and performance in prawns and fish.
                  </p>
                </div>

                {/* Feature 2 */}
                <div className="w-full md:w-[300px] lg:w-[360px] xl:w-[280px] flex flex-col gap-2 group hover:cursor-pointer">
                  <div className="flex items-start gap-3">
                    <img
                      src="/HomeAssets/FishSm.png"
                      alt="Water"
                      className="w-[40px] md:w-[45px] lg:w-[50px] xl:w-[55px] 2xl:w-[60px] h-[40px] md:h-[45px] lg:h-[50px] xl:h-[55px] 2xl:h-[60px] mt-1 transition-transform duration-500 group-hover:rotate-y-180"
                    />
                    <div>
                      <h4 className="font-medium text-xs md:text-sm lg:text-sm xl:text-base text-gray-700">Clean Water</h4>
                      <p className="text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl font-bold text-[#375B2B]">Aqua Essentials</p>
                    </div>
                  </div>
                  <p className="text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[17px] font-['Mulish'] font-semibold text-[#444444] tracking-wide">
                    Effective water care solutions to maintain healthy tanks and reduce stress on aquatic life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strength */}
      <section className="relative">
        {/* Background Image - Top Half */}
        <div
          className="absolute top-0 left-0 w-full h-1/2 bg-[url('/HomeAssets/background.png')] bg-cover bg-center"
          style={{
            backgroundSize: '100% auto', // Maintain aspect ratio
            minHeight: '350px', // Minimum height to match image height
          }}
        ></div>

        {/* Content Container */}
        <div className="relative z-10">
          {/* Header Section */}
          <div className="w-full flex flex-col lg:flex-row text-start lg:text-left justify-center items-start lg:items-center lg:space-x-20 py-10 px-4 lg:px-25 mx-auto">
            <div className="text-[28px] font-['Oswald'] text-[#3F573A] font-bold mystyle w-full lg:w-auto">
              Our Core Strengths
            </div>
            <div className="text-[16px] md:text-[20px] lg:text-[24px] font-['Mulish'] font-semibold w-full lg:w-1/3">
              Expertly formulated solutions for sustainable, successful aquaculture.
            </div>
          </div>

          {/* Card Grid Section */}
          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:flex px-6 sm:px-8 lg:px-6 xl:px-16 gap-6 lg:gap-3 xl:gap-6 justify-center 
                    md:max-w-[700px] md:mx-auto 
                    lg:max-w-[1200px] lg:mx-auto 
                    xl:max-w-[1350px] xl:mx-auto">
            {[
              {
                title: ['Expert', 'Formulations'],
                desc: 'Products developed with deep knowledge of aquaculture science.',
                img: '/HomeAssets/Flask.png',
              },
              {
                title: ['Water Quality', 'First'],
                desc: 'Clear, healthy water for stronger fish and prawns.',
                img: '/HomeAssets/Flask3.png',
              },
              {
                title: ['Growth &', 'Nutrition'],
                desc: 'Nutritional support at every life stage for better outcomes.',
                img: '/HomeAssets/Flask2.png',
              },
              {
                title: ['Trusted by Aqua', 'Framers'],
                desc: 'Reliable support and trusted by aqua professionals across Andhra Pradesh.',
                img: '/HomeAssets/Flask1.png',
              },
            ].map(({ title, desc, img }, i) => (
              <div
                key={i}
                className={`w-full sm:w-[313px] h-[344px] lg:h-[400px] lg:w-[390px] xl:w-[353px] xl:h-[344px] p-8 py-12 bg-white border border-gray-200 rounded-3xl shadow-sm text-gray-900 group hover:bg-[#6B9362] hover:text-white transition-colors duration-300 text-center ${i % 2 === 1 ? 'sm:mt-20' : ''
                  }`}
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
                  <img src={img} alt="" className="absolute h-[48px] w-[48px]" />
                </div>
                <div className="py-4">
                  <h5 className="text-2xl font-bold">{title[0]}</h5>
                  <h5 className="text-2xl font-bold">{title[1]}</h5>
                </div>
                <p className="pb-5">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* contact us */}
      <section>
        <div className="mt-16 md:mt-32 lg:mt-24 xl:mt-30 relative h-[280px] md:h-[320px] lg:h-[360px] overflow-hidden">
          <div className="absolute inset-0 bg-[url('/HomeAssets/ContactWater.png')] bg-cover bg-center blur-[2.5px] "></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
            <h1 className="text-[24px] md:text-[32px] lg:text-[48px] font-bold font-[Oswald] tracking-[2px] mb-2">
              Have a Question?
            </h1>
            <p className="text-[14px] md:text-[18px] lg:text-[24px] font-medium font-[Mulish] mb-4">
              Contact us for product info, support, or partnership inquiries.
            </p>
            <button className="relative group overflow-hidden p-3 md:p-4 text-base md:text-lg lg:text-xl font-[Mulish] font-bold px-8 md:px-12 rounded-2xl bg-white text-gray-900">
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                Contact Us
              </span>
              <span className="absolute bottom-0 left-1/2 w-96 h-96 bg-[#53724C] rounded-full transform -translate-x-1/2 translate-y-full scale-0 group-hover:translate-y-1/2 group-hover:scale-150 transition-all duration-900 ease-out z-0"></span>
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export const HomeCard = ({ title, image }) => {
  return (
    <div className="relative w-full max-w-[300px] md:max-w-[320px] lg:max-w-[300px] h-[250px] md:h-[360px] lg:h-[403px] bg-[#DFF0DB] rounded-3xl hover:shadow-xl hover:bg-white duration-500 group overflow-hidden mx-auto">
      <div className="flex flex-col justify-center items-center h-full transition-transform duration-500 group-hover:scale-105">
        <img
          src={image}
          className="w-[120px] md:w-[150px] lg:w-[190px] h-auto object-contain z-10"
          alt=""
        />
        <img
          src="/HomeAssets/water.png"
          className="absolute z-10 bottom-12 md:bottom-20 lg:bottom-19 w-[200px] md:w-[240px] lg:w-[330px] h-[140px] md:h-[170px] lg:h-[203px]"
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