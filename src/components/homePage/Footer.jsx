import React from "react";

function Footer() {
  return (
    <>
      <section className="bg-[#3A3B3F] pt-12 pb-3">
        <div className="container">
          <div>
            <div className="flex justify-between border-b border-[#5F5F61] pb-10">
              <ul>
                <li className="font-semibold mb-[18px]">Company</li>
                <li className="text-[15px] mb-3">About Us</li>
                <li className="text-[15px] mb-3">Why Us</li>
                <li className="text-[15px] mb-3">Security</li>
                <li className="text-[15px] mb-3">Partnership</li>
              </ul>
              <ul>
                <li className="font-semibold mb-[18px]">Categories</li>
                <li className="text-[15px] mb-3">Basic Yoga</li>
                <li className="text-[15px] mb-3">Strength Training</li>
                <li className="text-[15px] mb-3">Body Building</li>
                <li className="text-[15px] mb-3">Weight Lost</li>
              </ul>
              <ul>
                <li className="font-semibold mb-[18px]">Help</li>
                <li className="text-[15px] mb-3">Account</li>
                <li className="text-[15px] mb-3">Support Center</li>
                <li className="text-[15px] mb-3">Privary Policy</li>
                <li className="text-[15px] mb-3">Terms & Conditions</li>
              </ul>
              <ul>
                <li className="font-semibold mb-[18px]">Contact Us</li>
                <li className="text-[15px] mb-3">+977 9803664349</li>
                <li className="text-[15px] mb-3">aaseshrl@gmail.com</li>
                <li className="text-[15px] mb-3">Koteswor, Kathmandu 44600</li>
              </ul>
              <ul>
                <li className="font-semibold mb-[18px]">
                  Subscibe Our Newsletter
                </li>
                <div className="bg-white px-4 py-2 flex items-center w-[260px] rounded-full mb-2">
                  <input type="text" className="outline-none text-black" placeholder="Enter Your Email"/>
                  <img src="\assests\send-icon.png" className="h-[35px] cursor-pointer" alt="send-icon-img" />
                </div>
                <li className="text-[15px] mb-3">
                  Never miss an update and news <br /> to your email
                  <i className="fa fa-paper-plane text-yellow-600" aria-hidden="true"></i>

                </li>
              </ul>
            </div>
            <div className="flex justify-between items-center pt-7">
              <img src="\assests\headerAndBanner\Logo.png" className="w-[210px] h-[45px]" alt="" />
              <p className="text-[15px] text-[#5F5F61]">
                @2023 Design AASHISH RL. All copyrights reserved.
              </p>
              <div className="">
                <i className="bg-white text-black px-2 py-1 rounded-full mr-2 fa fa-facebook" aria-hidden="true"></i>
                <i className="bg-white text-black p-1 rounded-full mr-2 fa fa-instagram" aria-hidden="true"></i>
                <i className="bg-white text-black p-1 rounded-full mr-2 fa fa-twitter" aria-hidden="true"></i>
                <i className="bg-white text-black p-1 rounded-full mr-2 fa fa-linkedin" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
