import React from "react";
import heroThumbOne from "@/assets/images/confident-and-successful-student.jpg";
import heroThumbTwo from "@/assets/images/visa-site.jpg";
import shapeTwo from "@/assets/images/shape/shape-2.png";
import shapeThree from "@/assets/images/shape/shape-3.png";
import shapeFour from "@/assets/images/shape/shape-4.png";

function HeroHomeOne({ className }) {
    return (
        <>
            <section className={`appie-hero-area ${className || ""}`}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="appie-hero-content">
                                <span>Welcome To File Abroad</span>
                                <h1 className="appie-title">
                                    Our Motive is to Educate the World.
                                </h1>
                                <p>
                                    Quote By Nelson Mandela that Education is
                                    the most powerful weapon which you can use
                                    to change the world. and we are here for
                                    Fulfill That Mission.
                                </p>
                                <ul>
                                    {/* <li>
                                        <a href="#">
                                            <i className="fab fa-apple" />{" "}
                                            Download for iOS
                                        </a>
                                    </li> */}
                                    <li>
                                        <a
                                            className="item-2"
                                            href={route("quick_search")}
                                        >
                                            Explore Programs
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="appie-hero-thumb">
                                <div
                                    className="thumb wow animated fadeInUp"
                                    data-wow-duration="2000ms"
                                    data-wow-delay="200ms"
                                >
                                    <img
                                        className="rounded"
                                        src={heroThumbOne}
                                        alt=""
                                    />
                                </div>
                                <div
                                    className="thumb-2 wow animated fadeInRight"
                                    data-wow-duration="2000ms"
                                    data-wow-delay="600ms"
                                >
                                    <img
                                        className="rounded"
                                        src={heroThumbTwo}
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero-shape-1">
                    <img src={shapeTwo} alt="" />
                </div>
                <div className="hero-shape-2">
                    <img src={shapeThree} alt="" />
                </div>
                <div className="hero-shape-3">
                    <img src={shapeFour} alt="" />
                </div>
            </section>
        </>
    );
}

export default HeroHomeOne;
