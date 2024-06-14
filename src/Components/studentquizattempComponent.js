import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';
import Navbarmenu from "./Navbarmenu";
import Sidebar from "./sidebar";
function StudentquizattemptComponent(token) {
  const [table, setTable] = useState("");
  const [course, setCourse] = useState([]);
  const [coursesCount, setCoursesCount] = useState(null);
  const [totalstudent, setTotalstudent] = useState(null);
  const [totalVideoCount, settotalVideoCount] = useState(null);
  const [activeService, setActiveService] = useState(null);
  const fetchData = async () => {
    try {
      const token = localStorage.getItem('token');

      if (token) {
        const response = await axios.get('http://localhost:3000/api/userwisedata', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        setTable(response.data);
      }// Updated state variable
    } catch (err) {
      console.log(err.response);
    }
  }
  const fetchData1 = async () => {
    try {
      const token = localStorage.getItem('token');

      if (token) {
        const response = await axios.get(`http://localhost:3000/api/listcourses`, {
          headers: {
            Authorization: `Bearer ${token}`

          }
        });
        const userDatas = response.data.courses;
        setCoursesCount(response.data.coursescount);
        setTotalstudent(response.data.totalStudentCount)
        settotalVideoCount(response.data.totalVideoCount)
        setCourse(userDatas)

      }

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    fetchData();
    fetchData1()
  }, []);

  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);


  const questions = [

    {
      questn:'1',
      question: "  An angular 2 project written in typescript is* transpiled to javascript duri*ng the build process. Which of the following additional features are provided to the developer while programming on typescript over javascript?",
      option1: [' An angular 2 project written in'],
      option2: [' An angular 2 project written in'],
      option3: [' An angular 2 project written in'],
      option4: [' An angular 2 project written in']
    },
    {
      questn:'2',
      question: "   Which of the following variables takes precedence over the others if the names are the same?",
      option1: [' An angular 2 project written in'],
      option2: [' An angular 2 project written in'],
      option3: [' An angular 2 project written in'],
      option4: [' An angular 2 project written in']
    },
    {
      questn:'3',
      question: " Which one of the following is the correct way for calling the JavaScript code?",
      option1: [' An angular 2 project written in'],
      option2: [' An angular 2 project written in'],
      option3: [' An angular 2 project written in'],
      option4: [' An angular 2 project written in']
    },
    {
      questn:'4',
      question: " When there is an indefinite or an infinite value during an arithmetic computation in a program, then JavaScript prints______.",
      option1: ['Prints an exception error'],
      option2: ['Prints an overflow error'],
      option3: ['Displays "Infinity"'],
      option4: ['Prints the value as such']
    },
  ]

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleNext = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handlePrevious = () => {
    setCurrentQuestionIndex(currentQuestionIndex - 1);
  };

  return (
    <div>
      <section>
        <Navbarmenu />
      </section>

      <div className="dashboard-banner-area-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="dashboard-banner-area-start bg_image">
                <div className="rating-area-banner-dashboard">
                  <div className="stars">
                    <span>4.5</span>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                  </div>
                  <p>Digital Marketing Instructor</p>
                </div>
                <div className="author-profile-image-and-name">
                  <div className="profile-pic">
                    <img src="assets/fontend/images/dashboard/01.png" alt="dashboard" />
                  </div>
                  <div className="name-desig">
                    <h1 className="title">{table.name}</h1>
                    <div className="course-vedio">
                      <div className="single">
                        <i className="fa-light fa-users"></i>
                        <span style={{ paddingLeft: "5px" }}>{totalstudent} Students</span>
                      </div>
                      <div className="single">
                        <i className="fa-regular fa-video"></i>
                        <span style={{ paddingLeft: "5px" }}>{totalVideoCount} Course</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="dashboard--area-main pt--100 pt_sm--50">
        <div class="container">
          <div class="row g-5">

            <Sidebar />
            <div class="col-lg-9">
              <div class="calender-area" >
                <div className='flex-row d-flex' style={{ justifyContent: 'space-between' }}>
                  <h5 class="title">Quiz Attempt</h5>
                  <div>
                    <h5>Timer: {seconds}</h5>
                  </div>
                </div>

                <div className=' mt-2'>
                  <div className='row' style={{ backgroundColor: 'rgb(49 4 2 / 58%)', color: "#fff" }}>
                    <div className='col-12 py-2'>
                      <div className='flex-row d-flex' >
                        <div className='qust'>
                          30 Question
                        </div>
                        <div>
                          <div className='flex-row d-flex ml--40'>
                            <div>
                              <i class="fa-clock fa-light"></i>
                            </div>
                            <div>
                              1m 10s
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
                <div>
                  <div className='flex-row d-flex mt-5 '>
                    <div className='questnum mr--20'>
                      <span>
                      {questions[currentQuestionIndex].questn}
                      </span>
                    </div>
                    <div className='outof'>
                      <p>
                        Question  {questions[currentQuestionIndex].questn} of 30
                      </p>
                    </div>
                  </div>
                  <div className='mt-3 ml--60'>
                    <p>
                      {questions[currentQuestionIndex].question}
                    </p>
                  </div>

                  <div className='row ml--50'>
                    <div className='col-12 col-md-6 col-xl-6 col-lg-6'>

                      <div className=' mt-3 '>
                        <div className='flex-row d-flex optiionss mt-2'>
                          <input type="radio" name='a' id='optin' style={{ opacity: '1', position: 'static', height: '31px', width: '14px', marginRight: '8px' }} value="a" />
                          <p> {questions[currentQuestionIndex].option1}</p>
                        </div>
                        <div className='flex-row d-flex optiionss mt-2'>
                          <input type="radio" name='a' id='optin' style={{ opacity: '1', position: 'static', height: '31px', width: '14px', marginRight: '8px' }} value="b" />
                          <p>{questions[currentQuestionIndex].option2}</p>
                        </div>
                      </div>
                      <div className=''>
                        <div className='flex-row d-flex optiionss mt-2'>
                          <input type="radio" name='a' id='optin' style={{ opacity: '1', position: 'static', height: '31px', width: '14px', marginRight: '8px' }} value="c" />
                          <p> {questions[currentQuestionIndex].option3}</p>
                        </div>
                        <div className='flex-row d-flex optiionss mt-2'>
                          <input type="radio" name='a' id='optin' style={{ opacity: '1', position: 'static', height: '31px', width: '14px', marginRight: '8px' }} value="d" />
                          <p> {questions[currentQuestionIndex].option4}</p>
                        </div>
                      </div>
                    </div>
                    <div className='col-12 col-md-6 col-xl-6 col-lf-6'></div>
                  </div>

                  <div className=' mt-5 ml--65'>
                    <div className='row'>
                      <div className='col-12 col-md-6 col-xl-6 col-lg-6'>
                        <div className='flex-row d-flex'>
                          <div className='prqust'>
                            <button  onClick={handlePrevious} disabled={currentQuestionIndex === 0}>Previous question</button>
                          </div>


                          <div className='prqust ml--40'>
                            <button onClick={handleNext} disabled={currentQuestionIndex === questions.length - 1}>Next question</button>
                          </div>

                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default StudentquizattemptComponent;