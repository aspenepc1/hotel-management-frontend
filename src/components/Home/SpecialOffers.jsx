import React from "react";

function SpecialOffers() {
  return (
    <div className="bg-white text-white py-10">
      <div className="px-4">
        <h2 className="text-xl text-[#002d72] text-center font-bold text-left mb-4">
          OUR SPECIAL OFFERS
        </h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-4">
          <li className="flex items-center bg-white-100 text-blue-600 p-4 rounded-lg shadow-xl">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="circle-check"
              className="svg-inline--fa fa-circle-check text-blue-600 w-8 h-8 mr-4"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
              />
            </svg>
            <span className="lg:text-sm md:text-sm sm:text-base text-xs font-semibold text-black">
              Free cancellation anytime
            </span>
          </li>
          <li className="flex items-center bg-white-100 text-blue-600 p-4 rounded-lg shadow-xl">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="door-open"
              className="svg-inline--fa fa-door-open text-blue-600 w-8 h-8 mr-4"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path
                fill="currentColor"
                d="M320 32c0-9.9-4.5-19.2-12.3-25.2S289.8-1.4 280.2 1l-179.9 45C79 51.3 64 70.5 64 92.5L64 448l-32 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 192 0 32 0 0-32 0-448zM256 256c0 17.7-10.7 32-24 32s-24-14.3-24-32s10.7-32 24-32s24 14.3 24 32zm96-128l96 0 0 352c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0 0-320c0-35.3-28.7-64-64-64l-96 0 0 64z"
              />
            </svg>
            <span className="lg:text-sm md:text-sm sm:text-base text-xs font-semibold text-black">
              Free early check-in
            </span>
          </li>
          <li className="flex items-center bg-white-100 text-blue-600 p-4 rounded-lg shadow-xl">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="clock"
              className="svg-inline--fa fa-clock text-blue-600 w-8 h-8 mr-4"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"
              />
            </svg>
            <span className="lg:text-sm md:text-sm sm:text-base text-xs font-semibold text-black">
              Free late checkout
            </span>
          </li>
          <li className="flex items-center bg-white-100 text-blue-600 p-4 rounded-lg shadow-xl">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="cash-register"
              className="svg-inline--fa fa-cash-register text-blue-600 w-8 h-8 mr-4"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M64 0C46.3 0 32 14.3 32 32l0 64c0 17.7 14.3 32 32 32l80 0 0 32-57 0c-31.6 0-58.5 23.1-63.3 54.4L1.1 364.1C.4 368.8 0 373.6 0 378.4L0 448c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-69.6c0-4.8-.4-9.6-1.1-14.4L488.2 214.4C483.5 183.1 456.6 160 425 160l-217 0 0-32 80 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32L64 0zM96 48l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L96 80c-8.8 0-16-7.2-16-16s7.2-16 16-16zM64 432c0-8.8 7.2-16 16-16l352 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16zm48-168a24 24 0 1 1 0-48 24 24 0 1 1 0 48zm120-24a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zM160 344a24 24 0 1 1 0-48 24 24 0 1 1 0 48zM328 240a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zM256 344a24 24 0 1 1 0-48 24 24 0 1 1 0 48zM424 240a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zM352 344a24 24 0 1 1 0-48 24 24 0 1 1 0 48z"
              />
            </svg>
            <span className="lg:text-sm md:text-sm sm:text-base text-xs font-semibold text-black">
              No deposit required
            </span>
          </li>
          <li className="flex items-center bg-white-100 text-blue-600 p-4 rounded-lg shadow-xl">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="bed"
              className="svg-inline--fa fa-bed text-blue-600 w-8 h-8 mr-4"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
            >
              <path
                fill="currentColor"
                d="M32 32c17.7 0 32 14.3 32 32l0 256 224 0 0-160c0-17.7 14.3-32 32-32l224 0c53 0 96 43 96 96l0 224c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-32-224 0-32 0L64 416l0 32c0 17.7-14.3 32-32 32s-32-14.3-32-32L0 64C0 46.3 14.3 32 32 32zm144 96a80 80 0 1 1 0 160 80 80 0 1 1 0-160z"
              />
            </svg>
            <span className="lg:text-sm md:text-sm sm:text-base text-xs font-semibold text-black">
              After every five nights, one night is free
            </span>
          </li>
          <li className="flex items-center bg-white-100 text-blue-600 p-4 rounded-lg shadow-xl">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="mug-saucer"
              className="svg-inline--fa fa-mug-saucer text-blue-600 w-8 h-8 mr-4"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
            >
              <path
                fill="currentColor"
                d="M96 64c0-17.7 14.3-32 32-32l320 0 64 0c70.7 0 128 57.3 128 128s-57.3 128-128 128l-32 0c0 53-43 96-96 96l-192 0c-53 0-96-43-96-96L96 64zM480 224l32 0c35.3 0 64-28.7 64-64s-28.7-64-64-64l-32 0 0 128zM32 416l512 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 480c-17.7 0-32-14.3-32-32s14.3-32 32-32z"
              />
            </svg>
            <span className="lg:text-sm md:text-sm sm:text-base text-xs font-semibold text-black">
              Free hot breakfast buffet
            </span>
          </li>
          <li className="flex items-center bg-white-100 text-blue-600 p-4 rounded-lg shadow-xl">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="percent"
              className="svg-inline--fa fa-percent text-blue-600 w-8 h-8 mr-4"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path
                fill="currentColor"
                d="M374.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-320 320c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l320-320zM128 128A64 64 0 1 0 0 128a64 64 0 1 0 128 0zM384 384a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z"
              />
            </svg>
            <span className="lg:text-sm md:text-sm sm:text-base text-xs font-semibold text-black">
              10% discount on advance booking
            </span>
          </li>
          <li className="flex items-center bg-white-100 text-blue-600 p-4 rounded-lg shadow-xl">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="cookie-bite"
              className="svg-inline--fa fa-cookie-bite text-blue-600 w-8 h-8 mr-4"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M257.5 27.6c-.8-5.4-4.9-9.8-10.3-10.6c-22.1-3.1-44.6 .9-64.4 11.4l-74 39.5C89.1 78.4 73.2 94.9 63.4 115L26.7 190.6c-9.8 20.1-13 42.9-9.1 64.9l14.5 82.8c3.9 22.1 14.6 42.3 30.7 57.9l60.3 58.4c16.1 15.6 36.6 25.6 58.7 28.7l83 11.7c22.1 3.1 44.6-.9 64.4-11.4l74-39.5c19.7-10.5 35.6-27 45.4-47.2l36.7-75.5c9.8-20.1 13-42.9 9.1-64.9c-.9-5.3-5.3-9.3-10.6-10.1c-51.5-8.2-92.8-47.1-104.5-97.4c-1.8-7.6-8-13.4-15.7-14.6c-54.6-8.7-97.7-52-106.2-106.8zM208 144a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM144 336a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm224-64a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
              />
            </svg>
            <span className="lg:text-sm md:text-sm sm:text-base text-xs font-semibold text-black">
              Fresh cookies in the evening
            </span>
          </li>
          <li className="flex items-center bg-white-100 text-blue-600 p-4 rounded-lg shadow-xl">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="briefcase"
              className="svg-inline--fa fa-briefcase text-blue-600 w-8 h-8 mr-4"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M184 48l144 0c4.4 0 8 3.6 8 8l0 40L176 96l0-40c0-4.4 3.6-8 8-8zm-56 8l0 40L64 96C28.7 96 0 124.7 0 160l0 96 192 0 128 0 192 0 0-96c0-35.3-28.7-64-64-64l-64 0 0-40c0-30.9-25.1-56-56-56L184 0c-30.9 0-56 25.1-56 56zM512 288l-192 0 0 32c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-32L0 288 0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-128z"
              />
            </svg>
            <span className="lg:text-sm md:text-sm sm:text-base text-xs font-semibold text-black">
              24/7 Business Center Access
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SpecialOffers;
