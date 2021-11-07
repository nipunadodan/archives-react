import React, {Component} from "react";
import Header from "../../../template/header/Header";
import Footer from "../../../template/footer/Footer";
import Hello from "./Hello";
import Statistics from "./Statistics";
import DashboardArticles from "./DashboardArticles";

class Dashboard extends Component{
    render() {
        return(
            <div className={'container mx-auto'}>
                <Header />
                <Hello />
                <Statistics />
                <DashboardArticles />
                <Footer />
            </div>
        )
    }
}

export default Dashboard