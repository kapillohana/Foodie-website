import { FaStar } from 'react-icons/fa';

const TestimonialSection = () => {
  return (
    <div className="p-4 ">
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Left Side - Overlapping Rounded Pictures */}
        <div className="flex justify-center md:justify-start mb-4 md:mb-0">
          <img
            src="/images/maskGroup1.png"
            alt="Customer 1"
            className="w-12 h-12 rounded-full"
            style={{ marginLeft: '0px' }}
          />
          <img
            src="/images/maskGroup2.png"
            alt="Customer 2"
            className="w-12 h-12 rounded-full"
            style={{ marginLeft: '-10px' }} // Overlapping second image
          />
          <img
            src="/images/maskGroup3.png"
            alt="Customer 3"
            className="w-12 h-12 rounded-full"
            style={{ marginLeft: '-10px' }} // Overlapping third image
          />
        </div>

        {/* Right Side - Customer Reviews */}
        <div className="text-center md:text-left flex flex-col md:mr-12">
          <h2 className="text-lg font-semibold">Customer Reviews</h2>
          <div className="flex items-center justify-center md:justify-start space-x-1">
            <FaStar className="text-yellow-400" />
            <span className="text-sm text-gray-500">4.9</span>
            <p className="text-sm text-gray-500">(18.6k reviews)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
