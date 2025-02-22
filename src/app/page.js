import Image from "next/image";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col  bg-[#121212] container mx-auto py-4 px-12">
      <HeroSection/>
    </div>
  );
}
