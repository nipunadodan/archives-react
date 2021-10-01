import React, {Component} from 'react';
import {Redirect} from "react-router-dom";

class LoginForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            login: false
        }
    }

    componentDidMount() {

    }

    handleChange = (event) =>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) =>{

        const api_base = process.env.REACT_APP_API_BASE;
        fetch(api_base+'login-process',{
            method:'post',
            body: new URLSearchParams({
                'username' : this.state.username,
                'password' : this.state.password
            })
        })
            .then(res => res.json())
            .then(
                (result) => {
                    if(result.status === 'success') {
                        localStorage.setItem('login', true)
                        this.setState({
                            login:true
                        })
                    }else{
                        localStorage.setItem('login', false)
                        this.setState({
                            login:false
                        })
                    }
                }
            )
        event.preventDefault();
    }

    render() {
        if(this.state.login){
            const path = this.props.location
            return <Redirect to={'/'} />
        }
        return(
            <div className="login-wrapper">
                <h1>Please Log In</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <p>Username</p>
                        <input type="text" name={'username'} onChange={this.handleChange} />
                    </label>
                    <label>
                        <p>Password</p>
                        <input type="password" name={'password'} onChange={this.handleChange} />
                    </label>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default LoginForm