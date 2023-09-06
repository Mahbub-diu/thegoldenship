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
          <a className="navbar-brand" href="/">
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
                <Link className="nav-link " href="/">
                  dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/quest">
                  quest
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/story">
                  story
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/sprints">
                  journey
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  leaderboard
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link mastermind-link" href="#">
                  enter mastermind
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img src="assets/images/icon/user-icon.png" alt="icon" />
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" href="#">
                      my profile
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      setting
                    </Link>
                  </li>

                  <li>
                    <Link className="dropdown-item" href="#">
                      log out
                    </Link>
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
