import React from "react";

function HeaderAndBanner() {
  return (
    <div className="header-and-banner">
      <div className="container">
        <div className="header">
          <div className="flex justify-between items-center">
            <div>
              <img
                src="/assests/headerAndBanner/Logo.png"
                style={{ height: "44px" }}
                alt="logo"
              />
            </div>
            <div>
              <ul className="flex gap-7 items-center">
                <li className="text-custom-red font-bold cursor-pointer">Home</li>
                <li className="cursor-pointer">About Us</li>
                <li className="cursor-pointer">Program</li>
                <li className="cursor-pointer">Membership</li>
                <li className="cursor-pointer">Testmonials</li>
                <li>
                  <button className="bg-custom-red px-6 py-2 rounded-md font-semibold">
                    Sign Up
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="banner flex justify-between">
          <div className="w-[50%] pt-12">
            <h1 className="text-[40px] font-extrabold leading-relaxed">
              GET HEALTHY BODY WITH PERFECT EXERCISE
              <img
                className="object-cover object-top rounded-full inline ml-4"
                style={{ height: "60px", width: "200px" }}
                src="\assests\headerAndBanner\banner-img-2.png"
                alt="guy-lifting-tyres"
              />
            </h1>
            <p className="text-[15px] mt-7">
              We are always there to help you to make a healthy body and mind
              through the power of fitness.
            </p>
            <div className="flex gap-5 items-center my-7">
              <button className="bg-custom-red px-6 py-3 rounded-md font-semibold">
                Get Started
              </button>
              <div className="flex items-center gap-2">
                <a href="">
                <img
                  src="\assests\headerAndBanner\playicon.png"
                  style={{ height: "50px" }}
                  alt="playicon-image"
                />
                </a>
                <span className="font-semibold text-[15px]">Watch Video</span>
              </div>
            </div>
            <div className="flex">
              <div>
                <h2 className="text-2xl font-semibold">105+</h2>
                <p className="text-sm">Expert Trainers</p>
              </div>
              <div className="border-x-1 border-white px-4 mx-4">
                <h2 className="text-2xl font-semibold">970+</h2>
                <p className="text-sm">Member Joined</p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold">135+</h2>
                <p className="text-sm">Fitness Programs</p>
              </div>
            </div>
          </div>
          <div className="relative w-[50%]">
            <div>
              <img className="relative top-[120px] z-[2]" src="\assests\headerAndBanner\lala.png" alt="banner-image" />
              <img className="absolute w-[350px] rotate-12 z-[1] top-[134px] right-[147px]" src="\assests\headerAndBanner\dots.png" alt="" />
              <img className="absolute bottom-10 z-[3] h-[100px] left-[120px]" src="\assests\headerAndBanner\calories.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderAndBanner;
