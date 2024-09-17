import "../globalicons.css";
import "../globals.css";
import Image from "next/image";

export default function Header() {
    return (
        <header className="bg-white px-2 py-2 flex justify-between fixed w-full z-10">
            <div className="flex items-center gap-1">
                <Image src="/images/logo.svg" width={24} height={24} alt="logo"/>
                <h5 className="font-bold">Market</h5>
            </div>
            <div className="flex items-center">
                <span className="material-symbols-outlined py-2 px-2">shopping_cart</span>
                <span className="material-symbols-outlined py-2 px-2">menu</span>
            </div>
        </header>
    );
}