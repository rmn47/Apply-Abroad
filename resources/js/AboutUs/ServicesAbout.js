import React from "react";
import IconOne from "@/assets/images/icon/studenticon_ImageSaizeReducer.jpg";
import IconTwo from "@/assets/images/icon/schoolicon_ImageSaizeReducer.jpg";
import IconThree from "@/assets/images/icon/partnericon_ImageSaizeReducer.jpg";

function ServicesAbout() {
    return (
        <>
            <section className="appie-services-2-area pt-90 pb-55" id="service">
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-lg-12 col-md-12">
                            <div className="appie-section-title">
                                <h3 className="appie-title text-center fst-italic">
                                    Facts
                                </h3>
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
                                <h4 className="appie-title">
                                    300,000+ Students Assisted
                                </h4>
                                <p>
                                    Get matched with programmes and schools that
                                    fit your experience, abilities, and
                                    interests, then apply.
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
                                <h4 className="appie-title">
                                    1,500+ Partner Schools
                                </h4>
                                <p>
                                    Attract competent students & sharp minds
                                    from all over the world to diversify your
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
                                <h4 className="appie-title">
                                    10,000+ Recruitment Partners
                                </h4>
                                <p>
                                    you can provide your student the best
                                    opportunity for success.
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
        </>
    );
}

export default ServicesAbout;
