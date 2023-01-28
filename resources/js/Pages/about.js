import React from "react";
import useToggle from "@/Hooks/useToggle";
import FooterHomeOne from "@/Components/FooterHomeOne";
import Drawer from "@/Mobile/Drawer";
import HeroAbout from "@/AboutUs/HeroAbout";
import ServicesAbout from "@/AboutUs/ServicesAbout";
import TeamHomeOne from "@/Components/TeamHomeOne";
import HomeOneHeader from "@/Components/HomeOneHeader";
import HomeTwoHeader from "@/Components/HomeTwoHeader";

function AboutUs(props) {
    const [drawer, drawerAction] = useToggle(false);

    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            {props.auth.user ? (
                <HomeOneHeader action={drawerAction.toggle} />
            ) : (
                <HomeTwoHeader action={drawerAction.toggle} />
            )}
            <HeroAbout />
            <ServicesAbout />
            <TeamHomeOne />
            <FooterHomeOne className="appie-footer-about-area" />
        </>
    );
}

export default AboutUs;
