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
                <Link to="/" className={"btn btn-outline-info"}>
                    <img src="/images/partly_cloudy_day24.png" alt={"forecast"}/>
                    <span>Forecast</span>
                </Link>
                <span>&nbsp;</span>
                <Link to="/Locations" className={"btn btn-outline-info"}>
                    <img src="/images/globe24.png" alt={"locations"}/>
                    <span>Locations</span>
                </Link>
                <div><br/></div>
            </nav>
            <Outlet/>
        </div>
    )
}

export default Layout;
