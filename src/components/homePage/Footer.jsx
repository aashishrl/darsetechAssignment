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
                <li>
                  <input type="text" />
                  <img src="" alt="" />
                </li>
                <li className="text-[15px] mb-3">
                  Never miss an update and news to your email
                </li>
              </ul>
            </div>
            <div className="flex justify-between items-center pt-7">
              <img src="src\assests\headerAndBanner\Logo.png" className="w-[210px] h-[50px]" alt="" />
              <p className="text-[15px] mb-3 text-[#5F5F61]">
                @2023 Design AASHISH RL. All copyrights reserved.
              </p>
              <div></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
