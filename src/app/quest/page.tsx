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

function Quest() {
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
      <section className="quest-main">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className="golden-rule">
                <h3>golden rule : </h3>
                <p className="warning-box">
                  We work on ONE PROJECT at a time until completion. Here we
                  focus on completion & creating. Are you ready to lock in your
                  project?
                </p>
              </div>
              <div className="add-projects">
                <h4>your projects</h4>
                <button
                  type="button"
                  className="btn modal-btn"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  start new project <i className="fa-solid fa-plus"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        className="modal fade quest-modal"
        id="exampleModal"
        tabIndex={1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form action="">
                <div className="form-group">
                  <h4>Title of Project</h4>
                  <textarea
                    name=""
                    id=""
                    placeholder="About the project, why do you want to create this, what is the transformation one gets with your project? (in 2-3 setences)"
                    rows={5}
                    className="form-control"
                  ></textarea>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Write the reward for completing this project"
                  />
                </div>
                <div className="form-group">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label className="form-check-label">
                      Are you sure? You will have to complete & create this
                      project...
                    </label>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Quest;
