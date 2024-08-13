import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/About";
import NoPage from "./pages/NoPage";
import SignUp from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";

const App = () => {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Route>
        <Route path="*" element={<NoPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App