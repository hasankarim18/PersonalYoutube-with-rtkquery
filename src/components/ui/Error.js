import React from 'react'
import classes from './Error.module.css'
const Error = ({ message }) => {
    return (
        <div className={classes.error}>{message}</div>
    )
}

export default Error