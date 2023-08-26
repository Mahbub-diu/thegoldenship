"use client";
import React, { useState } from "react";
import { TaskDataField } from "../../../../helper/types";

const TaskMakeShow = ({
  title = "",
  data = [
    {
      id: "", 
      title: "",
    },
  ],
  addTask = (tData: TaskDataField, stData: any) => {},
  cols = "col-xs-12 col-sm-12 col-md-5 col-lg-5",
}) => {
  let [taskData, setTaskData] = useState({
    title: "",
    content: "",
    authorId: null,
  });
  return (
    <>
      <div className={cols + " dashboard-card-col"}>
        <div className="dashboard-card h-100">
          <div className="dashboard-card-header">
            <h2 className="dash-card-title">{title}</h2>
          </div>
          <div className="checked-tasks">
            {data?.map((task) => (
              <div className="single-task-flex" key={task?.id}>
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
                    {task.title}
                  </button>
                </div>
              </div>
            ))}
            <div className="single-task-input">
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                value={taskData?.title}
                placeholder="Type weekly intention here..."
                onChange={(e) => {
                  setTaskData({ ...taskData, title: e.target.value });
                }}
              />
            </div>
            <div className="single-task-input">
              <input
                type="text"
                className="form-control"
                value={taskData?.content}
                id="exampleFormControlInput1"
                placeholder="Type weekly intention here..."
                onChange={(e) => {
                  setTaskData({ ...taskData, content: e.target.value });
                }}
              />
            </div>
            <div className="add-task-btn-wrapper">
              <button
                className="add-task-btn"
                onClick={() => addTask(taskData, setTaskData)}
              >
                <img src="./assets/images/icon/plus_w.png" alt="" />
                Add Task
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskMakeShow;
