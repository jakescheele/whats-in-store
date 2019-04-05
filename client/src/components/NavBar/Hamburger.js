import React, { Component } from "react";
import { Link } from "react-router-dom";


class Hamburger extends Component {
    render() {
        return (<div id="hamburger">
            <ul id="menu">
                <div className="font">
                    <ul>
                        <li>
                            <Link
                                to="/dashboard"
                                className={
                                    window.location.pathname === "/dashboard"
                                        ? "nav-link active"
                                        : "nav-link"
                                }
                                onClick={this.props.collapse}


                            >DASHBOARD</Link>
                        </li>
                        <li>
                            <Link
                                to="/inventory"
                                className={
                                    window.location.pathname === "/inventory"
                                        ? "nav-link active"
                                        : "nav-link"
                                }
                                onClick={this.props.collapse}

                            >INVENTORY</Link>
                        </li>
                        <li>
                            <Link
                                to="/promos"
                                className={
                                    window.location.pathname === "/promos"
                                        ? "nav-link active"
                                        : "nav-link"
                                }
                                onClick={this.props.collapse}

                            >PROMOTIONALS</Link>
                        </li>
                        <li>
                            <Link
                                to="/profile"
                                className={
                                    window.location.pathname === "/profile"
                                        ? "nav-link active"
                                        : "nav-link"
                                }
                                onClick={this.props.collapse}

                            >PROFILE</Link>
                        </li>
                        <li>
                            <Link
                                to="#"
                                className={
                                    window.location.pathname === "/login"
                                        ? "nav-link active"
                                        : "nav-link"
                                }
                                onClick={this.props.logout}
                            >LOGOUT</Link>
                        </li>
                    </ul>
                </div>
            </ul>
        </div>)
    }
}


export default Hamburger;


