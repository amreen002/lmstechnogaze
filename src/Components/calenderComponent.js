import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';
import Navbarmenu from "./Navbarmenu";
import Sidebar from "./sidebar";
import DashboardCard from './dashboardcardComponent';
function CalenderComponent(token) {
  
    const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  
    const handleMonthChange = (event) => {
      setSelectedMonth(parseInt(event.target.value));
    };
  
    const handleYearChange = (event) => {
      setSelectedYear(parseInt(event.target.value));
    };
  
    const daysInMonth = (month, year) => {
      return new Date(year, month + 1, 0).getDate();
    };
  
    const firstDayOfMonth = (month, year) => {
      return new Date(year, month, 1).getDay();
    };
  
    const renderCalendar = () => {
      const totalDays = daysInMonth(selectedMonth, selectedYear);
      const startingDay = firstDayOfMonth(selectedMonth, selectedYear);
      const days = [];
  
      for (let i = 1; i <= totalDays; i++) {
        days.push(i);
      }
  
      // Fill the first row with empty cells if the month doesn't start on Sunday
      const firstRow = [];
      for (let i = 0; i < startingDay; i++) {
        firstRow.push('');
      }
  
      // Generate table rows
      const rows = [];
      let cells = [...firstRow];
      days.forEach((day, index) => {
        cells.push(day);
        if (cells.length === 7 || index === days.length - 1) {
          rows.push(cells);
          cells = [];
        }
      });
  
      // Fill the last row with empty cells if needed
      if (rows[rows.length - 1].length < 7) {
        const remainingCells = 7 - rows[rows.length - 1].length;
        for (let i = 0; i < remainingCells; i++) {
          rows[rows.length - 1].push('');
        }
      }

    return (
        <table>
          <thead className='day'>
            <tr >
              <th>Sun</th>
              <th>Mon</th>
              <th>Tue</th>
              <th>Wed</th>
              <th>Thu</th>
              <th>Fri</th>
              <th>Sat</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      );
  };

    return(
        <div>
            <section>
                <Navbarmenu />
            </section>
<DashboardCard/>

    <div class="dashboard--area-main pt--100 pt_sm--50">
        <div class="container">
            <div class="row g-5">

            <Sidebar />
             <div class="col-lg-9">
                    <div class="calender-area-wrapper">
                        <h5 class="title">Calendar</h5>
                        <div class="calender-dash-wrapper" id="calender-active">
                            {/* <!-- calender --> */}
                            <div class="wrapper">

                                <div class="container-calendar">
                                    <div class="footer-container-calendar">
                                       
                                        <select  value={selectedMonth} onChange={handleMonthChange} >
                                        {Array.from({ length: 12 }, (_, i) => (
            <option key={i} value={i}>{new Date(selectedYear, i, 1).toLocaleString('default', { month: 'long' })}</option>
          ))}
                                        </select>
                                        <select value={selectedYear} onChange={handleYearChange}>
                                        {Array.from({ length: 10 }, (_, i) => (
            <option key={i} value={selectedYear - 5 + i}>{selectedYear - 5 + i}</option>
          ))}
                                          </select>
                                        
                                    </div>
                                    <div className="days">
        {renderCalendar()}
      </div>
                                    <div class="mt--30" id="monthAndYear"></div>

                                    {/* <!-- <div class="button-container-calendar">
                                        <button id="previous" onclick="previous()">&#8249;</button>
                                        <button id="next" onclick="next()">&#8250;</button>
                                    </div> --> */}

                                    <table class="table-calendar" id="calendar" data-lang="en">
                                        <thead id="thead-month"></thead>
                                        <tbody id="calendar-body"></tbody>
                                    </table>



                                </div>

                            </div>
                            {/* <!-- calender --> */}
                        </div>
                        <div class="search-area-calender-inner">
                            <input type="text" placeholder="Search..."/>
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </div>

                        {/* <!-- assignments-area saert --> */}
                        <div class="assignment-list-wrapper-calender">
                            {/* <!-- single assignments area wrapper --> */}
                            <div class="single-assignments-wrapper">
                                <div class="top-wrapper">
                                    <i class="fa-regular fa-calendar-lines-pen"></i>
                                    <span>October 4, 2023</span>
                                </div>
                                <div class="assignment-list">
                                    <div class="left">
                                        <i class="fa-regular fa-calendar-lines-pen"></i>
                                        <p>Assignment:</p>
                                        <span>My Quiz Attempts</span>
                                    </div>
                                    <div class="right">
                                        <span>Deadline: No Limit</span>
                                    </div>
                                </div>
                                <div class="assignment-list mt--20">
                                    <div class="left">
                                        <i class="fa-regular fa-calendar-lines-pen"></i>
                                        <p>Assignment:</p>
                                        <span>My Quiz Attempts</span>
                                    </div>
                                    <div class="right">
                                        <span>Deadline: No Limit</span>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- single assignments area wrapper end --> */}
                            {/* <!-- single assignments area wrapper --> */}
                            <div class="single-assignments-wrapper mt--50">
                                <div class="top-wrapper">
                                    <i class="fa-regular fa-calendar-lines-pen"></i>
                                    <span>October 29, 2023</span>
                                </div>
                                <div class="assignment-list">
                                    <div class="left">
                                        <i class="fa-regular fa-calendar-lines-pen"></i>
                                        <p>Assignment:</p>
                                        <span>My Quiz Attempts</span>
                                    </div>
                                    <div class="right">
                                        <span>Deadline: No Limit</span>
                                    </div>
                                </div>
                                <div class="assignment-list mt--20">
                                    <div class="left">
                                        <i class="fa-regular fa-calendar-lines-pen"></i>
                                        <p>Assignment:</p>
                                        <span>My Quiz Attempts</span>
                                    </div>
                                    <div class="right">
                                        <span>Deadline: No Limit</span>
                                    </div>
                                </div>
                                <div class="assignment-list mt--20">
                                    <div class="left">
                                        <i class="fa-regular fa-calendar-lines-pen"></i>
                                        <p>Assignment:</p>
                                        <span>My Quiz Attempts</span>
                                    </div>
                                    <div class="right">
                                        <span>Deadline: No Limit</span>
                                    </div>
                                </div>
                                <div class="assignment-list mt--20">
                                    <div class="left">
                                        <i class="fa-regular fa-calendar-lines-pen"></i>
                                        <p>Assignment:</p>
                                        <span>My Quiz Attempts</span>
                                    </div>
                                    <div class="right">
                                        <span>Deadline: No Limit</span>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- single assignments area wrapper end --> */}
                        </div>
                        {/* <!-- assignments-area end --> */}
                    </div>
                </div>
            </div>
        </div>
    </div>

        </div>
    );
}
 
export default CalenderComponent;