import React from 'react';

const Footer = () => {
  return (
    <div className="relative w-full mt-6 md:mt-15 lg:mt-20">
      {/* Desktop SVG Background */}
      <div className="hidden lg:block absolute inset-0 w-full h-full overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 1440 464"
          fill="none"
          className="w-full h-full min-h-full"
          preserveAspectRatio="none"
        >
          <path d="M0 119.655C0 119.655 425.432 1.25912 710 0.0101282C1002.18 -1.27228 1440 119.655 1440 119.655V464H0V119.655Z" fill="#53724C" />
        </svg>
      </div>

      {/* TABLET SVG Background */}
      <div className="hidden md:block lg:hidden absolute inset-0 w-full h-full overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 768 406"
          fill="none"
          className="w-full h-full min-h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 104.698C0 104.698 226.897 1.10173 378.667 0.00886213C534.498 -1.11325 768 104.698 768 104.698V406H0V104.698Z"
            fill="#53724C"
          />
        </svg>
      </div>

      {/* MOBILE Background with subtle curve */}
      <div className="block md:hidden absolute inset-0 w-full h-full overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 375 400"
          fill="none"
          className="w-full h-full min-h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 30C0 30 100 10 187.5 10C275 10 375 30 375 30V400H0V30Z"
            fill="#53724C"
          />
        </svg>
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 text-white">

        {/* DESKTOP Layout (lg and above) */}
        <div className="hidden lg:flex px-20 pt-24 pb-16 justify-center items-end gap-18  xl:gap-35 ">

          {/* Quick Links */}
          <div className="flex flex-col items-center xl:items-end lg:w-[30%]">
            <h2 className="text-[20px] md:text-[24px] font-bold mb-5 font-[Oswald] tracking-wide">
              Quick Links
            </h2>
            <ul className="space-y-3 text-[16px] md:text-[18px] lg:text-[20px] font-[Mulish] font-semibold">
              <li className="flex items-center justify-start">
                <span className="w-2 h-2 bg-white rounded-full mr-3 min-w-[8px]"></span>
                <a href="/" className="hover:text-gray-200 transition-colors">Home</a>
              </li>
              <li className="flex items-center justify-start">
                <span className="w-2 h-2 bg-white rounded-full mr-3 min-w-[8px]"></span>
                <a href="/about" className="hover:text-gray-200 transition-colors">About</a>
              </li>
              <li className="flex items-center justify-start">
                <span className="w-2 h-2 bg-white rounded-full mr-3 min-w-[8px]"></span>
                <a href="/product" className="hover:text-gray-200 transition-colors">Product</a>
              </li>
              <li className="flex items-center justify-start">
                <span className="w-2 h-2 bg-white rounded-full mr-3 min-w-[8px]"></span>
                <a href="/contact" className="hover:text-gray-200 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Logo + Description + Social Icons */}
          <div className="flex flex-col items-center text-center md:w-[40%] lg:w-[50%]">
            <div className="mb-6">
              <img
                src="/Logo.png"
                alt="Sree Datta Sai Aqua Solutions"
                className="w-60 h-36 object-contain"
              />
            </div>
            <p className="text-lg font-[Mulish] font-semibold mb-6 leading-relaxed">
              Sree Dattoa Sai Aqua Solutions delivers trusted products for fish and prawn health.
            </p>
            <div className="flex gap-5">
              <a
                href="https://www.facebook.com/"
                className="hover:scale-110 transition-transform"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/FooterAssets/facebook.png"
                  alt="Facebook"
                  className="w-10 h-10"
                />
              </a>
              <a
                href="https://www.instagram.com/"
                className="hover:scale-110 transition-transform"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/FooterAssets/instagram.png"
                  alt="Instagram"
                  className="w-10 h-10"
                />
              </a>
              <a
                href="https://api.linkedin.com/login"
                className="hover:scale-110 transition-transform"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/FooterAssets/linkedin.png"
                  alt="LinkedIn"
                  className="w-10 h-10"
                />
              </a>
              <a
                href="https://x.com/"
                className="hover:scale-110 transition-transform"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/FooterAssets/x-twitter.png"
                  alt="Twitter/X"
                  className="w-10 h-10"
                />
              </a>
            </div>
          </div>

          {/* Products */}
          <div className="flex flex-col items-start  md:w-[30%] lg:w-[30%]">
            <h2 className="text-[20px] text-center md:text-[24px] font-bold mb-5 font-[Oswald] tracking-wide">
              Products
            </h2>
            <ul className="space-y-3 text-[16px] md:text-[18px] lg:text-[20px] font-[Mulish] font-semibold">
              <li className="flex items-center justify-start">
                <span className="w-2 h-2 bg-white rounded-full mr-3 min-w-[8px]"></span>
                <span>Water Care Solutions</span>
              </li>
              <li className="flex items-center justify-start">
                <span className="w-2 h-2 bg-white rounded-full mr-3 min-w-[8px]"></span>
                <span>Feed Supplements</span>
              </li>
              <li className="flex items-center justify-start">
                <span className="w-2 h-2 bg-white rounded-full mr-3 min-w-[8px]"></span>
                <span>Growth Boosters</span>
              </li>
              <li className="flex items-center justify-start">
                <span className="w-2 h-2 bg-white rounded-full mr-3 min-w-[8px]"></span>
                <span>Immunity Support</span>
              </li>
            </ul>
          </div>
        </div>

        {/* TABLET Layout (md to lg) - Now similar to desktop with 3 columns */}
        <div className="hidden md:flex lg:hidden px-2 md:px-15  pt-15 pb-12 justify-center items-end gap-10">

          {/* Quick Links */}
          <div className="flex flex-col text-start md:w-[20%] ">
            <h2 className="text-[20px] md:text-[24px] font-bold mb-4 font-[Oswald] tracking-wide ">
              Quick Links
            </h2>
            <ul className="space-y-1 text-[16px] md:text-[18px] lg:text-[20px] font-[Mulish] font-semibold">
              <li className="flex items-center justify-start">
                <span className="w-2 h-2 bg-white rounded-full mr-3 min-w-[8px] flex-shrink-0"></span>
                <a href="/" className="hover:text-gray-200 transition-colors">Home</a>
              </li>
              <li className="flex items-center justify-start">
                <span className="w-2 h-2 bg-white rounded-full mr-3 min-w-[8px] flex-shrink-0"></span>
                <a href="/about" className="hover:text-gray-200 transition-colors">About</a>
              </li>
              <li className="flex items-center justify-start">
                <span className="w-2 h-2 bg-white rounded-full mr-3 min-w-[8px] flex-shrink-0"></span>
                <a href="/product" className="hover:text-gray-200 transition-colors">Product</a>
              </li>
              <li className="flex items-center justify-start">
                <span className="w-2 h-2 bg-white rounded-full mr-3 min-w-[8px] flex-shrink-0"></span>
                <a href="/contact" className="hover:text-gray-200 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Logo + Description + Social Icons */}
          <div className="flex flex-col items-center text-center w-[40%]">
            <div className="mb-4">
              <img
                src="/Logo.png"
                alt="Sree Datta Sai Aqua Solutions"
                className="w-48 h-28 object-contain"
              />
            </div>
            <p className="text-base font-[Mulish] font-semibold mb-4 leading-relaxed">
              Sree Dattoa Sai Aqua Solutions delivers trusted products for fish and prawn health.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/"
                className="hover:scale-110 transition-transform"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/FooterAssets/facebook.png"
                  alt="Facebook"
                  className="w-9 h-9"
                />
              </a>
              <a
                href="https://www.instagram.com/"
                className="hover:scale-110 transition-transform"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/FooterAssets/instagram.png"
                  alt="Instagram"
                  className="w-9 h-9"
                />
              </a>
              <a
                href="https://api.linkedin.com/login"
                className="hover:scale-110 transition-transform"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/FooterAssets/linkedin.png"
                  alt="LinkedIn"
                  className="w-9 h-9"
                />
              </a>
              <a
                href="https://x.com/"
                className="hover:scale-110 transition-transform"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/FooterAssets/x-twitter.png"
                  alt="Twitter/X"
                  className="w-9 h-9"
                />
              </a>
            </div>
          </div>

          {/* Products */}
          <div className="flex flex-col items-start ">
            <h2 className="text-[20px] md:text-[24px] font-bold mb-4 font-[Oswald] tracking-wide">
              Products
            </h2>
            <ul className="space-y-2.5 text-[14px] md:text-[15px] lg:text-[20px] font-[Mulish] font-semibold">
              <li className="flex items-center justify-start">
                <span className="w-2 h-2 bg-white rounded-full mr-3 min-w-[8px] flex-shrink-0"></span>
                <span>Water Care Solutions</span>
              </li>
              <li className="flex items-center justify-start">
                <span className="w-2 h-2 bg-white rounded-full mr-3 min-w-[8px] flex-shrink-0"></span>
                <span>Feed Supplements</span>
              </li>
              <li className="flex items-center justify-start">
                <span className="w-2 h-2 bg-white rounded-full mr-3 min-w-[8px] flex-shrink-0"></span>
                <span>Growth Boosters</span>
              </li>
              <li className="flex items-center justify-start">
                <span className="w-2 h-2 bg-white rounded-full mr-3 min-w-[8px] flex-shrink-0"></span>
                <span>Immunity Support</span>
              </li>
            </ul>
          </div>
        </div>

        {/* MOBILE Layout (below md) */}
        <div className="block md:hidden px-4 pt-16 pb-8">
          <div className="flex flex-col items-center text-center space-y-8">

            {/* Logo Section */}
            <div className="flex flex-col items-center">
              <div className="mb-4">
                <img
                  src="/Logo.png"
                  alt="Sree Datta Sai Aqua Solutions"
                  className="w-40 h-24 object-contain"
                />
              </div>
              <p className="text-sm font-[Mulish] font-semibold mb-4 leading-relaxed px-2">
                Sree Dattoa Sai Aqua Solutions delivers trusted products for fish and prawn health.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/"
                  className="hover:scale-110 transition-transform"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/FooterAssets/facebook.png"
                    alt="Facebook"
                    className="w-8 h-8"
                  />
                </a>
                <a
                  href="https://www.instagram.com/"
                  className="hover:scale-110 transition-transform"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/FooterAssets/instagram.png"
                    alt="Instagram"
                    className="w-8 h-8"
                  />
                </a>
                <a
                  href="https://api.linkedin.com/login"
                  className="hover:scale-110 transition-transform"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/FooterAssets/linkedin.png"
                    alt="LinkedIn"
                    className="w-8 h-8"
                  />
                </a>
                <a
                  href="https://x.com/"
                  className="hover:scale-110 transition-transform"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/FooterAssets/x-twitter.png"
                    alt="Twitter/X"
                    className="w-8 h-8"
                  />
                </a>
              </div>
            </div>

            {/* Quick Links and Products */}
            <div className="flex flex-row gap-4.5 sm:gap-3.5">
              <div className="flex flex-col items-start">
                <h2 className="text-[20px] font-bold mb-4 font-[Oswald] tracking-wide">
                  Quick Links
                </h2>
                <ul className="space-y-2 text-base text-[16px] md:text-[18px] lg:text-[20px] font-[Mulish] font-semibold">
                  <li className="flex items-center justify-start">
                    <span className="w-2 h-2 bg-white rounded-full mr-3 min-w-[8px]"></span>
                    <a href="/" className="hover:text-gray-200 transition-colors">Home</a>
                  </li>
                  <li className="flex items-center justify-start">
                    <span className="w-2 h-2 bg-white rounded-full mr-3 min-w-[8px]"></span>
                    <a href="/about" className="hover:text-gray-200 transition-colors">About</a>
                  </li>
                  <li className="flex items-center justify-start">
                    <span className="w-2 h-2 bg-white rounded-full mr-3 min-w-[8px]"></span>
                    <a href="/product" className="hover:text-gray-200 transition-colors">Product</a>
                  </li>
                  <li className="flex items-center justify-start">
                    <span className="w-2 h-2 bg-white rounded-full mr-3 min-w-[8px]"></span>
                    <a href="/contact" className="hover:text-gray-200 transition-colors">Contact</a>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col items-start">
                <h2 className="text-[20px] md:text-[24px] font-bold mb-4 font-[Oswald] tracking-wide">
                  Products
                </h2>
                <ul className="space-y-2.5 text-base text-[16px] md:text-[18px] lg:text-[20px] font-[Mulish] font-semibold">
                  <li className="flex items-center justify-start">
                    <span className="w-2 h-2 bg-white rounded-full mr-3 min-w-[8px]"></span>
                    <span className='text-start'>Water Care Solutions</span>
                  </li>
                  <li className="flex items-center justify-start">
                    <span className="w-2 h-2 bg-white rounded-full mr-3 min-w-[8px]"></span>
                    <span>Feed Supplements</span>
                  </li>
                  <li className="flex items-center justify-start">
                    <span className="w-2 h-2 bg-white rounded-full mr-3 min-w-[8px]"></span>
                    <span>Growth Boosters</span>
                  </li>
                  <li className="flex items-center justify-start">
                    <span className="w-2 h-2 bg-white rounded-full mr-3 min-w-[8px]"></span>
                    <span>Immunity Support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr />
      <div className="p-6 text-white text-center text-[14px] md:text-[16px] lg:text-[20px] font-semibold font-['Oswald'] tracking-wider">Designed By Techpixe</div>
      </div>
    </div>
  );
};

export default Footer;

