"use client";

import Image from "next/image";

const DisplayCards = () => {
  return (
    <section >
      <div className=" w-full container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        {/* Cards Wrapper */}
        <div className="flex flex-wrap gap-6 justify-center">
          {/* Card 1 */}
          <div className="bg-[#FFFFFF] p-4 rounded-3xl shadow-xl flex flex-col items-center text-center h-40 w-40 lg:h-56 lg:w-56 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="bg-[#C1F1C6] w-20 h-20 rounded-full flex items-center justify-center mb-2">
              <Image
                src="/images/first.png"
                alt="Card Image 1"
                className="w-14 h-14 rounded-full object-cover"
                width={56}
                height={56}
                objectFit="cover"
              />
            </div>
            <h3 className="text-md font-bold mb-1">Main Dish</h3>
            <p className="text-xs text-gray-600">86 Dishes</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-4 rounded-3xl shadow-xl flex flex-col items-center text-center h-40 w-40 lg:h-56 lg:w-56 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="bg-[#C1F1C6] w-18 h-18 md:w-20 md:h-20 rounded-full flex items-center justify-center mb-2">
              <Image
                src="/images/pngwing.png"
                alt="Card Image 2"
                className="w-14 h-14 rounded-full object-cover"
                width={56}
                height={56}
                objectFit="cover"
              />
            </div>
            <h3 className="text-md font-bold mb-1">Breakfast</h3>
            <p className="text-xs text-gray-600">12 Items</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-4 rounded-3xl shadow-xl flex flex-col items-center text-center h-40 w-40 lg:h-56 lg:w-56 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="bg-[#C1F1C6] w-20 h-20 rounded-full flex items-center justify-center mb-2">
              <Image
                src="/images/Desert.png"
                alt="Card Image 3"
                className="w-14 h-14 rounded-full object-cover"
                width={56}
                height={56}
                objectFit="cover"
              />
            </div>
            <h3 className="text-md font-bold mb-1">Dessert</h3>
            <p className="text-xs text-gray-600">48 Items</p>
          </div>

          {/* Card 4 */}
          <div className="bg-[#FFFFFF] p-4 rounded-3xl shadow-xl flex flex-col items-center text-center h-40 w-40 lg:h-56 lg:w-56 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="bg-[#C1F1C6] w-20 h-20 rounded-full flex items-center justify-center mb-2">
              <Image
                src="/images/juice.png"
                alt="Card Image 4"
                className="w-14 h-14 rounded-full object-cover"
                width={56}
                height={56}
                objectFit="cover"
              />
            </div>
            <h3 className="text-md font-bold mb-1">Browse All</h3>
            <p className="text-xs text-gray-600">255 Items</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DisplayCards;
