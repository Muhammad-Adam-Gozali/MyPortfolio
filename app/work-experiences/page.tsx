"use client";

import ProjectCard from "@/components/ProjectCard";
import { Projects } from "@/constants";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Page = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div
      style={{ backgroundImage: "url(/bg-4.jpg)" }}
      className="w-screen h-screen flex flex-col items-center justify-center bg-center bg-cover"
      >
        <h1 className="text font-semibold md:text-[50px] text-[26px] md:mb-0 mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">Work Experiences</h1>
          <p className="text text-white md:text-[20px] text-[22px] md:mb-0 mb-10 text-center mx-4">Let me show you my experiences as a Software Engineer.</p>
          <div className="w-full max-w-screen-lg px-12">
            <Slider {...settings}>
              {Projects.map((project, index) => (
                <div key={index}>
                  <ProjectCard
                    title={project.title}
                    text={project.text}
                    image={project.src}
                    link={project.link!}
                  />
                </div>
              ))}
            </Slider>
          </div>
      <Image
        src="/stars.png"
        alt="stars"
        height={300}
        width={300}
        className="absolute top-0 left-0 z-[10]"
      />
      <Image
        src="/stars.png"
        alt="stars"
        height={300}
        width={300}
        className="absolute top-2 left-0 z-[10]"
      />
      <Image
        src="/stars.png"
        alt="stars"
        height={300}
        width={300}
        className="absolute top-4 left-0 z-[10]"
      />
     </div>
  );
};

export default Page;
