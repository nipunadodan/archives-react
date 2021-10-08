import React, {Component} from "react";

class ArticleAddIntructions extends Component{
    render() {
        return(
            <div className={'md:rounded-2xl bg-white px-8 md:px-16 py-8 md:py-14 mt-6'}>
                <h1 className={'text-5xl font-black mb-10'}>Add New Article</h1>
                <p className={'mb-4'}><strong>IMPORTANT:</strong> Your article will only be allowed to edit until it's accepted and published. Please be careful to make sure everything is correct and in order.</p>
                <p>Your publication will not be added to the archive.edu.lk if it has been published in a predatory journal. Please check your journal in the following lists,</p>

                <a href={'https://predatoryjournals.com/journals/'} target={'_blank'} rel={'noreferrer'} key={'keyword_link1'} className={'border text-archives border-archives py-1 px-6 mr-1 my-2 inline-block rounded-full text-sm hover:bg-archives hover:text-white duration-300'}>https://predatoryjournals.com/</a>

                <a href={'https://guides.library.yale.edu/c.php?g=296124&p=1973764'} key={'keyword_link2'} className={'border text-archives border-archives py-1 px-6 mr-1 my-2 inline-block rounded-full text-sm hover:bg-archives hover:text-white duration-300'}>https://guides.library.yale.edu/</a>
            </div>
        )
    }
}

export default ArticleAddIntructions