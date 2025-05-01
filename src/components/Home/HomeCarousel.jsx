import { Carousel } from "react-responsive-carousel";
// import hotelImage from "../../assets/hotelImages/hotel-image.png";
// import foodImage from "../../assets/hotelImages/food-image.png";
// import hotelRoom from "../../assets/hotelImages/hotel-room.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner1 from "../../assets/aspenepc-attachments/attachment1.avif"; // Front
import banner2 from "../../assets/aspenepc-attachments/attachment2.avif"; // 2qtsup
import banner3 from "../../assets/aspenepc-attachments/attachment3.avif"; // 2QB
import banner4 from "../../assets/aspenepc-attachments/attachment4.avif"; // 2qb1
import banner5 from "../../assets/aspenepc-attachments/attachment5.avif"; // 2qb2
import banner6 from "../../assets/aspenepc-attachments/attachment6.avif"; // BF

import banner7 from "../../assets/aspenepc-attachments/attachment7.avif"; // Dining 1
import banner8 from "../../assets/aspenepc-attachments/attachment8.avif"; // Dining 2
import banner9 from "../../assets/aspenepc-attachments/attachment9.avif"; // Dining 3
import banner10 from "../../assets/aspenepc-attachments/attachment10.avif"; // Dining 4
import banner11 from "../../assets/aspenepc-attachments/attachment11.avif"; // Dining 5
import banner12 from "../../assets/aspenepc-attachments/attachment12.avif"; // Dining 6

const images = [
  banner1,
  banner2,
  banner3,
  banner4,
  banner5,
  banner6,
  banner7,
  banner8,
  banner9,
  banner10,
  banner11,
  banner12,
];

const HomeCarousel = () => {
  return (
    <div className="relative">
      <Carousel
        showThumbs={false}
        infiniteLoop
        autoPlay
        interval={2000}
        showStatus={false}
        stopOnHover={true}
        showArrows={true}
      >
        {images.map((image, index) => (
          <div key={index} className="relative">
            <img
              src={image}
              alt={`carousel-item-${index}`}
              className="w-full h-[45rem] object-cover"
            />
            {/* <div className="absolute inset-0 bg-black bg-opacity-0 flex flex-col justify-end items-center text-white pb-52">
              <h2 className="text-4xl text-gray-400 font-semibold">
                {image.text} Dynamically show text based on image
              </h2>
            </div> */}
          </div>
        ))}
      </Carousel>

      {/* Static buttons */}
      {/* <div className="absolute bottom-32 left-0 right-0 flex justify-center">
        <div className="mt-6 space-x-4">
          <button className="bg-gray-300 text-gray-800 px-6 py-2 rounded-lg hover:bg-white transition duration-300">
            Rooms & Suites
          </button>
          <button className="bg-[#33568f] text-white px-6 py-2 rounded-lg hover:bg-[#001844] transition duration-300">
            Book Now
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default HomeCarousel;
