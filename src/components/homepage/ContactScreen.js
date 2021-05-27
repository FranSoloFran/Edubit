import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';


import { useForm } from '../../Hooks/useForm';
import { showError, showOk } from '../../reducers/msgboxReducer';
import { isEmail, isText } from '../../helper/verifyTextbox';




export const ContactScreen = () => {

    const dispatch = useDispatch();

    
    //estados del formulario
    const [formvalue, handleInputChange] = useForm({
        name: '',
        email: '',
        question: ''
    })
    const { name, email, question } = formvalue;


    //obtner el valor del formulario
    const handleRegister = (e) => {
        e.preventDefault();
        
        if(isFormValue()){
            dispatch(showOk("Ok", "The name format is not valid"));
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
       
        return true
    }


    return (
        <div className="auth__background">
            <div className="auth__main">
                <div className="auth__box-container">
                    <div className="auth__box-login">
                        <div className="auth__box-img auth__rectangle-upper"></div>
                        <h3 className="auth__title">Contacto</h3>
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
                                    <textarea                                        
                                        maxLength="100"
                                        name="question"
                                        onChange={handleInputChange}
                                        required
                                        value={question}
                                    />
                                    <label className="lbl">Consulta</label>
                                </div>


                                <button
                                    className="btn btn-primary btn-block mb-5"
                                    type="submit"
                                >
                                    Enviar
                            </button>

                            <Link
                                    to="/homepage"
                                    className="auth__link"
                                >
                                    Volver
                            </Link>
                            </div>
                        </form>

                        <div className="auth__rectangle-footer-register"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}