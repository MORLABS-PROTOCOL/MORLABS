import Image from "next/image";

const APISection = () => {
  return (
    <section className="bg-black w-full text-white py-16 mx-auto overflow-x-scroll">
      
        <div className="flex flex-col lg:flex-row px-5 md:px-28 py-10 gap-x-12">
          <div className="flex flex-col justify-center items-center md:justify-start md:items-start">
            <h2 className="text-4xl font-bold mb-8 leading-relaxed">
              Accelerate Development with Pre-Built SDKs and SDKs
            </h2>
            <p className="text-lg">
              Easily find and integrate the right APIs for your web3 projects with our extensive, categorized directory of Solana-focused APIs.
            </p>
          </div>
          <Image
            src="/image/AliveFirst.jfif"
            alt="SDK Integration"
            width={650}
            height={650}
            className="rounded-2xl hidden md:block"
          />
    
      </div>

      <div className="flex flex-col lg:flex-row px-5 md:px-28 py-10 gap-x-12">

      <Image
            src="/image/AliveSecond.jfif"
            alt="SDK Integration"
            width={650}
            height={650}
            className="rounded-2xl hidden md:block"
          />
          <div className="flex flex-col justify-center items-center md:justify-start md:items-start">
            <h2 className="text-4xl font-bold mb-8 leading-relaxed text-right">
              Access documentations on your API in one place
            </h2>
            <p className="text-lg text-right">
              Streamline your API development and management with a centralized platform for accessing and organizing documentaion
            </p>
          </div>
         
    
      </div>
    </section>
  );
};

export default APISection;
