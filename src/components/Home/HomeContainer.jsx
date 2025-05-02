// import React from 'react'
import AboutUs from "./AboutUs";
import Home from "../../Pages/Home";
import IncludedWithStay from "./IncludesWithStay";
import AdditionalInformation from "./AdditionalInformation";
import HomeCarousel from "./HomeCarousel";
import AvailabilityCheckCard from "../ListingDetails/AvailabilityCheckCard";
import SpecialOffers from "./SpecialOffers";

const HomeContainer = () => {
  return (
    <>
      <div className="relative">
        <HomeCarousel />
        {/* AvailabilityCheckCard - Positioned to Overlap */}
        <div className="absolute toHeightForMobile  left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-[80%] ">
          <AvailabilityCheckCard />
        </div>
      </div>
      <SpecialOffers />
      <IncludedWithStay />
      <Home />
      <AboutUs />
      <AdditionalInformation />
    </>
  );
};

export default HomeContainer;
