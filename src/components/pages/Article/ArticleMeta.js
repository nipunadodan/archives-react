import React, {Component} from "react";
import {getDateStr} from "../../../Helpers/Helpers";

class ArticleMeta extends Component{
    render() {
        const article = this.props.article.data;
        const published_date = getDateStr(article.publication_date);
        return(
            <section key={'articleMeta'} className={'md:rounded-2xl bg-white px-8 md:px-16 py-8 md:py-12 mt-6'}>
                <p className={'mb-4 md:mb-3'}>Published by <span className={'font-bold'}>{article.published_place} {article.publication_year}</span></p>
                <p className={'mb-4 md:mb-3'}>Pages from <span className={'font-bold'}>{article.page_no_from !== '0' ? article.page_no_from : 'N/A'}</span> to <span className={'font-bold'}>{article.page_no_to !== '0' ? article.page_no_to : 'N/A'}</span></p>
                <p className={'mb-4 md:mb-3'}>Digital Object Identifier (DOI) <span className={'font-bold'}>{article.doi}</span></p>
                <p className={'mb-4 md:mb-3'}>Volume <span className={'font-bold'}>{article.volume?article.volume:'N/A'}</span> Issue <span className={'font-bold'}>{article.issue?article.issue:'N/A'}</span></p>
                <p className={'mb-4 md:mb-3'}>Published on <span className={'font-bold'}>{published_date.date} {published_date.monthName}, {published_date.year}</span></p>
                <p className={'mb-4 md:mb-3'}>Keywords <span className={'font-bold'}>{article.keywords.replaceAll(',',', ')}</span></p>
            </section>
        )
    }
}

export default ArticleMeta;