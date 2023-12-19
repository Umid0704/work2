import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Login extends Component {



    render() {
        
        return (
            <div className='container'>
                <h1 className='text-center'>Login</h1>

                <div className='login'>
                    <form>
                        <input type="number" placeholder='Number'/>
                        <input type="password" placeholder='Password'/>
                    </form>
                </div>

                <button className='login_btn '>
                    <Link to="/carstable" className='header_link'> Cars Table </Link>
                </button>
            </div>
        )
    }
}
