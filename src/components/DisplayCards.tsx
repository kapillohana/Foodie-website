"use client";


const DisplayCards = () => {
    return ( // Add return statement here
      <section>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center bg-[#F5FCFF]">
          {/* Cards Wrapper - Use flex for horizontal alignment */}
          <div className="flex flex-wrap gap-6 justify-center">
            {/* Card 1 */}
            <div className="bg-[#FFFFFF] p-4 rounded-3xl shadow-xl flex flex-col items-center text-center h-40 w-40 lg:h-56 lg:w-56 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              {/* background circle */}
              <div className="bg-[#C1F1C6] w-20 h-20 rounded-full flex items-center justify-center mb-2">
                <img
                  src="/images/first.png"
                  alt="Card Image 1"
                  className="w-14 h-14 rounded-full object-cover"
                />
              </div>
              <h3 className="text-md font-bold mb-1">Main Dish</h3>
              <p className="text-xs text-gray-600">86 Dishes</p>
            </div>
  
            {/* Card 2 */}
            <div className="bg-white p-4 rounded-3xl shadow-xl flex flex-col items-center text-center h-40 w-40 lg:h-56 lg:w-56 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="bg-[#C1F1C6] w-20 h-20 rounded-full flex items-center justify-center mb-2">
                <img
                  src="/images/pngwing.png"
                  alt="Card Image 2"
                  className="w-14 h-14 rounded-full object-cover"
                />
              </div>
              <h3 className="text-md font-bold mb-1">BreakFast</h3>
              <p className="text-xs text-gray-600">12 BreakFast</p>
            </div>
  
            {/* Card 3 */}
            <div className="bg-white p-4 rounded-3xl shadow-xl flex flex-col items-center text-center h-40 w-40 lg:h-56 lg:w-56 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="bg-[#C1F1C6] w-20 h-20 rounded-full flex items-center justify-center mb-2">
                <img
                  src="/images/Desert.png"
                  alt="Card Image 3"
                  className="w-14 h-14 rounded-full object-cover"
                />
              </div>
              <h3 className="text-md font-bold mb-1">Dessert</h3>
              <p className="text-xs text-gray-600">48 Dessert</p>
            </div>
  
            {/* Card 4 */}
            <div className="bg-[#FFFFFF] p-4 rounded-3xl shadow-xl flex flex-col items-center text-center h-40 w-40 lg:h-56 lg:w-56 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="bg-[#C1F1C6] w-20 h-20 rounded-full flex items-center justify-center mb-2">
                <img
                  src="/images/juice.png"
                  alt="Card Image 4"
                  className="w-14 h-14 rounded-full object-cover"
                />
              </div>
              <h3 className="text-md font-bold mb-1">Browser All</h3>
              <p className="text-xs text-gray-600">255 Items</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default DisplayCards;
  