import React, {Component} from "react";
import Button from "../../../template/common/Button";

class ArticleAddMoreInfo extends Component {
    state = {
        values:[]
    }

    //TODO: Add input on click (keywords). Keep existing values on state and reassign them on newly loop-created elements. Is this a good idea?

    handleChange = (event) =>{
        let currstate = this.state.values;
        currstate[[event.target.name]] = event.target.value;

        this.setState({
            values: currstate
        })

        this.props.parentCallback(this.state.values);
    }
    render() {
        return (
            <div className={'md:rounded-2xl bg-white px-8 md:px-16 py-8 md:py-14 mt-6'}>
                <h3 className={'font-black text-4xl mb-6'}>More Info</h3>
                <div className={'grid grid-cols-4 gap-6 mb-6'}>
                    <div key={'pub_year'}>
                        <label>Publication Year</label>
                        <input type="text" pattern={'^(19|20)\\d{2}$'} placeholder={'Publication Year'} name={'year'} onChange={this.handleChange} autoComplete={'off'} required />
                    </div>
                    <div key={'pub_date'}>
                        <label>Publication Date</label>
                        <input type="date" placeholder={'Publication Date'} name={'publication_date'} onChange={this.handleChange} autoComplete={'off'} required />
                    </div>
                    <div key={'volume'}>
                        <label>Volume</label>
                        <input type="text" placeholder={'Volume'} name={'volume'} onChange={this.handleChange} autoComplete={'off'} />
                    </div>
                    <div key={'issue'}>
                        <label>Issue</label>
                        <input type="text" placeholder={'Issue'} name={'issue'} onChange={this.handleChange} autoComplete={'off'} />
                    </div>
                </div>
                <div key={'keywords'} className={'mb-6'}>
                    <label className={'block w-full'}>Keywords</label>
                    <input key={'keyword-1'} className={'w-auto mr-3'} type="text" placeholder={'Keyword 1'} name={'keywords[]'} onChange={this.handleChange} autoComplete={'off'} required />
                    <input key={'keyword-2'} className={'w-auto mr-3'} type="text" placeholder={'Keyword 2'} name={'keywords[]'} onChange={this.handleChange} autoComplete={'off'} />
                    <input key={'keyword-3'} className={'w-auto mr-3'} type="text" placeholder={'Keyword 3'} name={'keywords[]'} onChange={this.handleChange} autoComplete={'off'} />
                    <Button type={'button'} outline={true} text={'Add more keywords'} size={'sm'} />
                </div>
                <div key={'full_link'} className={'mb-6'}>
                    <label>Full Text Link</label>
                    <input type="text" placeholder={'Full Text Link (URL)'} name={'full_link'} onChange={this.handleChange} autoComplete={'off'} required />
                    <span className={'text-gray-400 helper-text'}>You may use journal full text link, DOI link, research-gate link, University archive link or academia.edu links.</span>
                </div>
                <div key={'pdf_link'} className={'mb-6'}>
                    <label>PDF Link</label>
                    <input type="text" placeholder={'PDF Link (URL)'} name={'pdf_link'} onChange={this.handleChange} autoComplete={'off'} />
                    <span className={'text-gray-400 helper-text'}>Please make sure you are providing the PDF link, not any intermediary URL.</span>
                </div>
            </div>
        );
    }
}

export default ArticleAddMoreInfo
