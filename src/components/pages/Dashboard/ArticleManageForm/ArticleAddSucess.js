import React, {Component} from "react";
import Button from "../../../template/common/Button";
import {Link} from "react-router-dom";
import Header from "../../../template/header/Header";

class ArticleAddSuccess extends Component {
    addNew = () => {
        this.props.addNew();
    }

    editThis = () => {
        this.props.editThis();
    }

    render() {
        // const article = this.props.article;

        return (
            <div className={'fixed top-0 left-0 right-0 bottom-0 md:rounded-2xl bg-[#f3f4f6] backdrop-blur-2xl z-40 px-8 md:px-16 py-8 md:py-14'}>
                <div className={'md:w-2/5 mx-auto'}>
                    <Header/>
                    <section className={'bg-white rounded-2xl mt-4 px-8 py-8 flex flex-col gap-8 items-center'}>
                        <i className={'la la-check-circle la-5x text-success'} />
                        <h2 className={'text-5xl font-black'}>SUCCESS</h2>
                        <p className={'text-gray-600 text-center helper-text mt-6 md:mt-0 mb-6'}>Your article has successfully submitted to <b className={'font-black'}>ARCHIVES.EDU.LK</b>. It will be approved shortly.</p>

                        <div className={'text-center hidden'}>
                            <h4 className={'text-gray-600 font-black text-xl mb-3'}>IMPORTANT</h4>
                            <p className={'text-gray-600 helper-text mt-6 md:mt-0 mb-6'}>Your article <strong>will only be allowed</strong> to edit until it's accepted and published. Please be careful to make sure everything is correct and in order.</p>
                        </div>

                        <div className={'flex md:flex-row flex-col items-center gap-3'}>
                            <div onClick={this.addNew} className={''}>
                                <Button type={'button'} outline={false} icon={'arrow-right'} text={'Submit another article'}
                                        size={'sm'} className={'px-6'}/>
                            </div>
                            <div onClick={this.editThis} className={''}>
                                <Button type={'button'} outline={true} icon={'pen'} text={'Edit submitted article'}
                                        size={'sm'} className={'px-6'}/>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        );
    }
}

export default ArticleAddSuccess
