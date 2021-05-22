import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeMsgBox } from '../../reducers/msgboxReducer';


export const MsgBox = () => {

    const { title, msg, className, show } = useSelector(state => state.msg);
    const dispatch = useDispatch();

    const handleButtonClick = () =>{
        dispatch(closeMsgBox());
    }

    return (

        (show)
            ? (<div className="msgbox__container">
                <div className="msgbox__container-background"></div>

                <section className="msgbox__section-card">
                    <div className="msgbox__card">
                        <div className="msgbox__card-img">
                            <span className={className}></span>
                        </div>
                        <div className="msgbox__card-title">
                            {title}
                        </div>
                        <div className="msgbox__card-boyd">
                            {msg}
                        </div>
                        <button 
                            className="msgbox__card-button"
                            onClick={handleButtonClick}
                        >
                            Aceptar
                        </button>
                    </div>
                </section>
            </div>)
            : (<></>)
    )
}