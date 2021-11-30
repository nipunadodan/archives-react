import React, {Component} from "react";
import Header from "../../../template/header/Header";
import Footer from "../../../template/footer/Footer";
import ArticleEditIntructions from "./ArticleEditIntructions";
import ArticleEditForm from "./ArticleEditForm";

class ArticleEdit extends Component{
    render() {
        return(
            <div key={'add-new-container'} className={'container mx-auto'}>
                <Header nav={true} />
                <ArticleEditIntructions />
                <ArticleEditForm />
                <Footer />
            </div>
        )
    }
}

export default ArticleEdit