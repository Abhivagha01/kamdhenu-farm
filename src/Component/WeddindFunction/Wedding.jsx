import React from 'react'
import wedding_bg from '../../assets/image/meerigefunction/watermerrige.jpeg'
import { Link } from 'react-router-dom'
import './Wedding.css'
import wedding_1 from '../../assets/image/wedding/phithi.jpeg'
import w1 from '../../assets/image/wedding/wed1.png'
import w2 from '../../assets/image/wedding/wed2.png'
import w3 from '../../assets/image/wedding/wed3.png'
import w4 from '../../assets/image/wedding/wed4.png'
import w5 from '../../assets/image/wedding/wed5.png'
import w6 from '../../assets/image/wedding/wed6.png'
import w7 from '../../assets/image/wedding/wed7.png'
import w8 from '../../assets/image/wedding/wed8.png'
import w9 from '../../assets/image/wedding/wed9.png'
import w10 from '../../assets/image/wedding/wed10.png'
import w11 from '../../assets/image/wedding/wed2.png'
import w12 from '../../assets/image/wedding/wed3.png'
import event1 from '../../assets/image/wedding/event1.jpg'
import event2 from '../../assets/image/wedding/event2.jpg'
import event3 from '../../assets/image/wedding/event3.jpg'
import event4 from '../../assets/image/wedding/event4.jpg'
import event5 from '../../assets/image/wedding/event5.jpg'
import event6 from '../../assets/image/wedding/event6.jpg'
import event7 from '../../assets/image/wedding/event7.jpg'
import event8 from '../../assets/image/wedding/event8.jpg'
import event9 from '../../assets/image/wedding/event9.jpg'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { EffectCoverflow, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
function Wedding() {




    const weddingItems = [
        {
            imageSrc: w1,
            text: "Bedrooms",
        },
        {
            imageSrc: w2,
            text: "Horse",
        },
        {
            imageSrc: w3,
            text: "Horse Carriage",
        },
        {
            imageSrc: w4,
            text: "Accomodations",
        },
        {
            imageSrc: w5,
            text: "Pandit / Priest For Wedding",
        },
        {
            imageSrc: w6,
            text: "Ceremony Items Suppliers",
        },
        {
            imageSrc: w7,
            text: "Caterers",
        },
        {
            imageSrc: w8,
            text: "Speciality Food Suppliers",
        },
        {
            imageSrc: w9,
            text: "Wedding Cakes & Pastry",
        },
        {
            imageSrc: w10,
            text: "Ice Sculptures",
        },
        {
            imageSrc: w11,
            text: "Housekeeping",
        },
        {
            imageSrc: w12,
            text: "Riverside Cottage",
        },

    ];
    return (
        <div>
            {/* Coomon Slider */}
            <div class="common-slider">
                <div class="image-block">
                    <img src={wedding_bg} alt="slider_image" />
                    <div class="common-slider-content">
                        <div className="title">Wedding Function</div>
                        <div className="link"><Link to="/">Home</Link> - Wedding Function</div>
                    </div>
                </div>
            </div>
            {/* CONTACT US START */}


            {/* WEDDING-BLOCK-START */}
            <div className="wedding-outer">
                <div className="container">
                    <div className="wedding-inner">
                        <div className="row wedding-item align-items-center">
                            <div className="col-lxl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 item">
                                <div className="title">Weddings At Kamdhenu Gau Jatan</div>
                                <p>Kamdhenu gaujatan is located in Village Town, 30 km from surat city near Bionics,
                                    ladvi one of the most beautiful wedding venue South Gujarat has to offer! </p>
                                <p>Private gardens with a river backdrop, perfect for a garden wedding ceremony,
                                    and beautiful
                                    photos.</p>
                                <p>It is most unique and a perfect one stop destination wedding venue.</p>
                                <p>Our handpicked team of professionals and dedicated wedding coordinator will ensure your day
                                    is a huge success.</p>
                            </div>
                            <div className="col-lxl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 item">
                                <div className="image-block">
                                    <img src={wedding_1} alt="wdding_1" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* WEDDING-BLOCK-END */}

            <div className="wedding-service-outer">
                <div className="container">
                    <div className="wedding-service-inner">
                        <div className="section-title wedding-ser-title">
                            <h1>Wedding Services</h1>
                        </div>
                        <div className="row wedding-item justify-content-center">
                            {weddingItems.map((item, index) => (
                                <div className="item  col-xl-2 col-lg-2 col-md-6 col-sm-12 col-xs-12" key={index}>
                                    <div className="item-inner">
                                        <img src={item.imageSrc} alt={item.text} />
                                        <div className="text">{item.text}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>


            <div className="wedding-function">
                <div className="container">
                    <Swiper

                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        loop={true}
                        slidesPerView={'auto'}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 2,
                        }}
                        pagination={{ el: '.swiper-pagination', clickable: true }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                            clickable: true,
                        }}
                        modules={[EffectCoverflow, Pagination, Navigation, Scrollbar]}
                        className="container"
                    >
                        <SwiperSlide>
                            <img src={event1} alt="slide_image" width={50} height={50} className="m-auto" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={event2} alt="slide_image" width={50} height={50} className="m-auto" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={event3} alt="slide_image" width={50} height={50} className="m-auto" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={event4} alt="slide_image" width={50} height={50} className="m-auto" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={event5} alt="slide_image" width={50} height={50} className="m-auto" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={event6} alt="slide_image" width={50} height={50} className="m-auto" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={event7} alt="slide_image" width={50} height={50} className="m-auto" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={event8} alt="slide_image" width={50} height={50} className="m-auto" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={event9} alt="slide_image" width={50} height={50} className="m-auto" />
                        </SwiperSlide>
                        <div className="slider-controler">
                            <div className="swiper-pagination"></div>
                        </div>
                    </Swiper>
                </div>
            </div>

        </div>
    )
}

export default Wedding