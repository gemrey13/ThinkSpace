import React from "react";
import Header from "../components/Header";
import BoxHero from "../components/BoxHero";

const Dashboard = () => {
  return (
    <>
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
        <div className="fixed top-0 -z-10 h-full w-full ">
          <div class="absolute top-0 -z-10 h-full w-full bg-white">
            <div class="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
          </div>
        </div>
        <div className="container mx-auto px-8">
          <Header />
          <div className="flex ">
            <BoxHero />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
