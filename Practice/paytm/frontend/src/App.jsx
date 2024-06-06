import {BrowserRouter, Routes, Route} from "react-router-dom"
import { SignUp } from "./pages/SignUp.jsx"
import { SignIn } from "./pages/SignIn";
import { Dashboard } from "./pages/Dashboard";
import { SendMoney } from "./pages/SendMoney";

export default function App() {
  return<>
  <BrowserRouter>
    <Routes>
      <Route path="/signup" element={<SignUp/>}/>
      {/* <Route path="/signin" element={<SignIn/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/send" element={<SendMoney/>}/> */}
    </Routes>
  </BrowserRouter>
  </>
}