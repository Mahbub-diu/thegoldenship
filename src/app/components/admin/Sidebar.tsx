import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <>
      {" "}
      <aside
        id="layout-menu"
        className="layout-menu menu-vertical menu bg-menu-theme"
      >
        <div className="app-brand demo ">
          <a href="/" className="app-brand-link">
            <span className="app-brand-logo demo">
              <svg
                width="32"
                height="22"
                viewBox="0 0 32 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.00172773 0V6.85398C0.00172773 6.85398 -0.133178 9.01207 1.98092 10.8388L13.6912 21.9964L19.7809 21.9181L18.8042 9.88248L16.4951 7.17289L9.23799 0H0.00172773Z"
                  fill="#7367F0"
                />
                <path
                  opacity="0.06"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.69824 16.4364L12.5199 3.23696L16.5541 7.25596L7.69824 16.4364Z"
                  fill="#161616"
                />
                <path
                  opacity="0.06"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.07751 15.9175L13.9419 4.63989L16.5849 7.28475L8.07751 15.9175Z"
                  fill="#161616"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.77295 16.3566L23.6563 0H32V6.88383C32 6.88383 31.8262 9.17836 30.6591 10.4057L19.7824 22H13.6938L7.77295 16.3566Z"
                  fill="#7367F0"
                />
              </svg>
            </span>
            <span className="app-brand-text demo menu-text fw-bold">muexy</span>
          </a>

          <a
            href="javascript:void(0);"
            className="layout-menu-toggle menu-link text-large ms-auto"
          >
            <i className="ti menu-toggle-icon d-none d-xl-block ti-sm align-middle"></i>
            <i className="ti ti-x d-block d-xl-none ti-sm align-middle"></i>
          </a>
        </div>

        <div className="menu-inner-shadow"></div>

        <ul className="menu-inner py-1">
          <li className="menu-item">
            <Link href="/admin" className="menu-link">
              <i className="menu-icon tf-icons ti ti-smart-home"></i>
              <div>Home</div>
            </Link>
          </li>
          <li className="menu-item">
            <a href="javascript:void(0);" className="menu-link menu-toggle">
              <i className="menu-icon tf-icons ti ti-users"></i>
              <div>Users</div>
            </a>
            <ul className="menu-sub">
              <li className="menu-item">
                <Link href="/admin/user" className="menu-link">
                  <div>List</div>
                </Link>
              </li>
            </ul>
          </li>
          <li className="menu-item d-none">
            <a href="javascript:void(0);" className="menu-link menu-toggle">
              <i className="menu-icon tf-icons ti ti-settings"></i>
              <div>Roles & Permissions</div>
            </a>
            <ul className="menu-sub">
              <li className="menu-item">
                <a href="app-access-roles.html" className="menu-link">
                  <div>Roles</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="app-access-permission.html" className="menu-link">
                  <div>Permission</div>
                </a>
              </li>
            </ul>
          </li>
          <li className="menu-item d-none">
            <a href="javascript:void(0);" className="menu-link menu-toggle">
              <i className="menu-icon tf-icons ti ti-file"></i>
              <div>Pages</div>
            </a>
            <ul className="menu-sub">
              <li className="menu-item">
                <a href="javascript:void(0);" className="menu-link menu-toggle">
                  <div>Account Settings</div>
                </a>
                <ul className="menu-sub">
                  <li className="menu-item">
                    <a
                      href="pages-account-settings-account.html"
                      className="menu-link"
                    >
                      <div>Account</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                      href="pages-account-settings-security.html"
                      className="menu-link"
                    >
                      <div>Security</div>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
