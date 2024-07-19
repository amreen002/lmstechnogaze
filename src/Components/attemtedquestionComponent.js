import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate,Link } from 'react-router-dom';
import Navbarmenu from './Navbarmenu';
import Sidebar from './sidebar';
import DashboardCard from './dashboardcardComponent';

const { REACT_APP_API_ENDPOINT } = process.env;

function AttemtedQuestionComponent() {
    const location = useLocation();
    const navigate = useNavigate();
    const [quiz, setQuiz] = useState(location.state?.quiz || null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [seconds, setSeconds] = useState(0);
    const [timerEnd, setTimerEnd] = useState(false);
    const [answers, setAnswers] = useState([]);

    useEffect(() => {
        if (!quiz) {
            console.error('No quiz data available');
            navigate('/');
            return;
        }

        const savedState = JSON.parse(localStorage.getItem('quizState'));
        if (savedState) {
            setCurrentQuestionIndex(savedState.currentQuestionIndex);
            setSelectedAnswer(savedState.selectedAnswer);
            setAnswers(savedState.answers);
        }

        const { QuizzTestDuration } = quiz.Quize;
        const quizDurationInSeconds = QuizzTestDuration * 60;
        const storedStartTime = localStorage.getItem('quizStartTime');
        const currentTime = Date.now();

        let initialSeconds;

        if (storedStartTime) {
            const elapsedTime = Math.floor((currentTime - parseInt(storedStartTime, 10)) / 1000);
            initialSeconds = quizDurationInSeconds - elapsedTime;
            localStorage.removeItem('quizStartTime', currentTime.toString());
            if (initialSeconds < 0) {
                initialSeconds = 0;
                setTimerEnd(true);
                handleSubmit(); // Automatically submit the quiz if the time has already expired
            }
        } else {
            initialSeconds = quizDurationInSeconds;
            localStorage.setItem('quizStartTime', currentTime.toString());
        }

        setSeconds(initialSeconds);
        setTimerEnd(false);

        const tick = () => {
            setSeconds(prevSeconds => {
                if (prevSeconds <= 1) {
                    setTimerEnd(true);
                    handleSubmit(); // Automatically submit the quiz when the timer reaches zero
                    return 0;
                }
                return prevSeconds - 1;
            });
        };

        const intervalId = setInterval(tick, 1000);

        return () => clearInterval(intervalId);
    }, [quiz, navigate]);

    const updateLocalStorage = (index, answer) => {
        const updatedAnswers = [...answers];
        updatedAnswers[index] = answer;
        setAnswers(updatedAnswers);

        localStorage.setItem('quizState', JSON.stringify({
            currentQuestionIndex,
            selectedAnswer,
            answers: updatedAnswers
        }));
    };

    const handleNext = () => {
        const currentAnswer = {
            QuestionId: quiz.Quize.Questions[currentQuestionIndex].id,
            AnswersStudent: selectedAnswer,
            TimeTaken: seconds,
        };
        updateLocalStorage(currentQuestionIndex, currentAnswer);

        if (currentQuestionIndex < quiz.Quize.Questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedAnswer(answers[currentQuestionIndex + 1]?.AnswersStudent || '');
        }
    };

    const handlePrevious = () => {
        const currentAnswer = {
            QuestionId: quiz.Quize.Questions[currentQuestionIndex].id,
            AnswersStudent: selectedAnswer,
            TimeTaken: seconds,
        };
        updateLocalStorage(currentQuestionIndex, currentAnswer);

        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
            setSelectedAnswer(answers[currentQuestionIndex - 1]?.AnswersStudent || '');
        }
    };

    const handleChange = (e) => {
        setSelectedAnswer(e.target.value);
        localStorage.setItem('quizState', JSON.stringify({
            currentQuestionIndex,
            selectedAnswer: e.target.value,
            answers
        }));
    };

    const handleSubmit = async (e) => {
        e?.preventDefault();
        try {
            const token = localStorage.getItem('token');
            if (token) {
                const formData = {
                    QuizeId: quiz.Quize.id,
                    answers,
                };
                const response = await axios.post(`${REACT_APP_API_ENDPOINT}/studentquize`, formData, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                if (response.status === 200) {
                    setSeconds(0);
                    localStorage.removeItem('quizState');
                    localStorage.removeItem('quizStartTime');
                  
                } else {
                    alert('Something went wrong');
                }
            }
        } catch (error) {
            alert('Failed to submit quiz.');
        }
    };

    const currentQuestion = quiz?.Quize?.Questions?.[currentQuestionIndex];

    return (
        <div>
            <section>
                <Navbarmenu />
            </section>
            <DashboardCard />
            <div className="dashboard--area-main pt--100 pt_sm--50">
                <div className="container">
                    <div className="row g-5">
                        <Sidebar />
                        <div className="col-lg-9">
                            <div className="calendar-area">
                                {quiz ? (
                                    <>
                                        <div className='flex-row d-flex' style={{ justifyContent: 'space-between' }}>
                                            <h5 className="title">Quiz: {quiz.Quize.QuizzName}</h5>
                                            <div className='flex-row d-flex ml--50'>
                                                <h5>Total Mark: {quiz?.Quize?.TotalMarks}</h5>
                                                <br />
                                                <h5>Timer: {Math.floor(seconds / 60)}:{('0' + (seconds % 60)).slice(-2)}</h5>
                                            </div>
                                        </div>
                                        <div className='mt-2'>
                                            <div className='row' style={{ backgroundColor: 'rgb(49 4 2 / 58%)', color: "#fff" }}>
                                                <div className='col-12 py-2'>
                                                    <div className='flex-row d-flex'>
                                                        <div className='qust'>
                                                            ({quiz?.Quize?.TotalQuestions}) Questions
                                                        </div>
                                                        <div>
                                                            <div className='flex-row d-flex ml--40'>
                                                                <div>
                                                                    <i className="fa-clock fa-light"></i>
                                                                </div>
                                                                <div className='flex-row d-flex ml--10'>
                                                                    {quiz?.Quize?.QuizzTestDuration} minutes
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
                                                <div className='outof' style={{ paddingLeft: "11px" }}>
                                                    <p>
                                                        Question  ({currentQuestionIndex + 1} of {quiz?.Quize?.Questions.length})
                                                    </p>
                                                </div>
                                            </div>
                                            <div className='flex-row d-flex' style={{ justifyContent: 'space-between' }}>
                                                <div className='mt-3 ml-60'>
                                                    <p>{currentQuestion?.Questions}</p>
                                                </div>
                                                <div className='mt-3 ml-60'>
                                                    <p>{currentQuestion?.Type}</p>
                                                </div>
                                            </div>
                                            <div className='row ml-50'>
                                                <div className='col-12 col-md-6 col-xl-6 col-lg-6'>
                                                    <div className='mt-3'>
                                                        <form onSubmit={handleSubmit}>
                                                            <input
                                                                /* type='hidden' */
                                                                name='QuizeId'
                                                                value={quiz?.Quize?.id}
                                                            />
                                                            <input
                                                                /* type='hidden' */
                                                                name='QuestionId'
                                                                value={currentQuestion?.id}
                                                            />
                                                            {['Options1', 'Options2', 'Options3', 'Options4'].map((option, index) => (
                                                                <div className='flex-row d-flex optiionss mt-2' key={index}>
                                                                    <input
                                                                        type='radio'
                                                                        name='AnswersStudent'
                                                                        style={{ opacity: '1', position: 'static', height: '31px', width: '14px', marginRight: '8px' }}
                                                                        value={String.fromCharCode(97 + index)} // 'a', 'b', 'c', 'd'
                                                                        checked={selectedAnswer === String.fromCharCode(97 + index)}
                                                                        onChange={handleChange}
                                                                    />
                                                                    <p>{currentQuestion?.[option]}</p>
                                                                </div>
                                                            ))}
                                                            <div className='flex-row d-flex mt-5'>
                                                                <div className='prqust'>
                                                                    <button type='button' onClick={handlePrevious} disabled={currentQuestionIndex === 0}>
                                                                        Previous question
                                                                    </button>
                                                                </div>
                                                                <div className='prqust ml-40'>
                                                                    <button type='button' onClick={handleNext} disabled={currentQuestionIndex >= (quiz?.Quize?.Questions.length - 1)}>
                                                                        Next question
                                                                    </button>
                                                                </div>
                                                                <div className='prqust ml-50'>
                                                                    <button type='submit' className="btn btn-primary"><Link to="/quizresult">Submit</Link></button>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <p>No quiz data available</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AttemtedQuestionComponent;
