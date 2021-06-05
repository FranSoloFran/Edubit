import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { formatToCurrency } from '../../../../helper/verifyTextbox';


import { hideSoldSHowDisp, savesSold } from '../../../../reducers/tradingReducer';


export const TradingUserFormSold = () => {


    const dispatch = useDispatch();
    const form = useSelector(state => state.trading.showFormSold);
    const money = useSelector(state => state.trading.money);
    const portafolio = useSelector(state => state.trading.coinPortafolio);
    const venta = useSelector(state => state.trading.pricePriceSold);
    const marketCoins = useSelector(state => state.trading.marketCoins);

    const [total, setTotal] = useState(0);
    const [cantidad, setCantidad] = useState(0);
    const [cantidadRestante, setCantidadRestante] = useState(0);
    const [plata, setPlata] = useState(0);


    useEffect(() => {
        if (form.length > 0 && form[0].show) {
            const cant = portafolio.find((item) => item.idcoin === form[0].id);
            setCantidad(cant.cantidad); 
            setCantidadRestante(cant.cantidad);
            setPlata(money);
        }
    }, [form, money])


    const handleChange = (e) => {
        if(parseFloat(e.target.value)<0){
            setTotal(0);
            setPlata(parseFloat(money));
            setCantidadRestante(cantidad);
        }
        else if(parseFloat(e.target.value) < cantidad){
            setTotal(e.target.value);
            setPlata(parseFloat(money) + parseFloat(e.target.value)*parseFloat(venta[0].venta[0]));
            setCantidadRestante(parseFloat(cantidad)- parseFloat(e.target.value));
        }
        else{
            setTotal(cantidad);
            setPlata(parseFloat(money) + parseFloat(cantidad)*parseFloat(venta[0].venta[0]));
            setCantidadRestante(0);
        }
    }


    const handleClickHide = (e) => {
        e.preventDefault();
        setTotal(0);
        dispatch(hideSoldSHowDisp());
    }


    const handleClickSold = (e) => {
        e.preventDefault();
        const img = marketCoins.filter(item => item.id === form[0].id);
        dispatch(savesSold(form[0].id, cantidadRestante, venta[0].venta[0], plata,img[0].image,(cantidadRestante === 0 ? true : false)));
        setTotal(0);
        dispatch(hideSoldSHowDisp());
    }



    return (
        (form.length > 0 && form[0].show)
            ?
            <>
                <div className="trading__user-form-background"></div>

                <div className="trading__user-form">
                    <section className="trading__user-form-container">
                        <section className="trading__user-form-title">
                            <h3>OPERACIONES DE VENTA</h3>
                            <p>Precio de venta: USD {formatToCurrency(venta[0].venta[0])}</p>
                            <p>Total de dinero: USD {formatToCurrency(plata)}</p>
                            <p>Cantidad disponible: {formatToCurrency(cantidad)}</p>
                            <p>Cantidad restante: {formatToCurrency(cantidadRestante)}</p>
                        </section>
                        <form className="trading__user-form-form" onSubmit={handleClickSold}>

                            <div className="div-group-input">
                                <input
                                    autoComplete="off"
                                    className="input"
                                    name="coin"
                                    readOnly
                                    type="text"
                                    value={form[0].id}
                                />
                            </div>


                            <div className="div-group-input">
                                <input
                                    autoComplete="off"
                                    className="input"
                                    name="total"
                                    onChange={handleChange}
                                    required
                                    type="number"                                    
                                    value={total}
                                />
                                <label className="lbl">Total a vender</label>
                            </div>

                            <section className="trading__user-form-container-buttons">
                                <button type="submit" className="trading__user-form-buttons trading__user-form-btnbuy">vender</button>
                                <button className="trading__user-form-buttons trading__user-form-btnexit" onClick={handleClickHide}>cancelar</button>
                            </section>
                        </form>
                    </section>
                </div>
            </>

            : <></>
    )
}
