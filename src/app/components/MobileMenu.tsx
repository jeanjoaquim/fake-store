import "../globalicons.css";
import "../globals.css";
import Image from "next/image";

export default function MobileMenu() {
    return (
        <div className="fixed bg-white w-screen top-0 left-0 h-screen flex flex-col">
            <div className="h-2/4 flex justify-center items-center flex-col mt-24" >
                <Image src="/images/user.jpg" alt="" width="80" height="80" className="rounded-full mb-4" />
                <h5 className="text-primaryColor font-bold text-lg" >Fernando Souza</h5>
            </div>

            <ul className="flex flex-col items-center h-full" >
                <li className="py-4 w-full text-center" >Início</li>
                <li className="py-4 w-full text-center">Loja</li>
                <li className="py-4 w-full text-center">Sobre</li>
                <li className="py-4 w-full text-center">Contato</li>
                <li className="py-4 mt-auto w-full text-center mb-5">Sair</li>
            </ul>
            
        </div>
    );
}