import React from 'react'
import './Guests.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Guests = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    return (
        <>
            <div className="guests">
                <div className="guests_title">

                    <h1>Featured Guests</h1>

                    <div className="guests_cards">
                        <div className="container">
                        <Slider {...settings}>
                            <div className="slide1">
                            <div className="guests_card">
                                <div className="guests_card_img">
                                    <img src="https://preview.colorlib.com/theme/podca/images/person_1.jpg.webp" alt="" />
                                </div>
                                <div className="guests_card_name">
                                    <p>Megan Smith</p>
                                </div>
                                <div className="guests_card_desc">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga in nulla alias necessitatibus soluta error.</p>
                                </div>
                            </div>
                            </div>
                            <div className="slide2">
                            <div className="guests_card">
                                <div className="guests_card_img">
                                    <img src="https://preview.colorlib.com/theme/podca/images/person_2.jpg.webp" alt="" />
                                </div>
                                <div className="guests_card_name">
                                    <p>Megan Smith</p>
                                </div>
                                <div className="guests_card_desc">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga in nulla alias necessitatibus soluta error.</p>
                                </div>
                            </div>
                            </div>
                            <div className="slide3">
                            <div className="guests_card">
                                <div className="guests_card_img">
                                    <img src="https://preview.colorlib.com/theme/podca/images/person_3.jpg.webp" alt="" />
                                </div>
                                <div className="guests_card_name">
                                    <p>Lorem, ipsum.</p>
                                </div>
                                <div className="guests_card_desc">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga in nulla alias necessitatibus soluta error.</p>
                                </div>
                            </div>
                            </div>
                            <div className="slide4">
                            <div className="guests_card">
                                <div className="guests_card_img">
                                    <img src="https://preview.colorlib.com/theme/podca/images/person_4.jpg.webp" alt="" />
                                </div>
                                <div className="guests_card_name">
                                    <p>Lorem, ipsum.</p>
                                </div>
                                <div className="guests_card_desc">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga in nulla alias necessitatibus soluta error.</p>
                                </div>
                            </div>
                            </div>
                            <div className="slide5">
                            <div className="guests_card">
                                <div className="guests_card_img">
                                    <img src="https://preview.colorlib.com/theme/podca/images/person_5.jpg.webp" alt="" />
                                </div>
                                <div className="guests_card_name">
                                    <p>Lorem, ipsum.</p>
                                </div>
                                <div className="guests_card_desc">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga in nulla alias necessitatibus soluta error.</p>
                                </div>
                            </div>
                            </div>
                            <div className="slide6">
                            <div className="guests_card">
                                <div className="guests_card_img">
                                    <img src="https://preview.colorlib.com/theme/podca/images/person_6.jpg.webp" alt="" />
                                </div>
                                <div className="guests_card_name">
                                    <p>Lorem, ipsum.</p>
                                </div>
                                <div className="guests_card_desc">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga in nulla alias necessitatibus soluta error.</p>
                                </div>
                            </div>
                            </div>
                        </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Guests