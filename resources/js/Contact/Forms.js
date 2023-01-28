import React from "react";

function Forms() {
    return (
        <>
            <section className="contact-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="contact--info-area">
                                <h3>Get in touch</h3>

                                <div className="single-info">
                                    <h5 className="mt-4">Headquaters</h5>
                                    <p>
                                        <i className="fal fa-home"></i>
                                        DSS 41, Huda Complex Op Town park,
                                        <br /> Haryana 125055
                                    </p>
                                </div>
                                <div className="single-info">
                                    <h5>Phone</h5>
                                    <p>
                                        <i className="fal fa-phone"></i>
                                        +91 90618 90618
                                    </p>
                                </div>
                                <div className="single-info">
                                    <h5>Support</h5>
                                    <p>
                                        <i className="fal fa-envelope"></i>
                                        enquiry@firstflightae.com
                                    </p>
                                </div>
                                <div className="ab-social">
                                    <h5>Follow Us</h5>
                                    <a className="fac" href="#">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a className="twi" href="#">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a className="you" href="#">
                                        <i className="fab fa-youtube"></i>
                                    </a>
                                    <a className="lin" href="#">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            {/* <div className="contact-form">
                                <h4>Let’s Connect</h4>
                                <p>Integer at lorem eget diam facilisis lacinia ac id massa.</p>
                                <form action="#" method="post" className="row">
                                    <div className="col-md-6">
                                        <input type="text" name="f-name" placeholder="First Name" />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" name="l-name" placeholder="Last Name" />
                                    </div>
                                    <div className="col-md-6">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email Address"
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <input
                                            type="number"
                                            name="phone"
                                            placeholder="Phone Number"
                                        />
                                    </div>
                                    <div className="col-md-12">
                                        <input type="text" name="suject" placeholder="Subject" />
                                    </div>
                                    <div className="col-md-12">
                                        <textarea
                                            name="message"
                                            placeholder="How can we help?"
                                        ></textarea>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="condition-check">
                                            <input id="terms-conditions" type="checkbox" />
                                            <label htmlFor="terms-conditions">
                                                I agree to the <a href="#">Terms & Conditions</a>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-md-6 text-right">
                                        <input type="submit" name="submit" value="Send Message" />
                                    </div>
                                </form>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>

            <div className="bisylms-map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d867.8417187756813!2d75.03371092920294!3d29.534808398879417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39114d6ef4bc4643%3A0x5e080b932c9987cd!2sFirst%20Flight%20Abroad%20Education%20Pvt.%20Ltd.%20(%20Best%20Study%20Visa%20Consultant%20)!5e0!3m2!1sen!2sin!4v1656491024326!5m2!1sen!2sin"
                    width="600"
                    title="map"
                    height="450"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </>
    );
}

export default Forms;
