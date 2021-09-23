import React, {Component} from "react";
import {Link} from "react-router-dom";

class Header extends Component{
    render() {
        return (
            <header className="md:rounded-2xl bg-white px-8 md:px-16 py-8 md:py-8 mt-6">
                <Link to={'/'}><h1 className={'uppercase text-2xl md:text-3xl inline-block'}><span
                    className={'text-archives'}>*</span> archives.edu.lk</h1></Link>
            </header>
        )
    }
}

export default Header;