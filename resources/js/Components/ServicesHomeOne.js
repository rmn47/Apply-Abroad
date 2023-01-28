import React, { useRef } from "react";
import IconOne from "@/assets/images/icon/studenticon_ImageSaizeReducer.jpg";
import IconTwo from "@/assets/images/icon/schoolicon_ImageSaizeReducer.jpg";
import IconThree from "@/assets/images/icon/partnericon_ImageSaizeReducer.jpg";

function ServicesHomeOne({ className }) {
    return (
        <section
            className={`appie-service-area pt-90 pb-100 ${className}`}
            id="service"
        >
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="appie-section-title text-center">
                            <h3 className="appie-title">
                                We are leading <br />
                                in education industry!.
                            </h3>
                            <p>
                                We are committed to give you the best experience
                                Just apply with us and relax!.{" "}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div
                            className="appie-single-service text-center mt-30 wow animated fadeInUp"
                            data-wow-duration="2000ms"
                            data-wow-delay="200ms"
                        >
                            <div className="icon">
                                <img
                                    className="rounded h-100"
                                    src={IconOne}
                                    alt=""
                                />
                            </div>
                            <h4 className="appie-title">For Students</h4>
                            <p>
                                Get matched with programmes and schools that fit
                                your experience, abilities, and interests, then
                                apply.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div
                            className="appie-single-service text-center mt-30 item-2 wow animated fadeInUp"
                            data-wow-duration="2000ms"
                            data-wow-delay="400ms"
                        >
                            <div className="icon">
                                <img
                                    className="rounded h-100"
                                    src={IconTwo}
                                    alt=""
                                />
                            </div>
                            <h4 className="appie-title">For Schools</h4>
                            <p>
                                Attract competent students & sharp minds from
                                all over the world to diversify your
                                institution.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div
                            className="appie-single-service text-center mt-30 item-3 wow animated fadeInUp"
                            data-wow-duration="2000ms"
                            data-wow-delay="600ms"
                        >
                            <div className="icon">
                                <img
                                    className="rounded h-100"
                                    src={IconThree}
                                    alt=""
                                />
                            </div>
                            <h4 className="appie-title">For Partners</h4>
                            <p>
                                With access to over 1,500 educational
                                institutions, you can provide your student the
                                best opportunity for success.
                            </p>
                        </div>
                    </div>
                    {/* <div className="col-lg-3 col-md-6">
                        <div
                            className="appie-single-service text-center mt-30 item-4 wow animated fadeInUp"
                            data-wow-duration="2000ms"
                            data-wow-delay="800ms"
                        >
                            <div className="icon">
                                <img src={IconFour} alt="" />
                                <span>4</span>
                            </div>
                            <h4 className="appie-title">Suporting</h4>
                            <p>Mucker plastered bugger all mate morish are.</p>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    );
}

export default ServicesHomeOne;
