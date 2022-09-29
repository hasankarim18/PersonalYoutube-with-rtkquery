import React from 'react'
import thumbnail from '../../assets/images/thumbnail.jpg'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import authorImg from '../../assets/images/author.jpg'
import classes from './VideoItem.module.css'
import { Link } from 'react-router-dom';

const VideoItem = () => {


    return (
        <li className="col-12 col-sm-6 col-md-4 col-lg-3 p-2">
            <Card className={`video_card ${classes.videoItem}`} >

                <div className="position-relative">
                    <Link to="/videos/1">
                        <CardImg className={`${classes.thumnail} home_thumb`} top width="100%" src={thumbnail} alt="Card image cap" />
                    </Link>
                    <div style={{ right: "10px", bottom: "10px" }} className="duration bg-dark text-white position-absolute">
                        10.22
                    </div>
                </div>
                <CardBody>
                    <div>
                        <h6 className={`text-start ${classes.title}`}>
                            <Link className="video_title" to={`/videos/1`}>
                                Videos title video title
                            </Link>
                        </h6>
                    </div>
                    <div className="d-flex justify-content-between">
                        <div className="user" >
                            <Link to="/author">
                                <img style={{ borderRadius: "50%", minWidth: "40px" }} className="img-fluid" src={authorImg} alt="" />
                            </Link>
                        </div>

                        <div className="ms-2">
                            <Link className="text-dark" to="/author">
                                <h6 className={`text-start ${classes.author}`}>
                                    Author
                                </h6>
                            </Link>
                            <div className="text-start">
                                <p>
                                    20k views . date: 21, jun 2012
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