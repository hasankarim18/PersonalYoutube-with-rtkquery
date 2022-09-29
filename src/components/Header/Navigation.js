import React, { useState } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import classes from './Navigation.module.css'



const Navigation = () => {

    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <Navbar className={`container pt-sm-3 pb-sm-3 pt-3 pb-3 ${classes.navigation}`} expand="md">
            <Link className="navbar-brand text-white" to="/">
                <div className="d-flex">
                    <div><span style={{ fontSize: "30px" }}>My Tube</span> </div>
                    <div className="d-flex align-items-end ms-2 text-info">
                        <span>Rtk Toolkit</span>
                    </div>
                </div>

            </Link>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar className="justify-content-between">

                <Nav className="ml-auto" navbar>
                    <Link
                        style={{ border: "1px solid white" }}
                        className="btn text-white font-weight-bold" to='/videos/add' >
                        + Add Video
                    </Link>
                </Nav>
                <div className={classes.search_container} >
                    <form className="form-inline my-2 my-lg-0">
                        <div className={`d-inline-block ${classes.search_input}`}>
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        </div>
                        <div className="d-inline-block ms-lg-2 ms-sm-2">
                            <button className="btn btn-outline-success ms-2 text-white border-white" type="submit">Search</button>
                        </div>
                    </form>
                </div>
                <div>
                    login info
                </div>
            </Collapse>
        </Navbar>
    )
}

export default Navigation