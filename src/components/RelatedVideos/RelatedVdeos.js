import React from 'react'
import { useFetchRelatedVideosQuery } from '../../features/api/apiSlice'
import RelatedVideoItem from './RelatedVideoItem'

const RelatedVdeos = ({ video }) => {


    const { id, title } = video

    const { data: relatedVideo, isLoading, isError, error, isSuccess } = useFetchRelatedVideosQuery({ id, title })

    let content = null
    if (isSuccess) {
        content = relatedVideo.map(video => <RelatedVideoItem key={video.id} video={video} />)
    } else if (isError) {
        content = null
    }

    return (
        <div>
            {content}
        </div>
    )
}

export default RelatedVdeos