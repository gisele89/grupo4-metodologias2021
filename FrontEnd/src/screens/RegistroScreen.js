import { getRegistrosMat } from "../api";
import { parseRequestUrl } from "../utils";

const RegistroScreen ={
    after_render:async()=>{

    const agregarKgs = document.getElementsByClassName('btn-ok')
    Array.from(agregarKgs).forEach(agregarKg => {
        agregarKg.addEventListener("click",  (e) =>{
            const peso = document.getElementById('addKgInput').value
            console.log(peso)
        })
    })

    const pesosAnteriores = document.getElementsByClassName('btn-undo')
    Array.from(pesosAnteriores).forEach(pesoAnterior => {
        pesoAnterior.addEventListener("click",  () =>{
            console.log('vuelve atras el pesaje')
        })
    })

    },
    render: async()=>{
        const request = parseRequestUrl();
        const materialesCart = await getRegistrosMat(request.id)
        console.log(materialesCart)
        return`
        <div class="container mt-5">
        <div class="col-lg-8 m-auto">
            <h3 class="text-secondary mb-5 mt-4">
                <img class="ps-1 pe-4" src="./src/media/flecha-izq.svg">Volver al listado
            </h3>

            ${materialesCart.map(material =>
            `
            <div class="shadow px-3 py-1 mb-4 bg-body rounded">
                <div class="d-flex justify-content-between align-items-center row">
                    <div class="text-center col-2">
                        <img src="${material.img}" alt="${material.img}" height="35px">
                    </div>
                    <div class="text-center col-2">
                        <h6 class="color-green mt-1 mb-0">Cant. acum.</h6>
                        <h4 class="color-green"><strong>${material.peso}</strong> Kg</h4>
                    </div>
                    <div class="text-center col-2">
                        <h6 class="color-green">Nombre</h6>
                        <h6 class="text-secondary">${material.nombre}</h6>
                    </div>
                  
                    <div class="col-4">
                        <input type="number" class="form-control form-control-sm addKgInput" id="addKgInput" placeholder="Agregar Kilogramos">
                    </div>
                    <div class="col-1">
                        <button class="img-btn btn-ok" id="btn-ok" data-bs-toggle="tooltip" data-bs-pyacement="top" title="Confirmar cambio">
                            <img src="./src/media/tick.svg" alt="boton de confirmar">
                        </button>
                    </div>
                    
                    <div class="col-1">
                        <button class="img-btn btn-undo" id="btn-undo" data-bs-toggle="tooltip" data-bs-pyacement="top" title="Deshacer cambio">
                            <img src="./src/media/rollback.svg" alt="boton de rollback">
                        </button>
                    </div>
                </div>
            </div>
            `
            ).join('\n')}


            
        </div>
    </div>
        `
    }
}

export default RegistroScreen;