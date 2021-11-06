import React, {Component} from "react";
import Button from "../common/Button";
import './footer.css';
import {Link} from "react-router-dom";

class Footer extends Component{
    render() {
        return (
            <footer className="md:rounded-2xl bg-archives px-8 md:px-16 py-14 md:p-16 mt-6 md:mb-6 text-white block w-full">
                <h2 className="text-5xl md:text-9xl opacity-70 uppercase font-black">Archives</h2>
                <h3 className="text-4xl md:text-7xl uppercase font-black -mt-5 md:-mt-10">.edu.lk</h3>
                <div className="my-14 md:grid md:grid-cols-3 gap-4">
                    <ul className={'col-span-2'}>
                        <li className={'mb-6 md:mb-2'}>Is your article has at least one Sri Lankan author with Sri Lankan institute affiliation?</li>
                        <li className={'mb-6 md:mb-2'}>Is it a conference full paper or abstract, from a conference hosted by a Sri Lankan institute?</li>
                        <li className={'mb-6 md:mb-2'}>Has it published on a  journal that is  non-predatory, peer reviewed journal?</li>
                    </ul>
                    <div className={"flex md:justify-center items-center"}>
                        <Link to="/add-new">
                            <Button type={"button"} outline={true} text={"Add your publication"} />
                        </Link>
                    </div>
                </div>
                <p>FIND US HERE<span className={'ml-3'}>—</span> <i className="fab fa-facebook-square ml-3 mr-3 text-2xl"></i> <i className="fab fa-twitter-square mr-3 text-2xl"></i> <i className="fab fa-linkedin mr-3 text-2xl"></i> </p>
                <p className={'copyrights mt-28 text-xs'} style={{'fontFeatureSettings': 'case'}}>&copy; ARCHIVES.EDU.LK v{process.env.REACT_APP_VERSION}</p>
            </footer>
        )
    }
}

export default Footer;