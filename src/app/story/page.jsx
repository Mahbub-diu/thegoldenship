"use client";
import React, { use, useEffect } from "react";
import { toast } from "react-toastify";

const page = () => {
  let [stories, setStories] = React.useState([]);
  let [story, setStory] = React.useState({
    title: null,
    content: null,
  });
  const fetchStories = () => {
    fetch("/api/story")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setStories(data.stories ?? []);
      });
  };
  const addStory = () => {
    if (!story.title || !story.content) {
      toast.error("Please fill in all fields");
      return false;
    }
    fetch("/api/story", {
      method: "POST",
      body: JSON.stringify(story),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((story) => {
        setStories([...stories, story]);
      })
      .finally(() => {
        setStory({
          title: null,
          content: null,
        });
      });
  };

  useEffect(() => {
    fetchStories();
  }, []);
  return (
    <>
      {" "}
      <section class="storyboard-main">
        <div class="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className="BorderGrid BorderGrid--spacious">
                <div className="BorderGrid-row">
                  <div className="BorderGrid-cell">
                    <div className="mb-2">
                      <span className="Progress">
                        {stories?.map((sto, index) => {
                          console.log(sto);
                          return (
                            <span
                              style={{
                                background: sto?.completed ? "#7a00f3" : "",
                                width: "33.33%",
                                border: "1px solid #333636",
                              }}
                              aria-label="JavaScript 71.7"
                              className={
                               sto?.completed
                                  ? "Progress-item partent color-bg-success-emphasis"
                                  : "Progress-item partent "
                              }
                            >
                              {/* <span
                                style={{
                                  backgroundColor: "#7a00f3 !important",
                                  width: "25%",
                                  border: "1px solid #333636",
                                  height: "100%",
                                }}
                                aria-label="JavaScript 71.7"
                                className="Progress-item-child child "
                              ></span>
                              <span
                                style={{
                                  backgroundColor: "#7a00f3 !important",
                                  width: "25%",
                                  border: "1px solid #333636",
                                  height: "100%",
                                }}
                                aria-label="JavaScript 71.7"
                                className="Progress-item-child child "
                              ></span>
                              <span
                                style={{
                                  backgroundColor: "#7a00f3 !important",
                                  width: "25%",
                                  border: "1px solid #333636",
                                  height: "100%",
                                }}
                                aria-label="JavaScript 71.7"
                                className="Progress-item-child child "
                              ></span>
                              <span
                                style={{
                                  backgroundColor: "#7a00f3 !important",
                                  width: "25%",
                                  height: "100%",
                                }}
                                aria-label="JavaScript 71.7"
                                className="Progress-item-child child "
                              ></span> */}
                              <div className="step">{sto?.title}</div>
                            </span>
                          );
                        })}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div class="story-input-main">
                <div class="build-title">
                  {" "}
                  <input
                    style={{
                      background: "transparent",
                      outline: "none",
                      width: "100%",
                      border: "none",
                      height: "100%",
                      color: "white",
                    }}
                    onChange={(e) => {
                      setStory({ ...story, title: e.target.value });
                    }}
                    value={story.title}
                    placeholder="What do you want to build?"
                  />
                </div>

                <div class="form-group">
                  <textarea
                    class="form-control"
                    placeholder="Type here ..."
                    id=""
                    onChange={(e) => {
                      setStory({ ...story, content: e.target.value });
                    }}
                    value={story.content}
                  ></textarea>
                  <div class="text-end">
                    <button class="btn complete-btn" onClick={addStory}>
                      Add
                      <img src="assets/images/icon/plus_w.png" alt="" />
                    </button>
                  </div>
                </div>
              </div>
              <form action="">
                {stories.map((stor) => {
                  return (
                    <div class="story-input-main">
                      <div class="build-title">
                        {" "}
                        <input
                          style={{
                            background: "transparent",
                            outline: "none",
                            width: "100%",
                            border: "none",
                            height: "100%",
                            color: "white",
                          }}
                          value={stor.title}
                          placeholder="What do you want to build?"
                        />
                      </div>

                      <div class="form-group">
                        <textarea
                          class="form-control"
                          placeholder="Type here ..."
                          id=""
                          value={stor.content}
                        ></textarea>
                        <div class="text-end">
                          <button class="btn complete-btn">
                            Complete
                            <img src="assets/images/icon/plus_w.png" alt="" />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
