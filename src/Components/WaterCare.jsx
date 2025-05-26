import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AboutBottom, MainCard } from './About';

const WaterCare = () => {
  const { state } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <MainCard title="Water Care Solution" />
   
        <div className=" p-4 md:p-8 text-center md:px-15 max-w-[1600px] mx-auto">
        <h1>{state?.category && (
          <div className="text-[24px] md:text-[36px] lg:text-[48px] font-semibold font-['Oswald'] text-center mb-4 ">
            {state.category}
          </div>
        )}
        </h1>
        <h1 className="text-[28px] md:text-[48px] lg:text-[96px] font-['Oswald'] text-[#53724C] font-bold mb-4">{state?.title || 'Feed Supplement'}</h1>
        {/* {state?.image && <img src={state.image} alt={state.title} className="mx-auto mb-4 max-w-md" />} */}

        <div className="flex flex-col md:flex-row justify-around ">
          <div className='text-start lg:w-1/2'>
            <p className="lg:text-[24px] md:text-[20px] text-[16px] font-['Mulish'] text-gray-900">{state?.description1}</p>
            <p className="lg:text-[24px] md:text-[20px] text-[16px] font-['Mulish'] text-gray-900">{state?.description2}</p>
            {state?.benefits && (
              <div className="text-start mt-3">
                <ul className="list-disc list-inside text-[16px] md:text-[20px] lg:text-[24px] font-['Mulish'] text-gray-900">
                  {state.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="rounded lg:w-1/2 flex justify-center">
            <img src="/ProductsAssets/prawn.png" className='w-[236px] h-[236px] md:w-[236px] md:h-[236px]  lg:h-[360px] lg:w-[360px] ' alt="" />
          </div>
        </div>
        <div className=" text-start lg:text-center  py-2">
          <p className="flex justify-start lg:text-[24px] md:text-[20px] text-[16px] font-['Mulish'] text-gray-900 ">{state?.description3}</p>
          <div className="text-[24px] md:text-[28px] lg:text-[40px] font-bold font-['Oswald'] text-start pt-3">CONTENTS:</div>
          <p className='text-[16px] md:text-[20px] lg:text-[24px] font-["Mulish"] text-start py-4'> All the Essential Amino Acids, Vitamins, Minerals, Enzymes, Protein Hydrolysate and all Essential Herbals.</p>
          <div className="text-[24px] md:text-[28px] lg:text-[40px] font-bold font-['Oswald'] text-start">FEED INCLUSION RATE:</div>
          <p className='text-[16px] md:text-[20px] lg:text-[24px] font-["Mulish"] text-start py-4'> 4 to 5 gms Pravit feed supplement per Kg Feed</p>
        </div>
        <div className="text-center ">
          <button className='bg-[#21367D] p-4 px-2 md:p-4 w-full rounded-2xl text-white text-[16px] font-medium font-["Mulish"]'><span className='text-xl font-bold'>Note:</span> Any type of Antibiotic is not used in this Feed Supplement Pravit</button>
        </div>
      </div>
      <AboutBottom/>
    </>
  );
};

export default WaterCare;