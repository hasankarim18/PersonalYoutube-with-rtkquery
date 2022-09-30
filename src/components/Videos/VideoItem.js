import React from 'react'

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import authorImg from '../../assets/images/author.jpg'
import classes from './VideoItem.module.css'
import { Link } from 'react-router-dom';

const VideoItem = ({ video }) => {

    const { title, date, duration, author, views, thumbnail, id } = video

    return (
        <li className="col-12 col-sm-6 col-md-4 col-lg-3 p-2">
            <Card style={{ border: "none" }} className={`video_card ${classes.videoItem}`} >

                <div className="position-relative">
                    <Link to={`/videos/${id}`}>
                        <CardImg className={`${classes.thumnail} home_thumb`} top width="100%" src={thumbnail} alt="Card image cap" />
                    </Link>
                    <div style={{ right: "10px", bottom: "10px" }} className="duration bg-dark text-white position-absolute">
                        {duration}
                    </div>
                </div>
                <CardBody>
                    <div>
                        <h6 className={`text-start ${classes.title}`}>
                            <Link className="video_title" to={`/videos/${id}`}>
                                {title}
                            </Link>
                        </h6>
                    </div>
                    <div className="d-flex ">
                        <div className="user" >
                            <Link to="/author">
                                <img style={{ borderRadius: "50%", minWidth: "40px" }} className="img-fluid" src={authorImg} alt="" />
                            </Link>
                        </div>

                        <div className="ms-2">
                            <Link className="text-dark" to="/author">
                                <h6 className={`text-start ${classes.author}`}>
                                    {author}
                                </h6>
                            </Link>
                            <div className="text-start">
                                <p>
                                    {views} views . {date}
                                </p>
                            </div>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </li>
    )
}

export default VideoItem