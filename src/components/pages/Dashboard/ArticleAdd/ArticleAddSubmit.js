import React, {Component} from "react";
import Button from "../../../template/common/Button";

class ArticleAddSubmit extends Component {
    render() {
        return (
            <div className={'md:rounded-2xl bg-white px-8 md:px-16 py-8 md:py-14 mt-6'}>
                <h4 className={'text-archives font-black text-xl'}>IMPORTANT</h4>
                <p className={'text-archives helper-text mb-6'}>Your article <strong>will only be allowed</strong> to edit until it's accepted and published. Please be careful to make sure everything is correct and in order.</p>
                <div className={'flex justify-start mt-10'}>
                    <Button type={'submit'} outline={false} icon={'upload'} text={'UPLOAD'} size={'sm'} className={'px-6'} />
                </div>
            </div>
        );
    }
}

export default ArticleAddSubmit
