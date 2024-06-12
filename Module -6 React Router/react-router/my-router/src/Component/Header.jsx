import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <>
            {/* /. NAV TOP  */}
            <nav className="navbar-default navbar-side" role="navigation">
                <div className="sidebar-collapse">
                    <ul className="nav" id="main-menu">
                        <li className="active-link">
                            <NavLink to="/"><i className="fa fa-desktop " />Dashboard </NavLink>
                        </li>
                        <li>
                            <NavLink to="/uipage"><i className="fa fa-table " />UI Elements</NavLink>
                        </li>
                        <li>
                            <NavLink to="/blank"><i className="fa fa-edit " />Blank Page</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
            {/* /. NAV SIDE  */}
        </>
    )
}

export default Header
