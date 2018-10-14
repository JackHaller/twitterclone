import React, { Component } from 'react'
import Navbar from "../components/Navbar.jsx"

class FavoritesPage extends Component {
    state = {
        value: this.props.value
    }

    render() {
        return (
            <div>
                <Navbar />
                faves
            </div>
        );
    }
}

export default FavoritesPage