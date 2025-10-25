import Image from "next/image";

export default function Home() {
  return (
    <main className="relative w-full h-screen overflow-hidden">
      {/* Background Layer - Village Scene */}
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <Image
          src="/background.svg"
          alt="Background"
          width={1440}
          height={961}
          quality={100}
          className="w-full h-full object-cover"
          priority
        />
      </div>

      {/* Bottom Grass Border - Behind trees */}
      <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none">
        <Image
          src="/footertree.svg"
          alt="Bottom grass"
          width={2133}
          height={202}
          className="w-full h-auto"
        />
      </div>

      {/* Left Tree Border - Above grass */}
      <div className="absolute -left-[30%] md:-left-[35%] lg:-left-[40%] -bottom-[10%] md:-bottom-[12%] lg:-bottom-[15%] flex items-end z-20 pointer-events-none">
        <Image
          src="/tree.svg"
          alt="Left tree"
          width={1444}
          height={1444}
          className="w-auto h-[120%] md:h-[130%] lg:h-[140%] object-contain"
        />
      </div>

      {/* Right Tree Border - Above grass */}
      <div className="absolute -right-[30%] md:-right-[35%] lg:-right-[40%] -bottom-[10%] md:-bottom-[12%] lg:-bottom-[15%] flex items-end z-20 pointer-events-none scale-x-[-1]">
        <Image
          src="/tree.svg"
          alt="Right tree"
          width={1444}
          height={1444}
          className="w-auto h-[120%] md:h-[130%] lg:h-[140%] object-contain"
        />
      </div>

      {/* Navigation Bar */}
      <nav className="relative z-40 flex justify-center pt-6 md:pt-8 lg:pt-10 px-4">
        <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg border-4 border-gray-300 px-6 md:px-8 lg:px-12 py-3 md:py-4">
          <ul className="press-start-2p-regular flex gap-4 md:gap-6 lg:gap-8 items-center">
            <li>
              <a
                href="#home"
                className="text-white bg-[#B091FF] px-4 md:px-6 py-2 md:py-3 text-sm md:text-base lg:text-lg hover:bg-purple-700 transition-colors"
              >
                Llome
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-gray-800 text-sm md:text-base lg:text-lg hover:text-purple-600 transition-colors"
              >
                Llabout
              </a>
            </li>
            <li>
              <a
                href="#lore"
                className="text-gray-800 text-sm md:text-base lg:text-lg hover:text-purple-600 transition-colors"
              >
                Llore
              </a>
            </li>
            <li>
              <a
                href="#traits"
                className="text-gray-800 text-sm md:text-base lg:text-lg hover:text-purple-600 transition-colors"
              >
                Lltraits
              </a>
            </li>
            <li>
              <a
                href="#rewards"
                className="text-white bg-purple-600 px-4 md:px-6 py-2 md:py-3 rounded-md text-sm md:text-base lg:text-lg hover:bg-purple-700 transition-colors uppercase"
              >
                Reward Pools
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content Container */}
      <div className="relative z-30 flex flex-col items-center h-full px-4 md:px-8 lg:px-16 pt-2 md:pt-4 lg:pt-6 mt-20">
        <div className="flex flex-col items-center h-full justify-between -mt-8 md:-mt-12 lg:-mt-16">
          <div className="flex flex-col items-center">
            {/* Logo */}
            <div className="mb-1 md:mb-2 lg:mb-3">
              <Image
                src="/logo.svg"
                alt="LLAMA Logo"
                width={882}
                height={369}
                className="w-[280px] md:w-[400px] lg:w-[500px] xl:w-[800px] h-auto"
                priority
              />
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-3 md:gap-4 lg:gap-6 z-40 -mt-2 md:-mt-3 lg:-mt-4 mb-6 md:mb-8 lg:mb-10">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110 active:scale-95"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 relative">
                  <Image
                    src="/twitter.svg"
                    alt="Twitter"
                    width={80}
                    height={80}
                    className="w-full h-full"
                  />
                </div>
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110 active:scale-95"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 relative">
                  <Image
                    src="/discord.svg"
                    alt="Discord"
                    width={80}
                    height={80}
                    className="w-full h-full"
                  />
                </div>
              </a>
              <a
                href="https://telegram.org"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110 active:scale-95"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 relative">
                  <Image
                    src="/telegram.svg"
                    alt="Telegram"
                    width={80}
                    height={80}
                    className="w-full h-full"
                  />
                </div>
              </a>
            </div>
          </div>

          {/* Animated Llama Character */}
          <div className="relative">
            <Image
              src="/nobg.gif"
              alt="Llama Character"
              unoptimized
              width={860}
              height={850}
              className="w-[260px] md:w-[360px] lg:w-[460px] xl:w-[560px] h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </main>
  );
}
