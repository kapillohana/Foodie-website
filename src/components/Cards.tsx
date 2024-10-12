"use client";
import Image from "next/image";

const Cards = () => {
  const cardData = [
    {
      name: "Spicy Noodles",
      image: "/images/maggy.png", // Correct image property
      rating: 4,
      price: "$49.99",
    },
    {
      name: "Vegetarian Salad",
      image: "/images/salad.png",
      rating: 5,
      price: "$59.99",
    },
    // Add more products as needed
  ];

  return (
    <div className="flex flex-wrap justify-center">
      {cardData.map((product, index) => (
        <div
          key={index}
          className="flex items-center bg-[#f5f9fa] rounded-lg p-2 m-2 w-38 h-16 md:w-44 md:h-16 shadow-2xl flex-shrink-0"
        >
          {/* Left Side: Image */}
          <Image
            style={{ height: "40px", width: "40px", marginRight: "8px" }}
            src={product.image} // Ensure the image path is correctly provided
            alt={product.name}
            width={40} // Specify the width as a prop
            height={40} // Specify the height as a prop
          />

          {/* Right Side: Name, Stars, and Price */}
          <div style={{ flex: 1 }}>
            {/* Name */}
            <h4 style={{ fontSize: '12px', fontWeight: 'bold', color: '#282938', marginBottom: '4px' }}>
              {product.name}
            </h4>

            {/* Rating */}
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '4px' }}>
              {[...Array(5)].map((_, starIndex) => (
                <svg
                  key={starIndex}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill={starIndex < product.rating ? "currentColor" : "none"}
                  stroke="currentColor"
                  style={{
                    height: "10px", // Smaller star
                    width: "10px",
                    color: starIndex < product.rating ? '#FFD700' : '#D3D3D3',
                  }}
                >
                  <path d="M9.049 2.927c-.3-.921-1.599-.921-1.898 0L5.16 6.11 1.748 6.641c-.969.14-1.362 1.329-.66 2.01l2.504 2.452-.59 3.433c-.176 1.028.899 1.823 1.822 1.335L10 14.347l3.176 1.668c.923.488 1.998-.307 1.822-1.335l-.59-3.433 2.504-2.452c.703-.68.308-1.87-.66-2.01l-3.413-.53L9.049 2.927z" />
                </svg>
              ))}
            </div>

            {/* Price */}
            <p style={{ fontSize: "12px", color: "#282938", fontWeight: "bold" }}>{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
