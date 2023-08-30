import React, {Component} from "react";

class ArticleAddBasicInfo extends Component{
    state = {
        values:{
            id:0,
            type:0,
            subject_area:0,
            doi:'',
            license:'',
            title:'',
            published_at_place:'',
            page_from:0,
            page_to:0,
            author:'',
            authors:[],
        },
        coauthors:[
            {coauthor:''}
        ],
        subject_areas: []
    }

    componentDidMount() {
        this.getMeta();

        if(this.props.article){
            const article = this.props.article.data

            const authors = article.authors.split(',');
            const coauthors = []
            authors.map(coauthor => {
                return coauthors.push({
                    coauthor:coauthor
                })
            })
            this.setState({
                coauthors:coauthors
            })

            this.setState({
                values:{
                    id:article.id,
                    type:article.type,
                    subject_area:article.subject_area,
                    doi:article.doi,
                    license:article.license,
                    title:article.title,
                    published_at_place:article.published_place,
                    page_from:article.page_no_from,
                    page_to:article.page_no_to,
                    author:article.author,
                    authors:[...authors.map(x => x)]
                }
            },function () {
                this.props.parentCallback(this.state.values);
            })
        }
    }

    getMeta = () => {
        const api_base = process.env.REACT_APP_API_BASE

        fetch(api_base+'subject-areas', {
            method: 'get'
        })
            .then(res => res.json())
            .then((result) => {
                result.data.sort((a, b) => a.subject.localeCompare(b.subject));

                this.setState({
                    subject_areas : result.data
                });
            })
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
        let authors = [...this.state.coauthors];
        authors[index][name] = value;

        this.setState((prevState) => ({
            values:{
                ...prevState.values,
                authors:[...authors.map(x => x.coauthor)]
            }
        }), () => {
            this.props.parentCallback(this.state.values)
            //console.log(this.state.values)
        })
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
                <h3 className={'font-black text-4xl mb-6 mt-6'}>Basic Info</h3> {/*TODO:remove top margin*/}
                <div className={'md:grid md:grid-cols-4 gap-6'}>
                    <div className={'mb-6'} key={'type'}>
                        <label>Paper Type</label>
                        <select name={'type'} value={this.state.values.type} onChange={this.handleChange}>
                            <option value="0">Select paper type</option>
                            <option value="1">Journal Paper</option>
                            <option value="2">Conference Full Text</option>
                            <option value="3">Conference Abstract</option>
                        </select>
                    </div>
                    <div className={'mb-6'} key={'subject_area'}>
                        <label>Subject Area</label>
                        <select name={'subject_area'} value={this.state.values.subject_area} onChange={this.handleChange}>
                            <option value={0}>Select Subject Area</option>
                            {
                                this.state.subject_areas.map((subject, index) => (
                                    <option key={index} value={subject.id}>{subject.subject}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className={'mb-6'} key={'doi'}>
                        <label>Digital Object Identifier (DOI)</label>
                        <input type="text" placeholder={'Digital Object Identifier (DOI)'} name={'doi'} onChange={this.handleChange} value={this.state.values.doi ?? ''} autoComplete={'off'} />
                    </div>
                    <div className={'mb-6'} key={'license'}>
                        <label>License</label>
                        <input type="text" placeholder={'License'} name={'license'} onChange={this.handleChange} value={this.state.values.license ?? ''} autoComplete={'off'} />
                    </div>
                </div>
                <div key={'title'} className={'mb-6'}>
                    <label>Title<span className={'text-archives'}>*</span></label>
                    <input type="text" placeholder={'Title'} name={'title'} onChange={this.handleChange} autoComplete={'off'} value={this.state.values.title ?? ''} required />
                </div>
                <div className={'md:grid md:grid-cols-12 gap-6'}>
                    <div className={'col-span-9 mb-6'}>
                        <label>Conference/Journal<span className={'text-archives'}>*</span></label>
                        <input type="text" placeholder={'Conference/Journal'} name={'published_at_place'} onChange={this.handleChange} value={this.state.values.published_at_place ?? ''} autoComplete={'off'} required />
                    </div>
                    <div className={'col-span-3 mb-6'}>
                        <label>If applicable, Pages Range</label>
                        <div className={'grid grid-cols-2 gap-6'}>
                            <input type="text" placeholder={'From'} name={'page_from'} onChange={this.handleChange} value={this.state.values.page_from ?? ''} autoComplete={'off'} />
                            <input type="text" placeholder={'To'} name={'page_to'} onChange={this.handleChange} value={this.state.values.page_to ?? ''} autoComplete={'off'} />
                        </div>
                    </div>
                </div>
                <div className={'md:grid md:grid-cols-2 gap-6'}>
                    <div className={'mb-6'} key={'author'}>
                        <label>First Author<span className={'text-archives'}>*</span></label>
                        <input type="text" placeholder={'First Author'} name={'author'} onChange={this.handleChange} autoComplete={'off'} value={this.state.values.author ?? ''} required />
                    </div>
                    <div className={'mb-6'} key={'authors-1'}>
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