import React, {Component} from "react";
import Button from "../../../template/common/Button";

class ArticleAddBasicInfo extends Component{
    state = {
        values:[],
        coauthors:[
            {coauthor:''}
        ],
    }

    handleChange = (event) =>{
        let currstate = this.state.values;
        currstate[[event.target.name]] = event.target.value;

        this.setState({
            values: currstate
        })

        this.props.parentCallback(this.state.values);
    }

    handleAuthorsChange = (event, index) =>{
        const {name, value} = event.target;
        const authors = [...this.state.coauthors];
        authors[index][name] = value;

        let currstate = this.state.values;
        currstate['authors'] = [...authors.map(x => x.coauthor)]

        this.setState({
            values:currstate
        })
        this.props.parentCallback(this.state.values);
    }

    handleAuthorsAddButton = () =>{
        this.setState({
            coauthors: [...this.state.coauthors, {
                coauthor: ''
            }]
        })
    }

    handleAuthorsRemoveButton = (index) =>{
        const authors = [...this.state.coauthors]
        authors.splice(index,1)
        this.setState({
            coauthors: authors
        })
    }

    render() {
        return(
            <div className={'md:rounded-2xl bg-white px-8 md:px-16 py-8 md:py-14 mt-6'}>
                <h3 className={'font-black text-4xl mb-6'}>Basic Info</h3>

                <div className={'md:grid md:grid-cols-4 gap-6 mb-6'}>
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
                <div className={'md:grid md:grid-cols-12 gap-6 mb-6'}>
                    <div className={'col-span-9'}>
                        <label>Conference/Journal</label>
                        <input type="text" placeholder={'Conference/Journal'} name={'published_place'} onChange={this.handleChange} autoComplete={'off'} required />
                    </div>
                    <div className={'col-span-3'}>
                        <label>If applicable, Pages Range</label>
                        <div className={'grid grid-cols-2 gap-6'}>
                            <input type="text" placeholder={'From'} name={'page_no_from'} onChange={this.handleChange} autoComplete={'off'} />
                            <input type="text" placeholder={'To'} name={'page_no_to'} onChange={this.handleChange} autoComplete={'off'} />
                        </div>
                    </div>
                </div>
                <div className={'md:grid md:grid-cols-2 gap-6 mb-6'}>
                    <div key={'author'}>
                        <label>First Author</label>
                        <input type="text" placeholder={'First Author'} name={'author'} onChange={this.handleChange} autoComplete={'off'} required />
                    </div>
                    <div key={'authors-1'}>
                        <label>Co-authors</label>
                        {this.state.coauthors.map((x,i) => {
                            return (
                                <div key={i}>
                                    <input type="text" key={'co-author-'+i} className={'mb-3'} placeholder={'Co-author '+(i+1)} name={'coauthor'} value={x.coauthor} onChange={e => this.handleAuthorsChange(e,i)} autoComplete={'off'} />
                                    <div className={''}>
                                        {this.state.coauthors.length !== 1 && <button type={'button'} className={'rounded-full cursor-pointer border bg-white duration-300 py-1 pl-5 md:pl-7 pr-6 md:pr-8 inline-block border-archives text-archives hover:text-white hover:bg-archives border-archives hover:border-white mb-3 float-right'} onClick={() => this.handleAuthorsRemoveButton(i)}><i className={'la la-times'}/> Remove</button> }
                                        {this.state.coauthors.length - 1 === i && <button type={'button'} className={'rounded-full cursor-pointer border bg-white duration-300 py-1 pl-5 md:pl-7 pr-6 md:pr-8 inline-block border-archives text-white bg-archives hover:bg-archives-dark hover:border-archives mb-3'} onClick={this.handleAuthorsAddButton}><i className={'la la-plus'}/> Add</button> }
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default ArticleAddBasicInfo