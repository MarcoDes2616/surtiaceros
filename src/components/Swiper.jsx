import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import marcas01 from "../assets/img/marcas01.png"
import marcas02 from "../assets/img/marcas02.png"
import marcas03 from "../assets/img/marcas03.jpg"
import marcas04 from "../assets/img/marcas04.jpg"
import marcas05 from "../assets/img/marcas05.png"
import marcas06 from "../assets/img/marcas06.png"
import marcas07 from "../assets/img/marcas07.png"
import marcas08 from "../assets/img/marcas08.png"
import marcas09 from "../assets/img/marcas09.png"
import marcas10 from "../assets/img/marcas10.jpg"
import marcas11 from "../assets/img/marcas11.jpg"
import marcas12 from "../assets/img/marcas12.png"
import marcas13 from "../assets/img/marcas13.png"
import marcas14 from "../assets/img/marcas14.png"
import marcas15 from "../assets/img/marcas15.png"



// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Swiperm = () => {

    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={marcas01} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={marcas02} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={marcas03} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={marcas04} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={marcas05} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={marcas06} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={marcas07} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={marcas08} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={marcas09} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={marcas10} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={marcas11} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={marcas12} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={marcas13} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={marcas14} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={marcas15} alt="" />
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Swiperm;