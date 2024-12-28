import React from "react";

function Services() {
  return (
    <>
      <section className="services pt-24 pb-10">
        <div className="container">
          <div className="flex justify-between gap-10">
            <div className="w-[50%]">
              <h3 className="text-[32px] font-bold mb-6">
                Why Should People Choose <br /> Fitnesxia Services
              </h3>
              <h4 className="font-bold text-lg pb-3 flex items-center gap-2">
                <img
                  className="h-5"
                  src="src\assests\check.png"
                  alt="check-icon-img"
                />{" "}
                Personal Training
              </h4>
              <p className="text-[15px] mb-4">
                Our personal trainers can help you create a personalized <br />{" "}
                fitness plan and track your progress.
              </p>
              <h4 className="font-bold text-lg pb-3 flex items-center gap-2">
                <img
                  className="h-5"
                  src="src\assests\check.png"
                  alt="check-icon-img"
                />{" "}
                Expert Trainer
              </h4>
              <p className="text-[15px] mb-4">
                Our gym is proud to offer a team of highly skilled and certified{" "}
                <br />
                trainer help achieve your health & fitness goals.
              </p>
              <h4 className="font-bold text-lg pb-3 flex items-center gap-2">
                <img
                  className="h-5"
                  src="src\assests\check.png"
                  alt="check-icon-img"
                />{" "}
                Flexible Time
              </h4>
              <p className="text-[15px] mb-10">
                There are many fitness classes that are offered during <br />{" "}
                off-peak hours, such as early morning or late evening.
              </p>
              <button className="bg-custom-red px-6 py-3 rounded-md font-semibold">
                Join Today
              </button>
            </div>
            <div className="w-50% relative">
              <img
                className="relative w-[500px] object-cover right-10 bottom-9"
                src="src\assests\services-img.png"
                alt=""
              />
              <img
                className="absolute h-[70px] top-28 right-[-15px]"
                src="src\assests\heart-rate.png"
                alt=""
              />
              <img
                className="absolute h-[70px] bottom-[175px] left-[-60px]"
                src="src\assests\fat-burning.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
