import React from 'react';


export const TradingUser = () => {
    return (
        <aside className="trading__user-menu">
            {/* es donde el usuario puede vender, comprar y poner los stops de venta y compra*/}
            <section className="trading__user-menu-title">
                <h3>OPERACIONES</h3>
                <p>Dinero disponible: USD 333,75</p>
            </section>

            <section className="trading__user-menu-buttons">
                <button className="trading__user-menu-buy">comprar</button>
            </section>

            <section className="trading__user-menu-container-table">
                <p className="trading__user-menu-table-title">Portafolios</p>
                <ul className="trading__user-menu-table">
                    <li>
                        <section className="trading__user-menu-table-row">
                            <img src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" alt="" />
                            <span>Bitcoin</span>
                            <span>222.32</span>
                            <button>ver</button> 
                        </section>                       
                    </li>
                    <li>
                        <section className="trading__user-menu-table-row">
                            <img src="https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880" alt="" />
                            <span>Ethereum</span>
                            <span>150.00</span>
                            <button>ver</button> 
                        </section>                     
                    </li>
                    <li>
                        <section className="trading__user-menu-table-row">
                            <img src="https://assets.coingecko.com/coins/images/325/large/Tether-logo.png?1598003707" alt="" />
                            <span>Tether</span>
                            <span>40.11</span>
                            <button>ver</button> 
                        </section>                       
                    </li>
                    <li>
                        <section className="trading__user-menu-table-row">
                            <img src="https://assets.coingecko.com/coins/images/825/large/binance-coin-logo.png?1547034615" alt="" />
                            <span>Binance Coin</span>
                            <span>1012.20</span>
                            <button>ver</button> 
                        </section>                       
                    </li>
                    <li>
                        <section className="trading__user-menu-table-row">
                            <img src="https://assets.coingecko.com/coins/images/825/large/binance-coin-logo.png?1547034615" alt="" />
                            <span>Binance Coin</span>
                            <span>1012.20</span>
                            <button>ver</button> 
                        </section>                        
                    </li>
                    <li>
                        <section className="trading__user-menu-table-row">
                            <img src="https://assets.coingecko.com/coins/images/825/large/binance-coin-logo.png?1547034615" alt="" />
                            <span>Binance Coin</span>
                            <span>1012.20</span>
                            <button>ver</button> 
                        </section>                       
                    </li>
                    <li>
                        <section className="trading__user-menu-table-row ">
                            <img src="https://assets.coingecko.com/coins/images/825/large/binance-coin-logo.png?1547034615" alt="" />
                            <span>Binance Coin</span>
                            <span>1012.20</span>
                            <button>ver</button> 
                        </section>                      
                    </li>
                    <li>
                        <section className="trading__user-menu-table-row">
                            <img src="https://assets.coingecko.com/coins/images/825/large/binance-coin-logo.png?1547034615" alt="" />
                            <span>Binance Coin</span>
                            <span>1012.20</span>
                            <button>ver</button> 
                        </section>                        
                    </li>
                </ul>
            </section>           
        </aside>
    )
}