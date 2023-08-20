import React, {Component} from "react";
import Button from "../../template/common/Button";
import BlogDate from "./BlogDate";

class BlogPosts extends Component{
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            articles: []
        }
    }
    componentDidMount() {
        const blog_api_base = process.env.REACT_APP_BLOG_API_BASE;
        fetch(blog_api_base+'wp-json/unicorn/v1/blog-posts/standard/4')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        articles: result
                    })
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                }
            )
    }

    render() {
        const {error, isLoaded, articles} = this.state;

        return (
            <section key={'blogposts'} className={'rounded-2xl bg-white p-8 md:p-16 mt-6'}>
                <h2 className={'text-6xl font-bold block mb-20'}><span className={'font-extralight'}>From</span> Blog</h2>
                {error
                    ? <div>Error: {error.message}</div>
                    : [
                        (!isLoaded
                                ? <div key={'loading'}>Loading...</div>
                                : [
                                    <div key={'blog'}>
                                        {articles.map(article => (
                                            <section className={'md:grid md:grid-cols-4 my-20 md:my-16'} key={article.slug}>
                                                <div className={'mb-4'}>
                                                    <BlogDate date={article.date} />
                                                </div>
                                                <article className={'col-span-2'}>
                                                    <h3
                                                    className={'font-medium text-lg md:text-2xl'}>{article.title.rendered}</h3>
                                                    <a className={'inline-block mt-3'} href={article.link} target={'_blank'} rel={'noreferrer'}>
                                                        <Button type={'button'} outline={false} text={'Read More'} size={'sm'} />
                                                    </a>
                                                </article>
                                                <div className={'md:text-center mt-3'}>

                                                </div>
                                            </section>
                                        ))}
                                        <div className={'text-center'}>
                                            <a target={'_blank'} href={'https://archives.edu.lk/blog'} rel={'noreferrer'}><Button type={'button'} outline={true} text={'More Blog Posts'}/></a>
                                        </div>
                                    </div>]
                        )
                    ]
                }
            </section>
        )
    }
}

export default BlogPosts