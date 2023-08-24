import React from 'react'

const page = () => {
  return (
    <>  <section class="storyboard-main">
    <div class="container-xxl">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div class="dashboard-header-main">
            <div class="header-flex">
              <div class="icon-box">
                <img src="assets/images/icon/noto_waving-hand.png" alt="icon" />
              </div>
              <div class="header-box">
                <h1 class="dashboard-title">story</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div class="story-input-main">
            <div class="build-title">What do you want to build?</div>
            <form action="">
              <div class="form-group">
                <textarea class="form-control" placeholder="Type here ..." id=""></textarea>
                <p>Next section appears once completed :) </p>
              </div>
              <div class="text-end">
                <button class="btn complete-btn">Complete
                  <img src="assets/images/icon/plus_w.png" alt="" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

    </div>
  </section></>
  )
}

export default page