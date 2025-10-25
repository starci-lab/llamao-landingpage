import Image from "next/image";

const Logo = () => {
  return (
    <div className="w-[93%] mt-3 lg:max-w-[550px]">
      <Image
        src="/logo.svg"
        alt="LLAMA Logo"
        width={882}
        height={369}
        className="w-full h-auto"
        priority
      />
    </div>
  );
};

export default Logo;
