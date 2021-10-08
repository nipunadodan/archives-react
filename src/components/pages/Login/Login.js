import React, {Component} from "react";
import Header from "../../template/header/Header";
import LoginForm from "./LoginForm";

class Login extends Component{
    handleCallback = (childData) => {
        this.props.tokenCallback(childData)
    }
    render() {
        return(
            <div className={'md:w-2/5 mx-auto'}>
                <Header />
                <LoginForm parentCallback={this.handleCallback} />
            </div>
        )
    }
}

export default Login