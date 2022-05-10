import './css/App.css';
//import ReactDOM from "react-dom";
import './css/style.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import * as React from 'react'
import Layout from "./Layout"
import Forecast from "./forcast/Forecast"
import Locations from "./location/Locations"
import {LocationProvider} from './contexts/LocationContext'

/**
 * the main component of our website
 * @returns {JSX.Element}
 * @constructor
 */
function App()
{
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


