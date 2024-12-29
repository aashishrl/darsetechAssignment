import React from "react";

function HeaderAndBanner() {
  return (
    <>
      <section className="fitness py-20">
        <div className="container flex items-center gap-40">
          <div className="relative">
            <img
              className="rounded-2xl top-[16px] relative"
              src="src\assests\fitnessGoals\fitnessGoals-img.png"
              alt="fitnessGoals-img"
            />
            <img
              className="absolute h-[80px] left-[340px] bottom-20"
              src="src\assests\fitnessGoals\pro-trainer.png"
              alt=""
            />
          </div>
          <div>
            <h3 className="text-[32px] font-bold">
              Get Ready To Reach Your Fitness Goals
            </h3>
            <p className="mt-4 mb-3">
              We are a gym that is committed to helping people reach their
              fitness goals. We offer a variety of theirs programs and services
              to fit your needs, whether you are a experienced athlete.
            </p>
            <p className="mb-7">
              We believe that everyone should have access to the benefits of
              exercise make it happen.
            </p>
            <button className="bg-custom-red px-6 py-3 rounded-md font-semibold">
              Free Trail Today
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeaderAndBanner;
