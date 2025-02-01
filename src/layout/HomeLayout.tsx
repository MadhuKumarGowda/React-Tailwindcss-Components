import { useEffect, useState } from "react";
import SideBarWrapper from "../sidenavbar/SideBarWrapper";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  const [expanded, setExpanded] = useState(true);
  const toggleSidebar = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <section className="flex gap-6">
        <SideBarWrapper toggleSidebar={toggleSidebar} expanded={expanded} />
        <div className="m-3 text-xl text-gray-900 font-semibold">
          <Outlet />
        </div>
      </section>
    </>
  );
};

export default HomeLayout;
