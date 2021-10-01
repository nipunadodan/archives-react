import React, {Component} from "react";
import Header from "../../template/header/Header";
import LoginForm from "./LoginForm";
import Footer from "../../template/footer/Footer";

class Login extends Component{
    render() {
        return(
            <div className={'container mx-auto'}>
                <Header />
                <LoginForm />
            </div>
        )
    }
}

export default Login