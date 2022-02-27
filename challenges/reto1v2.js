const numeroLetras = [
    ["a","b","c"], // indice 0, digito 2
    ["d","e","f"], 
    ["g","h","i"], 
    ["j","k","l"], 
    ["m","n","o"], 
    ["p","q","r","s"], 
    ["t","v","u"], 
    ["w","x","y","z"] // indice 7, digito 9
];

let imprimirSalida = (salida) => console.log("Salida: [" + salida.toString() + "]");

function combinaciones(numeros){
    let resultadoFinal = [];

    for(let i = 0; i < numeros.length; i++){
        let intNumero = parseInt(numeros.charAt(i));

        if(intNumero < 2 || intNumero > 9) continue;

        let letras = numeroLetras[intNumero - 2];
        if(resultadoFinal.length > 0){
            let resultadoTemporal = [];
            for(let j = 0; j < resultadoFinal.length; j++)
                for(let k = 0; k < letras.length; k++)
                    resultadoTemporal.push(resultadoFinal[j] + letras[k]);
            
            resultadoFinal = resultadoTemporal;
        }else{
            resultadoFinal = letras;
        }
    }

    return resultadoFinal;
}

imprimirSalida(combinaciones("23"));
imprimirSalida(combinaciones(""));
imprimirSalida(combinaciones("2"));