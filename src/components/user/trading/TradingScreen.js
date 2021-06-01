import React from 'react';
import { TradingBooks } from './TradingBooks';
import { TradingCoins } from './TradingCoins';
import { TradingMarket } from './TradingMarket';
import { TradingUser } from './TradingUser';


export const TradingScreen = () => {


    return (
        <div className="trading__screen">
            <section className="trading__info">
                <TradingCoins />
                <TradingMarket />
                <TradingBooks />
            </section>

            <section className="trading__user">
                <TradingUser />
            </section>
        </div>
    )
}