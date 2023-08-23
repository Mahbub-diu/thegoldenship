import React from "react";

const Reward = () => {
  return (
    <div>
      <section class="dashboard-main">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div class="dashboard-header-main">
                <div class="header-flex">
                  <div class="icon-box">
                    <img
                      src="assets/images/icon/noto_waving-hand.png"
                      alt="icon"
                    />
                  </div>
                  <div class="header-box">
                    <h1 class="dashboard-title">Good Morning , Vishav</h1>
                    <p class="dates">Wednesday, August 2, 2023</p>
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
