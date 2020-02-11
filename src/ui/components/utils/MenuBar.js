import React, { Component } from 'react'

import { Link } from 'react-router-dom'

class MenuBar extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div>
                <Link to="/">Home</Link>
                <Link to="/Work">Work</Link>
            </div>
        )
    }
} export default MenuBar