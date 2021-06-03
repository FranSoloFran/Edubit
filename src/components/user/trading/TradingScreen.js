import React from 'react';
import { TradingBooks } from './TradingBooks';
import { TradingCoins } from './TradingCoins';
import { TradingMarket } from './TradingMarket';
import { TradingUser } from './user/TradingUser';
import { TradingUserForm } from './user/TradingUserForm';


export const TradingScreen = () => {


    return (
        <div className="trading__screen">
            <section className="trading__info">
                <TradingCoins />
                <TradingMarket />
                <TradingBooks />
            </section>

            <TradingUserForm />

            <section className="trading__user">
                <TradingUser />
            </section>
        </div>
    )
}