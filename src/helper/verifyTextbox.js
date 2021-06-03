


export const EqualText = (text1, text2) =>{
    if(text1===text2){
        return true
    }
    else{
        return false
    }
}



export const isEmail = (text) =>{
    const emailRegExp = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    
    if(emailRegExp.test(text)){
		return true
	}
	else {
        return false
	}
}



export const isText = (text) =>{
    const textegExp = /^[A-Z ]+$/i;
    
    if(textegExp.test(text.trim())){
        return true
	}
	else {
        return false
	}
}




export const isNumber = (text) =>{
    const textegExp = /^[0-9]+$/i;

     
    if(textegExp.test(text.trim())){
		return true
	}
	else {
        return false
	}
}





export const formatToCurrency = (amount) => {
    return (amount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'); 
}