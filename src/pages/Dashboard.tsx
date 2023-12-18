// import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { HiOutlineHome } from "react-icons/hi";
import { BsPersonGear, BsPersonPlus } from "react-icons/bs";
import { BiLogIn } from "react-icons/bi";
import { ImCross } from "react-icons/im";
import NavCard from "../components/NavCard";

import { useEffect } from "react";

function Dashboard( { showMenu, setShowMenu } : {showMenu: boolean, setShowMenu: React.Dispatch<React.SetStateAction<boolean>>} ) {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (
      location.pathname === "/Dashboard/" ||
      location.pathname === "/Dashboard"
    ) {
      navigate("/Dashboard/Home");
    }
  }, []);

  function handleMenuHideClick():void{
    setShowMenu(false)
  }

  return (
    <div className=" h-screen grid grid-cols-12 ">
      <div className={ (showMenu?"":" -translate-x-full") +" fixed z-10 px-4 md:translate-x-0 md:static md:block md:col-span-2 h-screen bg-white"}>
        <div className=" relative flex items-center">
          <div className={(showMenu?"":" hidden") +" w-fit h-fit absolute -right-16 top-2 md:hidden"}><button onClick={handleMenuHideClick} className=" p-1 bg-red-400 text-2xl rounded-md "><ImCross /></button></div>
          <img className=" w-20 h-20" src="/dashboard_logo.png" alt="" />
          <h2 className=" text-3xl text-slate-700 font-extrabold">sneat</h2>
        </div>
        <nav>
          <ul>
            <li>
              <NavCard
                to="/Dashboard/Home"
                card_title="Dashboard"
                icon={<HiOutlineHome />}
              />
              {/* <NavLink className={({ isActive }: { isActive: boolean })=>isActive? " bg-green-400": "bg-violet-500"} to="/Dashboard/">
              </NavLink> */}
            </li>
            <li>
              <NavCard
                to="/Dashboard/AccountSettings"
                card_title="Account Settings"
                icon={<BsPersonGear />}
              />
              {/* <NavLink className={({ isActive }: { isActive: boolean })=>isActive? " bg-green-400": "bg-violet-500"} to="/Dashboard/AccountSettings">
              </NavLink> */}
            </li>
          </ul>
          <div className=" ml-2 mt-3 text-sm text-slate-300">PAGES</div>
          <ul>
            <li>
              <NavCard to="/" card_title="Login" icon={<BiLogIn />} />
            </li>
            <li>
              <NavCard
                to="/Dashboard/Register"
                card_title="Register"
                icon={<BsPersonPlus />}
              />
            </li>
          </ul>
        </nav>
      </div>
      <div className=" col-span-12 md:col-span-10 overflow-y-scroll bg-slate-200">
        <Outlet />
        {/* <Routes>
                <Route path='/' index element={<HomePage/>}/>
                <Route path='/AccountSettings' element={<AccountSettingsPage/>}/>
                
            </Routes> */}
      </div>
    </div>
  );
}

export default Dashboard;
