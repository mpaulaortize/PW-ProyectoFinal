import React from "react";
import { AuthProvider } from "./auth/firebase/authContext"; 

import PrivateRoute from "./pages/router/PrivateRouter";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import OurPeople from "./pages/OurPeoplePage/OurPeoplePage";
import ContactUs from "./pages/ContactUsPage/ContactUsPage";
import WorkPage from "./pages/WorkPage/WorkPage";
import UploadWork from "./pages/UploadWork/Uploadwork";
import { Landing } from "./pages/LandingPage/LandingPage";
import { Login } from "./pages/LoginPage/LoginPage";

export function App() {
  return (
    <>
      <div>
        <AuthProvider>
            <NavBar /> 
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/work" element={<WorkPage />} />
              <Route path="/sobre-nosotros" element={<OurPeople />} />
              <Route path="/contacto" element={<ContactUs />} />
              <Route path="/Upload" element={<UploadWork />} />
              <Route path="/Login" element={<Login />} />
              <Route
                path="/Upload"
                element={
                  <PrivateRoute>
                    <UploadWork />
                  </PrivateRoute>
                }
              />
            </Routes>
        </AuthProvider>    
      </div>
    </>
  );
}
