"use client";

import { Alert, AlertDescription } from "@/components/ui/8bit/alert";
import { Button } from "@/components/ui/8bit/button";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const MotionButton = motion.create(Button);

const pageVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.12,
    },
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const staggerList: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const featuredPrizes = [
  { title: "Prize 1", description: "NFT of Llamao" },
  { title: "Prize 2", description: "NFT of Llamao" },
  { title: "Prize 3", description: "NFT of Llamao" },
  { title: "Prize 4", description: "NFT of Llamao" },
  { title: "Prize 5", description: "NFT of Llamao" },
];

const rewardSummaries = [
  { id: "estimated-value", label: "Total Estimated Value", value: "5000 MON" },
  { id: "last-updated", label: "Last Updated", value: "5 days ago" },
];

const rewardCards = [
  { id: "highlight", className: "bg-[#C9B9F7]" },
  { id: "default", className: "" },
];

const participantRows = Array.from({ length: 6 }, (_, index) => ({
  id: `participant-${index}`,
  address: "0x...aaaa",
  totalOwned: "5000 NFTs",
  totalPurchase: "5000 NFTs",
  dateAdded: "01/01/2026",
}));

const hasParticipants = participantRows.length > 0;

const highlightedParticipant = {
  address: "0x...aaaa",
  totalOwned: "5000 NFTs",
  totalPurchase: "5000 NFTs",
  dateAdded: "01/01/2026",
};

type TabKey = "rewards" | "participants";

const tabs: { key: TabKey; label: string }[] = [
  { key: "rewards", label: "REWARDS and VAULTS" },
  { key: "participants", label: "Participants" },
];

function TabButton({
  label,
  isActive,
  onClick,
}: {
  label: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="relative h-[45px] w-full cursor-pointer overflow-hidden text-center text-white transition-transform hover:scale-[1.03] active:scale-95 focus:outline-none press-start-2p-regular text-xs sm:h-[50px] sm:text-sm md:text-base"
    >
      <Image
        src={
          isActive ? "/rewards-pinkcard-bg.png" : "/rewards-blackcard-bg.png"
        }
        alt={`${label.toLowerCase()} background`}
        width={365}
        height={70}
        className={`absolute inset-0 z-10 h-full w-full select-none object-contain ${
          isActive ? "" : "opacity-60"
        }`}
      />
      <span className="relative z-20 flex h-full items-center justify-center px-2">
        {label}
      </span>
    </button>
  );
}

