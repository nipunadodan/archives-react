import React, {Component} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/pages/home/Home";
import Article from "./components/pages/Article/Article";
import Highlights from "./components/pages/Highlights/Highlights";
import BlogPosts from "./components/pages/Blog/BlogPosts";
import Login from "./components/pages/Login/Login";
import PrintArticle from "./components/pages/Print/PrintArticle";
import ArticleAdd from "./components/pages/Dashboard/ArticleAdd/ArticleAdd";
import ArticleEdit from "./components/pages/Dashboard/ArticleEdit/ArticleEdit";
import NotFound from "./components/pages/NotFound/NotFound";
import Dashboard from "./components/pages/Dashboard/Dashboard";

class App extends Component{
    state = {
        token : false
    }

    handleTokenCallback = (tokenData) => {
        this.setState({
            token: tokenData
        })
    }

    componentDidMount() {
        if(localStorage.getItem('login') !== null){
            this.setState({
                token: JSON.parse(localStorage.getItem('login'))
            })
        }
    }

    render() {
        /*if(!this.state.token) {
            return <Router basename={'archives'}>
                    <Login tokenCallback={this.handleTokenCallback} />
                </Router>
        }*/
        return(
            <Router basename={'archives'}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login tokenCallback={this.handleTokenCallback} />} />
                    <Route path="/article/:id" element={<Article />} />
                    <Route path="/print/:id" element={<PrintArticle />} />
                    <Route path="/articles/:option" element={<Highlights />} />
                    <Route path="/posts" element={<BlogPosts />} />
                    <Route path="/add-new" element={<ArticleAdd />} />
                    <Route path="/edit/:id" element={<ArticleEdit />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route
                        path="*"
                        element={<NotFound />}
                    />
                </Routes>
            </Router>
        )
    }
}

export default App