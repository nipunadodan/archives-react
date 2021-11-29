import React from "react";
import {Link} from "react-router-dom";

export default function PublishedArticles(props) {
    let articles = props.articles
    articles = articles.filter( article => article.status >= 5)
    return (
        <div className={'md:rounded-2xl bg-white px-8 md:px-16 py-8 md:py-14 mt-6'}>
            <h2 className={'text-2xl md:text-4xl mt-2 font-black leading-8 md:leading-10'}>Published Articles</h2>

            {
                props.isLoaded ?
                    articles.map((article) => (
                        <div key={article.id} className={'my-6'}>
                            <article className={'my-8 flex'}>
                                <div className={'flex-grow'}>
                                    <h3 className={'text-xl font-semibold mb-4'}>{article.title}</h3>
                                    <p className={'text-gray-500 uppercase text-xs'}>{article.authors}</p>
                                </div>
                                <div className={'flex flex-col'}>
                                    <div className={'bg-archives rounded-full inline-block text-white px-3 py-2 text-center mb-3 mx-3'}>
                                        <i title={'Get Highlighted'} className={'la la-heart'}/>
                                    </div>
                                    <Link to={'/article/'+article.slug} className={'bg-gray-200 rounded-full inline-block px-3 py-2 text-center mb-3 mx-3'}>
                                        <i title={'View'} className={'la la-link'}/>
                                    </Link>
                                </div>
                            </article>
                        </div>
                    ))
                    :
                    <>Loading...</>
            }

        </div>
    )
}