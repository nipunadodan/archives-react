import React from "react";
import PendingArticles from "./PendingArticles";
import PublishedArticles from "./PublishedArticles";

export default function DashboardArticles(){
    return (
        <div className={'md:grid md:grid-cols-2 gap-7'}>
            <PendingArticles />
            <PublishedArticles />
        </div>
    )
}