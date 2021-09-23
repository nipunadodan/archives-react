import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './index.css';
import Home from './components/pages/home/Home';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import PostHighlights from "./components/pages/home/Highlights/PostHighlights";
import Header from "./components/template/Header";
import Footer from "./components/template/Footer/Footer";
import BlogPosts from "./components/pages/home/Blog/BlogPosts";
import Article from "./components/pages/article/Article";

ReactDOM.render(
    <Router basename={'archives'}>
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/article/:id">
                <Article />
            </Route>
            <Route exact path="/articles/:option">
                <div className={'container mx-auto'}>
                    <Header/>
                    <PostHighlights/>
                    <Footer/>
                </div>
            </Route>
            <Route exact path="/posts">
                <BlogPosts />
            </Route>
        </Switch>
    </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
