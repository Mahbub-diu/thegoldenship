import Link from "next/link";

export default function Navbar() {
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
                      <div className="month-name">August</div>
                      <div className="date">03</div>
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
  );
}
