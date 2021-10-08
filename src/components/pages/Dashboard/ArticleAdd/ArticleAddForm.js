import React, {Component} from "react";
import ArticleAddBasicInfo from "./ArticleAddBasicInfo";
import ArticleAddAbstract from "./ArticleAddAbstract";
import ArticleAddMoreInfo from "./ArticleAddMoreInfo";
import ArticleAddSubmit from "./ArticleAddSubmit";

class ArticleAddForm extends Component{
    state = {
        basic : [],
        abstract : null,
        more : [],
        abstractObject:null
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
        // Merging arrays
        let finalState = {
            ...basics,
            ...abstract,
            ...more
        };
        console.log(finalState);

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