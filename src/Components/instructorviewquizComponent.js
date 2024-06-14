import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';
import Navbarmenu from "./Navbarmenu";
import Sidebar from "./sidebar";
import DashboardCard from "./dashboardcardComponent";
import { set } from 'rsuite/esm/utils/dateUtils';
const { REACT_APP_API_ENDPOINT, REACT_APP_API_IMG } = process.env;
function InstructorviewquizComponent(token) {
    const [quizze, setQuizze] = useState([]);
    const [question, setQuestion] = useState([]);

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = (id) => {
        setIsVisible(isVisible === id ? null : id);
    };

    useEffect(() => {
        fetchDataQuize()
        fetchDataQuestion()
    }, []);
    const fetchDataQuize = async () => {
        try {
            const token = localStorage.getItem('token');

            if (token) {
                const response = await axios.get(`${REACT_APP_API_ENDPOINT}/quizze`, {
                    headers: {
                        Authorization: `Bearer ${token}`

                    }
                });
                const userData = response.data.quizze;
                setQuizze(userData)
            }

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
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
                setQuestion(userData)

            }

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };





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
                            <div class="right-sidebar-dashboard">
                                <h5 class="title">Quiz View</h5>
                                {question.map((item, index) => (
                                    <div className='box' key={item.id}>
                                        <div>
                                            <div className='flex-row d-flex'>
                                                <div className='icon grips'>
                                                    <i class="fa-grip-vertical fa-light"></i>
                                                </div>
                                                <div className=' grips' style={{ marginLeft: '4px' }}>
                                                    <div className='felx-row d-flex'>
                                                        <div>
                                                            <i class="fa-check fa-light icp"></i>
                                                        </div>
                                                        <spna> 1.Multiple Choice</spna>
                                                    </div>
                                                </div>
                                                <div className='grips' style={{ marginLeft: '4px' }}>
                                                    <select>
                                                        <option>30 seconds</option>
                                                        <option>30 seconds</option>
                                                        <option>30 seconds</option>
                                                        <option>30 seconds</option>
                                                        <option>30 seconds</option>
                                                    </select>
                                                </div>
                                                <div className='grips' style={{ marginLeft: '4px' }}>
                                                    <select>
                                                        <option>1 point</option>
                                                        <option>1 point</option>
                                                        <option>1 point</option>
                                                        <option>1 point</option>
                                                        <option>1 point</option>
                                                    </select>
                                                </div>
                                                <div className='grips' style={{ marginLeft: '285px' }}>
                                                    <select>
                                                        <i class="fa-light fa-stars"></i>
                                                        <option> AI</option>
                                                        <option> AI</option>
                                                        <option> AI</option>
                                                        <option> AI</option>
                                                        <option> AI</option>
                                                    </select>
                                                </div>
                                                <div className=' grips' style={{ marginLeft: '4px' }}>
                                                    <div className='felx-row d-flex'>
                                                        <div>
                                                            <i class="fa-copy fa-light"></i>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div className=' grips' style={{ marginLeft: '4px' }}>
                                                    <div className='felx-row d-flex'>
                                                        <div>
                                                            <i class="fa-light fa-tags"></i>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div className=' grips' style={{ marginLeft: '4px' }}>
                                                    <button className='felx-row d-flex'>
                                                        <div className=''>
                                                            <i class="fa-light fa-pen icp"></i>
                                                        </div>
                                                        Edit
                                                    </button>
                                                </div>
                                                <div className=' grips' style={{ marginLeft: '4px' }}>
                                                    <button className='felx-row d-flex'>
                                                        <div>
                                                            <i class="fa-light fa-trash-alt"></i>
                                                        </div>
                                                    </button>
                                                </div>

                                            </div>



                                        </div>
                                        <div className='pt--30'>
                                            <div>
                                                <p>{item.Questions}</p>
                                            </div>
                                            <div className='pt--15'>
                                                <span className='ansc'>  Answer Choices</span>
                                            </div>
                                            <div className='pt-2 flex-row d-flex'>
                                                <div className='flex-row d-flex'>
                                                    <div className='icon'>
                                                        <i className={`fa-light ${Array.isArray(item.Answer) && item.Answer!="a"? 'fa-check selected' : 'fa-times not-selected'}`}></i>
                                                    </div>
                                                    <div>
                                                        <span className='ml--20 crls'>{item.Options1}</span>
                                                    </div>

                                                </div>
                                                <div className='ml--200 flex-row d-flex'>
                                                    <div className='icon'>
                                                        <i className={`fa-light ${Array.isArray(item.Answer) && item.Answer!="a"? 'fa-check selected' : 'fa-times not-selected'}`}></i>
                                                    </div>
                                                    <div>
                                                        <span className='ml--20 crls'>{item.Options2}</span>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className='flex-row d-flex'>
                                                <div className='flex-row d-flex'>
                                                    <div className='icon'>
                                                        <i className={`fa-light ${Array.isArray(item.Answer) && item.Answer!="a"? 'fa-check selected' : 'fa-times not-selected'}`}></i>
                                                    </div>
                                                    <div>
                                                        <span className='ml--20 crls'>{item.Options3}</span>
                                                    </div>

                                                </div>
                                                <div className='ml--200 flex-row d-flex'>
                                                    <div className='icon'>
                                                        <i className={`fa-light ${Array.isArray(item.Answer) && item.Answer!="a"? 'fa-check selected' : 'fa-times not-selected'}`}></i>
                                                    </div>
                                                    <div>
                                                        <span className='ml--20 crls'>{item.Options4}</span>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*    <div className="dashboard--area-main pt-100 pt_sm-50">
                <div className="container">
                    <div className="row g-5">
                        <Sidebar />
                        <div className="col-lg-9">
                            <div className="calender-area">
                                <div className='d-flex justify-content-between'>
                                    <h5 className="title">Quiz Attempt</h5>
                                    <div>
                                        <h5>Timer: 1</h5>
                                    </div>
                                </div>

                                <div className='mt-2'>
                                    <div className='row' style={{ backgroundColor: 'rgb(49 4 2 / 58%)', color: "#fff" }}>
                                        <div className='col-12 py-2'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <div className='qust'>
                                                    30 Questions
                                                </div>
                                                <div className='d-flex align-items-center'>
                                                    <i className="fa fa-clock fa-light mr-2"></i>
                                                    <div>1m 10s</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-5">
                                    {question.map((item, index) => (
                                        <div key={index} className="mb-5">
                                            <div className="d-flex flex-row align-items-center">
                                                <div className="questnum mr-3">
                                                    <span>{index + 1}</span>
                                                </div>
                                                <div className="outof">
                                                    <p>Question {index + 1} of {question.length}</p>
                                                </div>
                                            </div>
                                            <div className="mt-3 ml-4">
                                                <p>{item.Questions}</p>
                                            </div>

                                            <div className="row ml-3">
                                                <div className="col-12 col-md-6">
                                                    <div className="mt-3">
                                                        <div className="d-flex flex-row align-items-center optiionss mt-2">
                                                            <p className="aaa">A</p>
                                                            <p className="ml-2">{item.Options1}</p>
                                                        </div>
                                                        <div className="d-flex flex-row align-items-center optiionss mt-2">
                                                            <p className="aaa">B</p>
                                                            <p className="ml-2">{item.Options2}</p>
                                                        </div>
                                                        <div className="d-flex flex-row align-items-center optiionss mt-2">
                                                            <p className="aaa">C</p>
                                                            <p className="ml-2">{item.Options3}</p>
                                                        </div>
                                                        <div className="d-flex flex-row align-items-center optiionss mt-2">
                                                            <p className="aaa">D</p>
                                                            <p className="ml-2">{item.Options4}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mt-5 ml-3">
                                                <div className="row">
                                                    <div className="col-12 col-md-3">
                                                        <div className="prqust">
                                                            <button className="btn btn-primary" onClick={() => toggleVisibility(`${item.id}`)}>
                                                                {isVisible === `${item.id}` ? (
                                                                    <>
                                                                        <i className="fa fa-eye-slash"></i> Hide Answer
                                                                    </>
                                                                ) : (
                                                                    <>
                                                                        <i className="fa fa-eye"></i> Show Answer
                                                                    </>
                                                                )}
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                {isVisible ===`${item.id}` && (
                                                    <div className="col-12 mt-5 pb-2">
                                                        <div className="alert alert-info">
                                                            <strong>Answer:</strong> {Array.isArray(item.Answer) ? item.Answer.map(sentences => sentences.toUpperCase()) : item.Answer.toUpperCase()}
                                                        </div>
                                                    </div>
                                                )}

                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

        </div>
    );

}

export default InstructorviewquizComponent;