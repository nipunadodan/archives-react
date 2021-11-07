import React from "react";

export default function PublishedArticles() {
    return (
        <div className={'md:rounded-2xl bg-white px-8 md:px-16 py-8 md:py-14 mt-6'}>
            <h2 className={'text-2xl md:text-4xl mt-2 font-black leading-8 md:leading-10'}>Published Articles</h2>

            <div className={'my-6'}>
                <article className={'my-8 flex'}>
                    <div className={'flex-grow'}>
                        <h3 className={'text-xl font-semibold mb-4'}>The Utility of Novel Renal Biomarkers in Assessment of Chronic Kidney Disease of Unknown Etiology (CKDu): A Review</h3>
                        <p className={'text-gray-500 uppercase text-xs'}>CKD, CKDu, novel biomarkers, renal function, rural farmers, Sri Lanka</p>
                    </div>
                    <div className={'flex-col'}>
                        <div className={'bg-archives rounded-full inline-block text-white px-3 py-2 text-center mb-3 mx-3'}><i className={'la la-heart'}></i> </div>
                        <div className={'bg-gray-200 rounded-full inline-block px-3 py-2 text-center mb-3 mx-3'}><i className={'la la-external-link-alt'}></i> </div>
                    </div>
                </article>
                <article className={'my-8 flex'}>
                    <div className={'flex-grow'}>
                        <h3 className={'text-xl font-semibold mb-4'}>Prevalence and trends of the diabetes epidemic in Urban and Rural India: a pooled systematic review and meta-analysis of 1.7 million adults</h3>
                        <p className={'text-gray-500 uppercase text-xs'}>India, Type-2 diabetes, diabetes mellitus, prevalence, trends</p>
                    </div>
                    <div className={'flex-col'}>
                        <div className={'bg-archives rounded-full inline-block text-white px-3 py-2 text-center mb-3 mx-3'}><i className={'la la-heart'}></i> </div>
                        <div className={'bg-gray-200 rounded-full inline-block px-3 py-2 text-center mb-3 mx-3'}><i className={'la la-external-link-alt'}></i> </div>
                    </div>
                </article>
            </div>
        </div>
    )
}