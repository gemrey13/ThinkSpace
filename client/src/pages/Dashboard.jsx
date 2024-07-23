import React from "react";
import Header from "../components/Header";

const Dashboard = () => {
  return (
    <>
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
        <div className="fixed top-0 -z-10 h-full w-full ">
          <div class="absolute top-0 -z-10 h-full w-full bg-white">
            <div class="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div>
          </div>
        </div>
        <div className="container mx-auto px-8">
          <Header />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
