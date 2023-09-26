"use client"
import React from 'react'
const StoryCard = (props:any) => {
  let { story, updateStory } = props
  console.log(story)
  let [updateStoryData, setUpdateStoryData] = React.useState<any>({
    title: story?.title,
    content: story?.content
  })
  return (
    <div><div className="story-input-main">
      <div className="build-title">
        <input
          style={{
            background: "transparent",
            outline: "none",
            width: "100%",
            border: "none",

            height: "100%",
            color: "white",
          }}
          value={updateStoryData.title}
          onChange={(e) => setUpdateStoryData({ ...updateStoryData, title: e.target.value })}
          placeholder="What do you want to build?"
        />
      </div>

      <div className="form-group">
        <textarea
          className="form-control"
          placeholder="Type here ..."
          id=""
          onChange={(e) => setUpdateStoryData({ ...updateStoryData, content: e.target.value })}
          value={updateStoryData.content}
        ></textarea>
        <div className="text-end">
          {!story?.completed && (
            <>
              <button
                className="btn complete-btn mr-3"
                type="submit"
                onClick={(e) => updateStory(e, false, story?.id, updateStoryData)}

              >
                Update
                <img
                  src="assets/images/icon/plus_w.png"
                  alt=""
                />
              </button>{" "}
              <button
                className="btn complete-btn ml-3"
                onClick={(e) => updateStory(e, true, story?.id, updateStoryData)}
              >
                Complete
                <img
                  src="assets/images/icon/plus_w.png"
                  alt=""
                />
              </button>
            </>
          )}
        </div>
      </div>
    </div></div>
  )
}

export default StoryCard