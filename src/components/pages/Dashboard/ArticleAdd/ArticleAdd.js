import React, {Component} from "react";
import Header from "../../../template/header/Header";
import ArticleAddIntructions from "./ArticleAddIntructions";
import ArticleAddForm from "./ArticleAddForm";
import Footer from "../../../template/footer/Footer";

class ArticleAdd extends Component{
    render() {
        return(
            <div key={'add-new-container'} className={'container mx-auto'}>
                <Header />
                <ArticleAddIntructions />
                <ArticleAddForm />
                <Footer />
            </div>
        )
    }
}

export default ArticleAdd