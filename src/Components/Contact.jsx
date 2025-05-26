import React, { useEffect } from 'react'
import { MainCard } from './About'

const Contact = () => {

   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      {/* Main card */}

      <MainCard title="Contact Us" para="We’re here to support your aquaculture needs — reach out anytime." page="Contact" showBreadcrumb={true}/>   
    
      {/* form */}
      <section>
        <div className="min-h-screen bg-white flex flex-col lg:flex-row items-center justify-center gap-8 md-gap-10 px-4 md:px-6 py-10 md:py-25">
          <div className="w-full md:w-[100%] max-w-4xl p-2">
            <h2 className="text-[28px] md:text-[48px] font-bold text-[#53724C] font-['Oswald'] text-center mb-8">
              Get In Touch With Us
            </h2>
            <form className="space-y-8">
              <div className="flex flex-col md:flex-row gap-8 md:gap-6">
                <input
                  type="text"
                  placeholder="Enter your first name..."
                  className="border border-gray-900 p-4 rounded-lg w-full focus:outline-none focus:ring-0 focus:border-gray-900 placeholder-[#6D6D6D]"
                />
                <input
                  type="text"
                  placeholder="Enter your Last name..."
                  className="border border-gray-900 p-4 rounded-lg w-full focus:outline-none focus:ring-0 focus:border-gray-900 placeholder-[#6D6D6D]"
                />
              </div>
              <input
                type="email"
                placeholder="Enter your email address..."
                className="border border-gray-900 p-4 rounded-lg w-full focus:outline-none focus:ring-0 focus:border-gray-900 placeholder-[#6D6D6D]"
              />
              <input
                type="text"
                placeholder="Enter your mobile number"
                className="border border-gray-900 p-4 rounded-lg w-full focus:outline-none focus:ring-0 focus:border-gray-900 placeholder-[#6D6D6D]"
              />
              <textarea
                rows="4"
                placeholder="Enter your email address..."
                className="border border-gray-900 p-4 resize-none rounded-lg w-full focus:outline-none focus:ring-0 focus:border-gray-900 placeholder-[#6D6D6D]"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-[#53724C] text-white font-bold py-4 rounded-lg"
              >
                Submit
              </button>
            </form>
          </div>

           {/* conatiner */}
          <div className="w-full h-full md:w-[704px] md:min-h-[465px] lg:h-[609px] lg:w-[532px ] bg-[#53724C] text-white rounded-3xl  mt-8 md:mt-0 flex flex-col justify-center items-center p-4 md:py-8 gap-8 md:gap-12">
            <h2 className="text-[28px] md:text-[36px] lg:text-[40px] font-bold font-['Oswald'] tracking-wide ">Contact Information</h2>

            <div className="flex flex-col justify-start w-full ps-2 gap-3 md:gap-6 ">
              <div className="flex items-start gap-2 md:gap-4">
                {/* <span className="text-2xl">📍</span> */}
                <img src="/ContactAssets/location.png" className='h-[28px] w-[28px] md:h-[44px] md:w-[44px]' alt="" />
                <div>
                  <p className='text-[16px] md:text-[24px] font-["Mulish"]'>Sree Datta Sai Ayua Solutions 123 Main Street, Anyone, AP 12345</p>
                </div>
              </div>

              <div className="flex items-start gap-2 md:gap-4">
                {/* <span className="text-2xl">📞</span> */}
                <img src="/ContactAssets/call.png" className='h-[28px] w-[28px] md:h-[44px] md:w-[44px]' alt="" />
                <p className='text-[16px] md:text-[24px] font-["Mulish"]'>555-123-4567</p>
              </div>

              <div className="flex items-center gap-2 md:gap-4">
                {/* <span className="text-2xl">✉️</span> */}
                <img src="/ContactAssets/msg.png" className='h-[24px] w-[24px] md:h-[40px] md:w-[40px]' alt="" />
                <p className='text-[16px] md:text-[24px] font-["Mulish"] text-start'>info@sreedatta.aiqua.com</p>
              </div>
            </div>

            <div className="flex justify-start w-full ps-2 gap-2 md:gap-5">
              <a href="https://www.facebook.com/"><img src="/FooterAssets/facebook.png" alt="Facebook" className='w-[36px] h-[36px]' /></a>
              <a href="https://www.instagram.com/"><img src="/FooterAssets/instagram.png" alt="Instagram" className='w-[36px] h-[36px]' /></a>
              <a href="https://api.linkedin.com/login"><img src="/FooterAssets/linkedin.png" alt="LinkedIn" className='w-[36px] h-[36px]' /></a>
              <a href="https://x.com/"><img src="/FooterAssets/x-twitter.png" alt="Twitter/X" className='w-[36px] h-[36px]' /></a>
            </div>

          </div>


        </div>
      </section>

      {/* maps */}
      <section>
        <div className="">
          <div className="text-center py-8 text-[28px] px-15 md:px-0 md:text-[36px] lg:text-[48px] font-['Oswald'] font-bold text-[#53724C]">We’re Located In Andhra Pradesh</div>
          <div className="w-full ">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.3754546236282!2d81.07966437491866!3d16.708107984067833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3614af5da5415b%3A0x6bff52bc00735786!2sSREE%20DATTA%20SAI%20AQUA%20SOLUTIONS!5e0!3m2!1sen!2sin!4v1747416031651!5m2!1sen!2sin" width="100%" height="640" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='h-[340px] md:h-[448px]'></iframe>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
