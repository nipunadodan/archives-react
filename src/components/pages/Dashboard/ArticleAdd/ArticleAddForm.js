import React, {Component} from "react";
import ArticleAddBasicInfo from "../ArticleManageForm/ArticleAddBasicInfo";
import ArticleAddAbstract from "../ArticleManageForm/ArticleAddAbstract";
import ArticleAddMoreInfo from "../ArticleManageForm/ArticleAddMoreInfo";
import ArticleAddSubmit from "../ArticleManageForm/ArticleAddSubmit";

class ArticleAddForm extends Component{
    state = {
        basics : [],
        abstract : null,
        more : [],
        abstractObject:null,
        submitSuccess:false,
        error : null
    }

    handleBasicData = (data) =>{
        this.setState({
            basics: data
        },()=>{
            //console.log(this.state.basics);
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

        let api_base = process.env.REACT_APP_API_BASE;

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
            )

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