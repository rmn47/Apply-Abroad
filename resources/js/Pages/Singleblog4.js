import React from "react";
import { Head, Link } from "@inertiajs/inertia-react";
import useToggle from "@/Hooks/useToggle";
// import BackToTop from "@/BackToTop";
import FooterHomeOne from "@/Components/FooterHomeOne";
import Drawer from "@/Mobile/Drawer";
import Blogdata from "@/News/Blogdata4";
// import BlogSideBar from "@/BlogSideBar";
// import HeaderNews from "@/HeaderNews";
// import HeaderServiceTwo from "@/Service/HeaderServiceTwo";
import HeroNews from "@/News/HeroNews";
import HeaderServiceTwo from "@/Service/HeaderServiceTwo";

function Singleblog4(props, link) {
    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />

            <HeaderServiceTwo action={drawerAction.toggle} />
            <HeroNews title="Want a Canadian Study Visa? Here are the steps" />
            <section className="blogpage-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2 col-md-2"></div>
                        <div className="col-lg-8 col-md-7">
                            <Blogdata />
                        </div>
                        <div className="col-lg-2 col-md-2"></div>
                    </div>
                </div>
            </section>
            <FooterHomeOne />
            {/* <BackToTop /> */}
        </>
    );
}

export default Singleblog4;
