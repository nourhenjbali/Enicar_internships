import React from "react";
import "./app.scss";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/login";
import Register from "./Components/register";
import {
  Analytics,
  DashboardPreview,
  Distribution,
  Feature,
  Footer,
  Home,
  Navbar,
  Internships,
  Training,
  STTop,
  Admin,
  Edit,
  Courses,
  Add,
} from "./Components";

const App = () => {
  return (
    <Routes>
      <Route path="/register" element={<Register/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/Add" element={<Add />} />
      <Route path="/Edit/:id" element={<Edit />} />
      <Route path="/Admin" element={<Admin />}></Route>
      <Route path="/Courses" element={<Courses />}></Route>
      <Route path="/Training" element={<Training />}></Route>
      <Route path="/Internships" element={<Internships />}></Route>
      <Route
        path="/"
        element={
          <div className="app">
            <Navbar />
            <Home />
            <DashboardPreview />
            <Analytics />
            <Feature />
            <Distribution />
            <Footer />
            <STTop />
          </div>
        }
      />
    </Routes>
  );
};

export default App;
