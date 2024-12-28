import React from "react";

function Partners() {
  return (
    <>
      <section className="partners">
        <div className="container">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-[36px] font-bold">970K+ More</h3>
              <p className="font-bold text-[20px]">Trusted Companies Partner</p>
            </div>
            <div className="flex items-center gap-4">
              <img src="src\assests\partners\videoask-logo.png" style={{ height: "50px" }} alt="video ask company logo"/>
              <img className="relative bottom-[3px] right-3 h-[60px]" src="src\assests\partners\hubspot-logo.png" alt="hubspot company logo"/>
              <img src="src\assests\partners\mapbox-logo.png" style={{ height: "50px" }} alt="mapbox company logo"/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Partners;
