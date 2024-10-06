import Banner from "@/app/components/common/home/Banner";
import HowToInvest from "@/app/components/common/home/HowToInvestSection";
import InfoSection from "@/app/components/common/home/InfoSection";
import JustLaunchedSection from "@/app/components/common/home/JustLaunchedSection";

import React from "react";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <InfoSection />
      <JustLaunchedSection />
      <HowToInvest />
    </div>
  );
};

export default HomePage;
