import {Link, Outlet} from "react-router-dom";
import React from "react";

import App from "./App";

function Layout () {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Forecast</Link>
                    </li>
                    <li>
                        <Link to="/Locations">Locations</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}

export default Layout;
