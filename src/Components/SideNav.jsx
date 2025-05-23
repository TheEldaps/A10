import SideNavLink from "./SideNavLink";
import Home from "../assets/Images/Home_icon.png";
import Logout from "../assets/Images/logout_Icon.png";
import Settings from "../assets/Images/Settings_Icon.png";
import Tournament from "../assets/Images/Tournament_Icon.png";
import Wallet from "../assets/Images/Wallet_Icon.png";
import { useState } from "react";

export default function SideNav() {
  const [active, setActive] = useState("home");

  return (
    <nav className="h-[90%] bg-[#121212] list-none pt-[20px] px-[20px] fixed w-[200px] flex flex-col top-[70px] flex-grow ">
      <div className="flex  h-[47vh]  flex-col gap-[10px] ">
        <SideNavLink
          src={Home}
          icon="home-icon"
          title="Home"
          path="/dashboard"
          onClick={() => {
            setActive("home");
          }}
          active={active}
        />

        <SideNavLink
          src={Tournament}
          icon="Tournament-icon"
          title="Tournaments"
          path="/tournaments"
        />

        <SideNavLink
          src={Wallet}
          icon="Wallet-icon"
          title="Wallet"
          path="/wallet"
        />
        <SideNavLink
          src={Settings}
          icon="Settings-icon"
          title="Settings"
          path="/settings"
        />
      </div>
      <div className="flex flex-col-reverse grow pb-[25px] ">
        <SideNavLink
          src={Logout}
          bg="bg-[#1E2415]"
          icon="Logout-icon"
          title="LOG-OUT"
          textcol="text-[#8BC72F]"
        />
      </div>
    </nav>
  );
}
