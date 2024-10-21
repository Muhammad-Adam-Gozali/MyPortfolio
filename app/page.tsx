"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  const [onboardingStep, setOnboardingStep] = useState(0);
  const [isSmallDevice, setIsSmallDevice] = useState(false);

  useEffect(() => {
    const hasSeenOnboardingStep1 = sessionStorage.getItem("hasSeenOnboardingStep1");
    const hasSeenOnboardingStep2 = sessionStorage.getItem("hasSeenOnboardingStep2");
    const hasSeenOnboardingStep3 = sessionStorage.getItem("hasSeenOnboardingStep3");

    if (!hasSeenOnboardingStep1) {
      setOnboardingStep(1);
    } else if (!hasSeenOnboardingStep2) {
      setOnboardingStep(2);
    } else if (!hasSeenOnboardingStep3) {
      setOnboardingStep(3);
    }
  }, []);

  const handleDismiss = () => {
    if (onboardingStep === 1) {
      sessionStorage.setItem("hasSeenOnboardingStep1", "true");
      setOnboardingStep(2);
    } else if (onboardingStep === 2) {
      sessionStorage.setItem("hasSeenOnboardingStep2", "true");
      setOnboardingStep(3);
    } else if (onboardingStep === 3) {
      sessionStorage.setItem("hasSeenOnboardingStep3", "true");
      setOnboardingStep(0); 
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallDevice(window.innerWidth < 768);
    };

    handleResize(); 

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <main className="w-screen h-screen relative">
      <div
        className="flex items-center w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url(/main.jpg)" }}
      >
       <div className="pl-0 mb-10 md:pl-[15rem] pb-56 md:pb-[1rem] flex flex-col gap-5 z-[10] max-w-[750px]">
          <div className="text-center md:text-left">
            <h1 className="text-[30px] md:text-[50px] mh:text-3xl text-white font-semibold">
              Hi! <span className="md:text-[45px] text-[25px]">I&apos;m Adam Gozali</span><br/>
              <span className="inline-block overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500 animate-typing">
                Software Engineer
              </span>
            </h1>
            <p className="text-gray-200 md:text-[15px] block z-[30] ml-10 mr-10 md:m-[0]">
              A Software Engineer with 1+ year experience in <span className="font-semibold md:text-transparent md:bg-clip-text md:bg-gradient-to-r md:from-purple-500 md:to-red-500">Fullstack <br className="md:hidden"></br>Development.</span>
            </p>
          </div>

          <div className="flex-col md:flex-row hidden md:flex gap-5" style={{ fontSize: '4vw'}}>
            <Link
              href="/my-skills"
              className="rounded-[20px] group relative bg-orange-500 hover:bg-orange-400 px-5 py-3 text-lg text-white max-w-[200px]"
            >
              Learn more
            </Link>
            <Link
              href="/work-experiences"
              className="rounded-[20px] group relative bg-transparent px-5 border border-white py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
              My Works
            </Link>
            <Link
              href="/contact-me"
              className="rounded-[20px] group relative bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
              Hire Me
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute flex bottom-14 z-[20] right-5 flex-col md:hidden gap-5" style={{ textAlign: 'center' }}>
        <Link
          href="/my-skills"
          className="rounded-[20px] group bg-blue-500 px-3 py-3 text-white max-w-[200px]"
        >
          Learn more
        </Link>

        <Link
          href="/work-experiences"
          className="rounded-[20px] group bg-transparent border border-white px-3 py-3 text-white max-w-[200px]"
        >
          My Works
        </Link>
        <Link
          href="/contact-me"
          className="rounded-[20px] group bg-transparent border border-white px-3 py-3 text-white max-w-[200px]"
        >
          Hire Me
        </Link>
      </div>

      <div className="absolute md:bottom-30 md:right-[20rem] mt-20 md:mt-0 bottom-[5rem] z-[0]">


        <Image
          src="/astronaut.png"
          alt="cliff"
          width={350}
          height={350}
          className="h-auto animate-float"
        />
        <Image
        src="/stars.png"
        alt="stars"
        height={300}
        width={300}
        className="absolute top-0 left-0 z-[10]"
      />
      </div>

      <div className="absolute bottom-0 opacity-z-[5] md:hidden w-full h-auto">
        <Image
          src="/mountains.png"
          alt="trees"
          width={2000}
          height={2000}
          className="w-full h-full"
        />
      </div>

      <Image
        src="/stars.png"
        alt="stars"
        height={300}
        width={300}
        className="absolute top-0 left-0 z-[10]"
      />

      {onboardingStep > 0 && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            {onboardingStep === 1 && (
              <div className="bg-white p-4 px-10 rounded-lg shadow-lg text-center">
              <h2 className="text-lg font-semibold mb-2">Hi folks..</h2>
              <p className="mb-4">Welcome to my portfolio website</p>
              <button
              onClick={handleDismiss}
              className="text-red-500 font-semibold px-2 py-[6px] rounded-md"
            >
              Got it!
            </button>
            </div>  
            )}
            {onboardingStep === 2 && (
              <div className="bg-white p-4 text-xs px-4 absolute top-[4.3rem] md:right-[8rem] z-[10] right-[5.7rem] shadow-lg text-center" style={{borderRadius:"20px 0px 20px 20px"}}>
              <p className="mb-2">Checkout my repository and social media..</p>
              <button
              onClick={handleDismiss}
              className="text-red-500 font-semibold px-2 py-[6px]"
            >
              Got it!
            </button>
              </div>
            )}
            {onboardingStep === 3 && (
              <div className="bg-white p-4 text-xs px-4 absolute md:bottom-[13rem] md:left-[21rem] bottom-[14rem] z-[10] shadow-lg text-center"
              style={{ borderRadius: isSmallDevice ? '20px 20px 0px 20px' : "0px 20px 20px 20px" }}>
                <p className="mb-2">Learn more about my work experience..</p>
                <button
                  onClick={handleDismiss}
                  className="text-red-500 font-semibold px-2 py-[6px] rounded-md"
                >
                  Got it!
                </button>
              </div>
            )}

          </div>
      )}
    </main>
  );
}
