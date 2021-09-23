import React, {Component} from "react";
import {getDateStr} from "../../../../Helpers/Helpers";

class BlogDate extends Component{

    render() {
        const date = this.props.date;
        const dateObj = getDateStr(date);
        return (
            <div>
                <div className={'inline-block text-7xl font-bold mr-2'}>{String(dateObj.date).padStart(2, '0')}</div>
                <div className={'inline-block'}>
                    <div className={'uppercase text-3xl font-medium'}>{dateObj.monthName}</div>
                    <div className={'text-2xl'}>{dateObj.year}</div>
                </div>
            </div>
        )
    }
}

export default BlogDate