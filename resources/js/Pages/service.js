import React, { useEffect } from "react";
import useToggle from "@/Hooks/useToggle";
import StickyMenu from "@/lib/StickyMenu";
import FooterHomeOne from "@/Components/FooterHomeOne";
import Drawer from "@/Mobile/Drawer";
import DetailsService from "@/Service/DetailsService";
import HeaderService from "@/Service/HeaderService";
import HeaderServiceTwo from "@/Service/HeaderServiceTwo";
import HeroService from "@/Service/HeroService";
import { Head } from "@inertiajs/inertia-react";

function Service(props) {
    useEffect(() => {
        StickyMenu();
    });
    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
            <Head />
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            {props.auth.user ? (
                <HeaderService action={drawerAction.toggle} />
            ) : (
                <HeaderServiceTwo action={drawerAction.toggle} />
            )}
            <HeroService />
            <DetailsService />
            <FooterHomeOne />
        </>
    );
}

export default Service;
