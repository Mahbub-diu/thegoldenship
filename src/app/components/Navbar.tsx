'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Navbar() {
  let pathName = usePathname();
  if (
    pathName == '/' ||
    pathName == '/login' ||
    pathName == '/signup' ||
    pathName.startsWith('/admin')
  ) {
    return <></>;
  }
  let [todayDate, setTodayDate] = useState({
    month: 'Janu',
    date: 1,
  });
  useEffect(() => {
    let date = new Date();
    let month = date.toLocaleString('default', { month: 'long' });
    let dateNum = date.getDate();
    setTodayDate({
      month: month,
      date: dateNum,
    });
  }, []);
  return (
    <section className="navbar-main">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="assets/images/logo.png" alt="icon" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav justify-content-center m-auto">
              <li className="nav-item">
                <a className="nav-link " href="#">
                  dashboard
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  quest
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  story
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  journey
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  leaderboard
                </a>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link mastermind-link" href="#">
                  enter mastermind
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img src="assets/images/icon/user-icon.png" alt="icon" />
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      my profile
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      setting
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item" href="#">
                      log out
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}
