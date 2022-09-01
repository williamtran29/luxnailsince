import { Link } from "@remix-run/react";

const Header = () => {
  return (
    <div className="relative p-[2rem] lg:px-[10rem] lg:py-[1.5rem] z-50">
      <div className="flex justify-between items-center">
        <Link to="/">
          <img
            src="/images/logo.webp"
            alt="logo"
            className="cursor-pointer w-[150px]"
          />
        </Link>

        <div className="flex gap-[16.5px] mt-[15px]">
          <a href="https://www.facebook.com/LuxNailsInc">
            <img
              src="/images/icon-facebook.png"
              className="w-[24.35px] h-[24.35px]"
            />
          </a>
          <a href="https://www.instagram.com/luxnailsinc/">
            <img
              src="/images/icon-instagram.png"
              className="w-[24.35px] h-[24.35px]"
            />
          </a>
          <p className="hidden md:block">|&nbsp; &nbsp;2485 N University Dr Coral Springs, Florida</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
