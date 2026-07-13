import React, { useState } from "react";

// items: array of { type: "image" | "video", src: "..." }
const ImageCarousel = ({ items, alt }) => {
  const [index, setIndex] = useState(0);
  const current = items[index];

  return (
    <div className="carousel">
      {current.type === "video" ? (
        <video
          className="photo"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={current.src} type="video/mp4" />
        </video>
      ) : (
        <img src={current.src} alt={alt} className="photo" />
      )}

      {items.length > 1 && (
        <>
          <button
            className="carousel-arrow left"
            onClick={() => setIndex((index - 1 + items.length) % items.length)}
          >
            ‹
          </button>
          <button
            className="carousel-arrow right"
            onClick={() => setIndex((index + 1) % items.length)}
          >
            ›
          </button>
        </>
      )}
    </div>
  );
};

export default ImageCarousel;