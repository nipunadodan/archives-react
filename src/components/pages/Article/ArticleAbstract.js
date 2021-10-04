import React, {Component} from "react";
import './ArticleAbstract.css'

class ArticleAbstract extends Component{
    render() {
        const article = this.props.article.data;
        return(
            <div className={'md:rounded-2xl bg-white px-8 md:px-16 py-8 md:py-14 mt-6'}>
                <h2 className={'text-3xl font-bold uppercase mb-8'}>Abstract</h2>
                <div className={'md:grid md:grid-cols-3'}>
                    <div key={'abstract'} className={'abstract md:col-span-2 text-justify leading-loose'} dangerouslySetInnerHTML={{__html: article.abstract}}/>
                </div>
            </div>
        )
    }
}

export default ArticleAbstract;