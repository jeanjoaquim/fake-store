import Image from "next/image";

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <Image className="w-full h-full object-cover brightness-75" src="/images/hero.jpg" alt="" height={2000} width={2000} />
    </div>
  );
}
