import React, {Component} from "react";
import {Link} from "react-router-dom";
import notfound from './404__not_found.svg'

class NotFound extends Component{
    render() {
        return (
            <main className={'flex flex-col justify-center items-center h-screen'} style={{ padding: "1rem" }}>
                {/*<h1 className={'text-8xl font-black'}>404</h1>*/}
                <img style={{height:100}} src={notfound}/>
                <p className={'md:text-lg text-center'}>We can't seem to find the page you are looking for. Try search for it on our home page.</p>
                <Link className={'mt-6'} style={{fontFeatureSettings: '"calt" 1'}} to={'/'}>← <span className={'hover:underline'}>Home</span></Link>
            </main>
        )
    }
}

export default NotFound