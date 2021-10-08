import React, {Component} from "react";
import {Link, withRouter} from "react-router-dom";
import logo from './asterisk.png';

class Header extends Component{
    render() {
        const location = this.props.location;

        return (
            <header className="md:rounded-2xl bg-white px-8 md:px-16 py-8 md:py-8 mt-6">
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
            </header>
        )
    }
}

export default withRouter(Header);