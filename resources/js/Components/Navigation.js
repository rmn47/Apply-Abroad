import React from "react";
import { Head, Link, useForm } from "@inertiajs/inertia-react";
import "bootstrap/dist/css/bootstrap.min.css";

function Navigation() {
    return (
        <>
            <ul>
                <li className="text-decoration-none">
                    <Link href={"/"}>Home</Link>
                </li>

                <li className="text-decoration-none">
                    <Link href={route("about")}>About Us</Link>
                </li>
                <li className="text-decoration-none">
                    <Link href={route("service")}>Services</Link>
                </li>
                <li className="text-decoration-none">
                    <Link href={route("blog")}>Blogs</Link>
                </li>
                <li className="text-decoration-none">
                    <Link href={route("contact")}>Contact Us</Link>
                </li>
            </ul>
        </>
    );
}

export default Navigation;
