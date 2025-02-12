import React, { useState, useEffect } from "react";

function Gallery() {
  const images = ["/images/2.jpeg", "/images/4.jpeg", "/images/5.jpeg", "/images/6.jpeg", "/images/7.jpeg","/images/8.jpeg"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

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
