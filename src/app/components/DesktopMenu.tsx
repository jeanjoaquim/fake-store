"use client";
import "../globalicons.css";
import "../globals.css";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface Props {
    onMenuClick: () => void;
}

export default function DesktopMenu({ onMenuClick }: Props) {

    const currentPath = usePathname();

    return (
        <div className="bg-white px-2 py-2 sm:px-8 flex justify-between fixed w-full z-10">
            <div className="flex items-center gap-1">
                <Image src="/images/logo.svg" width={24} height={24} alt="logo"/>
                <h5 className="font-bold">Market</h5>
            </div>
            <div className="flex items-center">
                <nav>
                    <ul className="hidden md:flex">
                        <li className="px-8">
                            <Link href="/" className={currentPath === "/" ? "text-primaryColor" : ""}>Home</Link>
                        </li>
                        <li className="px-8">
                            <Link href="/shop" className={currentPath === "/shop" ? "text-primaryColor" : ""}>Shop</Link>
                        </li>
                        <li className="px-8">About</li>
                        <li className="px-8">Contact</li>
                    </ul>
                </nav>
                <span className="material-symbols-outlined py-2 px-2 cart-button mx-8">shopping_cart</span>
                <button className="md:hidden" onClick={onMenuClick}>
                    <span className="material-symbols-outlined py-2 px-2">menu</span>
                </button>
                <div className="hidden md:flex gap-2">
                    <Image className="rounded-full self-center" src="/images/user.jpg" width={32} height={32} alt="user"/>
                    <div>
                        <h5 className="text-sm font-bold">Fernando Souza</h5>
                        <p className="text-xs text-primaryColor leading-3">Sair</p>
                    </div>
                </div>
            </div>
        </div>
    );
}