import React from 'react'
import { useFetchVideosQuery } from '../../features/api/apiSlice'
import VideoItem from './VideoItem'
import Loader from '../ui/Loader/Loader'
import Error from '../ui/Error'

const Videos = () => {

  const { data: videos, isLoading, isError, error, isSuccess } = useFetchVideosQuery()

  let content = null

  if (isLoading) {
    content = <div> <Loader /></div>
  } else if (!isLoading && isError) {
    content = <Error message={'Somthing went wrong with error code: ' + error.status} />
  } else if (!isLoading && !isError && videos?.length === 0) {
    content = <div>No Videos Found!!!</div>
  } else if (!isLoading && !isError && videos?.length > 0) {
    content = videos.map(video => <VideoItem key={video.id} video={video} />)
  }




  return (
    <div className="mt-3">
      <div className="container">
        <ul style={{ listStyleType: "none", margin: "0", padding: "0" }} className="row">
          {content}

        </ul>
      </div>
    </div>
  )
}

export default Videos