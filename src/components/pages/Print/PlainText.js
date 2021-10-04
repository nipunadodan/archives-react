import React, {Component} from "react";
import {getDateStr} from "../../../Helpers/Helpers";

class PlainText extends Component{
    render() {
        const article = this.props.article.data;
        const published_date = getDateStr(article.publication_date);
        return(
            <pre className={'bg-white'}>
                <h1 className={'uppercase'}>{article.title}</h1><br />

                Author(s) {article.author}, {article.authors.replaceAll(',',', ')} <br /><br />

                Published by {article.published_place} {article.publication_year} <br />
                Pages {article.page_no_from !== '0'?article.page_no_from:'0'}-{article.page_no_to !== '0'?article.page_no_to:'0'}<br />
                Digital Object Identifier (DOI) {article.doi !== '0'?article.doi:'N/A'}<br />
                Volume {article.volume !== '0'?article.volume:'0'} Issue {article.issue !== '0' ? article.issue : '0'}<br/>
                Published on {published_date.date} {published_date.monthName}, {published_date.year}<br />
                Keywords {article.keywords.replaceAll(',',', ')}<br /><br />

                ABSTRACT<br /><br />
                <pre dangerouslySetInnerHTML={{__html: article.abstract}}></pre><br />

                &copy; archives.edu.lk {(new Date().getFullYear())}
            </pre>
        )
    }
}

export default PlainText