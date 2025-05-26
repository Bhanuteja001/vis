import React, { useEffect, useState } from 'react';
import { AboutBottom, MainCard } from './About';
import { useNavigate } from 'react-router-dom';

const Product = () => {
  const [activeTab, setActiveTab] = useState('feed');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/* Main card */}
      <MainCard
        title="Our Product"
        para="Explore our trusted solutions for clean water and healthy aquaculture growth."
        page="Product"
        showBreadcrumb={true}
      />

      {/* Product options */}
      <section>
        <div className="w-full flex justify-center items-center px-4 py-8 md:p-10 space-x-2 md:space-x-10">
          <button
            onClick={() => setActiveTab('feed')}
            className={`text-[16px] md:text-[24px] lg:text-[32px] font-[Oswald] font-bold rounded-full border-4 border-[#97CF8A] text-gray-900 md:p-4 p-2 px-2 md:px-14 transition-all duration-300
              ${activeTab === 'feed' ? 'bg-[#53724C] text-white border-[#53724C]' : 'hover:bg-[#97CF8A]'}`}
          >
            Feed Supplements
          </button>
          <button
            onClick={() => setActiveTab('water')}
            className={`text-[16px] md:text-[24px] lg:text-[32px] font-[Oswald] font-bold rounded-full border-4 border-[#97CF8A] text-gray-900 md:p-4 p-2 px-2 md:px-14 transition-all duration-300
              ${activeTab === 'water' ? 'bg-[#53724C] text-white border-[#53724C]' : 'hover:bg-[#97CF8A]'}`}
          >
            Water Care Solution
          </button>
        </div>
      </section>

      {/* Feed Supplements Section */}
      {activeTab === 'feed' && (
        <section>
          <div className="flex flex-col gap-10 items-center justify-center md:py-10 ">
            <div className="flex justify-center items-center gap-4">
              <h1 className='text-[24px] md:text-[32px]  lg:text-[36px] font-bold font-["Oswald"] tracking-wider'>Prawn Feed Supplement</h1>
              <img src="/ProductsAssets/prawn_logo.png" className='w-[32px] h-[32px] md:w-[36px] md:h-[36px] lg:w-[48px] lg:h-[48px]' alt="" />
            </div>
            <div>
              <ProductCard
                subImg="/HomeAssets/water.png"
                title="Pravit"
                image="/HomeAssets/FishFeed1.png"
                link="/feedsupplement"
                category="Prawn Feed Supplement"
                description1="Pravit is a unique and innovative Vannamei feed supplement"
                description2="It is a powerful Prawn Feed Supplement to control:"
                description3="Pravit gives continuous growth to the Prawn and controls running mortality also."
                benefits={["Bacteria", "Virus", "White gut", "EHP", "Vibrio", "White Spot", "Muscle Necrosis"]}
                usage="Mix 5g per kg of feed daily for optimal results."
              />
            </div>
            <div className="flex flex-col">
              <div className="flex justify-center items-center gap-4">
                <h1 className='text-[24px] md:text-[32px] lg:text-[36px] font-bold font-["Oswald"] tracking-wider text-center py-5 md:py-10'>Fish Feed Supplement</h1>
                <img src="/ProductsAssets/fish_logo.png" className='w-[32px] h-[32px] md:w-[36px] md:h-[36px] lg:w-[48px] lg:h-[48px]' alt="" />
              </div>
              <div className="grid md:grid-cols-2 gap-8 md:gap-6 place-items-center">
                <ProductCard
                  subImg="/HomeAssets/water.png"
                  title="Ayushman"
                  image="/HomeAssets/FishFeed2.png"
                  link='/feedsupplement'
                  category="Fish Feed Supplement"
                  description1="Fish Planktomin for water care promotes a balanced aquatic ecosystem."
                  description2="Fish Planktomin for water care promotes a balanced aquatic ecosystem."
                  description3="Fish Planktomin for water care promotes a balanced aquatic ecosystem."
                  benefits={["Improves vitality", "Supports disease resistance", "Enhances coloration"]}
                  usage="Add 10g per kg of feed twice weekly."
                />
                <ProductCard
                  subImg="/HomeAssets/water.png"
                  title="Fish Planktomin"
                  image="/HomeAssets/FishFeed3.png"
                  link='/feedsupplement'
                  category="Fish Feed Supplement"
                  description1="Fish Planktomin for water care promotes a balanced aquatic ecosystem."
                  description2="Fish Planktomin for water care promotes a balanced aquatic ecosystem."
                  description3="Fish Planktomin for water care promotes a balanced aquatic ecosystem."
                  benefits={["Stimulates natural feed intake", "Supports digestive health", "Eco-friendly"]}
                  usage="Use 8g per kg of feed every other day."
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Water Care Solution Section */}
      {activeTab === 'water' && (
        <section>
          <div className="flex justify-center items-center gap-4">
            <h1 className="text-[24px] md:text-[32px] lg:text-[36px] font-bold font-['Oswald'] tracking-wider text-center py-10">
              Water Care
            </h1>
            <img src="/ProductsAssets/water_logo.png" className='w-[32px] h-[32px] md:w-[36px] md:h-[36px] lg:w-[48px] lg:h-[48px]' alt="" />
          </div>

          <div className="w-full flex justify-center px-10 py-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              <div className="flex justify-center">
                <ProductCard
                  subImg="/HomeAssets/water.png"
                  title="Fish Planktomin"
                  image="/HomeAssets/FishFeed2.png"
                  link="/watercare"
                  category="Water Care"
                  description1="Fish Planktomin for water care promotes a balanced aquatic ecosystem."
                  description2="Fish Planktomin for water care promotes a balanced aquatic ecosystem."
                  description3="Fish Planktomin for water care promotes a balanced aquatic ecosystem."
                  benefits={["Enhances water clarity", "Promotes beneficial microorganisms", "Reduces ammonia levels"]}
                  usage="Apply 5ml per 1000 liters of water weekly."
                />
              </div>
              <div className="flex justify-center">
                <ProductCard
                  subImg="/HomeAssets/water.png"
                  title="Spirumin"
                  image="/HomeAssets/FishFeed3.png"
                  link="/watercare"
                  category="Water Care"
                  description1="Fish Planktomin for water care promotes a balanced aquatic ecosystem."
                  description2="Fish Planktomin for water care promotes a balanced aquatic ecosystem."
                  description3="Fish Planktomin for water care promotes a balanced aquatic ecosystem."
                  benefits={["Improves water quality", "Supports algae control", "Safe for all aquatic species"]}
                  usage="Use 3ml per 1000 liters of water every 5 days."
                />
              </div>
              <div className="flex justify-center">
                <ProductCard
                  subImg="/HomeAssets/water.png"
                  title="Phytocare"
                  image="/HomeAssets/FishFeed3.png"
                  link="/watercare"
                  category="Water Care"
                  description1="Fish Planktomin for water care promotes a balanced aquatic ecosystem."
                  description2="Fish Planktomin for water care promotes a balanced aquatic ecosystem."
                  description3="Fish Planktomin for water care promotes a balanced aquatic ecosystem."
                  benefits={["Reduces harmful pathogens", "Stabilizes pH levels", "Eco-friendly solution"]}
                  usage="Apply 4ml per 1000 liters of water weekly."
                />
              </div>
              <div className="col-span-full flex justify-center">
                <ProductCard
                  subImg="/HomeAssets/water.png"
                  title="Extra Product"
                  image="/HomeAssets/FishFeed3.png"
                  link="/watercare"
                  category="Water Care"
                  description1="Fish Planktomin for water care promotes a balanced aquatic ecosystem."
                  description2="Fish Planktomin for water care promotes a balanced aquatic ecosystem."
                  description3="Fish Planktomin for water care promotes a balanced aquatic ecosystem."
                  benefits={["Broad-spectrum water treatment", "Supports fish health", "Easy to apply"]}
                  usage="Use 6ml per 1000 liters of water every 4 days."
                />
              </div>
            </div>
          </div>
          
        </section>
      )}

      <AboutBottom />
    </>
  );
};

