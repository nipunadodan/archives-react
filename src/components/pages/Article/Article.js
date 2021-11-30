import React, {Component} from "react";
import Header from "../../template/header/Header";
import Footer from "../../template/footer/Footer";
import ArticleHeader from "./ArticleHeader";
import ArticleMeta from "./ArticleMeta";
import ArticleLinks from "./ArticleLinks";
import ArticleAbstract from "./ArticleAbstract";
import {withRouter} from "../../../Helpers/Helpers";

class Article extends Component{
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            article: []
        }
    }
    componentDidMount() {
        const api_base =process.env.REACT_APP_API_BASE;
        const params = this.props.params;
        const id = this.props.id;
        const data = {
            id: ("id" in params ? params.id : id)
        }

        // eslint-disable-next-line no-unused-expressions
        "id" in params ? window.scrollTo(0, 0) : null;

        fetch(api_base+'article-got',{
                method:'post',
                body:JSON.stringify(data)
            })
            .then(res => res.json())
            .then(
                (result) =>{
                    this.setState({
                        isLoaded: true,
                        article:result
                    })
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
            <div key={'articleContainer'} className={'container mx-auto'}>
                <Header nav={true} />
                    {error
                        ? <div key={'error'} className={'md:rounded-2xl bg-white px-8 md:px-16 py-8 md:py-12 md:mt-6'}>Error: {error.message}</div>
                        : [(!isLoaded
                            ? <div key={'loading'} className={'md:rounded-2xl bg-white px-8 md:px-16 py-8 md:py-12 md:mt-6'}>Loading...</div>
                            : [
                                <>
                                    <ArticleHeader article={article}/>
                                    <ArticleMeta article={article}/>
                                    <ArticleLinks article={article}/>
                                    <ArticleAbstract article={article}/>
                                </>
                            ]
                        )]
                    }
                <Footer />
            </div>
        )
    }
}

export default withRouter(Article)