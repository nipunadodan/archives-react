import React, {Component} from "react";
import Button from "../../template/common/Button";
import {Link, withRouter} from "react-router-dom";

class PostHighlights extends Component{
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            articles: []
        }
    }

    componentDidMount() {
        const api_base = process.env.REACT_APP_API_BASE;
        const option = this.props.match.params.option;
        const data = {
            count:(option === 'all' ? 0 : option)
        };

        // eslint-disable-next-line no-unused-expressions
        option ? window.scrollTo(0, 0) : null;

        fetch(api_base+'articles-featured-process',{
            method:'post',
            body:JSON.stringify(data)
        })
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        articles: result
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
        const {error, isLoaded, articles} = this.state;
        return (
            <div key={'posts123'} className={'rounded-2xl bg-white p-8 md:p-16 mt-6'}>
                <h2 className={'text-6xl font-bold block mb-20'}><span className={'font-extralight'}>From</span> Highlights</h2>
                {error
                    ? <div>Error: {error.message}</div>
                    : [
                        (!isLoaded
                            ? <div key={'loading'}>Loading...</div>
                            : [
                                <div>
                                    {articles.map((article) => (
                                        <div key={'article_'+article.id} className={'md:grid md:grid-cols-4 my-16'}>
                                            <div className={'mb-4'}>
                                                {article.keywords.map((keyword, index) => (
                                                    <span key={'keyword_'+index} className={'bg-gray-100 py-1 px-4 mr-1 mb-2 inline-block rounded-full text-sm'}>{keyword}</span>
                                                ))}
                                            </div>
                                            <h3 className={'col-span-2 font-medium text-lg md:text-2xl'}>{article.title}</h3>
                                            <div className={'md:text-center mt-4 md:mt-2'}>
                                                <Link to={'/article/'+article.slug}>
                                                    <Button type={'button'} outline={false} text={'Read More'} size={'sm'} />
                                                </Link>
                                            </div>
                                        </div>
                                    ))}
                                    {!this.props.match.params.option?
                                        <div className={'text-center'}>
                                            <Link to={'articles/all'}><Button type={'button'} outline={true} text={'More Highlights'}/></Link>
                                        </div>
                                        :<div className={'text-center'}>
                                            <Link to={'/'}><Button type={'button'} outline={true} text={'Back to Home'}/></Link>
                                        </div>
                                    }

                            </div>]
                        )
                    ]
                }
            </div>
        )
    }
}

export default withRouter(PostHighlights)