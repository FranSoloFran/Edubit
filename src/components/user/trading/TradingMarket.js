import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { LineChart } from '../../linechart/LineChart';



/*  const data = [
   { label: "S", x: 0, y: 0 },
   { label: "M", x: 1, y: 400 },
   { label: "T", x: 2, y: 300 },
   { label: "W", x: 3, y: 100 },
   { label: "TH", x: 4, y: 400 },
   { label: "F", x: 5, y: 500 },
   { label: "S", x: 6, y: 400 },
   { label: "S", x: 7, y: 1110 },
   { label: "M", x: 8, y: 600 },
   { label: "T", x: 9, y: 900 },
   { label: "W", x: 10, y: 200 },   
];  */



export const TradingMarket = () => {

    const priceCoin = useSelector(state => state.trading.priceCoin);
    const [data, setData] = useState({});

    useEffect(() => {        
        setData(priceCoin);
    }, [priceCoin]) 


    return (
        <>
            {data.length > 0 && (
                <div className="tradingMarket">
                    <LineChart
                        width={900}
                        height={550}
                        data={data}
                        horizontalGuides={10}
                        precision={2}
                        verticalGuides={1}
                    />
                </div>
            )}
        </>
    );
}