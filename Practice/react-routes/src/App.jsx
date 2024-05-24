import {BrowserRouter, Routes,Route} from "react-router-dom"
import React from "react"
const Dashboard = React.lazy(() => import("../components/Dashboard"));
const Landing = React.lazy(() => import("../components/Landing"));
import { Navbar } from "../components/Navbar";
import { Suspense } from "react";


function App () {
  return <>
  <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/dashboard" element={<Suspense fallback="loading.."><Dashboard /></Suspense>}/>
      <Route path="/landing" element={<Suspense fallback="loading.."><Landing /></Suspense>}/>
    </Routes>
  </BrowserRouter>
  </>
}

export default App;