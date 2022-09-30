import React from 'react'
import classes from './Error.module.css'


const Success = ({ message }) => {
    return (
        <div className={classes.success} >{message}</div>
    )
}

export default Success