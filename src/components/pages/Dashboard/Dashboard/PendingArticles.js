import React from "react";

export default function PendingArticles() {
    return (
        <div className={'md:rounded-2xl bg-white px-8 md:px-16 py-8 md:py-14 mt-6'}>
            <h2 className={'text-2xl md:text-4xl mt-2 font-black leading-8 md:leading-10'}>Pending Articles</h2>

            <div className={'my-6'}>
                <article className={'my-8 flex'}>
                    <div className={'flex-grow'}>
                        <h3 className={'text-xl font-semibold mb-4'}>Reduction-Induced Synthesis of Reduced Graphene Oxide-Wrapped Cu 2 O/Cu Nanoparticles for Photodegradation of Methylene Blue</h3>
                        <p className={'text-gray-500 uppercase text-xs'}>photocatalyst, cuprous oxide, reduced graphene, oxide nanocomposite, co-catalyst</p>
                    </div>
                    <div className={'flex-col'}>
                        <div className={'bg-archives rounded-full inline-block text-white px-3 py-2 text-center mb-3 mx-3'}><i className={'la la-pencil'}></i> </div>
                        <div className={'bg-gray-200 rounded-full inline-block px-3 py-2 text-center mb-3 mx-3'}><i className={'la la-external-link-alt'}></i> </div>
                    </div>
                </article>
            </div>
        </div>
    )
}