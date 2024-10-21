"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Props {
  image: string;
  title: string;
  text: string;
  link: string;
}

const ProjectCard = ({ image, title, text, link }: Props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showOnboarding, setShowOnboarding] = useState(false);

  useEffect(() => {
    setShowOnboarding(true);
  }, []);

  const handleDismiss = () => {
    setShowOnboarding(false);
  };

  function handleFlip() {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  }

  return (
    <div
      onClick={handleFlip}
      className="md:w-[800px] mx-auto md:h-[400px] w-full h-[180px] md:ml-14 md:mt-10 text-sm rounded-md cursor-pointer"
    >
      <motion.div
        className="flip-card-inner w-full h-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }} // Changed to 0 for proper flipping
        transition={{ duration: 0.6 }}
        onAnimationComplete={() => setIsAnimating(false)}
      >
        <div
          style={{ backgroundImage: `url(${image})` }}
          className="w-full h-full group relative flip-card-front bg-cover bg-center text-white rounded-lg p-4"
        >
          <div className="absolute inset-0 w-full h-full rounded-md bg-black opacity-0 group-hover:opacity-40" />
          <div className="absolute inset-0 w-full h-full text-[20px] pb-10 hidden group-hover:flex items-center z-[20] justify-center">
            Learn more &gt;
          </div>
        </div>
        <div
          className="w-full h-full group relative flip-card-back bg-cover bg-center text-white rounded-lg p-4"
        >
          {showOnboarding && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
              <div className="bg-white p-4 rounded-md shadow-lg max-w-sm w-full text-center">
                <h2 className="text-lg font-semibold mb-2 z-[20]">{title}</h2>
                <p className="mb-4">{text}</p>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-sm group bg-red-500 px-2 py-2 mb-4 text-white max-w-[200px]"
                >
                  Visit site
                </a>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
