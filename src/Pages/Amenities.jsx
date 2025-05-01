import { HiOutlineWifi } from "react-icons/hi";
import { PiTelevisionSimple, PiCampfireLight } from "react-icons/pi";
import { MdOutlineKitchen, MdOutlinePool, MdOutlineDining, MdOutlineCoffeeMaker } from "react-icons/md";
import { BiSolidWasher } from "react-icons/bi";
import { AiOutlineCar } from "react-icons/ai";
import { BsLaptop, BsSnow } from "react-icons/bs";
import { GiWeightLiftingUp } from "react-icons/gi";
import { LuBedDouble } from "react-icons/lu";
import { FaBriefcase } from "react-icons/fa";

const AmenityItem = ({ Icon, title }) => (
  <div className="flex flex-col items-center justify-center gap-4 p-6 text-center">
    <Icon className="text-4xl text-[#1e3a8a]" />
    <h3 className="text-lg font-medium text-gray-800">{title}</h3>
  </div>
);

const Amenities = () => {
  const amenities = [
    { icon: MdOutlineCoffeeMaker, title: "Coffee maker" },
    { icon: BiSolidWasher, title: "Guest Laundry" },
    { icon: BsLaptop, title: "Work space" },
    { icon: LuBedDouble, title: "24-hour Room Service" },
    { icon: GiWeightLiftingUp, title: "Fitness Center" },
    { icon: BsSnow, title: "Daily housekeeping" },
    { icon: HiOutlineWifi, title: "Air conditioning" },
    { icon: HiOutlineWifi, title: "Free Wi-Fi" },
    { icon: FaBriefcase, title: "Business Center" },
    { icon: MdOutlineKitchen, title: "Kitchen" },
    { icon: BiSolidWasher, title: "Washer" },
    { icon: AiOutlineCar, title: "Free parking" },
    { icon: PiTelevisionSimple, title: "Television" },
    { icon: MdOutlinePool, title: "Swimming Pool" },
    { icon: PiCampfireLight, title: "Camp fire" },
    { icon: MdOutlineDining, title: "Outdoor dining area" },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="mb-16 text-center text-4xl font-bold text-[#1e3a8a]">
        INCLUDED WITH EVERY STAY
      </h1>

      <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
        {amenities.map((amenity, index) => (
          <AmenityItem
            key={index}
            Icon={amenity.icon}
            title={amenity.title}
          />
        ))}
      </div>

      <div className="mt-24 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-800">
            Every Detail Matters.
          </h2>
          <p className="text-lg leading-relaxed text-gray-600">
            Transforming Stays into Lasting Memories. Your Needs, Our Commitment. Elevating Your Stay: Expert Hotel Management for Unforgettable Experiences
          </p>
          <a 
            href="/rooms" 
            className="inline-block rounded-lg bg-[#1e3a8a] px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-[#1e3a8a]/90"
          >
            Explore Now
          </a>
        </div>
        <div className="overflow-hidden rounded-lg">
          <img
            src="/assets/pool2-9d62ca3a.jpg"
            alt="Hotel Amenities"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* Location Section */}
      <div className="mt-24">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-800">
          Find Us Here
        </h2>
        <div className="h-[500px] w-full overflow-hidden rounded-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.9783624347227!2d-95.56843372426518!3d29.72866897564161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640dd5f7e542c11%3A0x620c84d833810e0a!2s1440%20Barker%20Oaks%20Dr%2C%20Houston%2C%20TX%2077079!5e0!3m2!1sen!2sus!4v1709254843811!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Hotel Location"
            className="rounded-lg"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Amenities; 