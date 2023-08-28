"use client"
import React, { useEffect, useState } from "react";

export const UserCount = () => {
  let [countOfUser, setCountOfUser] = useState({
    totalStudent: 0,
    totalCoach: 0,
    totalAdmin: 0,
    totalUsers: [],
  });
  useEffect(() => {
    fetch("/api/admin/dashboard", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setCountOfUser(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div className="col-xl-4 col-lg-6 col-md-6">
        <div className="card">
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <h6 className="fw-normal mb-2">Total {countOfUser.totalAdmin} users</h6>
              <ul className="list-unstyled d-flex align-items-center avatar-group mb-0">
                <li
                  data-bs-toggle="tooltip"
                  data-popup="tooltip-custom"
                  data-bs-placement="top"
                  title="Vinnie Mostowy"
                  className="avatar avatar-sm pull-up"
                >
                  <img
                    className="rounded-circle"
                    src="/admin/assets/img/avatars/5.png"
                    alt="Avatar"
                  />
                </li>
                <li
                  data-bs-toggle="tooltip"
                  data-popup="tooltip-custom"
                  data-bs-placement="top"
                  title="Allen Rieske"
                  className="avatar avatar-sm pull-up"
                >
                  <img
                    className="rounded-circle"
                    src="/admin/assets/img/avatars/12.png"
                    alt="Avatar"
                  />
                </li>
                <li
                  data-bs-toggle="tooltip"
                  data-popup="tooltip-custom"
                  data-bs-placement="top"
                  title="Julee Rossignol"
                  className="avatar avatar-sm pull-up"
                >
                  <img
                    className="rounded-circle"
                    src="/admin/assets/img/avatars/6.png"
                    alt="Avatar"
                  />
                </li>
                <li
                  data-bs-toggle="tooltip"
                  data-popup="tooltip-custom"
                  data-bs-placement="top"
                  title="Kaith D'souza"
                  className="avatar avatar-sm pull-up"
                >
                  <img
                    className="rounded-circle"
                    src="/admin/assets/img/avatars/3.png"
                    alt="Avatar"
                  />
                </li>
                <li
                  data-bs-toggle="tooltip"
                  data-popup="tooltip-custom"
                  data-bs-placement="top"
                  title="John Doe"
                  className="avatar avatar-sm pull-up"
                >
                  <img
                    className="rounded-circle"
                    src="/admin/assets/img/avatars/1.png"
                    alt="Avatar"
                  />
                </li>
              </ul>
            </div>
            <div className="d-flex justify-content-between align-items-end mt-1">
              <div className="role-heading">
                <h4 className="mb-1">Admin</h4>
                <a
                  href="javascript:;"
                  data-bs-toggle="modal"
                  data-bs-target="#addRoleModal"
                  className="role-edit-modal"
                >
                  <span>Edit Role</span>
                </a>
              </div>
              <a href="javascript:void(0);" className="text-muted">
                <i className="ti ti-copy ti-md"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="col-xl-4 col-lg-6 col-md-6">
        <div className="card">
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <h6 className="fw-normal mb-2">Total {countOfUser.totalCoach} users</h6>
              <ul className="list-unstyled d-flex align-items-center avatar-group mb-0">
                <li
                  data-bs-toggle="tooltip"
                  data-popup="tooltip-custom"
                  data-bs-placement="top"
                  title="Jimmy Ressula"
                  className="avatar avatar-sm pull-up"
                >
                  <img
                    className="rounded-circle"
                    src="/admin/assets/img/avatars/4.png"
                    alt="Avatar"
                  />
                </li>
                <li
                  data-bs-toggle="tooltip"
                  data-popup="tooltip-custom"
                  data-bs-placement="top"
                  title="John Doe"
                  className="avatar avatar-sm pull-up"
                >
                  <img
                    className="rounded-circle"
                    src="/admin/assets/img/avatars/1.png"
                    alt="Avatar"
                  />
                </li>
                <li
                  data-bs-toggle="tooltip"
                  data-popup="tooltip-custom"
                  data-bs-placement="top"
                  title="Kristi Lawker"
                  className="avatar avatar-sm pull-up"
                >
                  <img
                    className="rounded-circle"
                    src="/admin/assets/img/avatars/2.png"
                    alt="Avatar"
                  />
                </li>
                <li
                  data-bs-toggle="tooltip"
                  data-popup="tooltip-custom"
                  data-bs-placement="top"
                  title="Kaith D'souza"
                  className="avatar avatar-sm pull-up"
                >
                  <img
                    className="rounded-circle"
                    src="/admin/assets/img/avatars/3.png"
                    alt="Avatar"
                  />
                </li>
                <li
                  data-bs-toggle="tooltip"
                  data-popup="tooltip-custom"
                  data-bs-placement="top"
                  title="Danny Paul"
                  className="avatar avatar-sm pull-up"
                >
                  <img
                    className="rounded-circle"
                    src="/admin/assets/img/avatars/7.png"
                    alt="Avatar"
                  />
                </li>
              </ul>
            </div>
            <div className="d-flex justify-content-between align-items-end mt-1">
              <div className="role-heading">
                <h4 className="mb-1">Couch</h4>
                <a
                  href="javascript:;"
                  data-bs-toggle="modal"
                  data-bs-target="#addRoleModal"
                  className="role-edit-modal"
                >
                  <span>Edit Role</span>
                </a>
              </div>
              <a href="javascript:void(0);" className="text-muted">
                <i className="ti ti-copy ti-md"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="col-xl-4 col-lg-6 col-md-6">
        <div className="card">
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <h6 className="fw-normal mb-2">Total {countOfUser.totalStudent} users</h6>
              <ul className="list-unstyled d-flex align-items-center avatar-group mb-0">
                <li
                  data-bs-toggle="tooltip"
                  data-popup="tooltip-custom"
                  data-bs-placement="top"
                  title="Andrew Tye"
                  className="avatar avatar-sm pull-up"
                >
                  <img
                    className="rounded-circle"
                    src="/admin/assets/img/avatars/6.png"
                    alt="Avatar"
                  />
                </li>
                <li
                  data-bs-toggle="tooltip"
                  data-popup="tooltip-custom"
                  data-bs-placement="top"
                  title="Rishi Swaat"
                  className="avatar avatar-sm pull-up"
                >
                  <img
                    className="rounded-circle"
                    src="/admin/assets/img/avatars/9.png"
                    alt="Avatar"
                  />
                </li>
                <li
                  data-bs-toggle="tooltip"
                  data-popup="tooltip-custom"
                  data-bs-placement="top"
                  title="Rossie Kim"
                  className="avatar avatar-sm pull-up"
                >
                  <img
                    className="rounded-circle"
                    src="/admin/assets/img/avatars/12.png"
                    alt="Avatar"
                  />
                </li>
                <li
                  data-bs-toggle="tooltip"
                  data-popup="tooltip-custom"
                  data-bs-placement="top"
                  title="Kim Merchent"
                  className="avatar avatar-sm pull-up"
                >
                  <img
                    className="rounded-circle"
                    src="/admin/assets/img/avatars/10.png"
                    alt="Avatar"
                  />
                </li>
                <li
                  data-bs-toggle="tooltip"
                  data-popup="tooltip-custom"
                  data-bs-placement="top"
                  title="Sam D'souza"
                  className="avatar avatar-sm pull-up"
                >
                  <img
                    className="rounded-circle"
                    src="/admin/assets/img/avatars/13.png"
                    alt="Avatar"
                  />
                </li>
              </ul>
            </div>
            <div className="d-flex justify-content-between align-items-end mt-1">
              <div className="role-heading">
                <h4 className="mb-1">Student</h4>
                <a
                  href="javascript:;"
                  data-bs-toggle="modal"
                  data-bs-target="#addRoleModal"
                  className="role-edit-modal"
                >
                  <span>Edit Role</span>
                </a>
              </div>
              <a href="javascript:void(0);" className="text-muted">
                <i className="ti ti-copy ti-md"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
