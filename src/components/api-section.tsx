import Image from "next/image";

const APISection = () => {
  return (
    <section className="bg-black text-white py-16 mx-auto">
      <div className="container px-6 space-y-10">

        {/* Row 1: Two Columns (1 text div, 1 image) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-4 w-[300px] h-[50px]">
            <h2 className="text-2xl font-bold">
              Accelerate Development with Pre-Built SDKs and Modules
            </h2>
            <p className="text-lg">
              Easily find and integrate the right APIs for your web3 projects with our extensive, categorized directory of Solana-focused APIs.
            </p>
          </div>
          <div className="bg-transparent rounded-lg flex items-center justify-center">
            <Image
              src="/image/sdkIntegration.webp"
              alt="SDK Integration"
              width={250}
              height={50}
              className="border border-green-500 rounded-md h-50"
            />

          </div>
        </div>

        {/* Row 2: Three Columns (1 image, 1 text div, 1 image) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-transparent rounded-lg flex items-center justify-center">
            <Image
              src="/image/APIDirectories.webp"
              alt="SDK Integration"
              width={250}
              height={50}
              className="border border-green-500 rounded-md h-50"
            />

          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">
              Discover the Perfect API for Your Solana Project
            </h2>
            <p className="text-lg">
              Save time and effort with our ready-to-use SDKs and modules, designed to simplify API integration and common web3 tasks.
            </p>
          </div>
          <div className="bg-transparent rounded-lg flex items-center justify-center">
            <Image
              src="/image/APIPower.webp"
              alt="SDK Integration"
              width={250}
              height={50}
              className="border border-green-500 rounded-md h-50"
            />

          </div>
        </div>

        {/* Row 3: Two Columns (1 image, 1 text div) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-transparent rounded-lg flex items-center justify-center">
            <Image
              src="/image/APITest.webp"
              alt="SDK Integration"
              width={250}
              height={50}
              className="border border-green-500 rounded-md h-50"
            />

          </div>
          {/* <div className="w-full h-56 bg-transparent border border-green-400 rounded-lg flex items-center justify-center">
              <span className="text-gray-400">Image</span>
            </div> */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">
              Document and Test Your APIs in One Place
            </h2>
            <p className="text-lg">
              Create clear API documentation and ensure seamless integration with our testing environment, designed to help you build robust and reliable web3 applications.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default APISection;
