import React, {Component} from "react";

class Button extends Component{
    render() {
        const type= this.props.type;
        const outline = this.props.outline;
        const text = this.props.text;
        const size = this.props.size;
        const customClass = this.props.customClass;

        return (
            <button type={type} className={[
                'rounded-full cursor-pointer border bg-white duration-300 px-10 md:px-10 inline-block border-archives',
                outline ?
                    'text-archives hover:text-white hover:bg-archives border-archives hover:border-white' :
                    'text-white bg-archives hover:bg-archives-dark hover:border-archives',
                size === 'sm' ?
                    'py-2' :
                    'py-3'
            ].join(' ')}>{text}</button>

        )
    }
}

export default Button