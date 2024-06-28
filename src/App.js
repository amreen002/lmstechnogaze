import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter , Route, Navigate, Routes  } from 'react-router-dom';
/* import Logins from './Routers/loginRouter'; */
import Dashboards from './Routers/dashboardsRouter';
import AddUserRouters from './Routers/addUserRouter';
import AccountUserRouters from './Routers/accountUserRouters.js';
import UserListRouters from './Routers/listUserRouters.js';
import UserViewsRouters from './Routers/viewsUserRouters.js';
import AddSaleTeamRouters from './Routers/addsaleteamRouters.js';
import TeleCallerRouters from './Routers/telecallerRouters.js';
import TeleCallerTeamRouters from './Routers/telecallerteamRouters.js';
import RoleRouters from './Routers/roleRouters.js';
import FrontDeskRouters from './Routers/frontdeskRouters.js';
import CoursesRouters from './Routers/CoursesRouters.js';
import FrontDeskListRouters from './Routers/frontdesklistRouters.js';
import CounselorDepartmentRouters from './Routers/counselordepartmentRouters.js';
import TeachersRouters from './Routers/teachersRouters.js';
import TeachersAddRouters from './Routers/teachersaddRouters.js';
import StudentRouters from './Routers/studentRouters.js';
import BatchesRouters from './Routers/batchesRouters';
import QuizzeRouters from "./Routers/quizzeRouters";
import CoursesReportsRouters from "./Routers/coursesreportsRouters";
import StudentsReportsRouters from "./Routers/studentsreportsRouters";
import CoursesViewRouters from "./Routers/coursesviewRouters";
import CoursesBatchesRouters from "./Routers/coursesbatchesRouters.js";
import CourseStudentsRouters from "./Routers/coursestudentsRouters.js"
import TopicRouters from "./Routers/topicRouters.js"
import LessionRouters from "./Routers/lessionRouters.js"
import VideoRouters from "./Routers/videoRouters.js"
import QuestionRouters from './Routers/questionRouters.js'
import QuestionCategoryRouters from './Routers/questioncategoryRouters.js'
import CourseCategoryRouters from './Routers/coursecategoryRouters.js'

import Home from './Routers/Home.js';
import AboutPages from './Routers/aboutRouter.js';
import Login from './Components/Login.js';
import InstructorDashboard from './Routers/instructordashboardRouters.js';
import InstructorCourse from './Routers/instructorcourseRouters.js';
import CoursedetailRouter from './Routers/coursedetailsRouter.js'
import InstructorUpdateCourse from './Routers/instructorcourseupdateRouters.js'
import LernerenrollcourseRouter from './Routers/lernerenrollcourseRouter.js'
import CompleteProfile from './Components/CompleteProfile';
import InstructoreaddquizeRouter from './Routers/instructoreaddquizeRouter.js'
import InstructorviewquizRouter from './Routers/instructorviewquizRouters.js'
import MultiplequestionRouter from './Routers/multiplequestionRouters.js'

import StudentQuestionViewRouter from './Routers/studentquestionviewRouters.js'
import StudentAddquestionRouter  from  './Routers/studentquizattemptRouter.js'

import SignupRouter from './Routers/signupRouter.js';
import Lsa from './Routers/Lsa.js';

import { CartProvider } from './Context/CartContext.js';
import CartComponent from './Components/Cart.js';
import CheckoutPage from './Components/CheckoutComponemt.js';


