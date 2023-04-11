import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Homepage";

const AppRoutes = () =>{
    return(
       <Routes>
        <Route path="/" element={ <Landing />}></Route>
       </Routes>
    );
};

export default AppRoutes;