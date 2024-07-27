import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbarmenu from './Navbarmenu';
import Sidebar from './sidebar';
import DashboardCard from './dashboardcardComponent';

const { REACT_APP_API_ENDPOINT } = process.env;

function StudentquizattemptComponent() {
  const [questions, setQuestions] = useState([]);
  const [studentquize, setStudentQuize] = useState([]);
  const [currentQuiz, setCurrentQuiz] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchQuestions();
    fetchDataStudentResult();
  }, []);

  const fetchQuestions = async () => {
    try {
      const token = localStorage.getItem('token');
      if (token) {
        const response = await axios.get(`${REACT_APP_API_ENDPOINT}/question?student=true`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        const userData = response.data?.questions || [];  // Ensure userData is an array
        setQuestions(userData);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchDataStudentResult = async () => {
    try {
      const token = localStorage.getItem('token');
      if (token) {
        const response = await axios.get(`${REACT_APP_API_ENDPOINT}/studentquize`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        const useData = response.data?.studentsquize || [];  // Ensure useData is an array
        setStudentQuize(useData);
      }
    } catch (err) {
      console.log(err.response);
    }
  };

  // Ensure `questions` and `studentquize` are not undefined
  const uniqueQuestions = questions?.filter((item, index, self) =>
    index === self.findIndex((t) => t.QuizzeId === item.QuizzeId)
  ) || [];

  const handleShow = (quiz) => {
    setCurrentQuiz(quiz);
    navigate('/attemptquestion', { state: { quiz } });  // Pass quiz data with navigate
  };
  const renderTopics = (courses, quizItem) => {
    const uniqueTopicIds = new Set();
  
    return courses.flatMap((course, courseIndex) => {
      const uniqueTopics = course.topics.filter((topic) => {
        if (uniqueTopicIds.has(topic.id)) {
          return false;
        } else {
          uniqueTopicIds.add(topic.id);
          return true;
        }
      });
  
      return uniqueTopics.map((topic, topicIndex) => (
        <span
          key={`${courseIndex}-${topicIndex}`}
          className="topic-link"
       /*    onClick={() => handleShow(quizItem)} */
          style={{ cursor: 'pointer', textDecoration: 'underline', color: 'blue' }}
        >
          {topic.name}
          {topicIndex < uniqueTopics.length - 1 ? ', ' : ''}
        </span>
      ));
    });
  };
  

  const attemptedQuizzes = studentquize?.map(sq => sq.QuizeId) || []; // Ensure `studentquize` is not undefined

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
              {uniqueQuestions.map((item) => (
                <div key={item.id} className="calendar-area quiz-card">
                  <div className="flex-row d-flex align-items-center justify-content-between">
                    <div className="quiz-details">
                      <div className="topic-names">
                        {item.Quize?.courses && renderTopics(item.Quize.courses, item)}
                      </div>
                      <a className="quiz-name">
                        {item.Quize?.QuizzName}
                      </a>
                    </div>
                    <div className='ml-40'>
                      <Button
                        className="start-button"
                        variant="primary"
                        onClick={() => handleShow(item)}
                        disabled={attemptedQuizzes.includes(item.Quize?.id)}
                      >
                        {attemptedQuizzes.includes(item.Quize?.id) ? 'Quiz Attempted' : 'Start Quiz'}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentquizattemptComponent;
