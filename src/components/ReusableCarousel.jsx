/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from 'next/link';

export default function ReusableCarousel({ title, data = [] }) {
  if (!Array.isArray(data) || data.length === 0) {
    return (
      <div className="carousel-error">
        <p>No {title} anime available at the moment.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col p-10 gap-5">
      <h2 className="text-3xl font-semibold border-l-8 border-l-neutral-800 px-5" >{title}</h2>
      <div className="bg-neutral-700/30 rounded-lg box-shadow" >
      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          300: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          350: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          400: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          992: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
        style={{ cursor: "grab" }}
      >
        {data.map((anime, index) => {
          const isManga = anime.type === 'MANGA';
          return (
            <SwiperSlide key={index}>
              <div className="flex flex-col p-8 text-center gap-3 aspect-[2/3]">
              <Link href={isManga ? `/manga/details/${anime.id}` : `/anime/${anime.id}`}>
                <img
                  className="rounded-lg"
                  src={anime.image || "/path/to/default-image.jpg"}
                  alt={
                    anime.title?.english ||
                    anime.title?.romaji ||
                    anime.title?.userPreferred ||
                    "Anime"
                  }
                  draggable="false"
                  onError={(e) => (e.target.src = "/path/to/default-image.jpg")} 
                />
              </Link>
              <h4 className="font-semibold" >
                {anime?.title?.english ||
                  anime?.title?.romaji ||
                  anime?.title?.userPreferred ||
                  "Unknown Title"}
              </h4>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      </div>
    </div>
  );
}
