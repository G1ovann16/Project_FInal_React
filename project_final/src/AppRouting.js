import "./App.css";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import ErrorPage from "./pages/404/404Page";
import AboutPage from "./pages/about-faqs/AboutPage";
import ProfilePage from "./pages/Profile/ProfilePage";
import TaskListComponent from "./components/containers/task_list";
import TaskDetailsComponents from "./pages/tasks/TaskDetailsComponents";
import DashBoard from "./pages/dashboard/DashBoard";
import Loginform from "./components/pure/forms/loginForm";

function AppRouting() {
  return (
    <Router>
      <div>
        <aside>
          <Link to="/">| Home |</Link>
          <Link to="/profile">| Profile |</Link>
          <Link to="/about">| About |</Link>
          <Link to="/Login">| FAQS |</Link>
          <Link to="/faqs">| FAQS |</Link>
          <Link to="/task">| TaskList |</Link>
          
        </aside>
        <main>
          <Routes>
            <Route path="/" element={<DashBoard />} />
            <Route path="/profile"  element={<ProfilePage />} />
            <Route path="/login"  element={<Loginform />} />
            <Route path="/about"  element={<AboutPage />} />
            <Route path="/faqs"  element={<AboutPage />} />
            <Route path="/task"  element={<TaskListComponent />} />
            <Route path="/task/:id"  element={<TaskDetailsComponents />} />

            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default AppRouting;
