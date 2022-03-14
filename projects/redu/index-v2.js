
const preloadedState = {
    produto: {},
    productos:[]
};

const reducer = (state, action) => {
    if(action.type == "producto-agregado"){
        return {...state, productos: [...state.productos, action.payload]}
    }

    return state;
};

const store = Redux.createStore(reducer, preloadedState);

store.subscribe(()=>{
    console.log("subscribe ejecutado");
});

store.dispatch({
    type: "producto-agregado",
    payload: {
        id: 1,
        nombre: "prueba"
    }
});