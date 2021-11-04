import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./components/pages/home/Home";
import Article from "./components/pages/Article/Article";
import Highlights from "./components/pages/Highlights/Highlights";
import BlogPosts from "./components/pages/Blog/BlogPosts";
import Login from "./components/pages/Login/Login";
import PrintArticle from "./components/pages/Print/PrintArticle";
import ArticleAdd from "./components/pages/Dashboard/ArticleAdd/ArticleAdd";
import ArticleEdit from "./components/pages/Dashboard/ArticleEdit/ArticleEdit";

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
        if(!this.state.token) {
            return <Router basename={'archives'}>
                    <Login tokenCallback={this.handleTokenCallback} />
                </Router>
        }
        return(
            <Router basename={'archives'}>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/article/:id">
                        <Article />
                    </Route>
                    <Route exact path="/print/:id">
                        <PrintArticle />
                    </Route>
                    <Route exact path="/articles/:option">
                        <Highlights />
                    </Route>
                    <Route exact path="/posts">
                        <BlogPosts />
                    </Route>
                    <Route exact path="/add-new">
                        <ArticleAdd />
                    </Route>
                    <Route exact path="/edit/:id">
                        <ArticleEdit />
                    </Route>
                </Switch>
            </Router>
        )
    }
}

export default App