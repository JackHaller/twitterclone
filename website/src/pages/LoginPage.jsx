import React, { Component } from 'react'
import Navbar from "../components/Navbar.jsx"

import  "../css/pages/LoginPageStyle.css"
class LoginPage extends Component {
    state = {
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className="container">
                    <div className="row">
                        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                            <div className="card card-signin my-5">
                                <div className="card-body">
                                    <h5 className="card-title text-center">Sign In</h5>
                                    <form className="form-signin">
                                        <div className="form-label-group">
                                            <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
                                            <label for="inputEmail">Email address</label>
                                        </div>

                                        <div className="form-label-group">
                                            <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                                            <label for="inputPassword">Password</label>
                                        </div>
                                        
                                        <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
                                        
                                    </form>
                                </div>
                                <div className="card-footer form-signin">
                                    <button className="btn btn-lg btn-facebook btn-block text-uppercase"><i className="fab fa-facebook-f mr-2"></i> Sign in with Facebook</button>
                                    <button className="btn btn-lg btn-google btn-block text-uppercase"><i className="fab fa-google mr-2"/>Sign in with Google</button>
                                    <button className="btn btn-lg btn-dark btn-block text-uppercase">sign up now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}




export default LoginPage