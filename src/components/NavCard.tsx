import React from "react";
import { NavLink } from "react-router-dom";

type NavCardProps = {
  card_title: string;
  to: string;
  icon?: React.ReactNode;
};

function NavCard({ card_title, to, icon }: NavCardProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }: { isActive: boolean }) =>
        (isActive
          ? " bg-indigo-600/30 text-indigo-700 r"
          : " bg-none text-slate-500 ") +
        " h-10 mt-4 px-2 rounded-md text-center flex items-center justify-start hover:bg-slate-200 hover:cursor-pointer"
      }
    >
      {icon ? icon : ""}{" "}
      <div className=" ml-2 font-medium">
        {card_title ? card_title : "Card"}
      </div>
    </NavLink>
  );
}

export default NavCard;
