import React, { useEffect } from "react";
import useToggle from "@/Hooks/useToggle";
import FooterHomeOne from "@/Components/FooterHomeOne";
import Drawer from "@/Mobile/Drawer";
import StickyMenu from "@/lib/StickyMenu";
import Blogs from "@/News/Blogs";
import HeroNews from "@/News/HeroNews";
import HeaderService from "@/Service/HeaderService";
import HeaderServiceTwo from "@/Service/HeaderServiceTwo";

function blogs(props) {
    useEffect(() => {
        StickyMenu();
    });
    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            {props.auth.user ? (
                <HeaderService action={drawerAction.toggle} />
            ) : (
                <HeaderServiceTwo action={drawerAction.toggle} />
            )}
            <HeroNews title="Blogs" />
            <section className="blogpage-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2 col-md-3">
                            {/* <Blogs /> */}
                        </div>
                        <div className="col-lg-8 col-md-6">
                            <Blogs />
                        </div>
                        <div className="col-lg-2 col-md-3">
                            {/* <Blogs /> */}
                        </div>
                        {/* <div className="col-lg-4 col-md-5">
                            <BlogSideBar />
                        </div> */}
                    </div>
                </div>
            </section>
            <FooterHomeOne />
            {/* <BackToTop /> */}
        </>
    );
}

export default blogs;
