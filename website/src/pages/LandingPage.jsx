import React, { Component } from 'react'
import Navbar from "../components/Navbar.jsx"

import ReactTable from "react-table";
import "react-table/react-table.css";

class LandingPage extends Component {
    state = {
        value: this.props.value
    }

    render() {
        return (
            <div>
                <Navbar />
                home
            </div>
        );
    }
}

export default LandingPage