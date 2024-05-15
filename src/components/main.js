import React from "react";
import {Route, Routes} from 'react-router-dom';
import { Divider } from "@chakra-ui/react";
import Homepage from "./homepage";
import BookingPage from 'components/bookingPage';
import Conform from 'components/confirmpage';
// import UnderConstruction from "components/UnderConstruction/underconstruction";
import About from "components/About/About";
import Menu from 'components/Menu/menu';

function Main(){
    return (
        <Routes>
        <Route path="/" element={<Homepage />}> </Route>
        <Route path="/booking" element={<BookingPage />}></Route>
        <Route path="/confirm" element={<Conform/>}></Route>
        <Route path='/about' element={<> <Divider /> <About /></>}/>
        <Route path='/menu' element={<Menu />}/>
        </Routes>
    );
}

export default Main;