import React, { useEffect, useRef, useState } from 'react';
import "./carousel.css";

const Carousel = () => {
    const carouselRef = useRef(null);
    const [index, setIndex] = useState(0);
    const totalSlides = 5;
    const intervalRef = useRef(null);

    const showSlide = (i) => {
        const newIndex = (i + totalSlides) % totalSlides;
        setIndex(newIndex);
        if (carouselRef.current) {
            carouselRef.current.style.transform = `translateX(-${newIndex * 100}vw)`;
        }
    };

    const nextSlide = () => {
        clearInterval(intervalRef.current);
        showSlide(index + 1);
        startAutoSlide();
    };

    const prevSlide = () => {
        clearInterval(intervalRef.current);
        showSlide(index - 1);
        startAutoSlide();
    };

    const startAutoSlide = () => {
        intervalRef.current = setInterval(() => {
            showSlide(index + 1);
        }, 5000);
    };

    useEffect(() => {
        startAutoSlide();
        return () => clearInterval(intervalRef.current);
    }, [index]); // reset interval every time index changes

    return (
        <>
            <div className="carousel-container">
                <div className="carousel" ref={carouselRef}>
                    <img src="./public/image/spaghetii2.jpg" alt="Image 1" width={100} />
                    <img src="./public/image/breans.jpg" alt="Image 2" width={100} />
                    <img src="./public/image/spaghetii.jpg" alt="Image 3" width={100} />
                    <img src="./public/image/download.jpg" alt="Image 4" width={100} />
                    <img src="./public/image/chicken.jpg" alt="Image 5" width={100} />
                </div>

                <div className="carousel-buttons">
                    <button onClick={prevSlide}>← </button>
                    <button onClick={nextSlide}>  →</button>
                </div>
            </div>
        </>
    );
};

export default Carousel;
