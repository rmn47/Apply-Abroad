import React, { useEffect } from "react";
import logo from "@/assets/images/logo-7.png";
import { Link, Head } from "@inertiajs/inertia-react";
import Navigation from "@/Components/Navigation";
import ApplicationLogo from "@/Components/ApplicationLogo";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/assets/css/custom-animated.css";
import "@/assets/css/default.css";
import "@/assets/css/font-awesome.min.css";
import "@/assets/css/magnific-popup.css";
import "@/assets/css/magnific.dark.css";
import "@/assets/css/magnific.rtl.css";
import "@/assets/css/main.css";
import "@/assets/css/style.css";
import StickyMenu from "@/lib/StickyMenu";

function HeaderService({ action }) {
    useEffect(() => {
        StickyMenu();
    });
    return (
        <>
            <header className="appie-header-area appie-header-page-area appie-sticky">
                <div className="container">
                    <div className="header-nav-box header-nav-box-3 header-nav-box-inner-page">
                        <div className="row align-items-center">
                            <div className="col-lg-2 col-md-4 col-sm-5 col-6 order-1 order-sm-1">
                                <div className="appie-logo-box">
                                    <Link href={"/"}>
                                        <ApplicationLogo />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-1 col-sm-1 order-3 order-sm-2">
                                <div className="appie-header-main-menu">
                                    <Navigation />
                                </div>
                            </div>
                            <div className="col-lg-4  col-md-7 col-sm-6 col-6 order-2 order-sm-3">
                                <div className="appie-btn-box text-right">
                                    <Link
                                        href={route("dashboard")}
                                        className="main-btn ml-30 text-decoration-none"
                                    >
                                        Dashboard
                                    </Link>

                                    <div
                                        onClick={(e) => action(e)}
                                        className="toggle-btn ml-30 canvas_open d-lg-none d-block"
                                    >
                                        <i className="fa fa-bars" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default HeaderService;
