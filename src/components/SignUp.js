import React, { useState } from "react";

import Errors from './Errors';
import validate from './validator'; 
import Eye from '../images/eye.png';

    function SignUp() {
        const [user, setUser] = useState({
            firstname:{value:'', required: true, minLength: 2, errors: []},
            lastname: {value:'', required: true, minLength: 2, errors: []},
            email:    {value:'', required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, errors: []},
            password: {value:'', required: true, minLength: 8, pattern: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/, errors: []},
        });
    
        const onInputChange = (e) => {
            console.log(e.target.name, e.target.value);
    
            const newErrors = validate(
                e.target.name, 
                e.target.value, 
                user[e.target.name].required,
                user[e.target.name].minLength,
                user[e.target.name].pattern,
                user[e.target.name].comparison,
            );
    
            setUser({
                ...user,
                [e.target.name]: {
                    ...user[e.target.name],
                    value: e.target.value,
                    errors: newErrors
                }
            });
        }
    
    
        const onSubmit = e => {
            e.preventDefault();
            
            for(const field in user){
                const newErrors = validate(
                    field,
                    user[field].value,
                    user[field].required,
                    user[field].minLength,
                    user[field].pattern,
                    user[field].comparison,
                );
    
                user[field] = {
                    ...user[field],
                    errors: newErrors
                };
            }
    
            setUser({...user});

            const rawUser = Object.keys(user)
                                .reduce((st, prop) => {
                                    st[prop] = user[prop].value;
                                    return st;
                                }, {});
    
            console.log(rawUser);
        }

        const [passwordShown, setPasswordShown] = useState(false);

        const togglePasswordVisiblity = () => {
            setPasswordShown(passwordShown ? false : true);
          };
       
        return (
            <div className="container-fluid mt-3">
                <div className="row">
                    <div className="col-md-2"></div>
                    <form className="m-5 p-5 col-md-8" style={{backgroundColor: 'lightGrey'}}>
                        <h3 className="text-center">Sign Up</h3>

                        <div className="form-group">
                            <label>First name</label>
                            <input type="text" className="form-control" placeholder="First name" 
                            name="firstname"
                            defaultValue={user.firstname.value}
                            onBlur={onInputChange}
                            />
                            <small>
                            {
                                <Errors errors={user.firstname.errors} />
                            }
                            </small>
                        </div>
                        <div className="form-group">
                            <label>Last name</label>
                            <input type="text" className="form-control" placeholder="Last name"
                             name="lastname"
                             defaultValue={user.lastname.value}
                             onBlur={onInputChange}
                             />
                             <small>
                             {
                                 <Errors errors={user.lastname.errors} />
                             }
                             </small>
                        </div>

                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" className="form-control" placeholder="Enter email" 
                             name="email"
                             defaultValue={user.email.value}
                             onBlur={onInputChange}
                             />
                             <small>
                             {
                                 <Errors errors={user.email.errors} />
                             }
                             </small>
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <div className="input-group">
                                <input type={passwordShown ? "text" : "password"} className="form-control" placeholder="Enter password"
                                name="password"
                                defaultValue={user.password.value}
                                onBlur={onInputChange}
                                />
                                <a className="btn border" onClick={togglePasswordVisiblity}><img src={Eye} style={{height: "15px"}}/></a>
                             </div>
                             <small>Password should contain at least eight characters, one number, one lowercase and one uppercase letter</small>
                             <small>
                             {
                                 <Errors errors={user.password.errors} />
                             }
                             </small>
                        </div>

                        {/* <div className="form-group">
                            <label>Re-enter Password</label>
                            <input type="password" className="form-control" placeholder="Re-enter password"
                             name="password2"
                             defaultValue={user.password2.value}
                             onBlur={onInputChange}
                             />
                             <small>
                             {
                                 <Errors errors={user.password2.errors} />
                             }
                             </small>
                        </div> */}

                        <div className="form-group">
                            <label>Recipes you would like to see</label>
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                            <label className="form-check-label" for="defaultCheck1">
                                                Vegetarian
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck2" />
                                            <label className="form-check-label" for="defaultCheck2">
                                                Vegan
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck3" />
                                            <label className="form-check-label" for="defaultCheck3">
                                                Paleo
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck4"/>
                                            <label className="form-check-label" for="defaultCheck4">
                                                Gluten free
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck5" />
                                            <label className="form-check-label" for="defaultCheck5">
                                                Lactose free
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck6" />
                                            <label className="form-check-label" for="defaultCheck6">
                                                Ketogenic
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck7"/>
                                            <label className="form-check-label" for="defaultCheck7">
                                                Row
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck8" />
                                            <label className="form-check-label" for="defaultCheck8">
                                                Kosher
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck9" />
                                            <label className="form-check-label" for="defaultCheck9">
                                                All
                                            </label>
                                        </div>
                                    </div>
                                </div>
                        </div>

                        <button type="submit" className="btn btn-info btn-block">Sign Up</button>
                        <p className="forgot-password text-right">
                            Already registered? <a className="text-info" href="./Login">Login</a>
                        </p>
                    </form>
                    <div className="col-md-2"></div>
                </div>
            </div>
        );
    }

export default SignUp;