import "./App.css";
import { BrowserRouter as Router, Link, matchRoutes, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import ErrorPage from "./pages/404/404Page";
import AboutPage from "./pages/about-faqs/AboutPage";
import ProfilePage from "./pages/Profile/ProfilePage";
import TaskListComponent from "./components/containers/task_list";
import TaskDetailsComponents from "./pages/tasks/TaskDetailsComponents";
import LoginPage from "./pages/auth/LoginPage";
import Loginform from "./components/pure/forms/loginForm";
import { useEffect } from "react";
import PropsPage from "./pages/home/PropsPage";
import DashBoard from "./pages/dashboard/DashBoard";
import RegisterForm from "./components/pure/forms/registerForm";

function AppRouting() {
  let logged = false

  useEffect(() => {
    logged = localStorage.getItem("log");
    console.log(logged)
  }, []);
  return (
    <Router>
      <div>
        <aside>
          <Link to="/">| Home |</Link>
          <Link to="/profile">| Profile |</Link>
          <Link to="/login">| Login |</Link>
          <Link to="/register">| Register |</Link>
          <Link to="/about">| About |</Link>
          <Link to="/faqs">| FAQS |</Link>
          <Link to="/task">| TaskList |</Link>
        </aside>
        <main>
          <Routes>
            <Route path="/" element={<DashBoard />} />
            <Route path="/onlineState" element={<PropsPage />} />
            <Route
              path="/profile"
              element={logged=true ? <ProfilePage /> : <Loginform />}
            />
            <Route path="/login"  element={<Loginform />} />
            <Route
              path="/login"
              element={logged=true  ? <DashBoard /> : <Loginform />}
            />
             <Route path="/register" element={<RegisterForm />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/faqs" element={<AboutPage />} />
            <Route path="/task" element={logged=true  ? <TaskListComponent /> : <Loginform />} />

            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default AppRouting;
