"use client";
import { PrismaClient } from "@prisma/client";
import React, { useEffect, useState } from "react";
import { options } from "../api/auth/[...nextauth]/options";
import { signOut, useSession } from "next-auth/react";
import axios from "axios";
import moment from "moment";

function Dashboard() {
  let [coreTask, setCoreTask] = useState([]);
  const { data: session } = useSession();
  const getCoreTask = async () => {};
  useEffect(() => {
    //getCoreTask();
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
                      <p>
                        Hlw , {session?.user?.name}{" "}
                        <p className="dates">
                          {moment().format("MMMM Do YYYY, h:mm:ss a")}
                        </p>
                      </p>
                      <p >
                        <button
                          onClick={() => signOut()}
                          className="btn btn-danger"
                        >
                          logout
                        </button>
                      </p>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 dashboard-card-col">
              <div className="dashboard-card h-100">
                <div className="dashboard-card-header">
                  <h2 className="dash-card-title">Core Tasks</h2>
                </div>
                <div className="checked-tasks">
                  <div className="single-task-flex">
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
                    <div className="task-box">
                      <button
                        className="btn check-task-btn"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        Completed 20 min Yoga
                      </button>
                    </div>
                  </div>
                  <div className="single-task-flex">
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
                    <div className="task-box">
                      <button
                        className="btn check-task-btn"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        Completed 2h Deep Work
                      </button>
                    </div>
                  </div>
                  <div className="single-task-flex">
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
                    <div className="task-box">
                      <button
                        className="btn check-task-btn"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        Completed Day 14 of intuitive connect
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
                  <div className="add-task-btn-wrapper">
                    <button className="add-task-btn">
                      <img src="./assets/images/icon/plus_w.png" alt="" />
                      Add Task
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 dashboard-card-col">
              <div className="dashboard-card mb-20 ">
                <div className="dashboard-card-header">
                  <h2 className="dash-card-title">Calender</h2>
                </div>
                <div className="calendar-grid-main">
                  <div className="single-day-box">
                    <div className="day-title">Monday</div>
                    <div className="single-task">
                      10AM-12PM Create layout for Journey App (Sprints, Roadmap)
                    </div>
                    <div className="single-task">
                      10AM-12PM Create layout for Journey App (Sprints, Roadmap)
                    </div>
                    <div className="single-task">
                      10AM-12PM Create layout for Journey App (Sprints, Roadmap)
                    </div>
                  </div>
                  <div className="single-day-box">
                    <div className="day-title">tuesday</div>
                    <div className="single-task">
                      10AM-12PM Create layout for Journey App (Sprints, Roadmap)
                    </div>
                    <div className="single-task">
                      10AM-12PM Create layout for Journey App (Sprints, Roadmap)
                    </div>
                    <div className="single-task">
                      10AM-12PM Create layout for Journey App (Sprints, Roadmap)
                    </div>
                  </div>
                  <div className="single-day-box active">
                    <div className="day-title">Wednesday</div>
                    <div className="single-task">
                      10AM-12PM Create layout for Journey App (Sprints, Roadmap)
                    </div>
                    <div className="single-task">
                      10AM-12PM Create layout for Journey App (Sprints, Roadmap)
                    </div>
                    <div className="single-task">
                      10AM-12PM Create layout for Journey App (Sprints, Roadmap)
                    </div>
                  </div>
                  <div className="single-day-box">
                    <div className="day-title">thursday</div>
                    <div className="single-task">
                      10AM-12PM Create layout for Journey App (Sprints, Roadmap)
                    </div>
                    <div className="single-task">
                      10AM-12PM Create layout for Journey App (Sprints, Roadmap)
                    </div>
                    <div className="single-task">
                      10AM-12PM Create layout for Journey App (Sprints, Roadmap)
                    </div>
                  </div>
                  <div className="single-day-box">
                    <div className="day-title">friday</div>
                    <div className="single-task">
                      10AM-12PM Create layout for Journey App (Sprints, Roadmap)
                    </div>
                    <div className="single-task">
                      10AM-12PM Create layout for Journey App (Sprints, Roadmap)
                    </div>
                    <div className="single-task">
                      10AM-12PM Create layout for Journey App (Sprints, Roadmap)
                    </div>
                  </div>
                </div>
              </div>

              <div className="dashboard-card ">
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
              </div>
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
              <div className="common-progressbar-main">
                <ul className="list-unstyled multi-steps">
                  <li>Start</li>
                  <li className="is-active">Sprint#1</li>
                  <li>Sprint#2</li>
                  <li>Sprint#3</li>
                  <li>MVP Completed</li>
                </ul>
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
<<<<<<< HEAD
                              <label htmlhtmlFor="vehicle1">
=======
                              <label htmlFor="vehicle1">
>>>>>>> 0e1ad238f1be9491eb3749bd603185feff28707c
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
<<<<<<< HEAD
                                  <label htmlhtmlFor="vehicle2">
=======
                                  <label htmlFor="vehicle2">
>>>>>>> 0e1ad238f1be9491eb3749bd603185feff28707c
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
<<<<<<< HEAD
                                  <label htmlhtmlFor="vehicle3">
=======
                                  <label htmlFor="vehicle3">
>>>>>>> 0e1ad238f1be9491eb3749bd603185feff28707c
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
<<<<<<< HEAD
                              <label htmlhtmlFor="vehicle2">
=======
                              <label htmlFor="vehicle2">
>>>>>>> 0e1ad238f1be9491eb3749bd603185feff28707c
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
<<<<<<< HEAD
                              <label htmlhtmlFor="vehicle3">
=======
                              <label htmlFor="vehicle3">
>>>>>>> 0e1ad238f1be9491eb3749bd603185feff28707c
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
      <section className="fixed-nav-main">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="fixed-nav">
                <ul className="nav justify-content-center">
                  <li className="nav-item">
                    <a className="nav-link active" href="#">
                      <div className="calender-box">
                        <div className="month-name">August</div>
                        <div className="date">03</div>
                      </div>
                      dashboard
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <div className="icon-box">
                        <img src="assets/images/icon/story.png" alt="" />
                      </div>
                      <div className="nav-title">story</div>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <div className="icon-box">
                        <img src="assets/images/icon/terminal.png" alt="" />
                      </div>
                      <div className="nav-title">Journey</div>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <div className="icon-box">
                        <img src="assets/images/icon/star.png" alt="" />
                      </div>
                      <div className="nav-title">rewards</div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Dashboard;
