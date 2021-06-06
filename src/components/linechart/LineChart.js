import React from "react";
import React from "react";
// import Plot from "react-plotly.js";

import Plotly from "../../helper/plotlySmall";
import createPlotlyComponent from "react-plotly.js/factory";
const Plot = createPlotlyComponent(Plotly);

export function LineChart({ index, price, volumes }) {
  let data = {
    index: index ? index : [],
    price: price ? price : [],
    volumes: volumes ? volumes : [],
  };

  let trace_price = {
    name: "Precio ($)",
    x: data.index.map((t) => new Date(t)),
    y: data.price,
    xaxis: "x",
    yaxis: "y1",
    type: "scatter",
    mode: "lines+markers",
    marker: { color: "blue", size: 3 },
  };

  let trace_volumes = {
    name: "Volumen ($B)",
    x: data.index.map((t) => new Date(t)),
    y: data.volumes,
    xaxis: "x",
    yaxis: "y2",
    type: "bar",
    barmode: "relative",
    marker: {
      color: "rgb(49,130,189)",
      opacity: 0.7,
    },
  };

  let layout = {
    autosize: true,
    height: "100%",
    margin: {
      l: 50,
      r: 20,
      t: 35,
      pad: 3,
    },
    showlegend: false,
    xaxis: {
      domain: [1, 1],
      anchor: "y2",
    },
    yaxis: {
      domain: [0.1, 1],
      anchor: "x",
    },
    yaxis2: {
      showticklabels: false,
      domain: [0, 0.1],
      anchor: "x",
    },
    grid: {
      roworder: "bottom to top",
    },
  };

  let config = { responsive: true };
  let series = [trace_price, trace_volumes];

  return (
    <>
      <h2 style={{ textAlign: "center", padding: "5px" }}>
        Precio actual: ${" "}
        {parseFloat(data.price[data.price.length - 1]).toFixed(2)}
      </h2>
      <Plot
        id="chart"
        className="tradingMarket"
        data={series}
        layout={layout}
        config={config}
      />
    </>
  );
}

//https://itnext.io/how-to-make-a-basic-cryptocurrency-chart-app-with-near-real-time-updating-by-using-react-hooks-6a466529c2dc
//https://github.com/plotly/react-plotly.js/
