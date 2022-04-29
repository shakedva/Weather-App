import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom";
import {BrowserRouter, Routes, Route, Outlet, Link} from "react-router-dom";
// import React, {useState} from "react";

import * as React from 'react'
import {useState} from "react";
import Layout from "./Layout"
import Forecast from "./Forecast"
import Locations from "./Locations"
import {LocationProvider, useLocation} from './LocationContext'


// eslint-disable-next-line react-hooks/rules-of-hooks
const [name, setName] = useState("");
// eslint-disable-next-line react-hooks/rules-of-hooks
const [latitude, setLatitude] = useState("");
// eslint-disable-next-line react-hooks/rules-of-hooks
const [longitude, setLongitude] = useState("");



function App()
{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Forecast/>}/>
                    <Route path="Locations" element={<Locations/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}


export default App;


