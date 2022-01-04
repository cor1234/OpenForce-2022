import React from "react";
import Btn from "../Btn";
import CarouselContainer from "../Carousel/CarouselContainer";

function SwagItem(props) {
    const onDownload = () => {
        window.open(props.link, "_blank");
    };

    return (
        <div className={`swag-item${props.mobile ? " swag-item--mobile" : ""}`}>
            <span className={"swag-item-label"}>Wallpaper</span>
            <CarouselContainer key={props.link} images={props.images} />
            <Btn text={"Download"} onClick={onDownload} />
        </div>
    );
}

SwagItem.defaultProps = {
    mobile: false,
};

export default SwagItem;
