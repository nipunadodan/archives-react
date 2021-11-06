import React, {Component} from "react";
import {Link} from "react-router-dom";
import logo from './asterisk.png';
import {isLoggedIn, withRouter} from "../../../Helpers/Helpers";

class Header extends Component{
    state = {
        isLoggedIn:isLoggedIn()
    }

    render() {
        const location = this.props.location;

        return (
            <header className="flex items-center md:rounded-2xl bg-white px-8 md:px-16 py-8 md:py-8 mt-6">
                <div className={'flex-grow'}>
                    <Link to={'/'}>
                        {
                            location.pathname === '/' ?
                            <h1 className={'uppercase text-2xl md:text-3xl inline-block font-black'}>
                                <img alt={'logo'} className={'inline align-middle h-9 mr-2'} src={logo} />
                                <span className={'align-middle'}>archives.edu.lk</span>
                            </h1>:
                            <h2 className={'uppercase text-2xl md:text-3xl inline-block font-black'}>
                                <img alt={'logo'} className={'inline align-middle h-9 mr-2'} src={logo} />
                                <span className={'align-middle'}>archives.edu.lk</span>
                            </h2>
                        }
                    </Link>
                </div>
                <nav>{
                    !this.state.isLoggedIn ?
                        <Link to={'/login'}>Login</Link> :
                        <>
                            <Link className={'mx-3'} to={'/dashboard'}>Dashboard</Link>
                            <Link className={'mx-3'} to={'/profile'}>Profile</Link>
                        </>
                }</nav>
            </header>
        )
    }
}

export default withRouter(Header)