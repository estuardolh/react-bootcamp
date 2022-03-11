function pali(entero){
    var strEntero = entero + "";
    
    var centro = ( strEntero.length % 2 == 0 ? strEntero.length / 2 : Math.trunc(strEntero.length / 2) );
    for(var i = 0; i < strEntero.length ; i++){
        if(strEntero[i] != strEntero[strEntero.length - i - 1])
            return false;

        if(i == centro - 1)
            break;
    }
    return true;
}
