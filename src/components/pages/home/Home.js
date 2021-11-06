import React from 'react';

import Header from "../../template/header/Header";
import Footer from "../../template/footer/Footer";
import Hero from "./Hero";
import Advert from "./Advert";
import PostHighlights from "../Highlights/PostHighlights";
import AdvertSecond from "./AdvertSecond";
import BlogPosts from "../Blog/BlogPosts";

function Home() {
    window.scrollTo(0, 0)
    return (
        <div className="container mx-auto">
            <Header />
            <Hero />
            <AdvertSecond />
            <PostHighlights />
            <Advert />
            <BlogPosts />
            <Footer />
        </div>
    );
}

export default Home;
