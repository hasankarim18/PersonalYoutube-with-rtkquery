import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetchVideoQuery } from '../../features/api/apiSlice'
import RelatedVdeos from '../RelatedVideos/RelatedVdeos'
import Error from '../ui/Error'
import Loader from '../ui/Loader/Loader'
import Description from './Description'
import Player from './Player'

const Video = () => {
    const { videoId } = useParams()

    const { data: video, isLoading, isError, error, isSuccess } = useFetchVideoQuery(videoId)

    let content = null

    if (!isLoading && !isError && video?.id && isSuccess) {
        content = <>
            <div className="player position-relative">
                <Player />
                <div className="duration position-absolute text-white bg-dark" style={{ right: "20px", bottom: "20px" }}>
                    10.22
                </div>
            </div>
            <Description />
        </>
    }

    return (
        <div className="pt-3">
            <div className="container">
                <div className="row">
                    {
                        !isLoading && isError ?
                            <div className="col-12">  {<Error message={'Somthing went wrong with error code: ' + error.status} />} </div>
                            : null
                    }

                    {
                        isLoading && !isError && !isSuccess ?
                            <div className="col-12">
                                <Loader />
                            </div>
                            : null
                    }

                    <div className="col-md-8">
                        {content}
                    </div>
                    <div className="col-md-4">
                        {!isLoading && isSuccess ? < RelatedVdeos video={video} /> : null}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Video