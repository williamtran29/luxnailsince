import { Carousel } from "react-responsive-carousel";

export default function BannerSlider() {
  return (
    <Carousel
      autoPlay
      showThumbs={false}
      showIndicators={false}
      showStatus={false}
      className="h-[calc(100vh-115.5px)]"
    >
      <div>
        <img
          alt="LET US BRING OUT YOUR NATURAL BEAUTY"
          src="/images/banner-1.webp"
        />
        <div className="legend text-center text-white lg:w-[50%] m-auto pt-[15rem] lg:pt-[12rem] px-[1.5rem]">
          <h2 className="text-[2rem] lg:text-[3.5rem]">
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
      <div>
        <img
          alt=" EVERYTHING IS POSSIBLE WITH OUR SALON!"
          src="/images/banner-2.webp"
        />
        <div className="legend text-center text-white lg:w-[50%] m-auto pt-[15rem] lg:pt-[12rem] px-[1.5rem]">
          <h2 className="text-[2rem] lg:text-[3.5rem]">
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
      <div>
        <img alt="7 TIMES VISIT TO GET 10% OFF" src="/images/banner-3.webp" />
        <div className="legend text-center text-white lg:w-[50%] m-auto pt-[15rem] lg:pt-[12rem] px-[1.5rem]">
          <h2 className="text-[2rem] lg:text-[3.5rem]">
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
    </Carousel>
  );
}
