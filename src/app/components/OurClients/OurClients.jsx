"use client";
import React from "react";
import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

SwiperCore.use([Navigation]);

const OurClients = () => {
  const clients = [
    {
      id: 1,
      name: "Erika Migilaccio",
      country: "United States",
      desc: "My dream of creating an app came true with the work of the people at MindInventory and I couldn't be happier with the way how everything turned out. I'm really grateful for everything your team did to fulfill my dream.",
      img: "client1.webp",
    },
    {
      id: 2,
      name: "Daniel Ferguson",
      country: "Australia",
      desc: "I wanted to thank MindInventory team for the fantastic job they did on my app development project. I'm really proud to say that I've been working with you guys and can't wait to get connected for the new project in the future!",
      img: "client2.png",
    },
    {
      id: 3,
      name: "Chris Ragain",
      country: "United States",
      desc: "I hired MindInventory to design and develop a golf app, and I couldn't be more thrilled with how it's going. My hired team is excellent, from the wireframing process to the development and the attention to detail is wonderful.",
      img: "client3.webp",
    },
    {
      id: 4,
      name: "Chris Ragain",
      country: "United States",
      desc: "I hired MindInventory to design and develop a golf app, and I couldn't be more thrilled with how it's going. My hired team is excellent, from the wireframing process to the development and the attention to detail is wonderful.",
      img: "client3.webp",
    },
  ];

  return (
    <div className="min-h-[700px] py-14 px-12 sm:px-4">
      <div className="flex items-center justify-between px-8 sm:px-2">
        <h1 className="text-4xl font-semibold sm:text-xl">Our Clients</h1>
        <button className="bg-sky-600 flex items-center gap-2 px-6 py-1.5 md:text-sm sm:text-xs rounded-full text-base text-white">
          View All
          <span className="arrow-animation">
            <AiOutlineArrowRight />
          </span>
        </button>
      </div>

      <div className="flex justify-center  items-center py-16 ">
        <Swiper
          navigation
          spaceBetween={40}
          breakpoints={{
            475: {
              slidesPerView: 1,
            },
            639: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {clients.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="w-[400px] h-[400px] lg:w-[350px] md:w-[340px] border-2 bg-white  sm:w-[280px] sm:h-[350px] py-8 px-3 flex flex-col gap-6 rounded-2xl text-black ">
                <div className="flex items-center gap-4">
                  <Image
                    src={`/${item.img}`}
                    width={80}
                    height={80}
                    alt={item.name}
                    className="rounded-full sm:w-[50px] sm:h-[50px]"
                  />
                  <div>
                    <p className="text-xl font-semibold sm:text-sm">
                      {item.name}
                    </p>
                    <small className="text-sm font-semibold sm:text-xs">
                      {item.country}
                    </small>
                  </div>
                  <Image
                    src="/stars.png"
                    width={60}
                    height={60}
                    className="flex self-end sm:w-[45px] sm:h-[45px] "
                  />
                </div>
                <p className="text-xl w-[340px] lg:w-full md:w-full sm:w-full leading-normal sm:text-base">
                  {item.desc}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default OurClients;
