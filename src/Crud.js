import React from "react";
import Create from "./component/Create";
import { Route, Routes } from "react-router-dom";
import Read from "./component/Read";
import Edit from "./component/Edit";

function Crud() {
  return (
    <div className="container">
    <Routes>
      <Route exact path="/" element={<Read/>}></Route>
      <Route exact path="/create" element={<Create/>}></Route>
      <Route exact path="/edit" element={<Edit/>}></Route>
    </Routes>
    </div>
  );
}

export default Crud;
