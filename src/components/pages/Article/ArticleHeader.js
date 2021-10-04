import React, {Component} from "react";

class ArticleHeader extends Component{
    render() {
        const article = this.props.article.data;
        return(
            <div key={'articleHeader'} className={'md:rounded-2xl bg-white px-8 md:px-16 py-8 md:py-14 mt-6'}>
                <h1 className={'text-2xl md:text-4xl font-bold leading-8 md:leading-10'}>{article.title}</h1>
                <p className={'font-medium mt-10 md:text-xl block'}>Authors: <span className={'font-bold'}>{article.author}</span>, {article.authors.replaceAll(',',', ')}</p>
            </div>
        )
    }
}

export default ArticleHeader;