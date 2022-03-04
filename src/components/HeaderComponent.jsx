import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Headercomponent extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {
        return (
            <div>
                <header>
                    <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                            <span className='navbar-brand'>Employee Management App</span>
                       </Link>
                    </nav>
                </header>
            </div>
        );
    }
}

export default Headercomponent;
