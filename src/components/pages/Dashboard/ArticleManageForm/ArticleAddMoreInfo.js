import React, {Component} from "react";

class ArticleAddMoreInfo extends Component {
    state = {
        values:{
            publication_year:"",
            publication_date:"",
            volume:'',
            issue:'',
            url:'',
            pdf_url:''
        },
        keywordsInput:[
            {keyword:''}
        ]
    }

    componentDidMount() {
        if(this.props.article){
            const article = this.props.article.data

            const keywordsArr = article.keywords.split(',');
            const keywords = []
            keywordsArr.map(keyword => {
                return keywords.push({
                    keyword:keyword
                })
            })
            this.setState({
                keywordsInput:keywords
            })

            this.setState({
                values:{
                    publication_year:article.publication_year,
                    publication_date:article.publication_date,
                    volume:article.volume,
                    issue:article.issue,
                    url:article.full_text_link,
                    pdf_url:article.pdf_url,
                    keywords:[...keywordsArr.map(x => x)]
                }
            },function () {
                this.props.parentCallback(this.state.values);
            })
        }
    }

    handleChange = (event) =>{
        let currstate = this.state.values;
        currstate[[event.target.name]] = event.target.value;

        this.setState({
            values: currstate
        })

        this.props.parentCallback(this.state.values);
    }
    handleKeywordsChange = (event, index) =>{
        const {name, value} = event.target;
        const keywords = [...this.state.keywordsInput];
        keywords[index][name] = value;

        let currstate = this.state.values;
        currstate['keywords'] = [...keywords.map(x => x.keyword)]

        this.setState({
            values:currstate
        },function () {
            this.props.parentCallback(this.state.values);
        })
    }

    handleKeywordsAddButton = () =>{
        this.setState({
            keywords: [...this.state.keywordsInput, {
                keyword: ''
            }]
        })
    }

    handleKeywordsRemoveButton = (index) =>{
        const keywords = [...this.state.keywordsInput]
        keywords.splice(index,1)
        this.setState({
            keywordsInput: keywords
        })
    }
    render() {
        return (
            <div className={'md:rounded-2xl bg-white px-8 md:px-16 py-8 md:py-14 mt-6'}>
                <h3 className={'font-black text-4xl mb-6 mt-6'}>More Info</h3>
                <div className={'md:grid md:grid-cols-4 gap-6 mb-6'}>
                    <div key={'pub_year'}>
                        <label>Publication Year</label>
                        <input type="text" pattern={'^(19|20)\\d{2}$'} placeholder={'Publication Year'} name={'publication_year'} onChange={this.handleChange} autoComplete={'off'} value={this.state.values.publication_year ?? ''}  />
                    </div>
                    <div key={'pub_date'}>
                        <label>Publication Date</label>
                        <input type="date" placeholder={'Publication Date'} name={'publication_date'} onChange={this.handleChange} autoComplete={'off'} value={this.state.values.publication_date ?? ''}  />
                    </div>
                    <div key={'volume'}>
                        <label>Volume</label>
                        <input type="text" placeholder={'Volume'} name={'volume'} onChange={this.handleChange} autoComplete={'off'} value={this.state.values.volume ?? ''}  />
                    </div>
                    <div key={'issue'}>
                        <label>Issue</label>
                        <input type="text" placeholder={'Issue'} name={'issue'} onChange={this.handleChange} autoComplete={'off'} value={this.state.values.issue ?? ''}  />
                    </div>
                </div>
                <div key={'keywords'} className={'mb-6'}>
                    <label className={'block w-full'}>Keywords</label>
                    {this.state.keywordsInput.map((x,i) => {
                        const required = i === 0
                        return (
                            <span key={i}>
                                <input type="text" key={'keyword-'+i} className={'w-auto mb-3'} placeholder={'Keyword '+(i+1)} name={'keyword'} value={x.keyword} onChange={e => this.handleKeywordsChange(e,i)} autoComplete={'off'} required={required}  />
                                <span className={''}>
                                    {this.state.keywordsInput.length !== 1 && <button type={'button'} className={'rounded-full cursor-pointer  bg-white duration-200 py-1 px-2 inline-block border-archives text-archives hover:text-white hover:bg-archives border-archives hover:border-white mb-3 ml-1 mr-4'} onClick={() => this.handleKeywordsRemoveButton(i)}><i className={'la la-times'}/></button> }
                                    {this.state.keywordsInput.length - 1 === i && <button type={'button'} className={'rounded-full cursor-pointer border bg-white duration-200 py-2 pl-5 md:pl-7 pr-6 md:pr-8 border-archives text-white bg-archives hover:bg-archives-dark hover:border-archives mb-3'} onClick={this.handleKeywordsAddButton}><i className={'la la-plus'}/> Add</button> }
                                </span>
                            </span>
                        )
                    })}
                </div>
                <div key={'full_link'} className={'mb-6'}>
                    <label>Full Text Link</label>
                    <input type="text" placeholder={'Full Text Link (URL)'} name={'url'} onChange={this.handleChange} autoComplete={'off'} required value={this.state.values.url ?? ''}  />
                    <span className={'text-gray-400 helper-text text-sm md:text-base'}>You may use journal full text link, DOI link, research-gate link, University archive link or academia.edu links.</span>
                </div>
                <div key={'pdf_link'} className={'mb-6'}>
                    <label>PDF Link</label>
                    <input type="text" placeholder={'PDF Link (URL)'} name={'pdf_url'} onChange={this.handleChange} autoComplete={'off'} value={this.state.values.pdf_url ?? ''} />
                    <span className={'text-gray-400 helper-text text-sm md:text-base'}>Please make sure you are providing the PDF link, not any intermediary URL.</span>
                </div>
            </div>
        );
    }
}

export default ArticleAddMoreInfo
