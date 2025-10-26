import Image from "next/image";
import { Alert } from "./ui/8bit/alert";
import { Button } from "./ui/8bit/button";

const Traits = () => {
  return (
    <Alert
      borderColor="#1E3445"
      className="2xl:max-w-[300px] max-h-[80%] flex flex-col justify-between p-0 gap-0"
    >
      <Image
        src="/llamao-gen.png"
        alt="llmaogen"
        width={423.61}
        height={423.61}
      />
      <div className="bg-[#E8DEFF] w-full px-3 py-1 pb-4">
        <p className="silkscreen-regular text-center tracking-tight text-2xl text-[#2245C5]">
          Llamao generator
        </p>

        <div className="pt-4 w-full">
          <Button
            size={"sm"}
            className="w-full bg-[#8866D4] hover:bg-[#FF2A31] hover:scale-105 hover:brightness-110 transition-all duration-200"
          >
            <p className="tracking-tighter">LLAMAO NOW</p>
          </Button>
        </div>
        <div className="pt-6 flex justify-between w-full gap-5 pixelify-sans-500">
          <Button
            size={"sm"}
            className="w-[46%] bg-[#8280FF] hover:bg-[#FF2A31] hover:scale-105 hover:brightness-110 transition-all duration-200"
          >
            <p className="tracking-tighter pixelify-sans-500 text-lg">
              Download
            </p>
          </Button>
          <Button
            size={"sm"}
            className="w-[46%] bg-[#8280FF] hover:bg-[#FF2A31] hover:scale-105 hover:brightness-110 transition-all duration-200"
          >
            <p className="tracking-tighter pixelify-sans-500 text-lg">
              Share on X
            </p>
          </Button>
        </div>
        <p className="silkscreen-regular text-center tracking-tight text-2xl mt-4 text-[#2245C5]">
          WANNA HAVE YOUR OWN LLAMAO ?
        </p>
        <div className="flex flex-col items-center">
          <Button
            size={"sm"}
            className="w-[46%] bg-[#DD1A21] hover:bg-[#FF2A31] hover:scale-105 hover:brightness-110 transition-all mt-2 duration-200"
          >
            <p className="tracking-tighter pixelify-sans-500 text-lg">
              GET IT NOW
            </p>
          </Button>
        </div>
      </div>
    </Alert>
  );
};

export default Traits;
