"use client";
import "../globalicons.css";
import "../globals.css";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface Props {
    toggleMenu: boolean;
}

export default function MobileMenu({ toggleMenu }: Props) {
    
    const currentPath = usePathname();

    return (
        <div className={`fixed z-[1] bg-white w-screen top-0 left-0 h-screen flex-col ${toggleMenu ? 'flex' : 'hidden'}`}>
            <div className="h-2/4 flex justify-center items-center flex-col mt-24" >
                <Image src="/images/user.jpg" alt="" width="80" height="80" className="rounded-full mb-4" />
                <h5 className="text-primaryColor font-bold text-lg" >Fernando Souza</h5>
            </div>

            <ul className="flex flex-col items-center h-full" >
                <li className="py-4 w-full text-center">
                    <Link href="/" className={currentPath === "/" ? "text-primaryColor font-bold" : ""}>Home</Link>
                </li>
                <li className="py-4 w-full text-center">
                    <Link href="/shop" className={currentPath === "/shop" ? "text-primaryColor font-bold" : ""}>Shop</Link>
                </li>
                <li className="py-4 w-full text-center">
                    <Link href="/">About</Link>
                </li>
                <li className="py-4 w-full text-center">
                    <Link href="/">Contact</Link>
                </li>
                <li className="py-4 mt-auto w-full text-center mb-5">
                    <Link href="/">Logout</Link>
                </li>
            </ul>
            
        </div>
    );
}