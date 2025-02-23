import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";
import { Zoom } from "react-awesome-reveal";

const Banner = () => {
  return (
    <>
      <div className="mt-5">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div
              id="slide1"
              className="carousel-item relative w-full h-72  lg:h-96 "
            >
              <img
                src="https://i.postimg.cc/7YKXsgCF/1-55-SIo-KVE-39p0-SJ-PEETw.webp"
                className="w-full rounded-lg "
              />
              <div className="absolute top-20 lg:top-32 left-10 md:left-80 lg:left-80">
                <div className="space-y-5 text-center">
                  <h5
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    className="text-[#ed5b31] font-extrabold"
                  >
                    ______
                    <span className="text-black font-medium text-xs lg:text-lg">
                      The Best tourists spot
                    </span>
                    ______
                  </h5>
                  <h2
                    data-aos="fade-right"
                    data-aos-duration="1500"
                    className="lg:text-4xl font-extrabold font-Gramond text-black"
                  >
                    Mesmerizing Views of Nilgiri,
                    <br /> Bandarban
                  </h2>
                  <Zoom>
                    <button
                      data-aos="zoom-in"
                      data-aos-duration="1700"
                      className="btn bg-[#ed5b31] text-white lg:px-7 "
                    >
                      Tourists Spot
                    </button>
                  </Zoom>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              id="slide2"
              className="carousel-item relative w-full h-72  lg:h-96"
            >
              <img
                src="https://i.postimg.cc/cCr6symM/1-lp-UOBMx-YROG4-Zq-GUwn2-Iw.webp"
                className="w-full rounded-lg"
              />
              <div className="absolute top-20 lg:top-32 left-10 md:left-80 lg:left-72">
                <div className="space-y-5 text-center">
                  <h5
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    className="text-[#ed5b31] font-extrabold"
                  >
                    ______
                    <span className="text-black font-medium text-xs lg:text-lg">
                      The Best tourists spot
                    </span>
                    ______
                  </h5>
                  <h2
                    data-aos="fade-right"
                    data-aos-duration="1500"
                    className="lg:text-4xl font-extrabold font-Gramond text-white"
                  >
                    Vietnam — Sellers in Ha Long Bay,
                    <br /> Vietnam
                  </h2>
                  <Zoom>
                    <button
                      data-aos="zoom-in"
                      data-aos-duration="1700"
                      className="btn bg-[#ed5b31] text-white lg:px-7 "
                    >
                      Tourists Spot
                    </button>
                  </Zoom>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div id="3" className="carousel-item relative w-full h-72 lg:h-96">
              <img
                src="https://i.postimg.cc/0yWvT1Yr/0-ajaz6i-TYO7n-F9-ni.webp"
                className="w-full rounded-lg"
              />
              <div className="absolute top-20 lg:top-32 left-12 md:left-80 lg:left-72">
                <div className="space-y-5 text-center">
                  <h5
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    className="text-[#ed5b31] font-extrabold"
                  >
                    ______
                    <span className="text-black font-medium text-xs lg:text-lg">
                      The Best tourists spot
                    </span>
                    ______
                  </h5>
                  <h2
                    data-aos="fade-right"
                    data-aos-duration="1500"
                    className="lg:text-4xl font-bold font-Gramond text-white"
                  >
                    the gates of Penang’s Taman Negara <br /> (National Park)
                  </h2>
                  <Zoom>
                    <button
                      data-aos="zoom-in"
                      data-aos-duration="1700"
                      className="btn bg-[#ed5b31] text-white lg:px-7 "
                    >
                      Tourists Spot
                    </button>
                  </Zoom>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Banner;
