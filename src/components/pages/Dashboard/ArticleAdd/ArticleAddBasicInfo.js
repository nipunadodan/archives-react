import React, {Component} from "react";
import Button from "../../../template/common/Button";

class ArticleAddBasicInfo extends Component{
    state = {
        values:[]
    }

    handleChange = (event) =>{
        let currstate = this.state.values;
        currstate[[event.target.name]] = event.target.value;

        this.setState({
            values: currstate
        })

        this.props.parentCallback(this.state.values);
    }
    render() {
        return(
            <div className={'md:rounded-2xl bg-white px-8 md:px-16 py-8 md:py-14 mt-6'}>
                <h3 className={'font-black text-4xl mb-6'}>Basic Info</h3>

                <div className={'grid grid-cols-4 gap-6 mb-6'}>
                    <div key={'type'}>
                        <label>Paper Type</label>
                        <select name={'type'} onChange={this.handleChange}>
                            <option>Select Paper Type</option>
                            <option>Research Full Paper</option>
                        </select>
                    </div>
                    <div key={'subject_area'}>
                        <label>Subject Area</label>
                        <select name={'subject_area'} onChange={this.handleChange}>
                            <option>Select Subject Area</option>
                            <option>Physics</option>
                        </select>
                    </div>
                    <div key={'doi'}>
                        <label>Digital Object Identifier (DOI)</label>
                        <input type="text" placeholder={'Digital Object Identifier (DOI)'} name={'doi'} onChange={this.handleChange} autoComplete={'off'} />
                    </div>
                    <div key={'license'}>
                        <label>License</label>
                        <input type="text" placeholder={'License'} name={'license'} onChange={this.handleChange} autoComplete={'off'} />
                    </div>
                </div>
                <div key={'title'} className={'mb-6'}>
                    <label>Title</label>
                    <input type="text" placeholder={'Title'} name={'title'} onChange={this.handleChange} autoComplete={'off'} required />
                </div>
                <div className={'grid grid-cols-12 gap-6 mb-6'}>
                    <div className={'col-span-9'}>
                        <label>Conference/Journal</label>
                        <input type="text" placeholder={'Conference/Journal'} name={'place'} onChange={this.handleChange} autoComplete={'off'} required />
                    </div>
                    <div className={'col-span-3'}>
                        <label>If applicable, Pages Range</label>
                        <div className={'grid grid-cols-2 gap-6'}>
                            <input type="text" placeholder={'From'} name={'from'} onChange={this.handleChange} autoComplete={'off'} />
                            <input type="text" placeholder={'To'} name={'to'} onChange={this.handleChange} autoComplete={'off'} />
                        </div>
                    </div>
                </div>
                <div className={'grid grid-cols-2 gap-6 mb-6'}>
                    <div key={'author'}>
                        <label>First Author</label>
                        <input type="text" placeholder={'First Author'} name={'author'} onChange={this.handleChange} autoComplete={'off'} required />
                    </div>
                    <div key={'authors-1'}>
                        <label>Co-authors</label>
                        <input type="text" key={'co-author-1'} className={'mb-3'} placeholder={'Co-author 1'} name={'author[]'} onChange={this.handleChange} autoComplete={'off'} />
                        <input type="text" key={'co-author-2'} className={'mb-3'} placeholder={'Co-author 2'} name={'author[]'} onChange={this.handleChange} autoComplete={'off'} />
                        <input type="text" key={'co-author-3'} className={'mb-3'} placeholder={'Co-author 3'} name={'author[]'} onChange={this.handleChange} autoComplete={'off'} />
                        <Button type={'button'} outline={true} text={'Add more co-authors'} size={'sm'} />
                    </div>
                </div>
            </div>
        )
    }
}

export default ArticleAddBasicInfo