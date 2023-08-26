import React from "react";

const AdminNavbar = () => {
  return (
    <>
      {" "}
      <nav
        className="layout-navbar container-fluid navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
        id="layout-navbar"
      >
        <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0   d-xl-none ">
          <a
            className="nav-item nav-link px-0 me-xl-4"
            href="javascript:void(0)"
          >
            <i className="ti ti-menu-2 ti-sm"></i>
          </a>
        </div>

        <div
          className="navbar-nav-right d-flex align-items-center"
          id="navbar-collapse"
        >
          <div className="navbar-nav align-items-center">
            <div className="nav-item navbar-search-wrapper mb-0">
              <a
                className="nav-item nav-link search-toggler d-flex align-items-center px-0"
                href="javascript:void(0);"
              >
                <i className="ti ti-search ti-md me-2"></i>
                <span className="d-none d-md-inline-block text-muted">
                  Search (Ctrl+/)
                </span>
              </a>
            </div>
          </div>

          <ul className="navbar-nav flex-row align-items-center ms-auto">
            <li className="nav-item navbar-dropdown dropdown-user dropdown">
              <a
                className="nav-link dropdown-toggle hide-arrow"
                href="javascript:void(0);"
                data-bs-toggle="dropdown"
              >
                <div className="avatar avatar-online">
                  <img
                    src="assets/img/avatars/1.png"
                    className="h-auto rounded-circle"
                  />
                </div>
              </a>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <a
                    className="dropdown-item"
                    href="pages-account-settings-account.html"
                  >
                    <div className="d-flex">
                      <div className="flex-shrink-0 me-3">
                        <div className="avatar avatar-online">
                          <img
                            src="assets/img/avatars/1.png"
                            className="h-auto rounded-circle"
                          />
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <span className="fw-medium d-block">John Doe</span>
                        <small className="text-muted">Admin</small>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <div className="dropdown-divider"></div>
                </li>
                <li>
                  <a className="dropdown-item" href="pages-profile-user.html">
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
                  <div className="dropdown-divider"></div>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="ti ti-logout me-2 ti-sm"></i>
                    <span className="align-middle">Log Out</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="navbar-search-wrapper search-input-wrapper  d-none">
          <input
            type="text"
            className="form-control search-input container-fluid border-0"
            placeholder="Search..."
            aria-label="Search..."
          />
          <i className="ti ti-x ti-sm search-toggler cursor-pointer"></i>
        </div>
      </nav>
    </>
  );
};

export default AdminNavbar;
