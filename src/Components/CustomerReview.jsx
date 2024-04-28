import { Typewriter } from "react-simple-typewriter";

const CustomerReview = () => {
  return (
    <section className="my-8 bg-gray-800 dark:bg-gray-100 text-gray-100 dark:text-gray-800">
      <div className="container flex flex-col items-center mx-auto mb-12 md:p-10 md:px-12">
        <h1 className="p-4 text-4xl font-semibold leading-none text-center">
          <Typewriter
            words={["What our customers are saying about us"]}
            loop={5}
            cursor
            cursorStyle=""
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
          ></Typewriter>
        </h1>
      </div>
      <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10">
        <div
          className="flex flex-col max-w-sm mx-4 my-6 shadow-lg"
          data-aos="fade-right"
          data-aos-duration="3000"
        >
          <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-gray-900 dark:bg-gray-50">
            <p className="relative px-6 py-1 text-lg italic text-center text-gray-100 dark:text-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="w-8 h-8 text-[#ed5b31]"
              >
                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
              </svg>
              Natural landmarks: These include places like waterfalls,
              mountains, beaches, forests, and national parks renowned for their
              scenic beauty and opportunities for outdoor activities such as
              hiking, camping, and wildlife watching this nature, this is
              amaging.
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="absolute right-0 w-8 h-8 text-[#ed5b31]"
              >
                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
              </svg>
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-[#ed5b31]  text-gray-900 dark:text-gray-50">
            <img
              src="https://source.unsplash.com/50x50/?portrait?1"
              alt=""
              className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full bg-gray-500 dark:bg-gray-500 bg-gray-700 dark:bg-gray-300"
            />
            <p className="text-xl font-semibold leading-tight">
              Distinctio Animi
            </p>
            <p className="text-sm uppercase">Aliquam illum</p>
          </div>
        </div>
        <div
          className="flex flex-col max-w-sm mx-4 my-6 shadow-lg"
          data-aos="fade-left"
          data-aos-duration="3000"
        >
          <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-gray-900 dark:bg-gray-50">
            <p className="relative px-6 py-1 text-lg italic text-center text-gray-100 dark:text-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="w-8 h-8 text-[#ed5b31] "
              >
                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
              </svg>
              Historical sites: These spots preserve the history and heritage of
              a region and often include ancient ruins, monuments, castles, and
              archaeological sites. Visitors come to learn about the past and
              explore the architectural and cultural remnants of bygone eras.
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="absolute right-0 w-8 h-8 text-[#ed5b31]"
              >
                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
              </svg>
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-[#ed5b31] text-gray-900 dark:text-gray-50">
            <img
              src="https://source.unsplash.com/50x50/?portrait?2"
              alt=""
              className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full bg-gray-500 dark:bg-gray-500 bg-gray-700 dark:bg-gray-300"
            />
            <p className="text-xl font-semibold leading-tight">
              Distinctio Animi
            </p>
            <p className="text-sm uppercase">Aliquam illum</p>
          </div>
        </div>
        <div
          className="flex flex-col max-w-sm mx-4 my-6 shadow-lg"
          data-aos="fade-right"
          data-aos-duration="3000"
        >
          <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-gray-900 dark:bg-gray-50">
            <p className="relative px-6 py-1 text-lg italic text-center text-gray-100 dark:text-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="w-8 h-8 text-[#ed5b31] "
              >
                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
              </svg>
              Cultural attractions: These spots showcase the traditions, arts,
              and customs of a particular community or region. They may include
              museums, art galleries, theaters, religious sites, traditional
              villages, and festivals that celebrate local culture and identity
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="absolute right-0 w-8 h-8 text-[#ed5b31] "
              >
                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
              </svg>
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-[#ed5b31]  text-gray-900 dark:text-gray-50">
            <img
              src="https://source.unsplash.com/50x50/?portrait?3"
              alt=""
              className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full bg-gray-500 dark:bg-gray-500 bg-gray-700 dark:bg-gray-300"
            />
            <p className="text-xl font-semibold leading-tight">
              Distinctio Animi
            </p>
            <p className="text-sm uppercase">Aliquam illum</p>
          </div>
        </div>
        <div
          className="flex flex-col max-w-sm mx-4 my-6 shadow-lg"
          data-aos="fade-left"
          data-aos-duration="3000"
        >
          <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-gray-900 dark:bg-gray-50">
            <p className="relative px-6 py-1 text-lg italic text-center text-gray-100 dark:text-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="w-8 h-8 text-[#ed5b31]"
              >
                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
              </svg>
              Adventure destinations: These spots cater to adrenaline junkies
              seeking thrilling experiences such as rock climbing, zip-lining,
              whitewater rafting, bungee jumping, or skydiving. They offer
              opportunities for exciting outdoor adventures and extreme sports.
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="absolute right-0 w-8 h-8 text-[#ed5b31]"
              >
                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
              </svg>
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-[#ed5b31] text-gray-900 dark:text-gray-50">
            <img
              src="https://source.unsplash.com/50x50/?portrait?4"
              alt=""
              className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full bg-gray-500 dark:bg-gray-500 bg-gray-700 dark:bg-gray-300"
            />
            <p className="text-xl font-semibold leading-tight">
              Distinctio Animi
            </p>
            <p className="text-sm uppercase">Aliquam illum</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReview;
