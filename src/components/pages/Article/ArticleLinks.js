import React, {Component} from "react";
import {Link} from "react-router-dom";
import Button from "../../template/common/Button";

class ArticleLinks extends Component{
    render() {
        const article = this.props.article.data;
        return(
            <section key={'articleLinks'} className={'md:rounded-2xl bg-white px-8 md:px-16 py-8 md:py-12 mt-6'}>
                <a className={'inline-block mr-3 mb-3 md:mb-0'} target={'_blank'} rel={'noreferrer'} href={article.full_text_link}>
                    <Button type={'button'} outline={false} text={'Full text link'} size={'sm'} />
                </a>
                <Link to={'/print/'+article.slug} target={'_blank'} rel={'noreferrer'}>
                    <Button type={'button'} outline={true} text={'Plain Text Link'} size={'sm'} />
                </Link>
            </section>
        )
    }
}

export default ArticleLinks;