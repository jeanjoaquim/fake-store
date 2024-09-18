"use client";
import "../globalicons.css";
import "../globals.css";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

export default function Header() {

    const [openMenu, setOpenMenu] = useState(false);

    function handleToggleMenu() {
        setOpenMenu(!openMenu);
    }

    return (
        <header>
            <DesktopMenu onMenuClick={handleToggleMenu}/>
            <MobileMenu toggleMenu={openMenu}/>
        </header>
    );
}