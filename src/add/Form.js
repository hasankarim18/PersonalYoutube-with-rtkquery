import React from 'react'
import Error from '../ui/Error'
import Success from '../ui/Success'

const Form = () => {
    return (
        <div className="pt-5">

            <div className="container">
                <h5 className="text-start">Add item to your video collection</h5>
                <div className="row">
                    <div className="col-12 col-sm-10 col-md-8">
                        <div className="add_form text-start">
                            <form>
                                <div className="mb-2">
                                    <label htmlFor='title'><strong>Title:</strong></label>
                                    <input className="form-control" id="title" type="text" />
                                </div>
                                <div className="mb-2">
                                    <label htmlFor='description'><strong>Desciption:</strong></label>
                                    <textarea className="form-control" id="description" type="text" />
                                </div>
                                <div className="mb-2">
                                    <label htmlFor='author'><strong>Author:</strong></label>
                                    <input className="form-control" id="author" type="text" />
                                </div>
                                <div className="mb-2">
                                    <label htmlFor='link'><strong>Video Link:</strong></label>
                                    <input className="form-control" id="link" type="text" />
                                </div>
                                <div className="mb-2">
                                    <label htmlFor='date'><strong>Date:</strong></label>
                                    <input className="form-control" id="date" type="text" />
                                </div>
                                <div className="mb-2">
                                    <label htmlFor='duration'><strong>Duration:</strong></label>
                                    <input className="form-control" id="duration" type="text" />
                                </div>
                                <div className="mb-2">
                                    <label htmlFor='thumbnail'><strong>Thumbnail:</strong></label>
                                    <input className="form-control" id="thumbnail" type="text" />
                                </div>
                                <div className="mb-2">
                                    <label htmlFor='views'><strong>Views:</strong></label>
                                    <input className="form-control" id="views" type="text" />
                                </div>
                                <div className="mt-3 text-end">
                                    <button className="btn btn-info">Submit</button>
                                </div>
                            </form>
                        </div>
                        <Success message="Video added successfully" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form