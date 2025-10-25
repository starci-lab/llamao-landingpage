"use client";

import Image from "next/image";
import { useState } from "react";

type NavVariant = "primary" | "default" | "cta";
type NavLink = {
  href: string;
  label: string;
  variant: NavVariant;
};

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks: NavLink[] = [
    { href: "#home", label: "Llome", variant: "primary" },
    { href: "#about", label: "Llabout", variant: "default" },
    { href: "#lore", label: "Llore", variant: "default" },
    { href: "#traits", label: "Lltraits", variant: "default" },
    { href: "#rewards", label: "Reward Pools", variant: "cta" },
  ];

  const handleToggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  const getDesktopLinkClasses = (variant: NavVariant) => {
    switch (variant) {
      case "primary":
        return "text-white bg-[#B091FF] px-3 md:px-4 py-2 md:py-3 text-sm md:text-base lg:text-lg hover:bg-purple-700 transition-colors";
      case "cta":
        return "relative inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 text-white text-sm md:text-base lg:text-lg uppercase transition-transform hover:scale-[1.03] active:scale-95 bg-[url('/reward-pool-bg.svg')] bg-contain bg-center bg-no-repeat";
      default:
        return "text-gray-800 text-sm md:text-base lg:text-lg hover:text-purple-600 transition-colors";
    }
  };

  const getMobileLinkClasses = (variant: NavVariant) => {
    switch (variant) {
      case "primary":
        return "bg-[#B091FF] px-4 py-3 text-xs text-white";
      case "cta":
        return "inline-flex w-full items-center justify-center px-4 py-3 text-xs text-white uppercase bg-[url('/reward-pool-bg.svg')] bg-contain bg-center bg-no-repeat";
      default:
        return "text-xs text-gray-800";
    }
  };

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
      <div className="absolute -left-[58%] sm:-left-[52%] md:-left-[46%] lg:-left-[40%] xl:-left-[36%] -top-[48%] sm:-top-[46%] md:-top-[44%] lg:-top-[42%] xl:-top-[40%] flex items-start z-20 pointer-events-none">
        <Image
          src="/tree.svg"
          alt="Left tree"
          width={1444}
          height={1444}
          className="h-auto w-[230%] sm:w-[210%] md:w-[190%] lg:w-[170%] xl:w-[155%] object-cover"
        />
      </div>

      {/* Right Tree Border - Above grass */}
      <div className="absolute -right-[58%] sm:-right-[52%] md:-right-[46%] lg:-right-[40%] xl:-right-[36%] -top-[48%] sm:-top-[46%] md:-top-[44%] lg:-top-[42%] xl:-top-[40%] flex items-start z-20 pointer-events-none scale-x-[-1]">
        <Image
          src="/tree.svg"
          alt="Right tree"
          width={1444}
          height={1444}
          className="h-auto w-[230%] sm:w-[210%] md:w-[190%] lg:w-[170%] xl:w-[155%] object-cover"
        />
      </div>

      {/* Navigation Bar */}
      <nav className="relative z-40 flex justify-center pt-4 md:pt-8 lg:pt-10 px-4">
        <div className="relative w-full max-w-[280px] sm:max-w-[520px] md:max-w-[720px] lg:max-w-[900px] xl:max-w-[1040px] min-h-[92px] mx-auto">
          <Image
            src="/nav-background.svg"
            alt=""
            fill
            sizes="(min-width: 1040px) 1040px, 100vw"
            priority
            aria-hidden
            className="pointer-events-none select-none object-contain"
          />

          <div className="press-start-2p-regular relative z-10 flex items-center justify-between px-4 py-3 md:hidden">
            <a
              href={navLinks[0].href}
              className="bg-[#B091FF] px-4 py-3 text-xs tracking-tight text-white"
              onClick={handleCloseMenu}
            >
              {navLinks[0].label}
            </a>
            <button
              type="button"
              onClick={handleToggleMenu}
              aria-label={
                isMenuOpen ? "Close navigation menu" : "Open navigation menu"
              }
              className="flex h-9 w-10 flex-col items-center justify-center gap-1.5"
            >
              <span
                className={`block h-[3px] w-6 rounded-sm bg-[#1F2358] transition-transform duration-200 ${
                  isMenuOpen ? "translate-y-[6px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-[3px] w-6 rounded-sm bg-[#1F2358] transition-opacity duration-200 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block h-[3px] w-6 rounded-sm bg-[#1F2358] transition-transform duration-200 ${
                  isMenuOpen ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>

          <ul className="press-start-2p-regular relative z-10 hidden w-full flex-wrap items-center justify-center gap-4 px-6 py-3 md:flex md:gap-6 md:px-8 md:py-4 lg:gap-8 lg:px-12">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={getDesktopLinkClasses(link.variant)}
                >
                  {link.variant === "cta"
                    ? link.label.toUpperCase()
                    : link.label}
                </a>
              </li>
            ))}
          </ul>

          {isMenuOpen && (
            <div className="absolute left-1/2 top-full mt-3 w-[calc(100vw-2.5rem)] max-w-[320px] -translate-x-1/2 md:hidden">
              <div className="press-start-2p-regular flex flex-col gap-4 rounded-lg border-4 border-[#C1D8FF] bg-white/95 px-6 py-6 text-center shadow-[6px_6px_0_0_#C8B5F7]">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={handleCloseMenu}
                    className={getMobileLinkClasses(link.variant)}
                  >
                    {link.variant === "cta"
                      ? link.label.toUpperCase()
                      : link.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content Container */}
      <div className="relative z-30 flex flex-col items-center h-full px-4 md:px-8 lg:px-16 pt-2 md:pt-4 lg:pt-6 mt-14 sm:mt-16 md:mt-20">
        <div className="flex flex-col items-center h-full -mt-6 sm:-mt-8 md:-mt-12 lg:-mt-16">
          <div className="flex flex-col items-center">
            {/* Logo */}
            <div className="mb-1 md:mb-2 lg:mb-3">
              <Image
                src="/logo.svg"
                alt="LLAMA Logo"
                width={882}
                height={369}
                className="w-[220px] sm:w-[260px] md:w-[360px] lg:w-[500px] xl:w-[800px] h-auto"
                priority
              />
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-3 md:gap-4 lg:gap-6 z-40 -mt-2 md:-mt-3 lg:-mt-4 mb-6 md:mb-8 lg:mb-10">
              <a
                href="https://x.com/llamao_"
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
                href="discord.com/invite/llamao"
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
                href="https://t.me/llamaomeme"
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
