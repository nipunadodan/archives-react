import React, {Component} from "react";
import Button from "../../template/common/Button";
import {Link} from "react-router-dom";

class Advert extends Component{
    render() {
        return (
            <section className={'md:rounded-2xl bg-archives p-8 md:px-16 md:py-10 md:grid md:grid-cols-3 mt-6 text-center md:text-left'}>
                <div className={'flex justify-center md:justify-start items-center col-span-2'}><h3 className={'text-3xl font-black text-white'}>Submit yours now</h3></div>
                <div className={'flex justify-center mt-6 md:mt-0'}>

                    <Link to="/add-new">
                        <Button type={'button'} outline={true} text={'Add your publication'} />
                    </Link>
                </div>
            </section>
        )
    }
}

export default Advert