const { REACT_APP_API_ENDPOINT } = process.env;
// -----app-----------------------
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [datatoken, setdatatoken] = useState({});
;
  useEffect(() => {
    if (datatoken) {
      setLoggedIn(true);
    }
  }, [datatoken]);


  const handleLogin = async (email, password) => {
    try {
      const response = await axios.post(`${REACT_APP_API_ENDPOINT}/login`, { email, password });

      let datatokendata = response.data.users;
      setdatatoken(datatokendata);
      localStorage.setItem('datatoken', JSON.stringify(datatokendata));
      localStorage.setItem('token', response.data.token);
      setLoggedIn(true);
      if (datatokendata.Role?.Name === 'Student' || datatokendata.Role?.Name === 'Instructor') {
        window.location.href = '/dashboard';
      } else if (datatokendata.Role?.Name === 'Administrator'||datatokendata.Role?.Name === 'Super Admin' || datatokendata.Role?.Name === 'Admin' || datatokendata.Role?.Name ==='Telecaller Department'|| datatokendata.Role?.Name ==='Guest/Viewer'||datatokendata.Role?.Name ==='Sale Department' ||datatokendata.Role?.Name ==='Telecaller Team'||datatokendata.Role?.Name ==='Front Desk'||datatokendata.Role?.Name ==='Counselor Department'||datatokendata.Role?.Name ==='Account Department') {
        window.location.href = '/dashboard/admin';
      } else {
        alert('Invalid role'); // Handle other roles if needed
      } 
    } catch (error) {
      alert(error.message);
      console.error(error);
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setdatatoken(null);
    localStorage.removeItem('datatoken');
    localStorage.removeItem('token');
    window.location.href = '/login'; // Redirect to login page
  };

  return (
    <CartProvider>
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPages />} />
        <Route path="/lsa" element={<Lsa />} />
       
        <Route path="/signup" element={<SignupRouter />} />

        <Route path="/createcourse/coursesId" element={<InstructorUpdateCourse />} />
        <Route path="/cart" element={<CartComponent />} />
        <Route path="/checkout" component={CheckoutPage} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />

        {/* Route for Student/Instructor Dashboard */}
       
          <Route
            path="/dashboard"
            element={
              loggedIn === true && datatoken?.Role?.Name === 'Student' || datatoken?.Role?.Name === 'Instructor' ?  <InstructorDashboard userData={datatoken} onLogout={handleLogout} />: <InstructorDashboard userData={datatoken} onLogout={handleLogout} />}
          />


        {/* Route for Admin Dashboard */}
     
         <Route
          path="/dashboard/admin"
          element={ loggedIn === true &&  ['Super Admin', 'Admin', 'Telecaller Department','Administrator','Guest/Viewer','Sale Department','Telecaller Team','Front Desk','Counselor Department','Account Department'].includes(datatoken?.Role && datatoken?.Role?.Name) ? <Dashboards userData={datatoken} onLogout={handleLogout} />:<Dashboards userData={datatoken} onLogout={handleLogout} />}
        />


        <Route
          path="/complete-profile"
          element={<CompleteProfile />}
        />
        <Route
          path="/adduser"
          element={loggedIn === true && <AddUserRouters onLogout={handleLogout} />}
        />
        <Route
          path="/accountusers"
          element={loggedIn === true && <AccountUserRouters onLogout={handleLogout} /> }
        />
        <Route
          path="/userlist"
          element={loggedIn === true &&  <UserListRouters onLogout={handleLogout} /> }
        />
        <Route
          path="/userviews/:usersId"
          element={loggedIn === true &&  <UserViewsRouters onLogout={handleLogout} /> }
        />
        <Route
          path="/addsaleteam"
          element={loggedIn === true &&  <AddSaleTeamRouters onLogout={handleLogout} /> }
        />
        <Route
          path="/addsaleteam/:saleteamId"
          element={loggedIn === true &&  <AddSaleTeamRouters onLogout={handleLogout} />}
        />
        <Route
          path="/telecaller"
          element={loggedIn === true &&  <TeleCallerRouters onLogout={handleLogout} /> }
        />
        <Route
          path="/telecallerteam"
          element={loggedIn === true && <TeleCallerTeamRouters onLogout={handleLogout} /> }
        />
        <Route
          path="/role"
          element={loggedIn === true &&  <RoleRouters onLogout={handleLogout} /> }
        />
        <Route
          path="/role/:roleId"
          element={loggedIn === true &&  <RoleRouters onLogout={handleLogout} /> }
        />
        <Route
          path="/courses"
          element={loggedIn === true && <CoursesRouters onLogout={handleLogout} />}
        />
        <Route
          path="/courses/:coursesId"
          element={loggedIn === true && <CoursesRouters onLogout={handleLogout} />}
        />
        <Route
          path="/coursesreports"
          element={loggedIn === true && <CoursesReportsRouters onLogout={handleLogout} />}
        />
        <Route
          path="/couresview/:coursecodeId"
          element={loggedIn === true && <CoursesViewRouters onLogout={handleLogout} />}
        />
        <Route
          path="/couresbatches/:coursecodeId"
          element={loggedIn === true && <CoursesBatchesRouters onLogout={handleLogout} /> }
        />
        <Route
          path="/couresstudents/:coursecodeId"
          element={loggedIn === true && <CourseStudentsRouters onLogout={handleLogout} /> }
        />
        <Route
          path="/frontdesk"
          element={loggedIn === true &&  <FrontDeskRouters onLogout={handleLogout} /> }
        />
        <Route
          path="/frontdesklist"
          element={loggedIn === true &&  <FrontDeskListRouters onLogout={handleLogout} /> }
        />
        <Route
          path="/frontdesklist/:frontdeskId"
          element={loggedIn === true &&  <FrontDeskListRouters onLogout={handleLogout} /> }
        />
        <Route
          path="/counselordepartment"
          element={loggedIn === true && <CounselorDepartmentRouters onLogout={handleLogout} />  }
        />
        <Route
          path="/teachers"
          element={loggedIn ===true && <TeachersRouters onLogout={handleLogout} /> }
        />
        <Route
          path="/teachers/:teachersId"
          element={loggedIn === true &&  <TeachersRouters onLogout={handleLogout}   />}
        />
        <Route
          path="/addteachers"
          element={loggedIn === true &&  <TeachersAddRouters onLogout={handleLogout} /> }
        />
        <Route
          path="/students"
          element={loggedIn === true &&  <StudentRouters onLogout={handleLogout} /> }
        />
        <Route
          path="/students/:studentsId"
          element={loggedIn === true &&  <StudentRouters onLogout={handleLogout} /> }
        />
        <Route
          path="/studentsreports"
          element={loggedIn === true &&  <StudentsReportsRouters onLogout={handleLogout} /> }
        />
        <Route
          path="/batches"
          element={loggedIn === true &&  <BatchesRouters onLogout={handleLogout} /> }
        />
        <Route
          path="/batches/:batchesId"
          element={loggedIn === true &&  <BatchesRouters onLogout={handleLogout} /> }
        />
        <Route
          path="/quizzes"
          element={loggedIn === true &&  <QuizzeRouters onLogout={handleLogout} /> }
        />
        <Route
          path="/quizzes/:quizzeId"
          element={loggedIn === true &&  <QuizzeRouters onLogout={handleLogout} /> }
        />
        <Route
          path="/topic"
          element={loggedIn === true &&  <TopicRouters onLogout={handleLogout} /> }
        />
        <Route
          path="/topic/:topicId"
          element={loggedIn === true &&  <TopicRouters onLogout={handleLogout} />}
        />
        <Route
          path="/lession"
          element={loggedIn === true &&  <LessionRouters onLogout={handleLogout} />}
        />
        <Route
          path="/lession/:lessionId"
          element={loggedIn === true && <LessionRouters onLogout={handleLogout} /> }
        />
        <Route
          path="/video"
          element={loggedIn === true &&  <VideoRouters onLogout={handleLogout} /> }
        />
        <Route
          path="/video/:videoId"
          element={loggedIn === true &&  <VideoRouters onLogout={handleLogout} /> }
        />
        <Route
          path="/question"
          element={loggedIn === true && <QuestionRouters onLogout={handleLogout} /> }
        />
        <Route
          path="/question/:questionId"
          element={loggedIn === true &&  <QuestionRouters onLogout={handleLogout} /> }
        />
        <Route
          path="/questioncategory"
          element={loggedIn === true &&  <QuestionCategoryRouters onLogout={handleLogout} /> }
        />
        <Route
          path="/questioncategory/:questionscategoryId"
          element={loggedIn === true &&  <QuestionCategoryRouters onLogout={handleLogout} /> }
        />
        <Route
          path="/coursecategory"
          element={loggedIn === true &&  <CourseCategoryRouters onLogout={handleLogout} /> }
        />
        <Route
          path="/coursecategory/:categoriesId"
          element={loggedIn === true &&  <CourseCategoryRouters onLogout={handleLogout} /> }
        />
        <Route
          path="/coursedetails/:coursesId"
          element={ <CoursedetailRouter />}
        />
        <Route 
        path="/createcourse/:coursesId" 
        element={ loggedIn === true &&  <InstructorUpdateCourse onLogout={handleLogout}/> } />

        <Route 
        path="/createcourse" 
        element={ loggedIn === true &&  <InstructorCourse onLogout={handleLogout}/>}/>
        <Route
          path="/lernerenrollcourse"
          element={loggedIn === true &&  <LernerenrollcourseRouter onLogout={handleLogout} />} />
        <Route
          path="/instructor/addquize"
          element={loggedIn === true &&  <InstructoreaddquizeRouter onLogout={handleLogout} />} />
        <Route
          path="/instructor/viewquize"
          element={loggedIn === true &&  <InstructorviewquizRouter onLogout={handleLogout} />}
        />
        <Route
          path="/instructor/question"
          element={loggedIn === true && <MultiplequestionRouter onLogout={handleLogout} />}
          /> 
      
        <Route
          path="/student/question"
          element={loggedIn === true &&  <StudentQuestionViewRouter onLogout={handleLogout} />}
        />
        <Route
          path="/student/addquestion"
          element={loggedIn === true &&  <StudentAddquestionRouter onLogout={handleLogout} />} />

      </Routes>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
