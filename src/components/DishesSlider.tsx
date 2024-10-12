"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const DishesSlider = () => {
  const dishesData = [
    {
      name: "Fatoosh salad",
      image: "/images/dish1.png",
      description: "Delicious spicy noodles with vegetables and sauce.",
      price: "$49.99",
      rating: 4.9,
    },
    {
      name: "Fresh Salad",
      image: "/images/dish2.png",
      description: "A healthy mix of greens and fresh ingredients.",
      price: "$29.99",
      rating: 4.7,
    },
    {
      name: "Egg vegi salad",
      image: "/images/dish1.png",
      description: "Juicy grilled chicken served with herbs and spices.",
      price: "$59.99",
      rating: 4.5,
    },
    {
      name: "Spaghetti Bolognese",
      image: "/images/dish2.png",
      description: "Rich and savory meat sauce with pasta.",
      price: "$39.99",
      rating: 4.6,
    },
    {
      name: "Grilled Chicken",
      image: "/images/dish3.png",
      description: "Succulent grilled chicken breast with herbs.",
      price: "$49.99",
      rating: 4.8,
    },
    {
      name: "Fruit Salad",
      image: "/images/dish2.png",
      description: "A refreshing mix of seasonal fruits.",
      price: "$19.99",
      rating: 4.7,
    },
    {
      name: "Fruit Salad",
      image: "/images/dish2.png",
      description: "A refreshing mix of seasonal fruits.",
      price: "$19.99",
      rating: 4.7,
    },
    {
      name: "Fruit Salad",
      image: "/images/dish2.png",
      description: "A refreshing mix of seasonal fruits.",
      price: "$19.99",
      rating: 4.7,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleDishes = 4; // Number of dishes visible at one time

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0)); // Ensure it does not go negative
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, dishesData.length - visibleDishes)); 
  };

  return (
    <div className="relative p-5">
      {/* Arrows Container */}
      <div className="absolute right-2 top-2 flex gap-1 pr-8">
        <button
          className="bg-gray-300 hover:bg-[#39DB4A] cursor-pointer border-none px-4 py-2 rounded-full text-white"
          onClick={handlePrevClick}
          disabled={currentIndex === 0} // Disable if at the start
        >
          &#10094; {/* Left Arrow */}
        </button>
        <button
          className="bg-gray-300 hover:bg-[#53EC62] cursor-pointer border-none px-4 py-2 rounded-full text-white"
          onClick={handleNextClick}
          disabled={currentIndex === dishesData.length - visibleDishes} // Disable if at the end
        >
          &#10095; {/* Right Arrow */}
        </button>
      </div>

      {/* Dishes Cards */}
      <div className="flex justify-center overflow-hidden mt-10 h-80  ">
        <div
          className="flex transition-transform duration-500 ease-in-out sm:gap-2 md:gap-3 lg:gap-6 gap-2"
          style={{ transform: `translateX(-${currentIndex * (250 + 16)}px)` }} // 250px for width and 16px for gap between cards
        >
          {dishesData.map((dish, index) => (
            <div
              key={index}
              className="bg-[#FFFFFF] rounded-2xl w-44 h-64 md:w-52 md:h-64 shadow-xl relative transform transition duration-500 hover:scale-105 hover:shadow-4xl mx-2" // Added horizontal margin for spacing
            >
              {/* Favorite Icon with Green Rounded Background */}
              <div className="absolute top-2 right-2 bg-[#28a745] rounded-full p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-4 h-4 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c2.03 0 3.99.92 5 2.36C14.51 3.92 16.47 3 18.5 3 21.58 3 24 5.42 24 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                  />
                </svg>
              </div>

              {/* Image */}
              <Image
  src={dish.image}
  alt={dish.name}
  className="w-full h-[120px] rounded-t-lg object-contain"
  width={500}  // Set the width based on your layout needs
  height={120}  // Set the height to match the provided class
  objectFit="contain"  
/>

              {/* Card Content */}
              <div className="p-3"> {/* Added padding for the card content */}
                {/* Heading */}
                <h4 className="text-[14px] font-bold text-[#282938] mb-2">{dish.name}</h4>

                {/* Description */}
                <p className="text-[10px] text-[#606060] mb-2 h-[40px] overflow-hidden">
                  {dish.description}
                </p>

                {/* Price and Rating */}
                <div className="flex justify-between items-center">
                  <p className="text-[12px] font-bold text-[#282938]">{dish.price}</p>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, starIndex) => (
                      starIndex < Math.floor(dish.rating) && (
                        <svg
                          key={starIndex}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-[10px] h-[10px] text-[#FFD700]"
                        >
                          <path d="M9.049 2.927c-.3-.921-1.599-.921-1.898 0L5.16 6.11 1.748 6.641c-.969.14-1.362 1.329-.66 2.01l2.504 2.452-.59 3.433c-.176 1.028.899 1.823 1.822 1.335L10 14.347l3.176 1.668c.923.488 1.998-.307 1.822-1.335l-.59-3.433 2.504-2.452c.703-.68.308-1.87-.66-2.01l-3.413-.53L9.049 2.927z" />
                        </svg>
                      )
                    ))}
                    <span className="text-[12px] text-[#282938] ml-1">{dish.rating.toFixed(1)}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DishesSlider;
