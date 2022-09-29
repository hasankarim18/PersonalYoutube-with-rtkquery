import React from 'react'
import likeImg from '../../assets/images/like.svg'
import unlikeImg from '../../assets/images/unlike.svg'
import editImg from '../../assets/images/edit.svg'
import deleteImg from '../../assets/images/delete.svg'
import { Link } from 'react-router-dom'

const Description = () => {
    return (
        <div className="pt-2 pb-4">
            <div className="d-flex justify-content-between">
                <div>
                    10k  views
                </div>
                <div className="d-flex">
                    <div className="c edit">
                        <Link to="/videos/edit/1" >
                            <img style={{ width: "20px", marginRight: "5px" }} src={editImg} alt="edit" />
                            <span> Edit</span>
                        </Link>
                    </div>
                    <div className="ms-5  delete">
                        <img style={{ width: "20px", marginRight: "5px" }} src={deleteImg} alt="edit" />
                        <span>Delete</span>
                    </div>
                </div>

            </div>
            <h5 className="text-start mt-3">Vide0 title: VS Code Snippets - Boost your productivity with User Snippets </h5>
            <div className="row  border-bottom pb-2">
                <div className="col-6 text-start">
                    Uploaded on April 25, 2022
                </div>
                <div className="col-6">
                    <div className="d-flex justify-content-end">
                        <div className="like">
                            <img style={{ width: "30px", marginLeft: "10px", marginRight: "5px" }} src={likeImg} alt="likes" />
                            <span> 10 </span>
                        </div>
                        <div className="ms-2 unlike">
                            <img style={{ width: "30px", marginLeft: "10px", marginRight: "5px" }} src={unlikeImg} alt="unlikes" />
                            <span>5</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 pt-2 text-start" >
                <p>Tailwind is a utility-first CSS framework to rapidly build modern websites without ever leaving your HTML. In this Tailwind CSS tutorial, I have given a short introduction and overview of Tailwind CSS in Bangla language. Also, I have explained, why Tailwind vs Bootstrap debate should be stopped as both are useful in their own ways.</p>
            </div>
        </div>
    )
}

export default Description