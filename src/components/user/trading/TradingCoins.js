import React from 'react';


export const TradingCoins = () => {

    return (
        <div className="trading__coins">
            {/* las monedas que podes ver en el mercado, porner un máximo de 5 */}
            <section className="trading__coins-container">
                <button className="trading__coins-button">
                    <span className="icon-plus"></span>
                </button>

                <div className="trading__coins-group">
                    <div className="trading__coins-name trading__coins-name-active">
                        <img src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" alt="" />
                        <section className="trading__coins-name-s1">
                            <span>Bitcoin</span>
                            <span>222.32</span>
                        </section>
                        <span>x</span>
                    </div>
                    <div className="trading__coins-name">
                        <img src="https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880" alt="" />
                        <section className="trading__coins-name-s1">
                            <span>Ethereum</span>
                            <span>150.00</span>
                        </section>
                        <span>x</span>
                    </div>
                    <div className="trading__coins-name">
                        <img src="https://assets.coingecko.com/coins/images/825/large/binance-coin-logo.png?1547034615" alt="" />
                        <section className="trading__coins-name-s1">
                            <span>Binance Coin</span>
                            <span>1012.20</span>
                        </section>
                        <span>x</span>
                    </div>
                    <div className="trading__coins-name">
                        <img src="https://assets.coingecko.com/coins/images/325/large/Tether-logo.png?1598003707" alt="" />
                        <section className="trading__coins-name-s1">
                            <span>Tether</span>
                            <span>40.11</span>
                        </section>
                        <span>x</span>
                    </div>

                </div>
            </section>

        </div>
    )
}