import React from "react";
import {Link} from "react-router-dom";
import Button from "../../../template/common/Button";

export default function Hello() {
    return (
        <div className="md:flex items-center md:rounded-2xl bg-white px-8 md:px-16 py-8 md:py-8 mt-6">
            <div className={'md:flex md:flex-grow md:flex-col'}>
                <h1 className={'text-2xl md:text-4xl font-black md:leading-10'}>Hello Nipuna!</h1>
                <p>Welcome back to the dashboard.</p></div>
            <div className={"md:flex md:justify-center mt-6 md:mt-0"}>
                <Link to="/add-new">
                    <Button type={"button"} outline={false} text={"Add your publication"} />
                </Link>
            </div>
        </div>
    )
}