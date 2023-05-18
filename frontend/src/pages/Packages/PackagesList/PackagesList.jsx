import React from "react";
import { Link } from "react-router-dom";

const PackagesList = () => {
  return (
    <div className="w-screen overflow-x-hidden min-h-screen dark:bg-gray-900">
      <div className="flex flex-col justify-center items-center !overflow-x-hidden px-2 bg-cover h-[60vh] bg-no-repeat bg-center bg-[url('https://cdn.pixabay.com/photo/2016/03/04/19/36/beach-1236581_960_720.jpg')]"></div>

      <div className="mt-10">
        <div className="px-24">
          <h2 class="text-4xl text-gray-900  font-extrabold font-primary dark:text-white">
            Local tour packges
          </h2>
          <p class="font-primary text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
            We have standard travelling packages for your destinations
          </p>
        </div>

        <div className="px-24 py-24 sm:grid-cols-1 grid md:grid-cols-2 gap-10">
          <Link to="/packages/search/singapore">
            <figure class="shadow-xl dark:shadow-gray-800 relative max-w-full h-auto transition-all duration-300 cursor-pointer ">
              <img
                class="rounded-lg w-full"
                src="https://www.sltda.gov.lk/storage/common_media/jaffna_3526732927_o1537600501.jpg"
                alt="Sample Destinations"
              />
              <h3 className="absolute bottom-6 px-4 sm:text-large md:text-5xl text-black  font-extrabold   dark:text-white">
                Explore North
              </h3>
            </figure>
          </Link>

          <Link to="/packages/search/india">
            <figure class="shadow-xl dark:shadow-gray-800 relative max-w-full h-auto transition-all duration-300 cursor-pointer ">
              <img
                class="rounded-lg w-full"
                src="https://www.sltda.gov.lk/storage/common_media/arugambay3245962641.png"
                alt="Sample Destinations"
              />

              <div className="absolute bottom-6 ">
                <h3 className="px-4 sm:text-large md:text-5xl text-white  font-extrabold   dark:text-white">
                  Explore East
                </h3>
              </div>
            </figure>
          </Link>

          {/* <figure class="shadow-xl dark:shadow-gray-800 relative max-w-full h-auto transition-all duration-300 cursor-pointer  hover:grayscale-0">
            <img
              class="rounded-lg w-full"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
              alt="Sample Destinations"
            />

            <h3 className="absolute bottom-6 px-4 sm:text-large md:text-5xl text-white  font-extrabold   dark:text-white">
              Finaland
            </h3>
          </figure>

          <figure class="shadow-xl dark:shadow-gray-800 relative max-w-full h-auto transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
            <img
              class="rounded-lg w-full"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
              alt="Sample Destinations"
            />

            <h3 className="absolute bottom-6 px-4 sm:text-large md:text-5xl text-white  font-extrabold   dark:text-white">
              Finaland
            </h3>
          </figure> */}

          <Link to="/packages/search/europe">
          <figure class="group shadow-xl overflow-hidden dark:shadow-gray-800 relative max-w-full h-auto transition-all duration-300 cursor-pointer ">
            <img
              class="rounded-lg w-full"
              src="https://www.sltda.gov.lk/storage/common_media/colombo06_3525240306_o4102298154.jpg"
              alt="Sample Destinations"
            />

            <h3 className="absolute bottom-6 px-4 sm:text-large md:text-5xl text-white  font-extrabold   dark:text-white">
              Explore West
            </h3>
          </figure>
          </Link>

          <Link to="/packages/search/australia">
          <figure class="shadow-xl dark:shadow-gray-800 relative max-w-full h-auto transition-all duration-300 cursor-pointer  ">
            <img
              class="rounded-lg w-full"
              src="https://www.sltda.gov.lk/storage/common_media/galle-03_3525316434_o1350742866.jpg"
              alt="Sample Destinations"
            />

            <h3 className="absolute bottom-6 px-4 sm:text-large md:text-5xl text-white  font-extrabold   dark:text-white">
              Explore South
            </h3>
          </figure>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PackagesList;
