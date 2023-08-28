import React from "react";
import { UserCount } from "../components/admin/dashboard/UserCount";

const AdminDashBoard = () => {
  return (
    <>
      {" "}
      <div className="container-xxl flex-grow-1 container-p-y">
        <div className="row g-4">
          <UserCount/>

          <div className="col-xl-3 col-lg-6 col-md-6 d-none">
            <div className="card h-100">
              <div className="row h-100">
                <div className="col-sm-5">
                  <div className="d-flex align-items-end h-100 justify-content-center mt-sm-0 mt-3">
                    <img
                      src="/admin/assets/img/illustrations/add-new-roles.png"
                      className="img-fluid mt-sm-4 mt-md-0"
                      alt="add-new-roles"
                      width="83"
                    />
                  </div>
                </div>
                <div className="col-sm-7">
                  <div className="card-body text-sm-end text-center ps-sm-0">
                    <button
                      data-bs-target="#addRoleModal"
                      data-bs-toggle="modal"
                      className="btn btn-primary mb-2 text-nowrap add-new-role"
                    >
                      Add New Role
                    </button>
                    <p className="mb-0 mt-1">Add role, if it does not exist</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 d-none">
            <div className="card">
              <div className="card-datatable table-responsive">
                <table className="datatables-users table border-top">
                  <thead>
                    <tr>
                      <th></th>
                      <th>User</th>
                      <th>Role</th>
                      <th>Plan</th>
                      <th>Billing</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashBoard;
