import React, {Component} from "react";
import Header from "../../template/header/Header";
import PostHighlights from "./PostHighlights";
import Footer from "../../template/footer/Footer";

class Highlights extends Component{
    render() {
        return(
            <div className={'container mx-auto'}>
                <Header/>
                <PostHighlights/>
                <Footer/>
            </div>
        )
    }
}

export default Highlights