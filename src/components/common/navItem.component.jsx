import React from 'react';
import { Link } from "react-router-dom";

function NavItem({label, urlPath, className}) {
    return (
        <Link className={`nav text-primary mx-10 sm:mx-6 ${className}`} to={urlPath}>
            {label}
        </Link>
    );
}

export default NavItem;


{/* <Link className="nav text-primary mx-10 sm:mx-6" to="/">
Menu
</Link> */}