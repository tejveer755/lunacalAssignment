import React, { useRef, useState } from "react";
import SideCard from "./SideCard";
import leftArrow from "../assets/Group28.png";
import rightArrow from "../assets/Group29.png";
import image from "../assets/image1.jpg";
import plus from "../assets/Group.png";
import Gallery from "./Gallery";

const Container2 = () => {
    const fileInputRef = useRef(null);
    const [images, setImages] = useState([image, image, image]);
    const [currentIndex, setCurrentIndex] = useState(0); // Track current image index

    // Function to trigger the hidden input field
    const handleAddImageClick = () => {
        fileInputRef.current.click();
    };

    // Handle the image upload
    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImages([...images, imageUrl]);
        }
    };

    // Move to the next image
    const handleNextImage = () => {
        if (currentIndex < images.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setCurrentIndex(0); // Loop back to the first image
        }
    };

    // Move to the previous image
    const handlePrevImage = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else {
            setCurrentIndex(images.length - 1); // Loop back to the last image
        }
    };

    return (
        <div className="card">
            <SideCard />
            <div className="card_content">
                <div className="container">
                    <h2 className="gallery">Gallery</h2>

                    <button className="add_image" onClick={handleAddImageClick}>
                        <img src={plus} alt="add" />
                        ADD IMAGE
                    </button>

                    {/* Hidden file input */}
                    <input
                        type="file"
                        accept="image/*"
                        ref={fileInputRef}
                        onChange={handleImageUpload}
                        className="hidden"
                    />

                    <div className="arrows">
                        <button onClick={handlePrevImage}>
                            <img src={leftArrow} alt="leftArrow" />
                        </button>
                        <button onClick={handleNextImage}>
                            <img src={rightArrow} alt="rightArrow" />
                        </button>
                    </div>
                </div>

                {/* Pass currentIndex as a prop to the Gallery component */}
                <Gallery images={images} currentIndex={currentIndex} />
            </div>
        </div>
    );
};

export default Container2;
