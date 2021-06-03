import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { LineChart } from "../../linechart/LineChart";

export const TradingMarket = () => {
  const priceCoin = useSelector((state) => state.trading.priceCoin);
  const [data, setData] = useState({});

  useEffect(() => {
    setData(priceCoin);
  }, [priceCoin]);

  return (
    <>
      <div className="tradingMarket">
        <LineChart
          index={data.index}
          price={data.price}
          volumes={data.volumes}
        />
      </div>
    </>
  );
};
