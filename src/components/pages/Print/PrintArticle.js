import React, {Component} from "react";
import './PlainText.css'
import PlainText from "./PlainText";

class PrintArticle extends Component{
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            article: []
        }
    }
    componentDidMount() {
        const api_base = process.env.REACT_APP_API_BASE;
        const option = this.props.match.params.id;
        const id = this.props.id;
        const data = {
            id: (option ? option : id)
        }

        // eslint-disable-next-line no-unused-expressions
        option ? window.scrollTo(0, 0) : null;

        fetch(api_base+'article-got',{
            method:'post',
            body:JSON.stringify(data)
        })
            .then(res => res.json())
            .then((result) =>{
                this.setState({
                    isLoaded: true,
                    article:result
                })
                if(result.status !== 'success'){
                    this.setState({
                        error:{
                            message:result.error
                        }
                    })
                }
            },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                }
            )
    }

    render() {
        const {error, isLoaded, article} = this.state;
        return (
            <div key={'articleContainer'} className={'bg-white'}>
                {error
                    ? <div key={'error'} className={'md:rounded-2xl bg-white px-8 md:px-16 py-8 md:py-12 md:mt-6'}>Error: {error.message}</div>
                    : [(!isLoaded
                            ? <div key={'loading'} className={'container mx-auto md:rounded-2xl bg-white px-8 md:px-16 py-8 md:py-12 md:mt-6'}>Loading...</div>
                            : [
                                <>
                                    <PlainText article={article}/>
                                </>
                            ]
                    )]
                }
            </div>
        )
    }
}

export default PrintArticle