// Reusable card component
const ProductCard = ({ title, image, description1, description2, description3, benefits, usage, link, category ,subImg }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(link, { state: { title, image, description1, description2, description3, benefits, usage,link, category,subImg } });
  };

  return (
    <div className="relative max-w-sm lg:w-[400px] lg:h-[480px] md:w-[350px] md:h-[450px] w-[280px] h-[350px] bg-[#DFF0DB] rounded-3xl hover:shadow-lg hover:bg-white duration-500 group overflow-hidden">
      <div className="flex flex-col justify-center items-center h-full transition-transform duration-500 group-hover:scale-105">
        <img src={image} className="md:w-[190px] md:h-[280px] h-[202px] w-[137px] lg:h-[280px] lg:w-[190px]" alt={title} />
        <img src={subImg} className='absolute bottom-32 md:bottom-28 lg:bottom-38 h-[122px] w-[230px] md:h-[203px] md:w-[329px] lg:h-[203px] lg:w-[329px]' alt="" />
        <div className="text-[16px] md:text-[20px] pt-4 mt-4  font-bold md:font-semibold z-10">{title}</div>
        <button onClick={handleClick} className="relative group overflow-hidden px-8 py-3 text-[16px] font-[Mulish] font-bold rounded-2xl bg-white text-gray-900 mt-4">
          <span className="relative z-10 group-hover:text-white transition-colors duration-200">Know More</span>
          <span className="absolute bottom-0 left-1/2 w-96 h-96 bg-[#53724C] rounded-full transform -translate-x-1/2 translate-y-full scale-0 group-hover:translate-y-1/2 group-hover:scale-150 transition-all duration-900 ease-out z-0"></span>
        </button>
      </div>
    </div>
  );
};

export default Product;