export default function RewardPools() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<TabKey>("rewards");

  return (
    <motion.div
      className="mx-auto my-4 flex w-full max-w-[95%] flex-col items-center justify-center px-4 sm:my-6 sm:max-w-[90%] lg:my-10 lg:max-w-[80%]"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={fadeInUp} className="w-full sm:w-auto">
        <MotionButton
          onClick={() => router.push("/")}
          className="bg-[#6043AF] px-4 py-4 text-base transition-colors hover:bg-[#4a2f8f] sm:px-6 sm:py-6 sm:text-xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Back
        </MotionButton>
      </motion.div>

      <motion.div
        className="mt-8 flex h-auto w-full max-w-[1400px] items-center justify-center border-4 border-[#B091FF] bg-white py-2 sm:mt-12 sm:border-6 md:mt-16 md:border-8 lg:mt-25 lg:border-10"
        variants={fadeInUp}
      >
        <motion.div
          className="relative h-auto w-full border-4 border-[#E7E7E7] bg-white sm:border-6 md:border-8 lg:border-10"
          variants={fadeInUp}
        >
          <Image
            src="/llamao-rewards-logo.png"
            alt="rewards-logo"
            width={514}
            height={100}
            className="absolute left-[50%] -top-8 -translate-x-1/2 w-[200px] sm:-top-12 sm:w-[300px] md:-top-16 md:w-[400px] lg:-top-22 lg:w-[514px]"
          />

          <motion.div
            className="grid h-full w-full grid-cols-1 gap-4 p-4 sm:gap-6 sm:p-6 md:grid-cols-3 md:gap-8 md:p-8 lg:gap-10"
            variants={staggerContainer}
          >
            <motion.div
              className="col-span-1 space-y-4 md:col-span-2 md:space-y-5"
              variants={staggerContainer}
            >
              <motion.div
                className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-5"
                variants={staggerList}
              >
                {tabs.map((tab) => (
                  <motion.div key={tab.key} variants={fadeInUp}>
                    <TabButton
                      label={tab.label}
                      isActive={activeTab === tab.key}
                      onClick={() => setActiveTab(tab.key)}
                    />
                  </motion.div>
                ))}
              </motion.div>

              {activeTab === "rewards" ? (
                <motion.div
                  key="rewards"
                  className="space-y-5"
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                >
                  <motion.div
                    className="flex min-h-[200px] w-full flex-col border-4 border-[#D7B594] bg-[#11151F] px-4 py-4 sm:h-[250px] sm:border-6 sm:px-5 sm:py-5 md:h-[300px] md:border-7 md:px-6"
                    variants={fadeInUp}
                  >
                    <p className="press-start-2p-regular text-sm text-white sm:text-base md:text-lg">
                      Featured Prizes
                    </p>
                    <motion.div
                      className="mt-4 grid h-full grid-cols-2 gap-3 sm:mt-5 sm:grid-cols-3 sm:gap-4 md:mt-6 md:grid-cols-5 md:gap-5"
                      variants={staggerList}
                    >
                      {featuredPrizes.map((prize, index) => (
                        <motion.div
                          key={prize.title}
                          className={`press-start-2p-regular flex h-full flex-col items-center justify-end gap-2 bg-[#090B12] pb-2 text-center text-xs leading-5 text-white transition-transform duration-150 ease-out hover:scale-[1.03] sm:gap-3 sm:pb-3 sm:text-sm sm:leading-6 ${
                            index === 0
                              ? "border-2 border-[#F4B63D] shadow-[0_0_0_2px_#1A1D26] sm:border-4 sm:shadow-[0_0_0_3px_#1A1D26]"
                              : ""
                          }`}
                          variants={fadeInUp}
                        >
                          <span>{prize.title}</span>
                          <span className="text-[10px] sm:text-xs md:text-sm">
                            {prize.description}
                          </span>
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>

                  <motion.div
                    className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2"
                    variants={staggerList}
                  >
                    {rewardSummaries.map((summary) => (
                      <motion.div key={summary.id} variants={fadeInUp}>
                        <Alert borderColor="black">
                          <AlertDescription className="pixelify-sans-500 text-black">
                            <p className="text-xs sm:text-sm md:text-base">
                              {summary.label}
                            </p>
                            <p className="press-start-2p-regular text-xs sm:text-sm md:text-base">
                              {summary.value}
                            </p>
                          </AlertDescription>
                        </Alert>
                      </motion.div>
                    ))}
                  </motion.div>

                  <motion.div
                    className="flex w-full flex-col gap-3 text-black pixelify-sans-500 sm:flex-row sm:items-center sm:justify-between sm:gap-4 md:text-lg lg:text-xl"
                    variants={fadeInUp}
                  >
                    <p className="text-base sm:text-lg md:text-xl">All Items</p>
                    <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
                      <p className="text-xs sm:text-sm md:text-base lg:text-lg">
                        Sort by: Recently Added Items
                      </p>
                      <Image
                        src="/arrow-black.svg"
                        alt="arrow"
                        width={20}
                        height={12}
                        className="h-auto w-4 sm:w-5 md:w-6"
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    className="space-y-4 sm:space-y-5"
                    variants={staggerList}
                  >
                    {rewardCards.map((card) => (
                      <motion.div key={card.id} variants={fadeInUp}>
                        <Alert borderColor="black" className={card.className}>
                          <AlertDescription className="pixelify-sans-500 flex w-full flex-col gap-3 text-black sm:flex-row sm:justify-between sm:gap-4">
                            <div className="flex items-center gap-2 sm:gap-3">
                              <div className="h-auto w-8 shrink-0 sm:w-10 md:w-12">
                                <Image
                                  src="/llamao-gen.png"
                                  alt="llamao"
                                  width={424}
                                  height={424}
                                  className="h-auto w-full"
                                />
                              </div>
                              <div className="min-w-0">
                                <p className="text-xs sm:text-sm md:text-base">
                                  NFT
                                </p>
                                <p className="press-start-2p-regular text-xs sm:text-sm md:text-base">
                                  LLAMAO #1
                                </p>
                              </div>
                            </div>
                            <div className="text-xs sm:text-sm md:text-base">
                              <p>Total Estimated Value</p>
                              <p className="press-start-2p-regular">5000 MON</p>
                            </div>
                            <div className="text-xs sm:text-sm md:text-base">
                              <p>Quantity</p>
                              <p className="press-start-2p-regular">1</p>
                            </div>
                            <div className="text-xs sm:text-sm md:text-base">
                              <p>Day Added</p>
                              <p className="press-start-2p-regular">
                                5 DAYS AGO
                              </p>
                            </div>
                          </AlertDescription>
                        </Alert>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              ) : (
                <motion.div
                  key="participants"
                  className="space-y-6"
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                >
                  <motion.div className="w-full" variants={fadeInUp}>
                    <Alert borderColor="black">
                      <AlertDescription className="pixelify-sans-500 flex w-full justify-between text-black">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <div className="h-auto w-8 shrink-0 sm:w-10 md:w-12">
                            <Image
                              src="/search.svg"
                              alt="search"
                              width={20}
                              height={20}
                              className="h-auto w-full"
                            />
                          </div>
                          <p className="text-xs sm:text-sm md:text-base">
                            Search participant address
                          </p>
                        </div>
                      </AlertDescription>
                    </Alert>
                  </motion.div>

                  {hasParticipants ? (
                    <motion.div
                      className="w-full space-y-4 pixelify-sans-500"
                      initial="hidden"
                      animate="visible"
                      variants={staggerContainer}
                    >
                      <motion.div
                        className="hidden grid-cols-2 gap-4 px-2 text-xs text-[#1E3445] sm:grid sm:grid-cols-4 sm:text-sm md:text-base"
                        variants={fadeInUp}
                      >
                        <p>Participant</p>
                        <p className="sm:pl-6">Total NFT Owned</p>
                        <p className="sm:pl-6">Total NFT Purchase</p>
                        <p className="sm:pl-12">Date Added</p>
                      </motion.div>

                      <motion.div className="space-y-4" variants={staggerList}>
                        {participantRows.map((row) => (
                          <motion.div key={row.id} variants={fadeInUp}>
                            <Alert borderColor="black">
                              <AlertDescription className="pixelify-sans-500 flex w-full flex-col gap-2 text-black sm:flex-row sm:justify-between">
                                <div className="press-start-2p-regular flex w-full flex-col gap-2 sm:flex-row sm:justify-between">
                                  <p className="text-xs sm:text-sm md:text-base">
                                    {row.address}
                                  </p>
                                  <p className="text-xs sm:text-sm md:text-base">
                                    {row.totalOwned}
                                  </p>
                                  <p className="text-xs sm:text-sm md:text-base">
                                    {row.totalPurchase}
                                  </p>
                                  <p className="text-xs sm:text-sm md:text-base">
                                    {row.dateAdded}
                                  </p>
                                </div>
                              </AlertDescription>
                            </Alert>
                          </motion.div>
                        ))}

                        <motion.div variants={fadeInUp}>
                          <Alert borderColor="black" className="bg-[#C9B9F7]">
                            <AlertDescription className="pixelify-sans-500 flex w-full flex-col gap-3 text-black sm:flex-row sm:justify-between sm:gap-4">
                              <div className="press-start-2p-regular flex w-full flex-col gap-3 sm:flex-row sm:justify-between">
                                <div className="flex items-center gap-2 sm:gap-3">
                                  <div className="h-auto w-8 shrink-0 sm:w-10 md:w-12">
                                    <Image
                                      src="/llamao-gen.png"
                                      alt="llamao"
                                      width={100}
                                      height={100}
                                      className="h-auto w-full"
                                    />
                                  </div>
                                  <div className="flex flex-col">
                                    <p className="pixelify-sans-500 text-xs sm:text-sm md:text-base">
                                      YOU
                                    </p>
                                    <p className="text-xs sm:text-sm md:text-base">
                                      {highlightedParticipant.address}
                                    </p>
                                  </div>
                                </div>
                                <div className="flex flex-col text-xs sm:text-sm md:text-base">
                                  <p className="pixelify-sans-500">
                                    Total NFT Owned
                                  </p>
                                  <p>{highlightedParticipant.totalOwned}</p>
                                </div>
                                <div className="flex flex-col text-xs sm:text-sm md:text-base">
                                  <p className="pixelify-sans-500">
                                    Total NFT Purchase
                                  </p>
                                  <p>{highlightedParticipant.totalPurchase}</p>
                                </div>
                                <div className="flex flex-col text-xs sm:text-sm md:text-base">
                                  <p className="pixelify-sans-500">Day Added</p>
                                  <p>{highlightedParticipant.dateAdded}</p>
                                </div>
                              </div>
                            </AlertDescription>
                          </Alert>
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  ) : (
                    <motion.div
                      className="press-start-2p-regular flex w-full flex-col items-center justify-center gap-3 rounded-md border-2 border-dashed border-[#B091FF] bg-[#F7F2FF] py-8 text-center text-[#6043AF] sm:gap-4 sm:border-4 sm:py-10 md:py-12"
                      variants={fadeInUp}
                    >
                      <Image
                        src="/reward-pool-bg.svg"
                        alt="participants coming soon"
                        width={220}
                        height={48}
                        className="h-auto w-full max-w-[180px] select-none sm:max-w-[200px] md:max-w-[220px]"
                      />
                      <p className="text-xs sm:text-sm md:text-base">
                        Participants list is coming soon.
                      </p>
                    </motion.div>
                  )}
                </motion.div>
              )}
            </motion.div>

            <motion.div
              className="col-span-1 flex flex-col gap-3 sm:gap-4 md:gap-2"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp}>
                <Alert borderColor="#6043AF">
                  <AlertDescription className="pixelify-sans-500 w-full space-y-4 text-black sm:space-y-5 md:space-y-6">
                    <div className="flex w-full flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <p className="silkscreen-regular text-lg text-[#2245C5] sm:text-xl md:text-2xl">
                        YOUR NFT
                      </p>
                      <Alert
                        borderColor="black"
                        className="w-full bg-[#80EED3] py-1 opacity-31 sm:w-auto"
                      >
                        <AlertDescription className="pixelify-sans-500 text-black">
                          <div className="flex items-center justify-between">
                            <p className="text-sm sm:text-base md:text-lg">
                              Coming Soon
                            </p>
                          </div>
                        </AlertDescription>
                      </Alert>
                    </div>

                    <div className="relative h-[60px] w-full sm:h-[70px] md:h-[80px]">
                      <div className="absolute inset-0 z-10 flex items-center justify-center">
                        <div className="press-start-2p-regular relative w-[80%] text-center text-white transition-transform hover:scale-[1.03] active:scale-95 sm:w-[75%] md:w-[70%]">
                          <Image
                            src="/reward-pool-bg.svg"
                            alt="coming soon"
                            width={268}
                            height={50}
                            className="h-auto w-full select-none"
                          />
                          <div className="absolute inset-0 flex items-center justify-center text-xs sm:text-sm md:text-base">
                            COMING SOON
                          </div>
                        </div>
                      </div>

                      <div className="absolute inset-0 flex w-full gap-2 blur sm:gap-3">
                        {Array.from({ length: 4 }).map((_, index) => (
                          <div className="w-full" key={`blurred-nft-${index}`}>
                            <Image
                              src="/llamao-gen.png"
                              alt="llamao"
                              width={424}
                              height={424}
                              className="h-auto w-full object-contain"
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="w-full text-sm sm:text-base md:text-lg">
                      The Llamao Blessing Pool is a campaign that runs from now
                      until one month after mainnet launch, designed to reward
                      the believers who mint, buy, and hold Llamao NFTs.
                    </div>
                  </AlertDescription>
                </Alert>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Alert borderColor="#6043AF">
                  <AlertDescription className="pixelify-sans-500 w-full space-y-4 text-black sm:space-y-5 md:space-y-6">
                    <div className="flex w-full items-center justify-between">
                      <p className="silkscreen-regular text-lg text-[#2245C5] sm:text-xl md:text-2xl">
                        COUNTDOWN TIMER
                      </p>
                    </div>

                    <div className="relative h-[60px] w-full sm:h-[70px] md:h-[80px]">
                      <div className="absolute inset-0 z-10 flex items-center justify-center">
                        <div className="press-start-2p-regular relative w-[80%] text-center text-white transition-transform hover:scale-[1.03] active:scale-95 sm:w-[75%] md:w-[70%]">
                          <Image
                            src="/reward-pool-bg.svg"
                            alt="coming soon"
                            width={268}
                            height={50}
                            className="h-auto w-full select-none"
                          />
                          <div className="absolute inset-0 flex items-center justify-center text-xs sm:text-sm md:text-base">
                            STAY TUNED
                          </div>
                        </div>
                      </div>

                      <div className="absolute inset-0 flex w-full gap-2 blur sm:gap-3">
                        {Array.from({ length: 4 }).map((_, index) => (
                          <div
                            className="w-full"
                            key={`blurred-countdown-${index}`}
                          >
                            <Image
                              src="/llamao-gen.png"
                              alt="llamao"
                              width={424}
                              height={424}
                              className="h-auto w-full object-contain"
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="w-full text-sm sm:text-base md:text-lg">
                      {`You'll be able to enter our Blesing Pools and discover what's inside at the end of the time.`}
                    </div>
                  </AlertDescription>
                </Alert>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
