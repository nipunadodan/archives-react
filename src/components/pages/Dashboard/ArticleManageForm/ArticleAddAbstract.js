import React, {Component} from 'react';

import 'jodit';
import 'jodit/build/jodit.min.css';
import JoditEditor from "jodit-react";

class ArticleAddAbstract extends Component {
    constructor(props) {
        super(props);
        this.state = {
            values: {
                abstract:'content'
            },
        }
    }

    updateContent = (value) => {
        this.setState({
            values:{
                abstract:value
            }
        },function () {
            this.props.parentCallback(this.state.values);
        })
    }

    componentDidMount() {
        if(this.props.article) {
            const article = this.props.article.data
            this.setState({
                joseph:{
                    abstract: article.abstract
                },
                values:{
                    abstract: article.abstract
                },
            }, function () {
                this.props.parentCallback(this.state.values);
            })
        }
    }

    /*
     * @property Jodit jodit instance of native Jodit
     */
    jodit;
    setRef = jodit => this.jodit = jodit;

    config = {
        readonly: false // all options from https://xdsoft.net/jodit/doc/
    }
    render() {
        return (
            <div className={'md:rounded-2xl bg-white px-8 md:px-16 py-8 md:py-14 mt-6'}>
                <h3 className={'font-black text-4xl mb-6'}>Abstract<span className={'text-archives text-xl align-top'}>*</span></h3>
                <JoditEditor
                    editorRef={this.setRef}
                    value={this.state.values.abstract}
                    config={this.config}
                    onBlur={newContent => this.updateContent(newContent)} // preferred to use only this option to update the content for performance reasons
                    onChange={newContent => {}}
                />
            </div>
        );
    }
}

export default ArticleAddAbstract