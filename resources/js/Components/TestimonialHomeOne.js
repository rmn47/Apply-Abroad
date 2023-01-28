import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import user from "@/assets/images/testimonial-user.png";

function TestimonialHomeOne({ className }) {
    const sliderRef = useRef();
    const sliderNext = () => {
        sliderRef.current.slickNext();
    };
    const sliderPrev = () => {
        sliderRef.current.slickPrev();
    };
    return (
        <section
            className={`appie-testimonial-area pt-100 pb-160 ${
                className || ""
            }`}
            id="testimonial"
        >
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div
                            className="appie-testimonial-slider"
                            style={{ position: "relative" }}
                        >
                            <span
                                className="prev slick-arrow"
                                style={{ display: "block" }}
                                onClick={sliderNext}
                                role="button"
                                tabIndex="0"
                            >
                                <i className="fal fa-arrow-left" />
                            </span>
                            <Slider ref={sliderRef} dots arrows={false}>
                                <div className="appie-testimonial-item text-center">
                                    <div className="text">
                                        <p className="mt-12">
                                            1500+ institutions that meet your
                                            needs, .
                                        </p>
                                    </div>
                                </div>
                                <div className="appie-testimonial-item text-center">
                                    <div className="text">
                                        <p className="mt-12">
                                            1000+ Partners in our Network around
                                            the world.
                                        </p>
                                    </div>
                                </div>
                                <div className="appie-testimonial-item text-center">
                                    <div className="text mt-4">
                                        <p className="mt-12">
                                            1000s of satisfied students who find
                                            their dream institution through us.
                                        </p>
                                    </div>
                                </div>
                            </Slider>
                            <span
                                onClick={sliderPrev}
                                role="button"
                                tabIndex="-1"
                                className="next slick-arrow"
                                style={{ display: "block" }}
                            >
                                <i className="fal fa-arrow-right" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TestimonialHomeOne;
