

export const calculateBidAsk = (money) => {

    let data = [];

    let bid = []; //son para las compras
    let ask = []; //son para las ventas

    let min = (money - (money * 0.2) / 100); //obtiene los mínimos de compra
    let max = (money + (money * 0.2) / 100); //obtiene los máximos de venta

    let val = 0

    while (val < 4) {
        let number = parseFloat((Math.random() * (max - money + 1) + money).toFixed(4));
        if(!bid.some(item => JSON.stringify(item) === JSON.stringify(number))){
            bid.push(number);
            val++
        }       
    }

    val = 0

    while (val < 4) {
        let number = parseFloat((Math.random() * (money - min + 1) + min).toFixed(4));
        if(!ask.some(item => JSON.stringify(item) === JSON.stringify(number))){
            ask.push(number);
            val++
        } 
    }

    data.push({
        compra: bid.sort().reverse(),
        venta: ask.sort()
    })


    return data;
}


