import React, { useEffect } from "react";
import useToggle from "@/Hooks/useToggle";
import StickyMenu from "@/lib/StickyMenu";
import FooterHomeOne from "@/Components/FooterHomeOne";
import Drawer from "@/Mobile/Drawer";
import HeroNews from "@/News/HeroNews";
import Forms from "@/Contact/Forms";
import HeaderService from "@/Service/HeaderService";
import HeaderServiceTwo from "@/Service/HeaderServiceTwo";

function Contact(props) {
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
            <HeroNews title="Contact Us" />
            <Forms />
            <FooterHomeOne />
            {/* <BackToTop /> */}
        </>
    );
}

export default Contact;
