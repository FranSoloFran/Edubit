export const calculateBidAsk = (money) => {
  let data = [];

  let bid = []; //son para las compras
  let ask = []; //son para las ventas

  let min = money - (money * 0.325) / 100; //obtiene los mínimos de compra
  let max = money + (money * 0.325) / 100; //obtiene los máximos de venta

  bid.push(parseFloat(max).toFixed(4));
  ask.push(parseFloat(min).toFixed(4));
  //bid.push(parseFloat((Math.random() * (max - money + 1) + money).toFixed(4)));
  //ask.push(parseFloat((Math.random() * (money - min + 1) + min).toFixed(4)));

  data.push({
    compra: bid,
    venta: ask,
  });

  return data;
};
