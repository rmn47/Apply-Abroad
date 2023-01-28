import React from "react";
import { Head, Link } from "@inertiajs/inertia-react";
import blogImg1 from "@/assets/images/single-post/visa-blogs.jpg";
import blogImg2 from "@/assets/images/single-post/blog-uk.jpg";
import blogImg3 from "@/assets/images/single-post/blog-nz.jpg";
import blogImg4 from "@/assets/images/single-post/blog-canada.jpg";
import blogImg5 from "@/assets/images/single-post/blog-aus2.jpg";
// import blogImg6 from "@/assets/images/blog-img/6.jpg";
// import blogImg7 from "@/assets/images/blog-img/7.jpg";
// import blogImg8 from "@/assets/images/blog-img/8.jpg";

function Blogs() {
    return (
        <>
            <div className="row">
                <div className="col-lg-6">
                    <div className="post-item-1">
                        <img src={blogImg1} alt="" />
                        <div className="b-post-details">
                            <div className="bp-meta">
                                <Link>
                                    <i className="fal fa-clock"></i>April 22,
                                    2020
                                </Link>
                                <Link>
                                    <i className="fal fa-comments"></i>6
                                    Comments
                                </Link>
                            </div>
                            <h3>
                                <Link href={route("Sblog1")}>
                                    Visa & Migration To Australia
                                </Link>
                            </h3>
                            <Link className="read-more" href={route("Sblog1")}>
                                Read More<i className="fal fa-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="post-item-1">
                        <img src={blogImg2} alt="" />
                        <div className="b-post-details">
                            <div className="bp-meta">
                                <Link>
                                    <i className="fal fa-clock"></i>April 22,
                                    2020
                                </Link>
                                <Link>
                                    <i className="fal fa-comments"></i>6
                                    Comments
                                </Link>
                            </div>
                            <h3>
                                <Link href={route("Sblog2")}>
                                    Need to fulfil your dream of studying in UK?
                                    Know all about the UK student visa.
                                </Link>
                            </h3>
                            <Link className="read-more" href={route("Sblog2")}>
                                Read More<i className="fal fa-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="post-item-1">
                        <img src={blogImg3} alt="" />
                        <div className="b-post-details">
                            <div className="bp-meta">
                                <Link>
                                    <i className="fal fa-clock"></i>April 22,
                                    2020
                                </Link>
                                <Link>
                                    <i className="fal fa-comments"></i>6
                                    Comments
                                </Link>
                            </div>
                            <h3>
                                <Link href={route("Sblog3")}>
                                    Your complete guide to study in NZ
                                </Link>
                            </h3>
                            <Link className="read-more" href={route("Sblog3")}>
                                Read More<i className="fal fa-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="post-item-1">
                        <img src={blogImg4} alt="" />
                        <div className="b-post-details">
                            <div className="bp-meta">
                                <Link>
                                    <i className="fal fa-clock"></i>April 22,
                                    2020
                                </Link>
                                <Link>
                                    <i className="fal fa-comments"></i>6
                                    Comments
                                </Link>
                            </div>
                            <h3>
                                <Link href={route("Sblog4")}>
                                    Want a Canadian Study Visa? Here are the
                                    steps
                                </Link>
                            </h3>
                            <Link className="read-more" href={route("Sblog4")}>
                                Read More<i className="fal fa-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="post-item-1">
                        <img src={blogImg5} alt="" />
                        <div className="b-post-details">
                            <div className="bp-meta">
                                <Link>
                                    <i className="fal fa-clock"></i>April 22,
                                    2020
                                </Link>
                                <Link>
                                    <i className="fal fa-comments"></i>6
                                    Comments
                                </Link>
                            </div>
                            <h3>
                                <Link href={route("Sblog5")}>
                                    Things to know before Studying in Australia
                                </Link>
                            </h3>
                            <Link className="read-more" href={route("Sblog5")}>
                                Read More<i className="fal fa-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="post-item-1">
                        {/* <img src={blogImg6} alt="" /> */}
                        <div className="b-post-details">
                            <div className="bp-meta">
                                <Link>
                                    <i className="fal fa-clock"></i>April 22,
                                    2020
                                </Link>
                                <Link>
                                    <i className="fal fa-comments"></i>6
                                    Comments
                                </Link>
                            </div>
                            <h3>
                                <Link href="/news/single-news">
                                    Why to choose Singapore for higher studies?
                                </Link>
                            </h3>
                            <Link className="read-more" href="single-post.html">
                                Read More<i className="fal fa-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Blogs;
