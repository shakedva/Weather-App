import {Link, Outlet} from "react-router-dom";
import React from "react";

import "./App";

/**
 * the layout component of our pages to navigate
 * @returns {JSX.Element}
 * @constructor
 */
function Layout() {
    return (
        <div className={"navSection"}>
            <nav>
                <Link to="/" className={"btn btn-outline-info"}> Forecast</Link>
                <span>&nbsp;</span>
                <Link to="/Locations" className={"btn btn-outline-info"}> Locations</Link>
                <div><br/></div>
            </nav>
            <Outlet/>
        </div>
    )
}

export default Layout;
