"use client";
import { PrismaClient } from "@prisma/client";
import React, { useEffect, useState } from "react";
import { options } from "../api/auth/[...nextauth]/options";
import { signOut, useSession } from "next-auth/react";
import axios from "axios";
import moment from "moment";
import Link from "next/link";
import TaskMakeShow from "../components/dashboard/TaskMakeShow";
import { toast } from "react-toastify";
import { TaskDataField } from "../../../helper/types";

function Dashboard() {
  const { data: session } = useSession();
  let [coreTask, setCoreTask] = useState<any[]>([]);
  let [sevenDayTask, setSevenDayTask] = useState<any[]>([]);
  let [monthTask, setMonthTask] = useState<any[]>([]);
  let [todayDate, setTodayDate] = useState<any>(moment().format("LL")); // August 3, 2021

  const getCoreTask = async () => {
    let res = await axios.get("/api/tasks/task");
    console.log(res.data);
    setCoreTask(res?.data?.todayTasks);
    setMonthTask(res?.data?.tasksByDay);
    setSevenDayTask(res?.data?.sevenDaysTasks);
  };
  const addTask = async (taskData: TaskDataField, setTaskData: any) => {
    if (taskData.title == "" && taskData.content == "") {
      toast.error("Please fill all the fields");
      return false;
    }
    let res = await axios.post("/api/tasks/task", {
      ...taskData,
    });

    setCoreTask((state) => [...state, res.data]);
    setSevenDayTask((state) => [...state, res.data]);
    setTaskData({ ...taskData, title: "", content: "" });
  };
  useEffect(() => {
    setTodayDate(moment().format("MMMM Do YYYY, h:mm:ss a"));
    getCoreTask();
  }, []);
  return (
    <>
      <section className="dashboard-main">
        <div className="container-xxl">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className="dashboard-header-main">
                <div className="header-flex">
                  <div className="icon-box">
                    <img
                      src="assets/images/icon/noto_waving-hand.png"
                      alt="icon"
                    />
                  </div>
                  <div className="header-box">
                    <h1 className="dashboard-title d-flex justify-content-between">
                      <div>
                        Hlw , {session?.user?.name}{" "}
                        <p className="dates">{todayDate}</p>
                      </div>
                      <p>
                        <div className="profile-box">
                          <a
                            className="nav-link dropdown-toggle hide-arrow show"
                            href="javascript:void(0);"
                            data-bs-toggle="dropdown"
                            aria-expanded="true"
                          >
                            <div className="avatar avatar-online">
                              <img
                                src="http://36.255.71.212:8090/assets/img/avatars/1.png"
                                className="h-auto rounded-circle"
                              />
                            </div>
                          </a>
                          <ul
                            className="dropdown-menu dropdown-menu-end show"
                            data-bs-popper="static"
                          >
                            <li>
                              <a
                                className="dropdown-item"
                                href="pages-account-settings-account.html"
                              >
                                <div className="d-flex">
                                  <div className="flex-shrink-0 me-3">
                                    <div className="avatar avatar-online">
                                      <img
                                        src="http://36.255.71.212:8090/assets/img/avatars/1.png"
                                        className="h-auto rounded-circle"
                                      />
                                    </div>
                                  </div>
                                  <div className="flex-shrink-1">
                                    <span className="fw-semibold d-block">
                                      {session?.user?.name}
                                    </span>
                                    <small className="text-muted">
                                      {session?.user?.email}
                                    </small>
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li>
                              <div className="dropdown-divider"></div>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="pages-profile-user.html"
                              >
                                <i className="ti ti-user-check me-2 ti-sm"></i>
                                <span className="align-middle">My Profile</span>
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="pages-account-settings-account.html"
                              >
                                <i className="ti ti-settings me-2 ti-sm"></i>
                                <span className="align-middle">Settings</span>
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="pages-account-settings-billing.html"
                              >
                                <span className="d-flex align-items-center align-middle">
                                  <i className="flex-shrink-0 ti ti-credit-card me-2 ti-sm"></i>
                                  <span className="flex-grow-1 align-middle">
                                    Billing
                                  </span>
                                  <span className="flex-shrink-0 badge badge-center rounded-pill bg-label-danger w-px-20 h-px-20">
                                    2
                                  </span>
                                </span>
                              </a>
                            </li>
                            <li>
                              <div className="dropdown-divider"></div>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="pages-help-center-landing.html"
                              >
                                <i className="ti ti-lifebuoy me-2 ti-sm"></i>
                                <span className="align-middle">Help</span>
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="pages-faq.html"
                              >
                                <i className="ti ti-help me-2 ti-sm"></i>
                                <span className="align-middle">FAQ</span>
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="pages-pricing.html"
                              >
                                <i className="ti ti-currency-dollar me-2 ti-sm"></i>
                                <span className="align-middle">Pricing</span>
                              </a>
                            </li>
                            <li>
                              <div className="dropdown-divider"></div>
                            </li>
                            <li>
                              <a
                                onClick={() => signOut()}
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                <i className="ti ti-logout me-2 ti-sm"></i>
                                <span className="align-middle">Log Out</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </p>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <TaskMakeShow
              data={coreTask}
              title="Today's Task"
              addTask={addTask}
            />
            <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 dashboard-card-col">
              <div className="dashboard-card mb-20 ">
                <div className="dashboard-card-header">
                  <h2 className="dash-card-title">Calender</h2>
                </div>
                <div className="calendar-grid-main">
                  {Object.keys(monthTask).map((item: any) => {
                    console.log(monthTask);
                    return (
                      <div className="single-day-box" key={item}>
                        <div className="day-title">{item}</div>
                        {monthTask[item]?.map((task: any) => {
                          return (
                            <div className="single-task" key={task.id}>
                              {task?.title}
                            </div>
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
              </div>
              {/* <div className="dashboard-card ">
                <div className="dashboard-card-header">
                  <h2 className="dash-card-title">This weeks Quest</h2>
                  <div className="day d-flex align-items-center">
                    <a href="">
                      <img
                        src="./assets/images/icon/arrow_back_ios 1.png"
                        alt=""
                        className="img-fluid"
                      />
                    </a>
                    <h4>Today</h4>
                    <a href="">
                      <img
                        src="./assets/images/icon/arrow_forward_ios 1.png"
                        alt=""
                        className="img-fluid"
                      />
                    </a>
                  </div>
                </div>
                <div className="checked-tasks">
                  <div className="single-task-flex">
                    <div className="task-box-2">
                      <button
                        className="btn check-task-btn"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <div className="check-icon">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                              checked
                            />
                          </div>
                        </div>
                        Day 18 - Blink 500 Times at 12PM EST
                      </button>
                    </div>
                  </div>
                  <div className="single-task-input">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Type weekly intention here..."
                    />
                  </div>
                  <div className="single-task-input">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Type weekly intention here..."
                    />
                  </div>
                </div>
              </div> */}
              <TaskMakeShow
                data={sevenDayTask}
                title="This weeks Quest"
                addTask={addTask}
                cols="sevenDay"
              />
            </div>

            <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 dashboard-card-col d-none">
              <div className="dashboard-card h-100">
                <div className="dashboard-card-header">
                  <h2 className="spritual-card-title">
                    Intuative Connect Practice
                  </h2>
                  <div className="day d-flex align-items-center">
                    <a href="">
                      <img
                        src="./assets/images/icon/arrow_back_ios 1.png"
                        alt=""
                        className="img-fluid"
                      />
                    </a>
                    <h4>Today</h4>
                    <a href="">
                      <img
                        src="./assets/images/icon/arrow_forward_ios 1.png"
                        alt=""
                        className="img-fluid"
                      />
                    </a>
                  </div>
                </div>
                <div className="checked-tasks">
                  <div className="single-task-flex">
                    <div className="task-box-2">
                      <a href="#" className="btn check-task-btn">
                        <div className="check-icon">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                              checked
                            />
                          </div>
                        </div>
                        Day 18 - Blink 500 Times at 12PM EST
                      </a>
                    </div>
                  </div>
                  <div className="single-task-flex">
                    <div className="task-box-2">
                      <a href="#" className="btn check-task-btn">
                        <div className="check-icon">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                              checked
                            />
                          </div>
                        </div>
                        Morning Kriya Practices
                      </a>
                    </div>
                  </div>
                  <div className="single-task-flex">
                    <div className="task-box-2">
                      <a href="#" className="btn check-task-btn">
                        <div className="check-icon">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                              checked
                            />
                          </div>
                        </div>
                        Night Meditation ( ADD LINK - redirect to youtube)
                      </a>
                    </div>
                  </div>
                </div>
                <h5 className="quote-name">‘’Spritual Quote”</h5>
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
                            background: "#7a00f3 !important",
                            width: "33.33%",
                            border: "1px solid #333636",
                          }}
                          aria-label="JavaScript 71.7"
                          className="Progress-item partent color-bg-success-emphasis"
                        >
                          <span
                            style={{
                              backgroundColor: "#7a00f3 !important",
                              width: "25%",
                              border: "1px solid #333636",
                              height: "100%",
                            }}
                            aria-label="JavaScript 71.7"
                            className="Progress-item-child child "
                          ></span>
                          <span
                            style={{
                              backgroundColor: "#7a00f3 !important",
                              width: "25%",
                              border: "1px solid #333636",
                              height: "100%",
                            }}
                            aria-label="JavaScript 71.7"
                            className="Progress-item-child child "
                          ></span>
                          <span
                            style={{
                              backgroundColor: "#7a00f3 !important",
                              width: "25%",
                              border: "1px solid #333636",
                              height: "100%",
                            }}
                            aria-label="JavaScript 71.7"
                            className="Progress-item-child child "
                          ></span>
                          <span
                            style={{
                              backgroundColor: "#7a00f3 !important",
                              width: "25%",
                              height: "100%",
                            }}
                            aria-label="JavaScript 71.7"
                            className="Progress-item-child child "
                          ></span>
                          <div className="step">Sprint #1</div>
                        </span>
                        <span
                          style={{
                            backgroundColor: "transparent !important",
                            width: "33.33%",
                            height: "100%",
                            border: "1px solid #333636",
                          }}
                          className="Progress-item "
                        >
                          <div className="step">Sprint #2</div>
                        </span>
                        <span
                          style={{
                            backgroundColor: "transparent !important",
                            width: "33.33%",
                            height: "100%",
                            border: "1px solid #333636",
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

          <div
            className="modal fade dashboard-modal"
            id="exampleModal"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered modal-lg">
              <div className="modal-content">
                <div className="modal-body">
                  <div className="modal-body-content">
                    <div className="modal-body-content-header">
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      >
                        <i className="fa-solid fa-xmark"></i>
                      </button>
                      <h2 className="modal-body-title">
                        🎯 Sprint #1 - Create Basic Layout for Kaizen Flow
                      </h2>
                      <p className="modal-body-subtitle">
                        Assign level/progress bar (LEVEL) The Beginning - Level
                        1
                      </p>
                      <div className="date-wrapper">
                        <div className="date">
                          <img
                            src="./assets/images/icon/calendar 1.png"
                            alt=""
                            className="img-fluid"
                          />
                          <span>
                            July 31st 2023 August 7th 2023 (7 Day Sprint )
                          </span>
                        </div>
                        <div className="color">
                          <img
                            src="./assets/images/icon/color.png"
                            alt=""
                            className="img-fluid"
                          />
                          <span>Color</span>
                        </div>
                      </div>
                      <div className="modal-body-card">
                        <h4 className="title">
                          About this Project: (Problem, Why, Mission)
                        </h4>
                        <p className="text">
                          For the past 7 months, I haven’t been finishing the
                          projects that I had started. Going from one to another
                          to an unending cycle of starting without completion.
                        </p>
                        <p className="text">
                          Now, as I’m get ting more in tuned with keeping my
                          word, I am going to commit to complete my first SAAs
                          Project, an idea I had in April of 2023. The idea came
                          from me having no structure in my life & business.
                        </p>

                        <div className="list-wrapper">
                          <p className="list-title m-0">
                            After leaving school, I was by myself - trying to
                            figure what I would do with my time.
                          </p>
                          <ul>
                            <li>I didn’t have clear calendar</li>
                            <li>
                              There wasn’t a plan on how I would execute my
                              projects
                            </li>
                            <li>
                              I didn’t have the foundation of a brand build laid
                              out...
                            </li>
                          </ul>
                        </div>
                        <p className="text">
                          This is what got me to the idea of Kaizen Flow.
                        </p>
                      </div>
                      <div className="get-done-list-wrapper">
                        <h4 className="title">To Get Done This Week:</h4>

                        <form>
                          <ul>
                            <li>
                              <input
                                type="checkbox"
                                id="vehicle1"
                                name="vehicle1"
                                value="Bike"
                              />
                              <label htmlFor="vehicle1">
                                Big Goal of the Week - Complete the Main Layouts
                                for Kaizen Flow
                              </label>
                              <ul>
                                <li>
                                  <input
                                    type="checkbox"
                                    id="vehicle2"
                                    name="vehicle2"
                                    value="Car"
                                  />
                                  <label htmlFor="vehicle2">
                                    Main Elements - Main Dashboard, Journey &
                                    Calendar Dashboard (+Progress?)
                                  </label>
                                </li>
                                <li>
                                  <input
                                    type="checkbox"
                                    id="vehicle3"
                                    name="vehicle3"
                                    value="Boat"
                                  />
                                  <label htmlFor="vehicle3">
                                    Main Elements - Main Dashboard, Journey &
                                    Calendar Dashboard (+Progress?)
                                  </label>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <input
                                type="checkbox"
                                id="vehicle2"
                                name="vehicle2"
                                value="Car"
                              />
                              <label htmlFor="vehicle2">
                                Breakdown of Main Elements to Include of the
                                Application
                              </label>
                            </li>
                            <li>
                              <input
                                type="checkbox"
                                id="vehicle3"
                                name="vehicle3"
                                value="Boat"
                              />
                              <label htmlFor="vehicle3">
                                Main Elements - Main Dashboard, Journey &
                                Calendar Dashboard (+Progress?)
                              </label>
                            </li>
                          </ul>
                        </form>
                      </div>
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
