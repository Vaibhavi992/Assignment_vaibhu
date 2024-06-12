import React from 'react'
import { NavLink,Link } from 'react-router-dom'
import Header from '../../Component/Header'

function Blank() {
    return (
        <>
            <div>
                <div id="wrapper">
                    <div className="navbar navbar-inverse navbar-fixed-top">
                        <div className="adjust-nav">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".sidebar-collapse">
                                    <span className="icon-bar" />
                                    <span className="icon-bar" />
                                    <span className="icon-bar" />
                                </button>
                                <Link className="navbar-brand" href="#">
                                    <img src="assets/img/logo.png" />
                                </Link>
                            </div>
                            <span className="logout-spn">
                                <a href="#" style={{ color: '#fff' }}>LOGOUT</a>
                            </span>
                        </div>
                    </div>
                    {/* /. NAV TOP  */}
                    <Header></Header>
                    {/* /. NAV SIDE  */}
                    <div id="page-wrapper">
                        <div id="page-inner">
                            <div className="row">
                                <div className="col-md-12">
                                    <h2>BLANK PAGE </h2>
                                    <hr></hr>
                                    <center>
                                        <h1>404</h1>
                                        <h3>Page not found</h3>
                                        <h5>Sorry, we couldn’t find the page you’re looking for.</h5>
                                        <NavLink to="/">Back to Home </NavLink>
                                    </center>
                                </div>
                            </div>
                            {/* /. ROW  */}
                            <hr />
                            {/* /. ROW  */}
                        </div>
                        {/* /. PAGE INNER  */}
                    </div>
                    {/* /. PAGE WRAPPER  */}
                </div>

                <div className="footer">
                    <div className="row">
                        <div className="col-lg-12">
                            ©  2014 yourdomain.com | Design by: <a href="http://binarytheme.com" style={{ color: '#fff' }} target="_blank">www.binarytheme.com</a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Blank
