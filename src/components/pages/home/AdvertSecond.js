import React, {Component} from "react";
import Button from "../../template/common/Button";
import {Link} from "react-router-dom";

class AdvertSecond extends Component{
    render() {
        return (
            <section className={'md:rounded-2xl bg-archives p-8 md:px-16 md:py-10 md:grid md:grid-cols-3 mt-6 text-center md:text-left'}>
                <ul className={'flex flex-wrap justify-center md:justify-start items-center col-span-2'}>
                    <li className={'font-medium text-white mb-6 md:mb-2'}>Is your article has at least one Sri Lankan author with Sri Lankan institute affiliation?</li>
                    <li className={'font-medium text-white mb-6 md:mb-2'}>Is it a conference full paper or abstract, from a conference hosted by a Sri Lankan institute?</li>
                    <li className={'font-medium text-white mb-6 md:mb-2'}>Has it published on a  journal that is  non-predatory, peer reviewed journal?</li>
                </ul>
                <div className={'flex justify-center items-center mt-6 md:mt-0'}>
                    <Link to="/add-new">
                        <Button type={'button'} outline={true} text={'Add your publication'} />
                    </Link>
                </div>
            </section>
        )
    }
}

export default AdvertSecond