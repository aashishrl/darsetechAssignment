import React from "react";

function Programs() {
  return (
    <>
      <section className="programs pt-24 pb-20">
        <div className="container">
          <div className="flex justify-between pb-12 items-center">
            <h3 className="text-[32px] font-bold w-[60%]">
              The Best Programs We <br /> Offers For You
            </h3>
            <p className="w-[40%]">
              We offer a wide range of comprehensive fitness programs designed
              to cater to individual of all fitness levels. Our aim to help your
              achieve specific goals & maximize results.
            </p>
          </div>
          <div className="program-container flex gap-5">
            <div className="program1 p-5 rounded-2xl">
              <img src="" alt="" />
              <h4 className="font-bold text-xl">Strength Training</h4>
              <p className="text-sm my-3">
                Our trainers will design that a progressive workout plans that
                proper achieve gains strength.
              </p>
              <p className="text-[15px] flex items-center gap-4">
                Learn More{" "}
                <img
                  style={{ height: "12px" }}
                  src="src\assests\arrow.png"
                  alt="arrow logo"
                />
              </p>
            </div>
            <div className="program2 p-5 rounded-2xl">
              <img src="" alt="" />
              <h5 className="font-bold text-xl">Basic Yoga</h5>
              <p className="text-sm my-3">
                This program combines yoga with cardio & strength training to
                help lose weight & fitness.
              </p>
              <p className="text-[15px] flex items-center gap-4">
                Learn More{" "}
                <img
                  style={{ height: "12px" }}
                  src="src\assests\arrow.png"
                  alt="arrow logo"
                />
              </p>
            </div>
            <div className="program3 p-5 rounded-2xl">
              <img src="" alt="" />
              <h5 className="font-bold text-xl">Body Building</h5>
              <p className="text-sm my-3">
                For those looking to increase strength build lean muscle, our
                strength & muscle.
              </p>
              <p className="text-[15px] flex items-center gap-4">
                Learn More{" "}
                <img
                  style={{ height: "12px" }}
                  src="src\assests\arrow1.png"
                  alt="arrow logo"
                />
              </p>
            </div>
            <div className="program4 p-5 rounded-2xl">
              <img src="" alt="" />
              <h5 className="font-bold text-xl">Weight Loss</h5>
              <p className="text-sm my-3">
                Our Weight loss programs are designed to help you make
                sustainable lifestyle changes.
              </p>
              <p className="text-[15px] flex items-center gap-4">
                Learn More{" "}
                <img
                  style={{ height: "12px" }}
                  src="src\assests\arrow.png"
                  alt="arrow logo"
                />
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Programs;
