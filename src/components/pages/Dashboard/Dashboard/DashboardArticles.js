import React, {useEffect, useState} from "react";
import PendingArticles from "./PendingArticles";
import PublishedArticles from "./PublishedArticles";

export default function DashboardArticles(){
    const [state, setState] = useState({
        isLoaded:false,
        articles:[]
    })
    useEffect(() => {
        const api_base = process.env.REACT_APP_API_BASE;
        const params = {
            limit:30,
            status:0,
            user:1
        }
        fetch(api_base+'articles-get', {
            method:'post',
            body:JSON.stringify(params)
        })
            .then(res => res.json())
            .then((result) => {
                setState({
                    isLoaded:true,
                    articles:result.data
                })
            })
    },[])
    return (
        <div className={'md:grid md:grid-cols-2 gap-7'}>
            <PendingArticles articles={state.articles} isLoaded={state.isLoaded} />
            <PublishedArticles articles={state.articles} isLoaded={state.isLoaded} />
        </div>
    )
}