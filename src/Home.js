import React, {Component, Fragment} from 'react';
import './App.css';
import './Icons.css'
import NavBar from "./NavBar"
import Portfolio from './Porfolio'
import Services from './Services'
import Values from './Values'
import About from './About'
import Header from './Header'

class Home extends Component {
    render() {
        return (
            <Fragment className="Home">
                <NavBar/>
                <Header/>
                <About/>
                <Values/>
                <Services/>
                <Portfolio/>
            </Fragment>
        );
    }
}

export default Home;
