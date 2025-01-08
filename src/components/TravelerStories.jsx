import React, { useEffect, useState } from 'react';

const TravelerStories = ({ travelerStories }) => {

  const [currentSlide, setCurrentSlide] = useState(0);

  
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === travelerStories.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000); 

    return () => clearInterval(slideInterval);
  }, []);

  const handleNextSlide = () => {
    setCurrentSlide(
      currentSlide === travelerStories.length - 1 ? 0 : currentSlide + 1
    );
  };

  const handlePrevSlide = () => {
    setCurrentSlide(
      currentSlide === 0 ? travelerStories.length - 1 : currentSlide - 1
    );
  };


  return (
    <div>
      <div className="md:w-full w-[90%] max-w-4xl md:max-w-7xl mx-auto my-10">
        <h2 data-aos="fade-down" className="text-3xl font-bold text-center mt-16 md:mt-28 mb-6 md:mb-2">Traveler Stories</h2>

        <div className="carousel mx-auto w-full h-[500px] md:h-[400px] relative rounded-lg overflow-hidden">
          {travelerStories.map((story, index) => (
            <div
              key={story.id}
              className={`carousel-item w-full flex justify-center items-center transition-transform duration-700 ${currentSlide === index ? "block" : "hidden"
                }`}
            >
              <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl w-full mx-4">
                <h3 className="text-2xl text-center font-semibold mb-4">
                  {story.story_title}
                </h3>
                <p className="text-lg text-gray-700 mb-4">
                  <strong>Adventure:</strong> <br /> {story.adventure_title}
                </p>
                <p className="text-gray-800 mb-6">{story.story_content}</p>
                <div className="flex justify-between items-center mb-4">
                  <p className="text-gray-600">
                    <strong>Traveler:</strong> {story.traveler_name}
                  </p>
                  <p className="text-yellow-500 font-bold">
                    Rating: {story.rating} ⭐
                  </p>
                </div>
                <p className="text-gray-500 text-sm">
                  <strong>Travel Date:</strong> {story.travel_date}
                </p>
              </div>
            </div>
          ))}

          <button
            onClick={handlePrevSlide}
            className="hidden lg:block absolute left-4 top-1/2 transform -translate-y-1/2 btn btn-circle"
          >
            ❮
          </button>
          <button
            onClick={handleNextSlide}
            className="hidden lg:block absolute right-4 top-1/2 transform -translate-y-1/2 btn btn-circle"
          >
            ❯
          </button>
        </div>
      </div>
    </div>
  );
};

export default TravelerStories;