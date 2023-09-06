'use client';
import { PrismaClient } from '@prisma/client';
import React, { useEffect, useState } from 'react';
import { options } from '../api/auth/[...nextauth]/options';
import { signOut, useSession } from 'next-auth/react';
import axios from 'axios';
import moment from 'moment';
import Link from 'next/link';
import TaskMakeShow from '../components/dashboard/TaskMakeShow';
import { toast } from 'react-toastify';
import { TaskDataField } from '../../../helper/types';

function Dashboard() {
  const { data: session } = useSession();
  let [coreTask, setCoreTask] = useState<any[]>([]);
  let [sevenDayTask, setSevenDayTask] = useState<any[]>([]);
  let [monthTask, setMonthTask] = useState<any[]>([]);
  let [todayDate, setTodayDate] = useState<any>(moment().format('LL')); // August 3, 2021

  const getCoreTask = async () => {
    let res = await axios.get('/api/tasks/task');
    console.log(res.data);
    setCoreTask(res?.data?.todayTasks);
    setMonthTask(res?.data?.tasksByDay);
    setSevenDayTask(res?.data?.sevenDaysTasks);
  };
  const addTask = async (taskData: TaskDataField, setTaskData: any) => {
    if (taskData.title == '' && taskData.content == '') {
      toast.error('Please fill all the fields');
      return false;
    }
    let res = await axios.post('/api/tasks/task', {
      ...taskData,
    });

    setCoreTask((state) => [...state, res.data]);
    setSevenDayTask((state) => [...state, res.data]);
    setTaskData({ ...taskData, title: '', content: '' });
  };
  useEffect(() => {
    setTodayDate(moment().format('MMMM Do YYYY, h:mm:ss a'));
    getCoreTask();
  }, []);
  return (
    <>
      <section className="newdashboard-main">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9">
              <div className="calendar-card">
                <div className="calendar-title">
                  <h3>Phase 1 - Complete Landing Page & UI Design</h3>
                </div>
                <div className="calendar-grid-main">
                  <div className="single-day-box ">
                    <div className="day-title">mo/28/08</div>
                    <div className="single-task">
                      <div className="time">12-3 PM</div>
                      <p>Get New UI Designer to Create Templates</p>
                      <p> Write First Draft for Youtube Video</p>
                    </div>
                    <div className="single-task">
                      <div className="time">12-3 PM</div>
                      <p>Get New UI Designer to Create Templates</p>
                      <p> Write First Draft for Youtube Video</p>
                    </div>
                    <div className="single-task">
                      <div className="time">12-3 PM</div>
                      <p>Get New UI Designer to Create Templates</p>
                      <p> Write First Draft for Youtube Video</p>
                    </div>
                    <div className="single-task">
                      <div className="time">12-3 PM</div>
                      <p>Get New UI Designer to Create Templates</p>
                      <p> Write First Draft for Youtube Video</p>
                    </div>
                    <div className="single-task">
                      <div className="time">12-3 PM</div>
                      <p>Get New UI Designer to Create Templates</p>
                      <p> Write First Draft for Youtube Video</p>
                    </div>
                  </div>
                  <div className="single-day-box ">
                    <div className="day-title">tu/29/08</div>
                    <div className="single-task">
                      <div className="time">12-3 PM</div>
                      <p>Get New UI Designer to Create Templates</p>
                      <p> Write First Draft for Youtube Video</p>
                    </div>
                    <div className="single-task">
                      <div className="time">12-3 PM</div>
                      <p>Get New UI Designer to Create Templates</p>
                      <p> Write First Draft for Youtube Video</p>
                    </div>
                    <div className="single-task">
                      <div className="time">12-3 PM</div>
                      <p>Get New UI Designer to Create Templates</p>
                      <p> Write First Draft for Youtube Video</p>
                    </div>
                    <div className="single-task">
                      <div className="time">12-3 PM</div>
                      <p>Get New UI Designer to Create Templates</p>
                      <p> Write First Draft for Youtube Video</p>
                    </div>
                    <div className="single-task">
                      <div className="time">12-3 PM</div>
                      <p>Get New UI Designer to Create Templates</p>
                      <p> Write First Draft for Youtube Video</p>
                    </div>
                  </div>
                  <div className="single-day-box ">
                    <div className="day-title">wd/30/08</div>
                    <div className="single-task">
                      <div className="time">12-3 PM</div>
                      <p>Get New UI Designer to Create Templates</p>
                      <p> Write First Draft for Youtube Video</p>
                    </div>
                    <div className="single-task">
                      <div className="time">12-3 PM</div>
                      <p>Get New UI Designer to Create Templates</p>
                      <p> Write First Draft for Youtube Video</p>
                    </div>
                    <div className="single-task">
                      <div className="time">12-3 PM</div>
                      <p>Get New UI Designer to Create Templates</p>
                      <p> Write First Draft for Youtube Video</p>
                    </div>
                    <div className="single-task">
                      <div className="time">12-3 PM</div>
                      <p>Get New UI Designer to Create Templates</p>
                      <p> Write First Draft for Youtube Video</p>
                    </div>
                    <div className="single-task">
                      <div className="time">12-3 PM</div>
                      <p>Get New UI Designer to Create Templates</p>
                      <p> Write First Draft for Youtube Video</p>
                    </div>
                  </div>
                  <div className="single-day-box ">
                    <div className="day-title">th/31/08</div>
                    <div className="single-task">
                      <div className="time">12-3 PM</div>
                      <p>Get New UI Designer to Create Templates</p>
                      <p> Write First Draft for Youtube Video</p>
                    </div>
                    <div className="single-task">
                      <div className="time">12-3 PM</div>
                      <p>Get New UI Designer to Create Templates</p>
                      <p> Write First Draft for Youtube Video</p>
                    </div>
                    <div className="single-task">
                      <div className="time">12-3 PM</div>
                      <p>Get New UI Designer to Create Templates</p>
                      <p> Write First Draft for Youtube Video</p>
                    </div>
                    <div className="single-task">
                      <div className="time">12-3 PM</div>
                      <p>Get New UI Designer to Create Templates</p>
                      <p> Write First Draft for Youtube Video</p>
                    </div>
                    <div className="single-task">
                      <div className="time">12-3 PM</div>
                      <p>Get New UI Designer to Create Templates</p>
                      <p> Write First Draft for Youtube Video</p>
                    </div>
                  </div>
                  <div className="single-day-box ">
                    <div className="day-title">fr/01/09</div>
                    <div className="single-task">
                      <div className="time">12-3 PM</div>
                      <p>Get New UI Designer to Create Templates</p>
                      <p> Write First Draft for Youtube Video</p>
                    </div>
                    <div className="single-task">
                      <div className="time">12-3 PM</div>
                      <p>Get New UI Designer to Create Templates</p>
                      <p> Write First Draft for Youtube Video</p>
                    </div>
                    <div className="single-task">
                      <div className="time">12-3 PM</div>
                      <p>Get New UI Designer to Create Templates</p>
                      <p> Write First Draft for Youtube Video</p>
                    </div>
                    <div className="single-task">
                      <div className="time">12-3 PM</div>
                      <p>Get New UI Designer to Create Templates</p>
                      <p> Write First Draft for Youtube Video</p>
                    </div>
                    <div className="single-task">
                      <div className="time">12-3 PM</div>
                      <p>Get New UI Designer to Create Templates</p>
                      <p> Write First Draft for Youtube Video</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
              <div className="dashboard-sidebar">
                <div className="upload-image">
                  <img
                    src="assets/images/upimage.png"
                    alt="icon"
                    className="img-fluid"
                  />
                </div>
                <div className="sidebar-content">
                  <form action="" className="d-none">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="project #1"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="The Golden Ship Project"
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        name=""
                        id=""
                        rows={10}
                      >
                        A tool to help scattered & unfocused entrepreneurs get
                        stellar focus & commitment to succeed in the world of
                        business.
                      </textarea>
                    </div>
                  </form>
                  <div className="project-content">
                    <h5 className="project-no">project #1</h5>
                    <h3 className="project-name">The Golden Ship Project</h3>
                    <p className="project-desc">
                      A tool to help scattered & unfocused entrepreneurs get
                      stellar focus & commitment to succeed in the world of
                      business.
                    </p>
                  </div>
                  <div className="project-counter">
                    <div className="single-box">
                      <div className="counter">6</div>
                      <div className="title">customer</div>
                    </div>
                    <div className="single-box">
                      <div className="counter">6</div>
                      <div className="title">sprints</div>
                    </div>
                    <div className="single-box">
                      <div className="counter">6</div>
                      <div className="title">team</div>
                    </div>
                  </div>
                  <a href="#" className="btn journey-btn">
                    journey
                  </a>
                  <a href="#" className="btn story-btn">
                    story
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className="BorderGrid BorderGrid--spacious">
                <div className="BorderGrid-row">
                  <div className="BorderGrid-cell">
                    <div className="mb-2">
                      <span className="Progress">
                        <span
                          style={{
                            background: '#7a00f3 !important',
                            width: '33.33%',
                            border: '1px solid #333636',
                          }}
                          aria-label="JavaScript 71.7"
                          className="Progress-item partent color-bg-success-emphasis"
                        >
                          <span
                            style={{
                              backgroundColor: '#7a00f3 !important',
                              width: '25%',
                              border: '1px solid #333636',
                              height: '100%',
                            }}
                            aria-label="JavaScript 71.7"
                            className="Progress-item-child child "
                          ></span>
                          <span
                            style={{
                              backgroundColor: '#7a00f3 !important',
                              width: '25%',
                              border: '1px solid #333636',
                              height: '100%',
                            }}
                            aria-label="JavaScript 71.7"
                            className="Progress-item-child child "
                          ></span>
                          <span
                            style={{
                              backgroundColor: '#7a00f3 !important',
                              width: '25%',
                              border: '1px solid #333636',
                              height: '100%',
                            }}
                            aria-label="JavaScript 71.7"
                            className="Progress-item-child child "
                          ></span>
                          <span
                            style={{
                              backgroundColor: '#7a00f3 !important',
                              width: '25%',
                              height: '100%',
                            }}
                            aria-label="JavaScript 71.7"
                            className="Progress-item-child child "
                          ></span>
                          <div className="step">Sprint #1</div>
                        </span>
                        <span
                          style={{
                            backgroundColor: 'transparent !important',
                            width: '33.33%',
                            height: '100%',
                            border: '1px solid #333636',
                          }}
                          className="Progress-item "
                        >
                          <div className="step">Sprint #2</div>
                        </span>
                        <span
                          style={{
                            backgroundColor: 'transparent !important',
                            width: '33.33%',
                            height: '100%',
                            border: '1px solid #333636',
                          }}
                          className="Progress-item "
                        >
                          <div className="step">Sprint #3</div>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Dashboard;
