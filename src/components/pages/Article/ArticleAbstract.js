import React, {Component} from "react";
import './ArticleAbstract.css'

class ArticleAbstract extends Component{
    render() {
        const article = this.props.article.data;
        return(
            <section key={'articleAbstract'} className={'md:rounded-2xl bg-white px-8 md:px-16 py-8 md:py-14 mt-6'}>
                <div className={'md:grid md:grid-cols-3'}>
                    <div className={'md:col-span-2'}>
                        <div className={'flex items-center justify-between mb-8'}>
                            <h2 className={'text-3xl font-bold uppercase '}>Abstract</h2>
                            <span className="inline-block __dimensions_badge_embed__" data-doi={article.doi}
                                  data-style="small_circle"></span>
                        </div>
                        <article key={'abstract'} className={'abstract  text-justify leading-loose'} dangerouslySetInnerHTML={{__html: article.abstract}} />
                    </div>
                </div>
            </section>
        )
    }
}

export default ArticleAbstract;