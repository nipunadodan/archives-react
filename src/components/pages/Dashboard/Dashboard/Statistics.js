import React from "react";

//TODO: Practice useEffect and useState by fetching statistics here and displaying them. Remember to trigger useEffect only once.
export default function Statistics(){
    return (
        <div className="md:rounded-2xl bg-white px-8 md:px-16 py-8 md:py-14 mt-6">
            <h2 className={'text-2xl md:text-4xl mt-2 font-black leading-8 md:leading-10'}>Statistics</h2>
            <div className={'grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-10 mt-6 mb-3'}>
                <div className={'bg-archives rounded-2xl text-white text-center py-12 px-6'}>
                    <div className={'md:text-6xl text-2xl font-bold flex justify-center items-center'}>0</div>
                    <div className={'mt-3 text-xs md:text-base'}><i className={'la la-heart  pr-3'} />Highlighted Articles*</div>
                </div>
                <div className={'bg-gray-100 rounded-2xl text-gray-800 text-center py-12 px-6'}>
                    <div className={'md:text-6xl text-2xl font-bold flex justify-center items-center'}>8</div>
                    <div className={'mt-3 text-xs md:text-base'}><i className={'la la-paper-plane transform -rotate-45 origin-center'} /><span className={'ml-3'}>Published
                        Articles</span></div>
                </div>
                <div className={'bg-gray-100 rounded-2xl text-gray-800 text-center py-12 px-6'}>
                    <div className={'md:text-6xl text-2xl font-bold flex justify-center items-center'}>3</div>
                    <div className={'mt-3 text-xs md:text-base'}><i className={'la la-hourglass-half  pr-3'} />Pending Articles</div>
                </div>
                <div className={'bg-gray-100 rounded-2xl text-gray-800 text-center py-12 px-6'}>
                    <div className={'md:text-6xl text-2xl font-bold flex justify-center items-center'}>1,000</div>
                    <div className={'mt-3 text-xs md:text-base'}><i className={'la la-bookmark  pr-3'} />Article Views**</div>
                </div>
            </div>
            <p className={'text-xs md:my-4 my-6 text-gray-600'}>* Highlighted articles are picked by admins and you may request your article to be featured as a highlighted article for a month for as low as LKR 250.</p>
            <p className={'text-xs md:my-4 my-6 text-gray-600'}>** Views are not audited except those are of the logged-in author's views. Logged-in author views will be only counted once. These numbers are for your own reference only.</p>
        </div>
    )
}