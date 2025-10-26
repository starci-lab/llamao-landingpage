import Image from "next/image";

const Nobg = () => {
  return (
    <div className="">
      <Image
        src="/nobg.gif"
        alt="Llama Character"
        unoptimized
        width={860}
        height={850}
        className="xl:w-[500px] 2xl:w-[600px] h-auto"
        priority
      />
      ;
    </div>
  );
};

export default Nobg;
