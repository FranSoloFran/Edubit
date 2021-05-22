import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';


import { useForm } from '../../Hooks/useForm';
import { showError } from '../../reducers/msgboxReducer';
import { EqualText, isEmail, isText } from '../../helper/verifyTextbox';
import { startRegisterWithEmail } from '../../reducers/authReducer';



export const RegisterScreen = () => {

    const dispatch = useDispatch();

    //estados de los inputs
    const [visible, setVisible] = useState("eye-blocked")
    const [typeInput, setTypeInput] = useState("password")


    //estados del formulario
    const [formvalue, handleInputChange] = useForm({
        name: '',
        email: '',
        password: '',
        password2: ''
    })
    const { name, email, password, password2 } = formvalue;


    //mostrar password u ocultarlo
    const handleSpanChange = () => {
        if (visible === "eye-blocked") {
            setVisible("eye");
            setTypeInput("text");
        }
        else {
            setVisible("eye-blocked");
            setTypeInput("password");
        }
    }


    //obtner el valor del formulario
    const handleRegister = (e) => {
        e.preventDefault();
        
        if(isFormValue()){
            dispatch(startRegisterWithEmail(email,password,name));
        }
    }


    const isFormValue = () =>{
       
        if(!isText(name)){
            dispatch(showError("Error", "The name format is not valid"));
            return false;
        }
        else if(!isEmail(email)){
            dispatch(showError("Error",  "The email format is not valid"));
            return false;
        }
        else if(!EqualText(password, password2)){
            dispatch(showError("Error",  "The password and its verification do not match"));
            return false;
        }
        else if(password.trim().length < 6){
            dispatch(showError("Error",  "Password should be at least 6 characters"));
            return false;
        }

        return true
    }


    return (
        <div className="auth__background">
            <div className="auth__main">
                <div className="auth__box-container">
                    <div className="auth__box-login">
                        <div className="auth__box-img auth__rectangle-upper"></div>
                        <h3 className="auth__title">Registrar</h3>
                        <form onSubmit={handleRegister}>

                            <div className="divinputs">
                                <div className="div-group-input">
                                    <input
                                        autoComplete="off"
                                        className="input"
                                        name="name"
                                        onChange={handleInputChange}
                                        required
                                        type="text"
                                        value={name}
                                    />
                                    <label className="lbl">Nombre</label>
                                </div>


                                <div className="div-group-input">
                                    <input
                                        autoComplete="off"
                                        className="input"
                                        name="email"
                                        onChange={handleInputChange}
                                        required
                                        type="text"
                                        value={email}
                                    />
                                    <label className="lbl">Email</label>
                                </div>


                                <div className="div-group-input">
                                    <input
                                        className="input"
                                        maxLength="25"
                                        name="password"
                                        onChange={handleInputChange}
                                        required
                                        type={typeInput}
                                        value={password}
                                    />
                                    <label className="lbl">Password</label>
                                    <span className={`icon-${visible} auth__eye`} onClick={handleSpanChange}></span>
                                </div>

                                <div className="div-group-input">
                                    <input
                                        className="input"
                                        maxLength="25"
                                        name="password2"
                                        onChange={handleInputChange}
                                        required
                                        type="password"
                                        value={password2}
                                    />
                                    <label className="lbl">Repetir</label>
                                </div>

                                <button
                                    className="btn btn-primary btn-block"
                                    type="submit"
                                >
                                    Registrar
                            </button>

                            <Link
                                    to="/homepage/login"
                                    className="auth__link"
                                >
                                    Ya tienes cuenta
                            </Link>
                            </div>
                        </form>

                        <div className="auth__rectangle-footer"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}