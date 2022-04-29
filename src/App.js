import './App.css';
import ReactDOM from "react-dom";
import {BrowserRouter, Routes, Route, Outlet, Link} from "react-router-dom";
import * as React from 'react'
import Layout from "./Layout"
import Forecast from "./Forecast"
import Locations from "./Locations"
import {LocationProvider} from './LocationContext'

function App() {
    return (
        <LocationProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<Forecast/>}/>
                        <Route path="Locations" element={<Locations/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </LocationProvider>
    );
}


export default App;


