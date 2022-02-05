class LoginServicio {
    constructor(){
    }

    async logea(estado){
        return fetch("https://run.mocky.io/v3/87825819-645e-402c-8587-d2716f18069a",{
                method:"POST",
                mode:"cors",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(estado)
            })
            .then(response => {
                if(!response.ok){
                    throw new Error("HTTP error, status = " + response.status);
                }
                return response.json();
            })
            .then(json => {
                console.log("retorna resultado: ");
                console.log(json);

                return json["resultado"];
            })
            .catch(error => {
                console.log(error.message);
            });
    }
}
export default LoginServicio;