import React, {Component} from 'react';

import 'jodit';
import 'jodit/build/jodit.min.css';
import JoditEditor from "jodit-react";

class ArticleAddAbstract extends Component {
    constructor(props) {
        super(props);
        this.state = {
            abstract: 'content',
        }
    }

    updateContent = (value) => {
        this.setState({abstract:value})
        this.props.parentCallback({abstract:value});
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
                <h3 className={'font-black text-4xl mb-6'}>Abstract</h3>
                <JoditEditor
                    editorRef={this.setRef}
                    value={this.state.content}
                    config={this.config}
                    onChange={this.updateContent}
                />
            </div>
        );
    }
}

export default ArticleAddAbstract