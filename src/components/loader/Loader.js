import React from 'react';
import { useSelector } from 'react-redux';


export const Loader = () => {

    const { loading } = useSelector(state => state.loading);

    return (
        (loading)
            ? (<>
                <div className="loader__container-background"></div>
                <div className="loader__container">


                    <section className="loader__section-load">
                        <div className="loader__div-ball dot1"></div>
                        <div className="loader__div-ball dot2"></div>
                        <div className="loader__div-ball dot3"></div>
                        <div className="loader__div-ball dot4"></div>
                        <div className="loader__div-ball dot5"></div>
                    </section>
                </div>
            </>)
            : <></>
    )
}