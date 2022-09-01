import AwesomeSlider from "react-awesome-slider";

export default function BannerSlider() {
  return (
    <AwesomeSlider className="h-[calc(100vh-115.5px)]">
      <div className="w-full h-full relative bg-[url('/images/banner-1.webp')] bg-no-repeat bg-cover">
        <div className="text-center text-white lg:w-[50%] m-auto pt-[15rem] lg:pt-[12rem] px-[1.5rem]">
          <h2 className="text-[2.5rem] leading-[1.2] lg:text-[3.5rem]">
            LET US BRING OUT YOUR NATURAL BEAUTY
          </h2>
          <p className="mt-[1rem]">
            Embrace Your Beauty Because You're A Natural
          </p>
          <a
            href={`https://nailsolutionplus.firebaseapp.com/?storeKey=-MT4-0RjzPDVIo4HC_xb&fbclid=IwAR2Cae8Dk48A-o9EubUmjl0Ky2pFy_96PofrIqa_yNzRT9SOs3MJakDB6X0`}
            className="px-[2rem] py-[1rem] bg-[#d06f6f] inline-block mt-[1.5rem]"
          >
            MAKE APPOINTMENT
          </a>
        </div>
      </div>
      <div className="w-full h-full relative bg-[url('/images/banner-2.webp')] bg-no-repeat bg-cover">
        <div className="text-center text-white lg:w-[50%] m-auto pt-[15rem] lg:pt-[12rem] px-[1.5rem]">
          <h2 className="text-[2.5rem] leading-[1.2] lg:text-[3.5rem]">
            EVERYTHING IS POSSIBLE WITH OUR SALON!
          </h2>
          <p className="mt-[1rem]">
            We make the best makeup is 2485 North University Drive Coral Springs
          </p>
          <a
            href={`https://nailsolutionplus.firebaseapp.com/?storeKey=-MT4-0RjzPDVIo4HC_xb&fbclid=IwAR2Cae8Dk48A-o9EubUmjl0Ky2pFy_96PofrIqa_yNzRT9SOs3MJakDB6X0`}
            className="px-[2rem] py-[1rem] bg-[#d06f6f] inline-block mt-[1.5rem]"
          >
            MAKE APPOINTMENT
          </a>
        </div>
      </div>
      <div className="w-full h-full relative bg-[url('/images/banner-3.webp')] bg-no-repeat bg-cover">
        <div className="text-center text-white lg:w-[50%] m-auto pt-[15rem] lg:pt-[12rem] px-[1.5rem]">
          <h2 className="text-[2.5rem] leading-[1.2] lg:text-[3.5rem]">
            7 TIMES VISIT TO GET 10% OFF
          </h2>
          <a
            href={`https://nailsolutionplus.firebaseapp.com/?storeKey=-MT4-0RjzPDVIo4HC_xb&fbclid=IwAR2Cae8Dk48A-o9EubUmjl0Ky2pFy_96PofrIqa_yNzRT9SOs3MJakDB6X0`}
            className="px-[2rem] py-[1rem] bg-[#d06f6f] inline-block mt-[1.5rem]"
          >
            MAKE APPOINTMENT
          </a>
        </div>
      </div>
    </AwesomeSlider>
  );
}
