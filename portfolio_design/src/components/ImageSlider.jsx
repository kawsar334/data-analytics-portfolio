
import React, { useState } from "react";

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    setLoading(true); 
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setLoading(true);
  };

  return (
    <div className="relative w-full md:w-[800px]  mx-auto">

      {/* Loader */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center z-10 bg-white/40 backdrop-blur-sm rounded-lg">
          <div className="w-10 h-10 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
        </div>
      )}

      <img
        src={images[currentIndex]}
        alt="slider"
        onLoad={() => setLoading(false)} 
        className={` w-full md:w-[800px]  h-[650px] object-cover rounded-lg shadow-md transition-all duration-500 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
      />

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-3 -translate-y-1/2 bg-white/60 hover:bg-white p-2 rounded-full backdrop-blur-md shadow-md transition"
      >
        ◀
      </button>

      {/* Right Button */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-3 -translate-y-1/2 bg-white/60 hover:bg-white p-2 rounded-full backdrop-blur-md shadow-md transition"
      >
        ▶
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-3">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer transition ${
              currentIndex === index ? "bg-blue" : "bg-gray-300"
            }`}
            onClick={() => {
              setCurrentIndex(index);
              setLoading(true);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
