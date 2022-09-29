import React from 'react'
import VideoItem from './VideoItem'


const Videos = () => {
  return (
    <div className="mt-3">
      <div className="container">
        <ul style={{ listStyleType: "none", margin: "0", padding: "0" }} className="row">

          <VideoItem />
          <VideoItem />
          <VideoItem />
          <VideoItem />
          <VideoItem />
          <VideoItem />
          <VideoItem />

        </ul>
      </div>
    </div>
  )
}

export default Videos