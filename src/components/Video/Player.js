import React from 'react'

const Player = () => {
    return (
        <div>
            <iframe
                style={{ aspectRatio: "16/9" }}
                width="100%"
                className="aspect-video"
                src="https://www.youtube-nocookie.com/embed/6O4s7v28nlw"
                title="Video title"
                frameBorder=""
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    )
}

export default Player