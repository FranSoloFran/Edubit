import React from 'react';
import { TradingCoins } from './TradingCoins';
import { TradingMarket } from './TradingMarket';
import { TradingUser } from './user/TradingUser';
import { TradingUserFormBuy } from './user/TradingUserFormBuy';
import { TradingUserFormSold } from './user/TradingUserFormSold';


export const TradingScreen = () => {


    return (
        <div className="trading__screen">
            <section className="trading__info">
                <TradingCoins />
                <TradingMarket />                
            </section>
            <section className="trading__user">
                <TradingUser />
            </section>
            
            <TradingUserFormBuy />
            <TradingUserFormSold />
        </div>
    )
}