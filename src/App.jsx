import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NoPage from "./pages/NoPage";
import SignUp from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import Blog from "./components/Blog";
import About from "./components/About";

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
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/contact-me" element={<About />}></Route>
          <Route path="/portfolio" element={<Home />}></Route>
          <Route path="/resume" element={<About />}></Route>
        </Route>
        <Route path="*" element={<NoPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App