import Link from "next/link";
import Socials from "./Socials";
import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <section className="bg-[#F5FCFF] h-auto w-full flex flex-col pt-52 sm:pt-24   md:pt-16 lg:pt-0 md:flex-row space-y-4 md:space-y-0 md:space-x-24 px-4 md:px-36 py-8 ">
        {/* Left Section - Logo, Text */}
        <div className="w-full flex flex-col items-center md:items-start md:w-1/4">
          <div className="bg-[#39DB4A] w-7 h-7 rounded-md flex items-center justify-center mb-2 mr-12 md-mr:0">
          <Image
              src="/images/Foodie.png"
              alt="Logo"
              className="h-5 w-5"
              width={20} // 5 * 4 = 20px
              height={20} // 5 * 4 = 20px
            />
          </div>
          <Image
            src="/images/oodi.png"
            alt="Logo"
            className="h-6 w-14 mb-4 -mt-8 ml-20 md:-mt-8 md:ml-7 mr-12"
            width={56} 
            height={24} 
          />
          <p className="text-center md:text-left text-sm text-gray-600">
            Savor the artistry where every dish is a culinary masterpiece.
          </p>
        </div>

        {/* Useful Links */}
        <div className="flex flex-col gap-3 items-center md:items-start">
          <h3 className="text-base md:text-lg font-bold text-black">Useful links</h3>
          <Link href="/">About Us</Link>
          <Link href="/">Events</Link>
          <Link href="/">Blogs</Link>
          <Link href="/">FAQs</Link>
        </div>

        {/* Main Menu */}
        <div className="flex flex-col gap-3 items-center md:items-start">
          <h3 className="text-base md:text-lg font-bold text-black">Main Menu</h3>
          <Link href="/">Home</Link>
          <Link href="/">Offers</Link>
          <Link href="/">Menus</Link>
          <Link href="/">Reservations</Link>
        </div>

        {/* Contact Us */}
        <div className="flex flex-col gap-3 items-center md:items-start">
          <h3 className="text-base md:text-lg font-bold text-black">Contact Us</h3>
          <p className="text-sm text-gray-600">Example@gmail.com</p>
          <p className="text-sm text-gray-600">923333333333333</p>
          <Socials
            containerStyles="flex justify-center md:justify-start space-x-4 mt-4"
            iconStyles="text-2xl text-gray-400 hover:text-[#39DB4A]"
          />
        </div>
      </section>

      {/* Copyright */}
      <div className="w-full text-center py-4 bg-[#F5FCFF]">
        <p className="text-sm text-gray-600">
          &copy; {new Date().getFullYear()} Dscode | All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
