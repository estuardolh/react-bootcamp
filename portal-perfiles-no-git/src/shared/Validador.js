class Validador {
    validaCampos(datosInput){
        let mensajesError = "";
        if(!datosInput.usuario){
            mensajesError += "Por favor ingrese nombre de Usuario.\n"
        }

        if(!datosInput.contrasenia){
            mensajesError += "Por favor ingrese contrasenia de Usuario.\n"
        }

        if(mensajesError.length == 0){
            return true;
        }else{
            alert(mensajesError);
            return false;
        }
    }
}

export default Validador;