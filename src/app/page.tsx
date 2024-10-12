import Cards from "@/components/Cards";
import TestimonialSection from "@/components/TestimonialSection";
import DisplayCards from "@/components/DisplayCards";
import DishesSlider from "@/components/DishesSlider";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#F5FCFF]">
  <section className="bg-[#F5FCFF] h-screen w-screen flex flex-col md:flex-row px-6 md:px-36 pt-28 md:pt-16 ">
    {/* Left Section - Headings, Text, and Button */}
    <div className="w-full md:w-1/2 flex flex-col items-center md:items-start p-5 xl:pt-20 md:p-10 order-1 md:order-1">
      <div className="text-center md:text-left z-20 md:relative md:mb-0">
        <h1 className="text-2xl md:text-4xl font-bold  text-black">
          Dive into Delights Of Delectable{" "}
          <span className="text-[#39DB4A]">Food</span>
        </h1>
        <p className="md:pt-2 pb-4 md:pb-6 text-sm md:text-base">
          Where Each Plate Weaves a Story of Culinary Mastery and Passionate
          Craftsmanship
        </p>
      </div>

      {/* Button container */}
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-start space-y-2 md:space-y-0 md:space-x-2 mt-4 md:w-full w-52 order-last">
        <button className="bg-[#39DB4A] text-white w-full md:w-auto text-center px-4 py-2 rounded-3xl transition-colors duration-300 ease-in-out hover:bg-black hover:text-white">
          Order Now
        </button>

        <button className="bg-[#F5FCFF] text-black w-full md:w-auto text-center flex items-center justify-center space-x-2 px-4 py-2 rounded-3xl transition-colors duration-300 ease-in-out hover:bg-black hover:text-white">
          <span>Watch Video</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M4.5 3.5a1 1 0 011.55-.832l10.5 6.5a1 1 0 010 1.664l-10.5 6.5A1 1 0 014.5 16.5V3.5z" />
          </svg>
        </button>
      </div>
    </div>

    {/* Right Section - Image and Cards */}
    <div className="w-full md:w-1/2 flex flex-col items-center justify-center relative xl:pt-0 md:-mt-12 order-first md:order-2">
      {/* Wrapper for Image */}
      <div className="relative mb-6 md:mb-0 mt-6 md:mt-0 flex flex-col items-center">
        {/* Background Circle */}
        <div className="bg-[#39DB4A] h-60 w-72 md:h-72 md:w-96 rounded-full absolute -top-12"></div>
        {/* Display Image */}
        <Image
          className="h-80 w-72 md:h-96 md:w-96 -mt-28 -md-mt-32  object-contain rounded-full relative z-10"
          src="/images/displaypic.png"
          alt="Delicious food"
          width={288}
          height={320}
        />
        {/* Group 15 Image positioned beside */}
        <Image
          className="h-24 w-40 absolute -left-10 -top-10 z-20"
          src="/images/Group15.png"
          alt="Group 15"
          width={160}
          height={96}
        />
      </div>
      
    


          {/* Cards Section */}
          <div className="w-full flex justify-center relative z-30 -mt-20 md:-mt-10 ">
            <Cards />
          </div>
        </div>
        
      </section>
      

      <section className="h-auto w-screen mb-16  bg-[#F5FCFF] ">
        {/* Heading and Paragraph  */}
        <div className="text-center md:text-left z-20  md:relative md:mb-0  ">
          
          <p className=" pt-16 s:pt-0 md:pt-0 lg:pt-0 pb-2 md:pb-2 text-xs  md:text-xs font-medium uppercase  items-center text-center text-[#FF6868] ">
            Customer Favorites
          </p>

          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-black text-center">
            Popular Catagories{" "}
          </h1>
        </div>
      </section>

      {/* cards Section */}
      <DisplayCards />

      <section className="h-screen w-screen bg-[#F5FCFF]  pt-32  md:px-32 ">
        <div className="  z-20  md:relative md:mb-0 md:px-10 items-center text-center">
          <p className=" md:pt-2 pb-2 md:pb-2 text-xs  md:text-xs font-medium uppercase   text-[#FF6868]">
            Special Dishes
          </p>

          <h1 className="text-2xl md:text-4xl font-bold mb-4 text-black mt-2lg:mt-6 ">
            Standout Dishes From Our Menu{" "}
          </h1>
        </div>
        <DishesSlider />
      </section>

      <section className="h-screen w-screen bg-[#F5FCFF]   flex flex-col md:flex-row px-6 mb-40 md:mb-0">
        {/* Left Section - Image and Cards */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center relative xl:pt-0 md:-mt-12 order-first md:order-1">
          {/* Wrapper for Image */}

          <div className="relative mb-6 md:mb-0 mt-6 md:mt-0 ">
            {/* Background with rounded top and small rounded bottom corners */}
            <div className="bg-[#53EC62] h-48 w-72 md:h-52 md:w-72 rounded-s-full rounded-e-full rounded-tr-xl-xl rounded-b-lg  absolute left-2 md:left-8  top-24 md:top-36 "></div>

            {/* Display Image */}
            <Image
              className="h-80 w-72 md:h-96 md:w-80 -mt-8 object-contain relative z-10"
              src="/images/cheif.png"
              alt="Delicious food"
              width={288} // 72 * 4
              height={320} // 80 * 4
            />
            {/* Group 15 Image positioned beside */}
            <div className="relative h-24 w-40  -top-16 -right-48  md:-top-16 md:-right-52">
              <Image
                className="absolute inset-1 h-full w-full object-cover z-20"
                src="/images/textbg1.png"
                alt="Group 15"
                layout="fill" // This will make the image fill the parent container
                objectFit="cover" // Ensures the image covers the area without distortion
              />
              <div className="absolute inset-0 flex items-center justify-center text-black font-bold text-sm z-30">
                Our best chef{" "}
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Headings, Text, and Button */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start -mt-14 xl:pt-28 md:p-10 order-2 md:order-2">
          {/* Heading and Paragraph */}

          <p className=" md:pt-2 pb-2 md:pb-2 text-xs  md:text-xs font-medium uppercase   text-[#FF6868]">
            Testimonials
          </p>
          <div className="text-center md:text-left z-20 md:relative md:mb-0 md:pr-40">
            <h1 className="text-2xl md:text-4xl font-bold mb-4 text-black">
              What Our Customers <br />
              Say About Us <span className="text-[#39DB4A]">Food</span>
            </h1>
            <p className="w-96 md:pt-2 pb-4 md:pb-6 text-sm md:text-base">
              “I had the pleasure of dining at Foodi last night, and I am still
              raving about the experience! The attention to detail in
              presentation and service was impeccable”
            </p>
            <TestimonialSection />
          </div>
        </div>
      </section>

      <section className="bg-[#F5FCFF] h-screen w-screen flex flex-col md:flex-row px-6 md:px-36 pb-20 md:-mb-24  ">
        {/* Left Section - Headings, Text */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start p-5 xl:pt-20  order-1 md:order-1 md:-mt-28">
          <p className="md:pt-2 pb-2  text-xs md:text-xs font-medium uppercase text-[#FF6868]">
            Our Story & Services
          </p>
          <div className="text-center md:text-left z-20 md:relative md:mb-0">
            <h1 className="text-2xl md:text-4xl font-bold mb-4 text-black">
              Our Culinary Journey <br /> And Services
            </h1>
            <p className="md:pt-2 pb-4 md:pb-6 text-sm md:text-base text-gray-600">
              Rooted in passion, we curate unforgettable dining experiences and
              offer exceptional services, blending culinary artistry with warm
              hospitality.
            </p>
            <div className="md:flex items-center justify-start mt-4 hidden ">
              <button className="bg-[#39DB4A] text-white md:w-40 text-center  px-4 py-2 rounded-3xl transition-colors duration-300 ease-in-out hover:bg-black hover:text-white">
                Explore
              </button>
            </div>
          </div>
        </div>

        {/* Right Section - Cards */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-between relative xl:pt-0 md:-mt-12 order-2 md:order-2 h-full">
          <div className="flex flex-wrap gap-4 justify-center">
            {/* Card 1 */}
            <div className="bg-white p-3 rounded-2xl shadow-md flex flex-col items-center text-center h-36 w-44 md:h-44 md:w-40 transform transition duration-300 hover:scale-105 hover:shadow-lg">
              <Image
                src="/images/icon2.png"
                alt="Card Image 1"
                className="w-10 h-10"
                width={40} // 10 * 4
                height={40} // 10 * 4
              />
              <h3 className="text-md font-bold mb-1 text-[#4FBB59] pt-3">
                Catering
              </h3>
              <p className="text-xs text-gray-600">
                Delight your guests with our flavors and presentation.
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-white p-3 rounded-2xl shadow-md flex flex-col items-center text-center h-36 w-44 md:h-44 md:w-40 transform transition duration-300 hover:scale-105 hover:shadow-lg">
              <Image
                src="/images/icon4.png"
                alt="Card Image 1"
                className="w-10 h-10"
                width={40} // 10 * 4
                height={40} // 10 * 4
              />
              <h3 className="text-md font-bold mb-1 text-[#4FBB59] pt-3">
                Fast Delivery
              </h3>
              <p className="text-xs text-gray-600">
                We deliver your order promptly to your door
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-white p-3 rounded-2xl shadow-md flex flex-col items-center text-center h-36 w-44 md:h-44 md:w-40 transform transition duration-300 hover:scale-105 hover:shadow-lg">
              <Image
                src="/images/icon3.png"
                alt="Card Image 1"
                className="w-10 h-10"
                width={40} // 10 * 4
                height={40} // 10 * 4
              />
              <h3 className="text-md font-bold mb-1 text-[#4FBB59] pt-3">
                Online Ordering
              </h3>
              <p className="text-xs text-gray-600">
                Explore menu & order with ease using our Online Ordering
              </p>
            </div>
            {/* Card 4 */}
            <div className="bg-white p-3 rounded-2xl shadow-md flex flex-col items-center text-center h-36 w-44 md:h-44 md:w-40 transform transition duration-300 hover:scale-105 hover:shadow-lg">
              <Image
                src="/images/icon1.png"
                alt="Card Image 1"
                className="w-10 h-10"
                width={40} // 10 * 4
                height={40} // 10 * 4
              />
              <h3 className="text-md font-bold mb-1 text-[#4FBB59] pt-3">
                Gift Cards
              </h3>
              <p className="text-xs text-gray-600">
                Give the gift of exceptional dining with Foodi Gift Cards
              </p>
            </div>
          </div>

          {/* Button container */}
          <div className="flex items-center justify-end pt-14 md:hidden ">
            <button className="bg-[#39DB4A] text-white w-48  text-center px-4 py-2 rounded-3xl transition-colors duration-300 ease-in-out hover:bg-black hover:text-white">
              Explore
            </button>
          </div>
        </div>
      </section>
      </div>
  )}