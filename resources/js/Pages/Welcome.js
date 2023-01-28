import React, { useEffect } from "react";
import useToggle from "@/Hooks/useToggle";
import { Link, Head } from "@inertiajs/inertia-react";
import Navigation from "@/Components/Navigation";
import ApplicationLogo from "@/Components/ApplicationLogo";
import logo from "@/assets/images/logo.png";
import "@/assets/css/bootstrap.min.css";
import "@/assets/css/custom-animated.css";
import "@/assets/css/default.css";
import "@/assets/css/font-awesome.min.css";
import "@/assets/css/magnific-popup.css";
import "@/assets/css/magnific.dark.css";
import "@/assets/css/magnific.rtl.css";
import "@/assets/css/main.css";
import "@/assets/css/style.css";
import HeroHomeOne from "@/Components/HeroHomeOne";
import ServicesHomeOne from "@/Components/ServicesHomeOne";
import TestimonialHomeOne from "@/Components/TestimonialHomeOne";
import TeamHomeOne from "@/Components/TeamHomeOne";
import FooterHomeOne from "@/Components/FooterHomeOne";
import Drawer from "@/Mobile/Drawer";
import HomeOneHeader from "@/Components/HomeOneHeader";
import HomeTwoHeader from "@/Components/HomeTwoHeader";

export default function Welcome(props) {
    const [drawer, drawerAction] = useToggle(false);

    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            {/* <Head title="Welcome" /> */}
            {/* action={drawerAction.toggle} */}
            {props.auth.user ? (
                <HomeOneHeader action={drawerAction.toggle} />
            ) : (
                <HomeTwoHeader action={drawerAction.toggle} />
            )}
            <HeroHomeOne />
            <ServicesHomeOne />
            <TestimonialHomeOne />
            <TeamHomeOne />
            <FooterHomeOne />
        </>
    );
}
