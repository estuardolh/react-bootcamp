function sumas(numeros) {
	const resultado = []

	const numerosOrdenadoc = numeros.sort();

	for (let i = 0; i < numerosOrdenadoc.length - 2; i++) {
		if (numerosOrdenadoc[i] >= 1)
            break;

		if (numerosOrdenadoc[i] == numerosOrdenadoc[i - 1] && i >= 1)
            continue;

        let k = numerosOrdenadoc.length - 1;
		let j = i + 1;
		
		while (j < k) {
			let suma = numerosOrdenadoc[i] + numerosOrdenadoc[j] + numerosOrdenadoc[k]

			if (suma == 0) {
				resultado.push([numerosOrdenadoc[i], numerosOrdenadoc[j], numerosOrdenadoc[k]])

				while (numerosOrdenadoc[j] == numerosOrdenadoc[j + 1])
                    j++;
                j++;
                
				while (numerosOrdenadoc[k] == numerosOrdenadoc[k - 1])
                    k--;
				k--;
			} else if (suma < 0) {
				j++;
			} else {
				k--;
			}
		}
	}
	return resultado;
};
numeros = [-1,0,1,2,-1,-4];
console.log("Salida: " + JSON.stringify(sumas(numeros)));