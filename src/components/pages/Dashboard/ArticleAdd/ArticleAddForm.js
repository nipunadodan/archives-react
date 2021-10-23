import React, {Component} from "react";
import ArticleAddBasicInfo from "../Article/ArticleAddBasicInfo";
import ArticleAddAbstract from "../Article/ArticleAddAbstract";
import ArticleAddMoreInfo from "../Article/ArticleAddMoreInfo";
import ArticleAddSubmit from "../Article/ArticleAddSubmit";

class ArticleAddForm extends Component{
    state = {
        basic : [],
        abstract : null,
        more : [],
        abstractObject:null,
        submitSuccess:false,
        error : null
    }

    handleBasicData = (data) =>{
        this.setState({
            basics: data
        })
    }

    handleAbstractData = (data) =>{
        this.setState({
            abstract: data
        })
    }

    handleMoreData = (data) =>{
        this.setState({
            more: data
        })
    }

    handleSubmit = (data) =>{
        data.preventDefault();
        const {basics, abstract, more} = this.state
        if(Array.isArray(basics.authors)){
            basics.authors =  basics.authors.join()
        }
        if(Array.isArray(more.keywords)) {
            more.keywords = more.keywords.join();
        }
        // Merging arrays
        let finalState = {
            ...basics,
            ...abstract,
            ...more
        };
        console.log(finalState);

        /*let api_base = '';
        if (process.env.NODE_ENV === 'production') {
            api_base = process.env.REACT_APP_API_BASE;
        }else{
            api_base = process.env.REACT_APP_API_BASE_LOCAL;
        }

        fetch(api_base+'article-add',{
            method:'post',
            body:new URLSearchParams(finalState),
            credentials: "include"
        })
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    if(result.status === 'success') {
                        this.setState({
                            submitSuccess:true
                        })
                    }
                },
                (error) => {
                    this.setState({
                        submitSuccess: true,
                        error
                    })
                }
            )*/

        return false;
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return(
            <form className={'form'} name={'article-add'} method={'post'} onSubmit={this.handleSubmit}>
                <ArticleAddBasicInfo parentCallback={this.handleBasicData} />
                <ArticleAddAbstract parentCallback={this.handleAbstractData} />
                <ArticleAddMoreInfo parentCallback={this.handleMoreData} />
                <ArticleAddSubmit />
            </form>
        )
    }
}

export default ArticleAddForm