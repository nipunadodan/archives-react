import React, {Component} from "react";
import {Link} from "react-router-dom";
import PrivateComponent from "../../../../Helpers/PrivateComponent";

export default class PendingArticles extends Component{
    state = {
        approving:false,
        //articles:this.props.articles.filter( article => article.status < 5)
        articles:[]
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(JSON.stringify(prevProps.articles) !== JSON.stringify(this.props.articles)) {
            this.setState({
                articles: this.props.articles.filter(article => article.status < 5)
            })
        }
    }

    /*
    * Check this solution for updating one element
    * https://stackoverflow.com/questions/61820696/react-update-one-item-element-in-a-list-by-fetch
    * */

    approve = (id) => {
        const data = {
            article_id:id,
            status:5
        }
        this.setState({
            approving:true
        })
        const api_base = process.env.REACT_APP_API_BASE;
        fetch(api_base + 'article-approve', {
            method: 'post',
            body: new URLSearchParams(data),
            credentials: 'include'
        })
            .then (r =>r.json())
            .then(
                (result) => {
                    this.setState(prevState =>({
                        approving:false,
                        articles: [...prevState.articles].map(article => article.id === id ? { ...article, updated:true } : article)
                    }))
                }
            )
        return false
    }

    render() {
        // console.log(this.state)
        // console.log(this.props.articles)
        return (
            <div className={'md:rounded-2xl bg-white px-8 md:px-16 py-8 md:py-14 mt-6'}>
                <h2 className={'text-2xl md:text-4xl mt-2 font-black leading-8 md:leading-10'}>Pending Articles</h2>

                {
                    this.props.isLoaded ?
                        this.state.articles.map((article) => (
                            <div key={article.id} className={'my-6 border-b'}>
                                <article className={'my-8 flex'}>
                                    <div className={'flex-grow'}>
                                        <h3 className={'text-xl font-semibold mb-4'}>{article.title}</h3>
                                        <p className={'text-gray-500 uppercase text-xs'}>{article.authors}</p>
                                    </div>
                                    <div className={'flex flex-col justify-end'}>
                                        <Link to={'/dashboard/edit/' + article.slug} className={'bg-archives rounded-full inline-block text-white px-3 py-2 text-center mb-3 mx-3'}>
                                            <i title={'Edit'} className={'la la-pencil'}/>
                                        </Link>
                                        <Link to={'/article/' + article.slug} className={'bg-gray-200 rounded-full inline-block px-3 py-2 text-center mb-3 mx-3'}>
                                            <i title={'View'} className={'la la-link'}/>
                                        </Link>
                                        <PrivateComponent roles={'ROLE_SUPER_ADMIN'}>
                                            <button onClick={() => this.approve(article.id)} className={'bg-gray-200 rounded-full inline-block px-3 py-2 text-center mb-3 mx-3'}>
                                                <i title={'Approve'} className={article.updated ? 'la la-check-double' : 'la la-check'}/>
                                            </button>
                                        </PrivateComponent>
                                    </div>
                                </article>
                            </div>
                        ))
                        :<>Loading...</>
                }

            </div>
        )
    }
}