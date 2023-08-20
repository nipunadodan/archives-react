import React, {Component} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/pages/home/Home";
import Article from "./components/pages/Article/Article";
import Highlights from "./components/pages/Highlights/Highlights";
import BlogPosts from "./components/pages/Blog/BlogPosts";
import Login from "./components/pages/User/Login/Login";
import PrintArticle from "./components/pages/Print/PrintArticle";
import ArticleAdd from "./components/pages/Dashboard/ArticleAdd/ArticleAdd";
import ArticleEdit from "./components/pages/Dashboard/ArticleEdit/ArticleEdit";
import NotFound from "./components/pages/NotFound/NotFound";
import Dashboard from "./components/pages/Dashboard/Dashboard/Dashboard";
import Logout from "./components/pages/User/Logout/Logout";
import PrivateRoute from "./Helpers/PrivateRoute";
import Locked from "./components/pages/NotFound/Locked";
import Register from "./components/pages/User/Register/Register";

class App extends Component{
    state = {
        token : false
    }

    componentDidMount() {
        if(localStorage.getItem('archives_login') !== null){
            this.setState({
                token: JSON.parse(localStorage.getItem('archives_login'))
            })
        }
    }

    render() {
        /*if(!this.state.token) {
            return <Router basename={'archives'}>
                    <User tokenCallback={this.handleTokenCallback} />
                </Router>
        }*/
        return(
            <Router basename={''}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/logout" element={<Logout />} />
                    <Route path="/article/:id" element={<Article />} />
                    <Route path="/print/:id" element={<PrintArticle />} />
                    <Route path="/articles/:option" element={<Highlights />} />
                    <Route path="/posts" element={<BlogPosts />} />
                    <Route path="/add-new" element={
                        <PrivateRoute roles={["ROLE_USER"]} minlevel={4}>
                            <ArticleAdd />
                        </PrivateRoute>
                    } />
                    <Route path="/dashboard" element={
                        <PrivateRoute roles={["ROLE_USER"]} minlevel={4}>
                            <Dashboard />
                        </PrivateRoute>
                    } />
                    <Route path="/dashboard/edit/:id" element={
                        <PrivateRoute roles={['ROLE_USER','ROLE_ADMIN','ROLE_SUPER_ADMIN']} minlevel={4}>
                            <ArticleEdit />
                        </PrivateRoute>
                    } />
                    <Route path="/permission" element={<Locked />} />
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