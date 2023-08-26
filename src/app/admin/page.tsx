import React from "react";

const AdminDashBoard = () => {
  return (
    <>
      {" "}
      <div className="container-xxl flex-grow-1 container-p-y">
        <div className="row g-4">
          <div className="col-xl-3 col-lg-6 col-md-6">
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <h6 className="fw-normal mb-2">Total 4 users</h6>
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
                    <h4 className="mb-1">Administrator</h4>
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

          <div className="col-xl-3 col-lg-6 col-md-6">
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <h6 className="fw-normal mb-2">Total 7 users</h6>
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
                    <h4 className="mb-1">Manager</h4>
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

          <div className="col-xl-3 col-lg-6 col-md-6">
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <h6 className="fw-normal mb-2">Total 5 users</h6>
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
                    <h4 className="mb-1">Users</h4>
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

          <div className="col-xl-3 col-lg-6 col-md-6">
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
