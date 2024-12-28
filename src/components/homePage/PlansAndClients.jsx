import React from "react";

function PlansAndClients() {
  return (
    <>
      <section className="plansAndClients pt-24 pb-10">
        <div className="container">
          <div className="plans mb-10">
            <div className="flex flex-col items-center">
              <h3 className="text-[32px] font-bold mb-6">
                Why Should People Choose Fitnesxia Services
              </h3>
              <p className="text-[15px] mb-6">
                Choose a plan thats rigth for your growing team. Simple pricing
                & no hidden charges.
              </p>
              <div className="flex items-center border-[2px] border-[#FD2331] rounded-3xl pr-8 text-sm mb-12">
                <span className="px-8 py-2 bg-[#FD2331] rounded-3xl border border-[#FD2331] relative left-[-2px]">
                  Monthly
                </span>
                <span className="pl-6">Annual</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="bg-[#464646] py-8 rounded-2xl px-14 h-fit">
                <h6 className="font-semibold text-center pb-6">DISCOVER</h6>
                <h3 className="pb-6">
                  <span className="text-[36px] font-bold">$99 </span>
                  <span>/ Per Month</span>
                </h3>
                <ul className="text-[15px] pb-2">
                  <li className="mb-4 flex items-center gap-3" ><img className="h-4" src="src\assests\tick.png" alt="tick-image" /> classes per month</li>
                  <li className="mb-4 flex items-center gap-3" ><img className="h-4" src="src\assests\tick.png" alt="tick-image" /> 4 group class monthly</li>
                  <li className="mb-4 flex items-center gap-3" ><img className="h-4" src="src\assests\tick.png" alt="tick-image" /> Online class access</li>
                  <li className="mb-4 flex items-center gap-3" ><img className="h-4" src="src\assests\tick.png" alt="tick-image" /> E-book fitness guide</li>
                </ul>
                <button className="border mt-4 border-white px-14 py-[10px] rounded-full">
                  Choose Plan
                </button>
              </div>
              <div className="bg-[#ff662d] py-8 rounded-2xl px-14 h-fit">
                <h6 className="font-semibold text-center pb-6">ENTERPRISE</h6>
                <h3 className="pb-6">
                  <span className="text-[36px] font-bold pb-6">$299 </span>
                  <span>/ Per Month</span>
                </h3>
                <ul className="text-[15px] pb-2">
                  <li className="mb-4 flex items-center gap-3" ><img className="h-4" src="src\assests\tick1.png" alt="tick-image" /> 10 classes per month</li>
                  <li className="mb-4 flex items-center gap-3" ><img className="h-4" src="src\assests\tick1.png" alt="tick-image" /> 8 group class monthly</li>
                  <li className="mb-4 flex items-center gap-3" ><img className="h-4" src="src\assests\tick1.png" alt="tick-image" /> Online class access</li>
                  <li className="mb-4 flex items-center gap-3" ><img className="h-4" src="src\assests\tick1.png" alt="tick-image" /> E-book fitness guide</li>
                  <li className="mb-4 flex items-center gap-3" ><img className="h-4" src="src\assests\tick1.png" alt="tick-image" /> 7 Extra fitness training</li>                  
                </ul>
                <button className="bg-white mt-4 text-[#ff662d] px-14 py-[10px] rounded-full">
                  Choose Plan
                </button>
              </div>
              <div className="bg-[#464646] py-8 rounded-2xl px-14 h-fit">
                <h6 className="font-semibold text-center pb-6">PROFESSIONAL</h6>
                <h3 className="pb-6">
                  <span className="text-[36px] font-bold pb-6">$199 </span>
                  <span>/ Per Month</span>
                </h3>
                <ul className="text-[15px] pb-2">
                  <li className="mb-4 flex items-center gap-3" ><img className="h-4" src="src\assests\tick.png" alt="tick-image" /> 7 classes per month</li>
                  <li className="mb-4 flex items-center gap-3" ><img className="h-4" src="src\assests\tick.png" alt="tick-image" /> 6 group class monthly</li>
                  <li className="mb-4 flex items-center gap-3" ><img className="h-4" src="src\assests\tick.png" alt="tick-image" /> Online class access</li>
                  <li className="mb-4 flex items-center gap-3" ><img className="h-4" src="src\assests\tick.png" alt="tick-image" /> E-book fitness guide</li>
                </ul>
                <button className="border mt-4 border-white px-14 py-[10px] rounded-full">
                  Choose Plan
                </button>
              </div>
            </div>
          </div>
          <div className="clients flex justify-between items-start py-16 ">
            <div>
              <h3 className="text-[32px] font-bold mb-6">
                What Our Happy Clients <br /> Say About Us
              </h3>
              <p className="text-[15px] mb-10">
                I've been a member of Fitness Within for about 6 months <br /> now and I absolutely love it!
                 The trainers are so motivate <br /> and they really help to reach fitness goals.              
              </p>
              <div className="flex items-center">
                <div className="flex items-center">
                  <img src="src\assests\plansAndClients\photo1.png" className="z-1 border-[3px] border-[#37383C] relative  h-14 w-14 object-cover rounded-full" alt="" />
                  <img src="src\assests\plansAndClients\photo2.png" className="z-2 border-[3px] border-[#37383C] relative left-[-12px]  h-14 w-14 object-cover rounded-full" alt="" />
                  <img src="src\assests\plansAndClients\photo3.png" className="z-3 border-[3px] border-[#37383C] relative left-[-24px] h-14 w-14 object-cover rounded-full" alt="" />
                  <img src="src\assests\plansAndClients\photo4.png" className="z-4 border-[3px] border-[#37383C] relative left-[-36px] h-14 w-14 object-cover rounded-full" alt="" />
                  <img src="src\assests\plansAndClients\add.png" className="z-5 relative  border-[3px] border-[#37383C] left-[-48px] h-[58px] w-[58px] object-cover rounded-full" alt="" />
                </div>
                <div>
                  <img src="" alt="" />
                  <p>4.9 ( 450 Reviews ) </p>
                </div>
              </div>
            </div>
            <div className="bg-[#464646] p-8 rounded-2xl relative">
              <div className="flex gap-4 items-center mb-4">
                <img className="border-[#37383C] h-16 w-16 object-cover rounded-full" src="src\assests\plansAndClients\photo1.png" alt="" />
                <img className="cursor-pointer absolute top-[95px] left-[-20px]" src="src\assests\plansAndClients\left-arrow.png" alt="left-arrow" />
                <img className="cursor-pointer absolute right-[-20px] top-[95px]" src="src\assests\plansAndClients\right-arrow.png" alt="right-arrow" />
                <div>
                  <p className="font-semibold">Farhan Rio</p>
                  <p className="text-sm">Happy Customer</p>
                </div>
              </div>
              <img src="" alt="" />
              <p className="text-[15px]">
                I've been coming to this gym for 3 years now <br /> and I've never been
                in better shape. The trainers <br /> are amazing and they always push
                me be my best. <br /> I'm so glad to this gym.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PlansAndClients;
