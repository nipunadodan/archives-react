import React, {Component} from "react";
import hero from './search_hero.png'
import {Link} from "react-router-dom";

class Hero extends Component{
    render() {
        return (
            <div className={'md:rounded-2xl bg-white px-8 md:px-16 py-10 md:py-28 mt-6 grid md:grid-cols-2 gap-4'}>
                <div className={'flex items-center flex-wrap'}>
                    <h2 className={'leading-8 text-4xl md:text-6xl font-black'} style={{lineHeight:1.3}}>Free indexing service for Sri Lankan Researchers</h2>
                    <p className={'my-10'}>ARCHIVES.EDU.LK is a free Sri Lankan research article archiving and indexing space which enhance the visibility and impact of the Sri Lankan research output.</p>
                    <Link to="/add-new">
                        {/*<Button type={'button'} outline={false} text={'Add your publication'} />*/}
                    </Link>
                </div>
                <div className={'flex items-center flex-wrap'}>
                    <img src={hero} className={'mx-auto'} alt={'Woman searching web'} />
                </div>
            </div>
        )
    }
}

export default Hero