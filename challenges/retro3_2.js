function estanque(coordenadas){
    var coordenadasMapas = [];
    
    for(var coo_i = 0; coo_i < coordenadas.length; coo_i++){
        coordenadasMapas.push({indice:coo_i, valor: coordenadas[coo_i], area: ((coo_i+1)  * coordenadas[coo_i])});
    }
    
    var coordenadasMapasOrdenadas = coordenadasMapas.sort((a,b) => { b.area - a.area}).reverse();
    console.log(coordenadasMapasOrdenadas);

    if(coordenadasMapasOrdenadas.length >= 2){

        return coordenadasMapasOrdenadas[1].area;
    }

    return 0;
}

if(estanque([1,8,6,2,5,4,8,3,7]) == 49) console.log("OK 1/4");
if(estanque([1,1]) == 1) console.log("OK 2/4");
if(estanque([4,3,2,1,4]) == 16) console.log("OK 3/4");
if(estanque([1,2,1]) == 2) console.log("OK 4/4");