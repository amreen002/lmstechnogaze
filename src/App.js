import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Logins from './Routers/loginRouter';
import Dashboards from './Routers/dashboardsRouter';
import AddUserRouters from './Routers/addUserRouter';
import AccountUserRouters from './Routers/accountUserRouters.js';
import UserListRouters from './Routers/listUserRouters.js';
import UserViewsRouters from './Routers/viewsUserRouters.js';
import AddSaleTeamRouters from './Routers/addsaleteamRouters.js';
import TeleCallerRouters from './Routers/telecallerRouters.js';
import TeleCallerTeamRouters from './Routers/telecallerteamRouters.js'
import RoleRouters from './Routers/roleRouters.js'
import FrontDeskRouters from './Routers/frontdeskRouters.js'
import CoursesRouters from './Routers/CoursesRouters.js'
import FrontDeskListRouters from './Routers/frontdesklistRouters.js'
import CounselorDepartmentRouters from './Routers/counselordepartmentRouters.js'
import TeachersRouters from './Routers/teachersRouters.js'
import TeachersAddRouters from './Routers/teachersaddRouters.js'
import StudentRouters from './Routers/studentRouters.js'
import BatchesRouters from './Routers/batchesRouters'
import QuizzeRouters from "./Routers/quizzeRouters";
import CoursesReportsRouters from "./Routers/coursesreportsRouters";
import StudentsReportsRouters from "./Routers/studentsreportsRouters";
import CoursesViewRouters from "./Routers/coursesviewRouters";
import CoursesBatchesRouters from "./Routers/coursesbatchesRouters.js";
import CourseStudentsRouters from "./Routers/coursestudentsRouters.js"
import TopicRouters from "./Routers/topicRouters.js"
import LessionRouters from "./Routers/lessionRouters.js"
import VideoRouters from "./Routers/videoRouters.js"
import Home from './Routers/Home.js';
import About from './Routers/About.js';
import QuestionRouters from './Routers/questionRouters.js'
function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        setLoggedIn(true);
      }
    };
    checkLoginStatus();
  }, []);

  const handleLogin = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:3000/api/login', { email, password });
      localStorage.setItem('token', response.data.token);
      setLoggedIn(true);
    } catch (error) {
      alert(error.message);
      console.error(error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setLoggedIn(false);
  };


  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/login"
          element={!loggedIn ? <Logins onLogin={handleLogin} /> : <Navigate to="/dashboard" />}
        />
        <Route
          path="/dashboard"
          element={loggedIn ? <Dashboards onLogout={handleLogout} /> : <Navigate to="/login" />}
        />
        <Route
          path="/adduser"
          element={loggedIn ? <AddUserRouters onLogout={handleLogout} /> : <Navigate to="/login" />}
        />
        <Route
          path="/accountusers"
          element={loggedIn ? <AccountUserRouters onLogout={handleLogout} /> : <Navigate to="/login" />}
        />
        <Route
          path="/userlist"
          element={loggedIn ? <UserListRouters onLogout={handleLogout} /> : <Navigate to="/login" />}
        />
        <Route
          path="/userviews/:usersId"
          element={loggedIn ? <UserViewsRouters onLogout={handleLogout} /> : <Navigate to="/login" />}
        />
        <Route
          path="/addsaleteam"
          element={loggedIn ? <AddSaleTeamRouters onLogout={handleLogout} /> : <Navigate to="/login" />}
        />
        <Route
          path="/addsaleteam/:saleteamId"
          element={loggedIn ? <AddSaleTeamRouters onLogout={handleLogout} /> : <Navigate to="/login" />}
        />
        <Route
          path="/telecaller"
          element={loggedIn ? <TeleCallerRouters onLogout={handleLogout} /> : <Navigate to="/login" />}
        />
        <Route
          path="/telecallerteam"
          element={loggedIn ? <TeleCallerTeamRouters onLogout={handleLogout} /> : <Navigate to="/login" />}
        />
        <Route
          path="/role"
          element={loggedIn ? <RoleRouters onLogout={handleLogout} /> : <Navigate to="/login" />}
        />
        <Route
          path="/role/:roleId"
          element={loggedIn ? <RoleRouters onLogout={handleLogout} /> : <Navigate to="/login" />}
        />
        <Route
          path="/courses"
          element={loggedIn ? <CoursesRouters onLogout={handleLogout} /> : <Navigate to="/login" />}
        />
        <Route
          path="/courses/:coursesId"
          element={loggedIn ? <CoursesRouters onLogout={handleLogout} /> : <Navigate to="/login" />}
        />
        <Route
          path="/coursesreports"
          element={loggedIn ? <CoursesReportsRouters onLogout={handleLogout} /> : <Navigate to="/login" />}
        />
        <Route
          path="/couresview/:coursecodeId"
          element={loggedIn ? <CoursesViewRouters onLogout={handleLogout} /> : <Navigate to="/login" />}
        />
        <Route
          path="/couresbatches/:coursecodeId"
          element={loggedIn ? <CoursesBatchesRouters onLogout={handleLogout} /> : <Navigate to="/login" />}
        />
        <Route
          path="/couresstudents/:coursecodeId"
          element={loggedIn ? <CourseStudentsRouters onLogout={handleLogout} /> : <Navigate to="/login" />}
        />

        <Route
          path="/frontdesk"
          element={loggedIn ? <FrontDeskRouters onLogout={handleLogout} /> : <Navigate to="/login" />}
        />
        <Route
          path="/frontdesklist"
          element={loggedIn ? <FrontDeskListRouters onLogout={handleLogout} /> : <Navigate to="/login" />}
        />
        <Route
          path="/frontdesklist/:frontdeskId"
          element={loggedIn ? <FrontDeskListRouters onLogout={handleLogout} /> : <Navigate to="/login" />}
        />
        <Route
          path="/counselordepartment"
          element={loggedIn ? <CounselorDepartmentRouters onLogout={handleLogout} /> : <Navigate to="/login" />}
        />
        <Route
          path="/teachers"
          element={loggedIn ? <TeachersRouters onLogout={handleLogout} /> : <Navigate to="/login" />}
        />
        <Route
          path="/teachers/:teachersId"
          element={loggedIn ? <TeachersRouters onLogout={handleLogout} /> : <Navigate to="/login" />}
        />
        <Route
          path="/addteachers"
          element={loggedIn ? <TeachersAddRouters onLogout={handleLogout} /> : <Navigate to="/login" />}
        />
        <Route
          path="/students"
          element={loggedIn ? <StudentRouters onLogout={handleLogout} /> : <Navigate to="/login" />}
        />
        <Route
          path="/students/:studentsId"
          element={loggedIn ? <StudentRouters onLogout={handleLogout} /> : <Navigate to="/login" />}
        />
        <Route
          path="/studentsreports"
          element={loggedIn ? <StudentsReportsRouters onLogout={handleLogout} /> : <Navigate to="/login" />}
        />
        <Route
          path="/batches"
          element={loggedIn ? <BatchesRouters onLogout={handleLogout} /> : <Navigate to="/login" />}
        />
        <Route
          path="/batches/:batchesId"
          element={loggedIn ? <BatchesRouters onLogout={handleLogout} /> : <Navigate to="/login" />}
        />
        <Route
          path="/batches/:batchesId"
          element={loggedIn ? <BatchesRouters onLogout={handleLogout} /> : <Navigate to="/login" />}
        />
        <Route
          path="/quizzes"
          element={loggedIn ? <QuizzeRouters onLogout={handleLogout} /> : <Navigate to="/login" />}
        />
        <Route
          path="/quizzes/:quizzeId"
          element={loggedIn ? <QuizzeRouters onLogout={handleLogout} /> : <Navigate to="/login" />}
        />
        <Route
          path="/topic"
          element={loggedIn ? <TopicRouters onLogout={handleLogout} /> : <Navigate to="/login" />}
        />
        <Route
          path="/topic/:topicId"
          element={loggedIn ? <TopicRouters onLogout={handleLogout} /> : <Navigate to="/login" />}
        />
        <Route
          path="/lession"
          element={loggedIn ? <LessionRouters onLogout={handleLogout} /> : <Navigate to="/login" />}
        />
        <Route
          path="/lession/:lessionId"
          element={loggedIn ? <LessionRouters onLogout={handleLogout} /> : <Navigate to="/login" />}
        />
        <Route
          path="/video"
          element={loggedIn ? <VideoRouters onLogout={handleLogout} /> : <Navigate to="/login" />}
        />
        <Route
          path="/video/:videoId"
          element={loggedIn ? <VideoRouters onLogout={handleLogout} /> : <Navigate to="/login" />}
        />
        <Route
          path="/question"
          element={loggedIn ? <QuestionRouters onLogout={handleLogout} /> : <Navigate to="/login" />}
        />
      </Routes>


    </BrowserRouter>
  );
}

export default App;
