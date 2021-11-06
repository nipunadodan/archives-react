import React, {Component} from "react";
import ArticleAddBasicInfo from "../ArticleManageForm/ArticleAddBasicInfo";
import ArticleAddAbstract from "../ArticleManageForm/ArticleAddAbstract";
import ArticleAddMoreInfo from "../ArticleManageForm/ArticleAddMoreInfo";
import ArticleAddSubmit from "../ArticleManageForm/ArticleAddSubmit";
import {withRouter} from "../../../../Helpers/Helpers";

class ArticleEditForm extends Component{
    state = {
        basics : [],
        abstract : null,
        more : [],
        abstractObject:null,
        isLoaded: false,
        article:false,
        subject_areas:[],
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

//console.log(this.state)

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

        fetch(api_base+'article-edit',{
            method:'post',
            body:new URLSearchParams(finalState),
            credentials: 'include'
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

        let api_base = process.env.REACT_APP_API_BASE;

        const params = this.props.params;
        const id = this.props.id;
        const data = {
            id: ("id" in params ? params.id : id)
        }

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
        if(error){
            return (
                <div className={'md:rounded-2xl bg-white px-8 md:px-16 py-8 md:py-14 mt-6'}>
                    Error: {error.message}
                </div>
            )
        }
        if(!isLoaded){
            return (
                <div className={'md:rounded-2xl bg-white px-8 md:px-16 py-8 md:py-14 mt-6'}>
                    Loading...
                </div>
            )
        }
        return(
            <form className={'form'} name={'article-add'} method={'post'} onSubmit={this.handleSubmit}>
                <ArticleAddBasicInfo article={article} parentCallback={this.handleBasicData} />
                <ArticleAddAbstract article={article} parentCallback={this.handleAbstractData} />
                <ArticleAddMoreInfo article={article} parentCallback={this.handleMoreData} />
                <ArticleAddSubmit />
            </form>
        )
    }
}

export default withRouter(ArticleEditForm)