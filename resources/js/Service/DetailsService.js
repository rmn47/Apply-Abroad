import React from "react";
import thumb from "@/assets/images/Service-image.jpg";

function DetailsService() {
    return (
        <>
            <section className="appie-service-details-area pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="service-details-sidebar mr-50">
                                <div className="service-category-widget">
                                    <ul>
                                        <li>
                                            Helping Students Achieve Success
                                        </li>
                                        <li>Caring About Each Other</li>
                                        <li>
                                            Delivering A+ Customer Experience
                                        </li>
                                        <li>Taking Ownership</li>
                                        <li>Innovating and Improving</li>
                                        <li>Making Work Fun</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="service-details-content">
                                <div className="thumb">
                                    <img src={thumb} alt="" />
                                </div>
                                <div className="content">
                                    <h3 className="title">
                                        What we're Providing
                                    </h3>
                                    <p>
                                        File Abroad simplifies the study abroad
                                        search, application, and acceptance
                                        process by connecting international
                                        students, recruitment partners, and
                                        academic institutions on one platform.
                                        We’ve built partnerships with 1,500+
                                        primary, secondary, and post-secondary
                                        educational institutions, and work with
                                        10,000+ recruitment partners to drive
                                        diversity on campuses across Canada, the
                                        United States, the United Kingdom, and
                                        Australia. File Abroad has grown to
                                        become the world’s largest online
                                        platform for international student
                                        recruitment, assisting more than 300,000
                                        students with their educational
                                        journeys. Our team has grown rapidly in
                                        the past six years, and we now have
                                        1,500+ team members across the globe.
                                        The File Abroad headquarters is located
                                        in City, ON, with representatives in
                                        more than 25 other countries including
                                        India, China, Vietnam, the Philippines,
                                        Nepal, Bangladesh, the United Kingdom,
                                        Australia, and the United States.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default DetailsService;
