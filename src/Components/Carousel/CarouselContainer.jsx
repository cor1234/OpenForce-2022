import React, { useState } from "react";

import "../styles/Carousel.css";

function CarouselContainer(props) {
    const [currentImg, setCurrentImg] = useState(0);

    const prev = () => {
        setCurrentImg((prevImg) => (prevImg <= 0 ? 0 : prevImg - 1));
    };

    const next = () => {
        setCurrentImg((prevImg) =>
            prevImg >= props.images.length - 1 ? prevImg : prevImg + 1
        );
    };

    return (
        <div className={"carousel-container"}>
            {props.images.map(
                (img, i) =>
                    currentImg === i && (
                        <img key={i} src={process.env.PUBLIC_URL + "/images/" + img} />
                    )
            )}
            <div className={"carousel-btn"}>
                <p onClick={prev}>&lt;</p>
                <p onClick={next}>&gt;</p>
            </div>
        </div>
    );
}

export default CarouselContainer;
