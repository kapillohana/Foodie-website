import Link from "next/link";
import Image from "next/image";
import Nav from "../Nav";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faPhone } from '@fortawesome/free-solid-svg-icons';
import MobileNav from "../MobileNav";

const Header = () => {
  return (
    <header className="px-4 xl:px-16 text-black flex items-center justify-between dark:bg-black ml-14 md:ml-16 pt-8 bg-[#F5FCFF]">
      {/* Logo */}
      <Link href="/" className="flex justify-center">
        <div className="flex items-center justify-center">
          <div className="bg-[#39DB4A] w-10 h-8 rounded-md flex items-center justify-center">
          <Image
              className="h-5 w-5"
              src="/images/Foodie.png"
              alt="Logo"
              width={20} // 5 * 4 = 20px
              height={20} // 5 * 4 = 20px
            />
          </div>
          <Image
            className="h-6 w-14 mt-1"
            src="/images/oodi.png"
            alt=""
            width={56} // 14 * 4 = 56px
            height={24} // 6 * 4 = 24px
          />
        </div>
      </Link>

      {/* Desktop dev */}
        <div className="hidden lg:flex items-center gap-8 ">
      <Nav />
     
      <div className="flex items-center space-x-4">
        {/* Search Icon */}
        <div className="relative">
          <FontAwesomeIcon icon={faSearch} className="text-gray-600 cursor-pointer hover:text-[#39DB4A]" />
        </div>

        {/* Cart Icon with Notification */}
        <div className="relative">
          <FontAwesomeIcon icon={faShoppingCart} className="text-gray-600 cursor-pointer hover:text-[#39DB4A]" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-semibold rounded-full h-4 w-4 flex items-center justify-center">8</span>
        </div>

        {/* Connect Button with Phone Icon */}
        <button className="flex items-center bg-[#39DB4A] text-white rounded-full px-2 py-1 hover:bg-green-600 transition-colors">
          <FontAwesomeIcon icon={faPhone} className="mr-1" />
          Connect
        </button>
      </div>
      </div>

       {/* Mobile Nav - visible only on mobile screens */}
       <div className="lg:hidden">
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
