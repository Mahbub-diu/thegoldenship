"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  let pathName=usePathname()
  if(pathName=="/" || pathName=="/login" || pathName=="/signup"|| pathName.startsWith('/admin')
  ){
    return <></>
  }
  let [todayDate, setTodayDate] = useState({
    month: "Janu",
    date: 1
  });
  useEffect(() => {
    let date = new Date();
    let month = date.toLocaleString("default", { month: "long" });
    let dateNum = date.getDate();
    setTodayDate({
      month: month,
      date: dateNum,
    });
  }, []);
  return (
    <section className="fixed-nav-main">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="fixed-nav">
              <ul className="nav justify-content-center">
                <li className="nav-item">
                  <Link className="nav-link active" href="/dashboard">
                    <div className="calender-box">
                      <div className="month-name">{todayDate.month}</div>
                      <div className="date">{todayDate.date}</div>
                    </div>
                    dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/story">
                    <div className="icon-box">
                      <img src="assets/images/icon/story.png" alt="" />
                    </div>
                    <div className="nav-title">story</div>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/sprints">
                    <div className="icon-box">
                      <img src="assets/images/icon/terminal.png" alt="" />
                    </div>
                    <div className="nav-title">Journey</div>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/reward">
                    <div className="icon-box">
                      <img src="assets/images/icon/star.png" alt="" />
                    </div>
                    <div className="nav-title">rewards</div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
