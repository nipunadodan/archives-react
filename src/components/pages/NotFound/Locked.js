import React, {Component} from "react";
import notfound2 from './locked.svg'

class Locked extends Component{
    goBack = () => {
        window.history.go(-1)
        return false
    }
    render() {
        return (
            <main className={'flex flex-col justify-center items-center h-screen'} style={{ padding: "1rem" }}>
                {/*<h1 className={'text-8xl font-black'}>404</h1>*/}
                <img alt={'404 not found'} className={'pt-6 px-10'} style={{width:500}} src={notfound2}/>
                <p className={'md:text-lg text-center mt-6'}>Sorry, we can't let you access this page as you don't have sufficient permissions.</p>
                <div className={'mt-6 cursor-pointer'} style={{fontFeatureSettings: '"calt" 1'}} onClick={this.goBack}>
                    ← <span className={'hover:underline'}>Back</span>
                </div>
            </main>
        )
    }
}

export default Locked