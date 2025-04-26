import React from "react";

const TopPage = () => {

    return(
        <>
            <div 
                className="hero min-h-screen"
                style={{ 
                    backgroundImage: `url('https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg')` 
            }}>
                <div 
                    className="hero-overlay bg-opacity-60"
                ></div>
                <div 
                    className="hero-content text-center text-neutral-content"
                >
                    <div 
                        className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Focus</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <a 
                            href="/tasks"
                            className="btn btn-primary">使ってみる</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TopPage;