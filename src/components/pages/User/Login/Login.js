import React, {Component} from "react";
import Header from "../../../template/header/Header";
import LoginForm from "./LoginForm";

class Login extends Component{
    render() {
        return(
            <div className={'md:w-2/5 mx-auto'}>
                <Header nav={false} />
                <LoginForm />
            </div>
        )
    }
}

export default Login