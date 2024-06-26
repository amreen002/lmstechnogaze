import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';
import Navbarmenu from "./Navbarmenu";
import Sidebar from "./sidebar";
import DashboardCard from "./dashboardcardComponent";
const { REACT_APP_API_ENDPOINT, REACT_APP_API_IMG } = process.env;
function StudentquizattemptComponent(token) {

  const [question, setQuestion] = useState([]);
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

  useEffect(() => {
    fetchDataQuestion()
  }, []);

  const fetchDataQuestion = async () => {
    try {
      const token = localStorage.getItem('token');

      if (token) {
        const response = await axios.get(`${REACT_APP_API_ENDPOINT}/question`, {
          headers: {
            Authorization: `Bearer ${token}`

          }
        });
        const userData = response.data.questions;
        console.log(userData)
        setQuestion(userData)

      }

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const handleNext = () => {
    if (currentQuestionIndex < question.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(''); // Reset selected answer when moving to next question
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedAnswer(''); // Reset selected answer when moving to previous question
    }
  };

  const handleAnswerChange = (e) => {
    setSelectedAnswer(e.target.value);
  };

  const currentQuestion = question[currentQuestionIndex];


  return (
    <div>
      <section>
        <Navbarmenu />
      </section>

      <DashboardCard />

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
                  <div className='flex-row d-flex mt-5'>
                    <div className='questnum mr-20'>
                      <span>{currentQuestionIndex + 1}</span>
                    </div>
                    <div className='outof'>
                      <p>
                        Question {currentQuestionIndex + 1} of {question.length}
                      </p>
                    </div>
                  </div>

                  <div className='mt-3 ml-60'>
                    <p>{currentQuestion.Questions}</p>
                  </div>

                  <div className='row ml-50'>
                    <div className='col-12 col-md-6 col-xl-6 col-lg-6'>
                      <div className='mt-3'>
                        <div className='flex-row d-flex optiionss mt-2'>
                          <input
                            type='radio'
                            name='optin'
                            style={{ opacity: '1', position: 'static', height: '31px', width: '14px', marginRight: '8px' }}
                            value='a'
                            checked={selectedAnswer === 'a'}
                            onChange={handleAnswerChange}
                          />
                          <p>{currentQuestion.Options1}</p>
                        </div>
                        <div className='flex-row d-flex optiionss mt-2'>
                          <input
                            type='radio'
                            name='optin'
                            style={{ opacity: '1', position: 'static', height: '31px', width: '14px', marginRight: '8px' }}
                            value='b'
                            checked={selectedAnswer === 'b'}
                            onChange={handleAnswerChange}
                          />
                          <p>{currentQuestion.Options2}</p>
                        </div>
                        <div className='flex-row d-flex optiionss mt-2'>
                          <input
                            type='radio'
                            name='optin'
                            style={{ opacity: '1', position: 'static', height: '31px', width: '14px', marginRight: '8px' }}
                            value='c'
                            checked={selectedAnswer === 'c'}
                            onChange={handleAnswerChange}
                          />
                          <p>{currentQuestion.Options3}</p>
                        </div>
                        <div className='flex-row d-flex optiionss mt-2'>
                          <input
                            type='radio'
                            name='optin'
                            style={{ opacity: '1', position: 'static', height: '31px', width: '14px', marginRight: '8px' }}
                            value='d'
                            checked={selectedAnswer === 'd'}
                            onChange={handleAnswerChange}
                          />
                          <p>{currentQuestion.Options4}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='mt-5 ml-65'>
                    <div className='row'>
                      <div className='col-12 col-md-6 col-xl-6 col-lg-6'>
                        <div className='flex-row d-flex'>
                          <div className='prqust'>
                            <button onClick={handlePrevious} disabled={currentQuestionIndex === 0}>
                              Previous question
                            </button>
                          </div>
                          <div className='prqust ml-40'>
                            <button onClick={handleNext} disabled={currentQuestionIndex === question.length - 1}>
                              Next question
                            </button>
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