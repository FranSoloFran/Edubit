import React from 'react';


export const TradingBooks = () => {

    return (
        <div className="trading__books">
            {/* donde esta la plaza compradora y vendedora */}
            <section className="trading__books-sold">
                <h4>Venta </h4>
                <span>120.66</span>
                <span>134.22</span>
                <span>111.30</span>
                <span>33.05</span>
            </section>
            <hr />

            <section className="trading__books-buy">
                <h4>Compra</h4>
                <span>210.66</span>
                <span>114.22</span>
                <span>241.30</span>
                <span>113.05</span>
            </section>

            <br />
        </div>
    )
}