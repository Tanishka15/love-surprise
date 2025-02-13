import React, { useState, useEffect } from "react";

function Gallery() {
  const images = [
    process.env.PUBLIC_URL + "/images/2.jpeg",
    process.env.PUBLIC_URL + "/images/4.jpeg",
    process.env.PUBLIC_URL + "/images/5.jpeg",
    process.env.PUBLIC_URL + "/images/6.jpeg",
    process.env.PUBLIC_URL + "/images/7.jpeg",
    process.env.PUBLIC_URL + "/images/8.jpeg",
    process.env.PUBLIC_URL + "/images/10.jpeg",
    process.env.PUBLIC_URL + "/images/9.jpeg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="gallery">
      <h2>📸 Our Memories 📸</h2>
      <div className="gallery-container">
        <img src={images[currentIndex]} alt="Memory" className="gallery-image" />
      </div>
    </section>
  );
}

export default Gallery;
