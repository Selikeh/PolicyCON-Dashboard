import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  NavLink,
  useLocation,
  useNavigate
} from "react-router-dom";
import { HiOutlineHome } from "react-icons/hi";
import { BsPersonGear, BsPersonPlus } from "react-icons/bs";
import { BiLogIn } from "react-icons/bi";
import NavCard from "../components/NavCard";
import HomePage from "./HomePage";
import AccountSettingsPage from "./AccountSettingsPage";
import { useEffect } from "react";



function Dashboard() {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(()=>{
        if(location.pathname === "/Dashboard/" || location.pathname === "/Dashboard"){
            navigate("/Dashboard/Home")
        }
    },[])

  return (
    <div className=" h-screen grid grid-cols-12 ">
      <div className=" px-4 col-span-2 h-screen bg-white">
        <div>
          <h2>sneat</h2>
        </div>
        <nav>
          <ul>
            <li>
                <NavCard to="/Dashboard/Home" card_title="Dashboard" icon={<HiOutlineHome />} />
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
          <div>PAGES</div>
          <ul>
            <li>
              <NavCard to="/" card_title="Login" icon={<BiLogIn />} />
            </li>
            <li>
              <NavCard to="/Dashboard/Register" card_title="Register" icon={<BsPersonPlus />} />
            </li>
          </ul>
        </nav>
      </div>
      <div className="col-span-10 overflow-y-scroll bg-slate-200">
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
