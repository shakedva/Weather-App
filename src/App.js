import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom";
import {BrowserRouter, Routes, Route, Outlet, Link} from "react-router-dom";
import React from "react";
import Layout from "./Layout"
import Forecast from "./Forecast"
import Locations from "./Locations"
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


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


