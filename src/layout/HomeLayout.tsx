import { useState } from "react";
import SideBarWrapper from "../sidenavbar/SideBarWrapper";
import { Outlet } from "react-router-dom";
import Header from "../pages/Header";

const HomeLayout = () => {
  const [expanded, setExpanded] = useState(true);
  const toggleSidebar = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <section className="flex bg-slate-400">
        <SideBarWrapper toggleSidebar={toggleSidebar} expanded={expanded} />
        <div className="text-xl text-gray-900 font-semibold w-full">
          <Header />
          <Outlet />
        </div>
      </section>
    </>
  );
};

export default HomeLayout;
