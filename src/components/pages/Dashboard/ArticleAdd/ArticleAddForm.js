import React, {Component} from "react";
import ArticleAddBasicInfo from "../ArticleManageForm/ArticleAddBasicInfo";
import ArticleAddAbstract from "../ArticleManageForm/ArticleAddAbstract";
import ArticleAddMoreInfo from "../ArticleManageForm/ArticleAddMoreInfo";
import ArticleAddSubmit from "../ArticleManageForm/ArticleAddSubmit";
import ArticleAddSuccess from "../ArticleManageForm/ArticleAddSucess";

class ArticleAddForm extends Component{
    RESET = {
        basics : [],
        abstract : null,
        more : [],
        abstractObject: null,
        submitSuccess: false,
        error : null,
        result: {}
    }

    state = this.RESET

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
        // console.log(finalState);

        const api_base = process.env.REACT_APP_API_BASE;

        fetch(api_base+'article-add',{
            method:'post',
            body:new URLSearchParams(finalState),
            credentials: "include"
        })
            .then(res => res.json())
            .then(
                (result) => {
                    // console.log(result);
                    if(result.status === 'success') {
                        this.setState({
                            submitSuccess:true,
                            result: result
                        })
                    }
                },
                (error) => {
                    this.setState({
                        submitSuccess: false,
                        error
                    })
                }
            )

        return false;
    }

    addNew = () => {
        this.setState(this.RESET);
    }

    editThis = () => {
        this.setState({
            submitSuccess: false
        })
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return(
            <>
                {this.state.submitSuccess ?
                    <>
                        <ArticleAddSuccess article={this.state.result} addNew={this.addNew} editThis={this.editThis} />
                    </> :
                    <form className={'form'} name={'article-add'} method={'post'} onSubmit={this.handleSubmit}>
                        <ArticleAddBasicInfo parentCallback={this.handleBasicData} />
                        <ArticleAddAbstract parentCallback={this.handleAbstractData} />
                        <ArticleAddMoreInfo parentCallback={this.handleMoreData} />
                        <ArticleAddSubmit />
                    </form>

                }
            </>
        )
    }
}

export default ArticleAddForm