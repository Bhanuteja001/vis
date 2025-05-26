import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function NewNavbar() {
  const linkClasses = (isActive) =>
    `${isActive ? "font-bold" : "text-base font-medium"} transition-all duration-300`;

  const navLinks = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Product", link: "/product" },
    { name: "Contact", link: "/contact" },
  ];

  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const isHomePage = pathname === "/";
  const scrollOrNotHome = scrolled || !isHomePage;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`bg-[#53724C] z-20 fixed top-0 start-0 border-b border-gray-400 transition-all duration-300 w-full text-white flex lg:flex-row flex-col items-center justify-center gap-2 lg:px-18 ${
        // Adjust padding based on page and screen size
        !isHomePage ? "py-3 md:py-4 lg:py-1" : "py-1"
      } ${
        scrollOrNotHome ? "lg:justify-center" : "lg:justify-between"
      }`}
    >
      {!scrollOrNotHome && (
        <div>
          <p className="font-medium mb-2 lg:mb-0 flex items-center justify-center text-[14px] md:text-[16px] lg:text-[20px]">
            Welcome to Sree Datta Sai Aqua Solutions
          </p>
        </div>
      )}

      {!scrollOrNotHome && (
        <div className="lg:hidden h-[0.2px] w-full bg-white" />
      )}

      <div
        className={`flex gap- ${
          scrollOrNotHome
            ? "justify-between lg:w-auto"
            : "lg:w-[54%] justify-between"
        }`}
      >
        <NavLink to={"/"}>
          <img 
            src="/Logo.png" 
            alt="Logo" 
            className={`${
              // Increase logo size on non-home pages up to md screens
              !isHomePage ? "h-[35px] w-[86px] md:h-[28px] md:w-[100px] lg:h-[64px] lg:w-[106px]" 
              : "h-[42px] w-[71px] md:h-[52px] md:w-[86px] lg:h-[64px] lg:w-[106px]"
            } mx-3`} 
          />
        </NavLink>

        <ul className="flex font-medium items-center justify-start space-x-4 md:space-x-0 md:gap-12 px-2">
          {navLinks?.map((e, index) => {
            return (
              <li key={index} className="text-[14px] md:text-[16px] lg:text-[20px]">
                <NavLink
                  className={({ isActive }) => linkClasses(isActive)}
                  to={e.link}
                >
                  {e.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
// import React, { useEffect, useState } from "react";
// import { NavLink, useLocation } from "react-router-dom";

// export default function NewNavbar() {
//   const linkClasses = (isActive) =>
//     `${isActive ? "font-bold" : "text-base font-medium"} transition-all duration-300`;

//   const navLinks = [
//     { name: "Home", link: "/" },
//     { name: "About", link: "/about" },
//     { name: "Product", link: "/product" },
//     { name: "Contact", link: "/contact" },
//   ];

//   const { pathname } = useLocation();
//   const [scrolled, setScrolled] = useState(false);
//   const isHomePage = pathname === "/";
//   const scrollOrNotHome = scrolled || !isHomePage;

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 10) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <>
//       {/* Welcome Text - Only shows when scrolled on home page */}
//       {isHomePage && scrolled && (
//         <div className="fixed top-0 left-0 w-full bg-[#53724C] z-20">
//           <div className="flex flex-col">
//             <p className="font-medium text-white text-[14px] md:text-[16px] lg:text-[20px] py-2 text-center">
//               Welcome to Sree Datta Sai Aqua Solutions
//             </p>
//             <div className="h-[0.5px] w-full bg-white opacity-50"></div>
//           </div>
//         </div>
//       )}

//       {/* Main Navbar */}
//       <nav
//         className={`bg-[#53724C] z-20 fixed ${
//           isHomePage && scrolled ? "top-8" : "top-0"
//         } left-0 border-b border-gray-200 transition-all duration-300 w-full text-white flex lg:flex-row flex-col items-center justify-center gap-2 lg:px-18 ${
//           !isHomePage ? "py-3 md:py-4 lg:py-1" : "py-1"
//         } ${scrollOrNotHome ? "lg:justify-center" : "lg:justify-between"}`}
//       >
//         {/* Original welcome text (only shows when not scrolled on home page) */}
//         {!scrollOrNotHome && (
//           <div>
//             <p className="font-medium mb-2 lg:mb-0 flex items-center justify-center text-[14px] md:text-[16px] lg:text-[20px]">
//               Welcome to Sree Datta Sai Aqua Solutions
//             </p>
//           </div>
//         )}

//         {!scrollOrNotHome && (
//           <div className="lg:hidden h-[0.2px] w-full bg-white" />
//         )}

//         <div
//           className={`flex gap- ${
//             scrollOrNotHome
//               ? "justify-between lg:w-auto"
//               : "lg:w-[54%] justify-between"
//           }`}
//         >
//           <NavLink to={"/"}>
//             <img 
//               src="/Logo.png" 
//               alt="Logo" 
//               className={`${
//                 !isHomePage ? "h-[52px] w-[86px] md:h-[60px] md:w-[100px] lg:h-[64px] lg:w-[106px]" 
//                 : "h-[42px] w-[71px] md:h-[52px] md:w-[86px] lg:h-[64px] lg:w-[106px]"
//               } mx-3`} 
//             />
//           </NavLink>

//           <ul className="flex font-medium items-center justify-start space-x-4 md:space-x-0 md:gap-12 px-2">
//             {navLinks?.map((e, index) => {
//               return (
//                 <li key={index} className="text-[14px] md:text-[16px] lg:text-[20px]">
//                   <NavLink
//                     className={({ isActive }) => linkClasses(isActive)}
//                     to={e.link}
//                   >
//                     {e.name}
//                   </NavLink>
//                 </li>
//               );
//             })}
//           </ul>
//         </div>
//       </nav>
//     </>
//   );
// }