"use client";
import moment from "moment";
import { useSession } from "next-auth/react";
import React from "react";

const Reward = () => {
  let { data: session } = useSession();
  const [todayDate, setTodayDate] = React.useState("");
  React.useEffect(() => {
    setTodayDate(moment().format("MMMM Do YYYY, h:mm:ss a"));
  }, []);
  return (
    <div>
      <section class="dashboard-main">
        <div class="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className="dashboard-header-main">
                <div className="header-flex">
                  <div className="icon-box">
                    <img
                      src="assets/images/icon/noto_waving-hand.png"
                      alt="icon"
                    />
                  </div>
                  <div className="header-box">
                    <h1 className="dashboard-title d-flex justify-content-between">
                      <div>
                        Hlw , {session?.user?.name}{" "}
                        <p className="dates">{todayDate}</p>
                      </div>
                      <p>
                        <div className="profile-box">
                          <a
                            className="nav-link dropdown-toggle hide-arrow show"
                            href="javascript:void(0);"
                            data-bs-toggle="dropdown"
                            aria-expanded="true"
                          >
                            <div className="avatar avatar-online">
                              <img
                                src="http://36.255.71.212:8090/assets/img/avatars/1.png"
                                className="h-auto rounded-circle"
                              />
                            </div>
                          </a>
                          <ul
                            className="dropdown-menu dropdown-menu-end show"
                            data-bs-popper="static"
                          >
                            <li>
                              <a
                                className="dropdown-item"
                                href="pages-account-settings-account.html"
                              >
                                <div className="d-flex">
                                  <div className="flex-shrink-0 me-3">
                                    <div className="avatar avatar-online">
                                      <img
                                        src="http://36.255.71.212:8090/assets/img/avatars/1.png"
                                        className="h-auto rounded-circle"
                                      />
                                    </div>
                                  </div>
                                  <div className="flex-shrink-1">
                                    <span className="fw-semibold d-block">
                                      {session?.user?.name}
                                    </span>
                                    <small className="text-muted">
                                      {session?.user?.email}
                                    </small>
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li>
                              <div className="dropdown-divider"></div>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="pages-profile-user.html"
                              >
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
                              <a
                                className="dropdown-item"
                                href="pages-account-settings-billing.html"
                              >
                                <span className="d-flex align-items-center align-middle">
                                  <i className="flex-shrink-0 ti ti-credit-card me-2 ti-sm"></i>
                                  <span className="flex-grow-1 align-middle">
                                    Billing
                                  </span>
                                  <span className="flex-shrink-0 badge badge-center rounded-pill bg-label-danger w-px-20 h-px-20">
                                    2
                                  </span>
                                </span>
                              </a>
                            </li>
                            <li>
                              <div className="dropdown-divider"></div>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="pages-help-center-landing.html"
                              >
                                <i className="ti ti-lifebuoy me-2 ti-sm"></i>
                                <span className="align-middle">Help</span>
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="pages-faq.html"
                              >
                                <i className="ti ti-help me-2 ti-sm"></i>
                                <span className="align-middle">FAQ</span>
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="pages-pricing.html"
                              >
                                <i className="ti ti-currency-dollar me-2 ti-sm"></i>
                                <span className="align-middle">Pricing</span>
                              </a>
                            </li>
                            <li>
                              <div className="dropdown-divider"></div>
                            </li>
                            <li>
                              <a
                                onClick={() => signOut()}
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                <i className="ti ti-logout me-2 ti-sm"></i>
                                <span className="align-middle">Log Out</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </p>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <div class="dashboard-card h-100">
                <div class="rewards-card-header mx-auto">
                  <h2 class="rewards-card-title">â­ Reward Points</h2>
                </div>
                <table class="rewards-table table table-borderless">
                  <tbody>
                    <tr>
                      <td>5 Points</td>
                      <td>Get a Free Stickers</td>
                      <td>
                        <a href="#" class="redeem-btn redeem-btn-1">
                          <span>Redeem ðŸŽ‰</span>{" "}
                          <img
                            src="./assets/images/icon/arrow_forward_ioss 1.png"
                            alt=""
                          />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>5 Points</td>
                      <td>Get Fidget Toy</td>
                      <td>
                        <a href="#" class="redeem-btn redeem-btn-2">
                          Redeem ðŸ”’
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 dashboard-card-col">
                  <div class="dashboard-card h-100">
                    <div class="rewards-card-header">
                      <h2 class="rewards-card-title">â­ Next Big Reward</h2>
                    </div>
                    <div class="rewards-card-content">
                      <h5>
                        Almost Complete... (5 Tasks Left & get 50 Points!){" "}
                      </h5>
                      <nav class="nav flex-column">
                        <a class="nav-link" href="#">
                          <div class="rewards-point">
                            <div class="points-description">
                              <h5>
                                Sprint #1 - Complete Kaizen Flow Designs (UX/UI)
                              </h5>
                              <p>The Beginning - July 31st to August 6th</p>
                            </div>
                            <div class="points">
                              <h5>50 Points</h5>
                            </div>
                          </div>
                        </a>
                      </nav>
                    </div>
                  </div>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 dashboard-card-col">
                  <div class="dashboard-card h-100">
                    <div class="rewards-card-header">
                      <h2 class="rewards-card-title">â­ Extra Points</h2>
                    </div>
                    <div class="rewards-card-content">
                      <h5 class="extra-point-title">
                        Other Tasks for Points.... (Side - quests)
                      </h5>
                      <ul class="extra-point-title-list">
                        <li class="ps-2" href="#">
                          Write your first blog (20 point)
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reward;
