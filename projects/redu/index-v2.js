const form = document.getElementsByTagName("form")[0];
const inputCodigo = document.getElementById("codigo");
const inputNombre = document.getElementById("nombre");
const inputCantidad = document.getElementById("cantidad");
const inputPrecio = document.getElementById("precio");

const tbody = document.getElementsByTagName("tbody")[0];

const preloadedState = {
    produto: {},
    productos: []
};


form.addEventListener("submit", onSubmit);

let indice = 0;
const reducer = (state, action) => {
    if (action.type == "producto-agregado") {
        indice++;
        let producto = action.payload;
        let codigo = indice;
        let total = producto.cantidad * producto.precio;
        
        return {
            ...state,
            productos: [
                ...state.productos,
                {
                    ...producto,
                    codigo,
                    total
                }
            ]
        };
    }

    return state;
};

function onSubmit(event){
    event.preventDefault();

    const data = new FormData(form);
    
    const values = Array.from(data.entries());

    const [frmCodigo, frmNombre, frmCantidad, frmPrecio, frmCategoria] = values;

    const codigo = frmCodigo[1];
    const nombre = frmNombre[1];
    const cantidad = parseFloat(frmCantidad[1]);
    const precio = parseFloat(frmPrecio[1]);
    const categoria = parseInt(frmCategoria[1]);

    if (codigo)
    {
        store.dispatch({
            type: "producto-modificado",
            payload: {
                codigo,
                nombre,
                cantidad,
                precio,
                categoria
            }
        });
    }
    else {
        store.dispatch({
            type: "producto-agregado",
            payload: {
                nombre,
                cantidad,
                precio,
                categoria
            }
        });
    }

    store.dispatch({
        type: "producto-seleccionado",
        payload: {
            codigo: null
        }
    });

    form.reset();
}

const store = Redux.createStore(reducer, preloadedState);

let latestState;
store.subscribe(() => {
    let currentState = store.getState();
    if(currentState != latestState){
        latestState = currentState;
        console.log("estado: ", currentState);
        renderTable(currentState.productos);
    }
});

function renderTable(productos){

    const filas = productos.map((item)=> {

        const tr = document.createElement("tr");

        tr.innerHTML = `
        <td>${item.codigo}</td>
        <td>${item.nombre}</td>
        <td>${item.cantidad}</td>
        <td>${item.precio}</td>
        <td>${item.total}</td>
        <td>${item.codigo}</td>
        <td>
            <div class="btn-group">
                <a title="editar" onclick="onEdit(event)">
                </a>
                <a title="eliminar" onclick="onDelete(event)">
                </a>
            </div>
        </td>
        `;
        
        /*eliminar.addEventListener("click", (event) => {
            event.preventDefault();
            store.dispatch({
                type: "producto-eliminado",
                payload: {
                    codigo: item.codigo
                }
            });
        });

        editar.addEventListener("click", (event) => {
            event.preventDefault();
            store.dispatch({
                type: "producto-seleccionado",
                payload: {
                    codigo: item.codigo
                }
            });
        });*/

        return tr;
    });

    tbody.innerHTML = "";

    filas.forEach((tr) => {
        tbody.appendChild(tr);
    });

}
/*
store.dispatch({
    type: "producto-agregado",
    payload: {
        id: 1,
        nombre: "prueba",
        precio: 2,
        cantidad: 3,
        codigo: 2
    }
});*/