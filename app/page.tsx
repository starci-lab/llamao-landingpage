"use client";

import Logo from "@/components/Logo";
import NavigationBar from "@/components/NavigationBar";
import Nobg from "@/components/Nobg";
import SocialMedias from "@/components/SocialMedias";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 flex items-end justify-center -z-10">
        <Image
          src="/background.svg"
          alt="Background"
          width={1440}
          height={961}
          quality={100}
          className="w-full h-auto object-contain scale-[170%] -translate-y-40 md:scale-120 md:-translate-y-20 lg:-translate-y-10 xl:translate-y-8 xl:scale-100 2xl:translate-y-15"
          priority
        />
      </div>

      {/* Bottom Grass Border - Behind trees */}
      <div className="absolute h-[200px] md:h-[170px] bottom-0 left-0 right-0 -z-10 pointer-events-none">
        <Image
          src="/footertree.svg"
          alt="Bottom grass"
          width={2133}
          height={202}
          className="w-auto h-full object-cover translate-y-1"
        />
      </div>

      {/* Tree container */}
      {/* <div> */}
      {/* Left Tree Border - Above grass */}
      <div className="absolute z-10 pointer-events-none w-[210%] -bottom-10 -left-[155%] md:w-[200%] md:-bottom-20 md:-left-[135%] lg:w-full lg:-bottom-28 lg:-left-[50%] 2xl:w-[70%] 2xl:-bottom-16 2xl:-left-[30%]">
        <Image
          src="/tree.svg"
          alt="Left tree"
          width={1444}
          height={1444}
          priority
          className="h-auto w-full object-cover"
        />
      </div>
      {/* </div> */}

      {/* Right Tree Border - Above grass */}
      <div className="absolute z-10 pointer-events-none scale-x-[-1] w-[210%] -bottom-10 -right-[155%] md:w-[200%] md:-bottom-20 md:-right-[135%] lg:w-full lg:-bottom-28 lg:-right-[50%] 2xl:w-[70%] 2xl:-bottom-16 2xl:-right-[30%]">
        <Image
          src="/tree.svg"
          alt="Right tree"
          width={1444}
          height={1444}
          className="h-auto w-full object-cover"
        />
      </div>

      <div className="h-full flex flex-col justify-between w-[95%] mx-auto">
        <div className="flex flex-col items-center mx-auto w-full mt-3 z-40">
          <NavigationBar />
          <Logo />
          <SocialMedias />
        </div>
        <div className="flex flex-col items-center z-30 w-full mx-auto pb-16 md:pb-12 md:w-[80%] lg:w-[60%] xl:w-[40%] xl:pb-8">
          <Nobg />
        </div>
      </div>
    </main>
  );
}
