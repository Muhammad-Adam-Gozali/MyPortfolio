import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div
      style={{ backgroundImage: "url(bg-2.jpg)" }}
      className="flex w-screen h-screen bg-cover bg-center items-center justify-center"
    >
      <div className="relative h-[60%] w-[80%] flex flex-col md:flex-row rounded-xl border-2 border-white overflow-hidden">
      <div className="relative h-1/2 w-full md:h-full md:w-1/2">
      </div>
      <div className="relative h-1/2 w-full md:h-full md:w-1/2">
        <Image
          src="/astro.jpg"
          alt="Astro image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div className="absolute left-12 bottom-50 md:bottom-20 w-[70%] md:w-[30%] md:mb-[0px] mt-2 ">
        <ContactForm />
      </div>
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
      <Image
        src="/stars.png"
        alt="stars"
        height={300}
        width={300}
        className="absolute top-6 left-0 z-[10]"
      />
    </div>
  );
};

export default Page;
