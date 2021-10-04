import React, {Component} from "react";
import {Link} from "react-router-dom";
import logo from './asterisk.png';

class Header extends Component{
    render() {
        return (
            <header className="md:rounded-2xl bg-white px-8 md:px-16 py-8 md:py-8 mt-6">
                <Link to={'/'}>
                    <h1 className={'uppercase text-2xl md:text-3xl'}>
                        <img className={'inline align-middle h-9 mr-2'} src={logo} />
                        <span className={'align-middle'}>archives.edu.lk</span>
                    </h1>
                </Link>
            </header>
        )
    }
}

export default Header;