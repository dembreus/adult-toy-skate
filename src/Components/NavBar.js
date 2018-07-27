import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class NavBar extends Component {
    render(){
        return (
            <nav class="navbar navbar-default">
                <div class="container-fluid jumbotron">
                    <h1 className="navbar-head">Adult Toy</h1>
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        Menu
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav navbar-left">
                        <li><Link to="/">
                            <button className="btn btn-default btn-lg"><span
                                className="glyphicon glyphicon-home"></span> Home
                            </button>
                        </Link></li>
                        <li><Link to="/products">
                            <button className="btn btn-default btn-lg"><span
                                className="glyphicon glyphicon-user"></span> About
                            </button>
                        </Link></li>
                    </ul>
                </div>
            </nav>
        )
    }
}
export default NavBar;