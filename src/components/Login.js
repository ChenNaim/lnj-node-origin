import React from "react";

function Login() {
        return (
            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-md-3"></div>
                    <form className="m-5 p-5 col-md-6" style={{backgroundColor: 'lightGrey'}}>
                        <h3 className="text-center">Login</h3>

                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" className="form-control" placeholder="Enter email" />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter password" />
                        </div>

                        <div className="form-group">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary btn-block">Submit</button>
                        <p className="forgot-password text-right">
                            Forgot <a href="#">password?</a>
                        </p>
                    </form>
                    <div className="col-md-3"></div>
                </div>
            </div>
        );
    }
export default Login;