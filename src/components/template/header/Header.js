import React, {Component} from "react";
import {Link} from "react-router-dom";
import logo from './asterisk.png';
import {isLoggedIn, withRouter} from "../../../Helpers/Helpers";

class Header extends Component{
    state = {
        isLoggedIn:isLoggedIn(),
        user: JSON.parse(localStorage.getItem('archives_user'))
    }

    render() {
        const location = this.props.location;

        return (
            <header className="md:flex items-center md:rounded-2xl bg-white px-8 md:px-16 py-8 md:py-8 mt-6">
                <div className={'flex-grow flex justify-center'+ (location.pathname !== '/login' ? 'md:justify-start' : '')}>
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
                <nav className={'md:flex flex-row items-center'}>{
                    location.pathname !== '/login' &&
                    (!this.state.isLoggedIn ?
                        <Link to={'/login'}>Login</Link> :
                        <>
                            <div className={'flex flex-col items-center md:items-end mt-6 md:mt-0'}>
                                <Link className={'md:mx-3 text-lg font-bold md:text-right'} to={'/profile'}>{this.state.user.first_name} {this.state.user.last_name}</Link>
                                <div className={'text-sm flex text-gray-500'}>
                                    <Link className={'px-3 md:flex-grow md:text-right border-r-2 hover:text-archives'} to={'/dashboard'}>Dashboard</Link>
                                    <Link className={'mx-3 hover:text-archives'} to={'/logout'}>Logout</Link>
                                </div>
                            </div>
                        </>
                    )
                }</nav>
            </header>
        )
    }
}

export default withRouter(Header)