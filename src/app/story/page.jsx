import React from 'react';

const page = () => {
  return (
    <>
      {' '}
      <section class="storyboard-main">
        <div class="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className="BorderGrid BorderGrid--spacious">
                <div className="BorderGrid-row">
                  <div className="BorderGrid-cell">
                    <div className="mb-2">
                      <span className="Progress">
                        <span
                          style={{
                            background: '#7a00f3 !important',
                            width: '33.33%',
                            border: '1px solid #333636',
                          }}
                          aria-label="JavaScript 71.7"
                          className="Progress-item partent color-bg-success-emphasis"
                        >
                          <span
                            style={{
                              backgroundColor: '#7a00f3 !important',
                              width: '25%',
                              border: '1px solid #333636',
                              height: '100%',
                            }}
                            aria-label="JavaScript 71.7"
                            className="Progress-item-child child "
                          ></span>
                          <span
                            style={{
                              backgroundColor: '#7a00f3 !important',
                              width: '25%',
                              border: '1px solid #333636',
                              height: '100%',
                            }}
                            aria-label="JavaScript 71.7"
                            className="Progress-item-child child "
                          ></span>
                          <span
                            style={{
                              backgroundColor: '#7a00f3 !important',
                              width: '25%',
                              border: '1px solid #333636',
                              height: '100%',
                            }}
                            aria-label="JavaScript 71.7"
                            className="Progress-item-child child "
                          ></span>
                          <span
                            style={{
                              backgroundColor: '#7a00f3 !important',
                              width: '25%',
                              height: '100%',
                            }}
                            aria-label="JavaScript 71.7"
                            className="Progress-item-child child "
                          ></span>
                          <div className="step">Sprint #1</div>
                        </span>
                        <span
                          style={{
                            backgroundColor: 'transparent !important',
                            width: '33.33%',
                            height: '100%',
                            border: '1px solid #333636',
                          }}
                          className="Progress-item "
                        >
                          <div className="step">Sprint #2</div>
                        </span>
                        <span
                          style={{
                            backgroundColor: 'transparent !important',
                            width: '33.33%',
                            height: '100%',
                            border: '1px solid #333636',
                          }}
                          className="Progress-item "
                        >
                          <div className="step">Sprint #3</div>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <form action="">
                <div class="story-input-main">
                  <div class="build-title">What do you want to build?</div>

                  <div class="form-group">
                    <textarea
                      class="form-control"
                      placeholder="Type here ..."
                      id=""
                    ></textarea>
                    <div class="text-end">
                      <button class="btn complete-btn">
                        Complete
                        <img src="assets/images/icon/plus_w.png" alt="" />
                      </button>
                    </div>
                  </div>
                </div>
                <div class="story-input-main">
                  <div class="build-title">Who is this for-why & problem? </div>

                  <div class="form-group">
                    <textarea
                      class="form-control"
                      placeholder="Type here ..."
                      id=""
                    ></textarea>
                    <div class="text-end">
                      <button class="btn complete-btn">
                        Complete
                        <img src="assets/images/icon/plus_w.png" alt="" />
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
