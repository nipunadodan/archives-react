import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./components/pages/home/Home";
import Article from "./components/pages/article/Article";
import Highlights from "./components/pages/Highlights/Highlights";
import BlogPosts from "./components/pages/Blog/BlogPosts";
import Login from "./components/pages/login/Login";

class App extends Component{
    state = {
        token : false
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
                <Login />
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
                    <Route exact path="/articles/:option">
                        <Highlights />
                    </Route>
                    <Route exact path="/posts">
                        <BlogPosts />
                    </Route>
                </Switch>
            </Router>
        )
    }
}

export default App