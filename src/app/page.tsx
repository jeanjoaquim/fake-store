import Image from "next/image";

export default function Home() {
  return (
    <div className="w-screen h-screen relative">
      <Image className="w-full h-full object-cover brightness-75 grid-item" src="/images/hero.jpg" alt="" height={4000} width={4000} />
      <div className="absolute bottom-0 mx-3 mb-24 flex flex-col">
        <h5 className="text-3xl text-center font-bold text-white mb-8">Find Everything You Need, All in One Place!</h5>
        <button className="text-white bg-[#FF5900] w-9/12 self-center py-3 rounded-lg shadow">Acessar loja</button>
      </div>
    </div>
  );
}
