import React from 'react'
import RelatedVdeos from '../RelatedVideos/RelatedVdeos'
import Description from './Description'
import Player from './Player'

const Video = () => {
    return (
        <div className="pt-3">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="player position-relative">
                            <Player />
                            <div className="duration position-absolute text-white bg-dark" style={{ right: "20px", bottom: "20px" }}>
                                10.22
                            </div>
                        </div>
                        <Description />
                    </div>
                    <div className="col-md-4">
                        <RelatedVdeos />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Video