import React from "react";

const Gallery = ({ images, currentIndex }) => {
    return (
        <div className="gallery_display">
            <div
                className="gallery_images_wrapper"
                style={{
                    transform: `translateX(-${currentIndex * 220}px)`, 
                    transition: "transform 0.5s ease-in-out", 
                }}
            >
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Gallery Image ${index + 1}`}
                        className="gallery_image"
                    />
                ))}
            </div>
        </div>
    );
};

export default Gallery;
