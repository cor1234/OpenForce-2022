import React from "react";
import Btn from "../Btn";
import CarouselContainer from "../Carousel/CarouselContainer";
// import img from '../assets/swag1.jpeg'
function SwagItem(props) {
    const onDownload = () => {
        const img  = document.querySelector(`#${props.divId} img`);
        const ext = img.src.substr(img.src.indexOf('.'));

        const a = document.createElement('a');
        a.href=img.src;
        a.download=`${props.divId}${ext}`;
        a.click();
    };

    return (
        <div id={props.divId} className={`swag-item${props.mobile ? " swag-item--mobile" : ""}`}>
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
