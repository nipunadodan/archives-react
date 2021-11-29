import React, {Component} from "react";
import {Link} from "react-router-dom";
import notfound2 from './NotFound.svg'

class NotFound extends Component{
    render() {
        return (
            <main className={'flex flex-col justify-center items-center h-screen'} style={{ padding: "1rem" }}>
                {/*<h1 className={'text-8xl font-black'}>404</h1>*/}
                <img alt={'404 not found'} className={'pt-6 px-10'} style={{width:500}} src={notfound2}/>
                <p className={'md:text-lg text-center mt-6'}>Sorry, we can't seem to find the page you are looking for. Try search for it on our home page.</p>
                <Link className={'mt-6'} style={{fontFeatureSettings: '"calt" 1'}} to={'/'}>← <span className={'hover:underline'}>Home</span></Link>
            </main>
        )
    }
}

export default NotFound