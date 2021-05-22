import { useState } from "react";


export const useForm = (initialState = {}) => {

    const [value, setValues] = useState(initialState);

    const inputReset = (newForm = initialState) =>{
        setValues(newForm);
    }

    const handleInputChange = (e) => {
        setValues({
            ...value,
            [e.target.name] : e.target.value
        })
    }


    return [value, handleInputChange, inputReset];
}
