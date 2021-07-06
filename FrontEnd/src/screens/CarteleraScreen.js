
const CarteleraScreen ={
    after_render:()=>{},
    render:() =>{
        return `
        <div class="container mt-5">
        <form class="col-lg-8 m-auto">
            <div class="mb-4">
                <select class="form-select form-select-sm" aria-label="Franja horaria" id="filterSelect" aria-describedby="volumeHelp">
                    <option selected disabled>Filtrar por:</option>
                    <option value="1">Más recientes</option>
                    <option value="2">Apellido de cartonero</option>
                    <option value="3">Peso de materiales</option>
                </select>
            </div>
            <div class="shadow px-3 pt-2 pb-1 mb-3 bg-body rounded">
                <div class="d-flex justify-content-between align-items-center row">
                    <div class="text-center col-2">
                        <h6 class="color-green">Fecha</h6>
                        <h6 class="text-secondary">01/01/2021</h6>
                    </div>
                    <div class="text-center col-2">
                        <h6 class="color-green">Nombre</h6>
                        <h6 class="text-secondary">Juan Pérez</h6>
                    </div>
                    <div class="text-center col-2">
                        <h6 class="color-green">Horario</h6>
                        <h6 class="text-secondary">9 a 13hs</h6>
                    </div>
                    <div class="text-center col-2">
                        <h6 class="color-green">Teléfono</h6>
                        <h6 class="text-secondary">154545560</h6>
                    </div>
                    <div class="text-center col-2">
                        <h6 class="color-green">Dirección</h6>
                        <h6 class="text-secondary">Mitre 475</h6>
                    </div>
                    <div class="col-2 d-inline-flex justify-content-around">
                        <h1 class="color-green m-0"><strong>20 </strong></h1>
                        <img src="./src/media/pesa.svg" alt="boton de rollback">
                    </div>
                </div>
            </div>
            <div class="shadow px-3 pt-2 pb-1 mb-3 bg-body rounded">
                <div class="d-flex justify-content-between align-items-center row">
                    <div class="text-center col-2">
                        <h6 class="color-green">Fecha</h6>
                        <h6 class="text-secondary">01/01/2021</h6>
                    </div>
                    <div class="text-center col-2">
                        <h6 class="color-green">Nombre</h6>
                        <h6 class="text-secondary">Juan Pérez</h6>
                    </div>
                    <div class="text-center col-2">
                        <h6 class="color-green">Horario</h6>
                        <h6 class="text-secondary">9 a 13hs</h6>
                    </div>
                    <div class="text-center col-2">
                        <h6 class="color-green">Teléfono</h6>
                        <h6 class="text-secondary">154545560</h6>
                    </div>
                    <div class="text-center col-2">
                        <h6 class="color-green">Dirección</h6>
                        <h6 class="text-secondary">Mitre 475</h6>
                    </div>
                    <div class="col-2 d-inline-flex justify-content-around">
                        <h1 class="color-green m-0"><strong>20 </strong></h1>
                        <img src="./src/media/pesa.svg" alt="boton de rollback">
                    </div>
                </div>
            </div>
            <div class="shadow px-3 pt-2 pb-1 mb-3 bg-body rounded">
                <div class="d-flex justify-content-between align-items-center row">
                    <div class="text-center col-2">
                        <h6 class="color-green">Fecha</h6>
                        <h6 class="text-secondary">01/01/2021</h6>
                    </div>
                    <div class="text-center col-2">
                        <h6 class="color-green">Nombre</h6>
                        <h6 class="text-secondary">Juan Pérez</h6>
                    </div>
                    <div class="text-center col-2">
                        <h6 class="color-green">Horario</h6>
                        <h6 class="text-secondary">9 a 13hs</h6>
                    </div>
                    <div class="text-center col-2">
                        <h6 class="color-green">Teléfono</h6>
                        <h6 class="text-secondary">154545560</h6>
                    </div>
                    <div class="text-center col-2">
                        <h6 class="color-green">Dirección</h6>
                        <h6 class="text-secondary">Mitre 475</h6>
                    </div>
                    <div class="col-2 d-inline-flex justify-content-around">
                        <h1 class="color-green m-0"><strong>20 </strong></h1>
                        <img src="./src/media/pesa.svg" alt="boton de rollback">
                    </div>
                </div>
            </div>
            <div class="shadow px-3 pt-2 pb-1 mb-3 bg-body rounded">
                <div class="d-flex justify-content-between align-items-center row">
                    <div class="text-center col-2">
                        <h6 class="color-green">Fecha</h6>
                        <h6 class="text-secondary">01/01/2021</h6>
                    </div>
                    <div class="text-center col-2">
                        <h6 class="color-green">Nombre</h6>
                        <h6 class="text-secondary">Juan Pérez</h6>
                    </div>
                    <div class="text-center col-2">
                        <h6 class="color-green">Horario</h6>
                        <h6 class="text-secondary">9 a 13hs</h6>
                    </div>
                    <div class="text-center col-2">
                        <h6 class="color-green">Teléfono</h6>
                        <h6 class="text-secondary">154545560</h6>
                    </div>
                    <div class="text-center col-2">
                        <h6 class="color-green">Dirección</h6>
                        <h6 class="text-secondary">Mitre 475</h6>
                    </div>
                    <div class="col-2 d-inline-flex justify-content-around">
                        <h1 class="color-green m-0"><strong>20 </strong></h1>
                        <img src="./src/media/pesa.svg" alt="boton de rollback">
                    </div>
                </div>
            </div>
            <div class="shadow px-3 pt-2 pb-1 mb-3 bg-body rounded">
                <div class="d-flex justify-content-between align-items-center row">
                    <div class="text-center col-2">
                        <h6 class="color-green">Fecha</h6>
                        <h6 class="text-secondary">01/01/2021</h6>
                    </div>
                    <div class="text-center col-2">
                        <h6 class="color-green">Nombre</h6>
                        <h6 class="text-secondary">Juan Pérez</h6>
                    </div>
                    <div class="text-center col-2">
                        <h6 class="color-green">Horario</h6>
                        <h6 class="text-secondary">9 a 13hs</h6>
                    </div>
                    <div class="text-center col-2">
                        <h6 class="color-green">Teléfono</h6>
                        <h6 class="text-secondary">154545560</h6>
                    </div>
                    <div class="text-center col-2">
                        <h6 class="color-green">Dirección</h6>
                        <h6 class="text-secondary">Mitre 475</h6>
                    </div>
                    <div class="col-2 d-inline-flex justify-content-around">
                        <h1 class="color-green m-0"><strong>20 </strong></h1>
                        <img src="./src/media/pesa.svg" alt="boton de rollback">
                    </div>
                </div>
            </div>
            <div class="shadow px-3 pt-2 pb-1 mb-3 bg-body rounded">
                <div class="d-flex justify-content-between align-items-center row">
                    <div class="text-center col-2">
                        <h6 class="color-green">Fecha</h6>
                        <h6 class="text-secondary">01/01/2021</h6>
                    </div>
                    <div class="text-center col-2">
                        <h6 class="color-green">Nombre</h6>
                        <h6 class="text-secondary">Juan Pérez</h6>
                    </div>
                    <div class="text-center col-2">
                        <h6 class="color-green">Horario</h6>
                        <h6 class="text-secondary">9 a 13hs</h6>
                    </div>
                    <div class="text-center col-2">
                        <h6 class="color-green">Teléfono</h6>
                        <h6 class="text-secondary">154545560</h6>
                    </div>
                    <div class="text-center col-2">
                        <h6 class="color-green">Dirección</h6>
                        <h6 class="text-secondary">Mitre 475</h6>
                    </div>
                    <div class="col-2 d-inline-flex justify-content-around">
                        <h1 class="color-green m-0"><strong>20 </strong></h1>
                        <img src="./src/media/pesa.svg" alt="boton de rollback">
                    </div>
                </div>
            </div>
            <div class="shadow px-3 pt-2 pb-1 mb-3 bg-body rounded">
                <div class="d-flex justify-content-between align-items-center row">
                    <div class="text-center col-2">
                        <h6 class="color-green">Fecha</h6>
                        <h6 class="text-secondary">01/01/2021</h6>
                    </div>
                    <div class="text-center col-2">
                        <h6 class="color-green">Nombre</h6>
                        <h6 class="text-secondary">Juan Pérez</h6>
                    </div>
                    <div class="text-center col-2">
                        <h6 class="color-green">Horario</h6>
                        <h6 class="text-secondary">9 a 13hs</h6>
                    </div>
                    <div class="text-center col-2">
                        <h6 class="color-green">Teléfono</h6>
                        <h6 class="text-secondary">154545560</h6>
                    </div>
                    <div class="text-center col-2">
                        <h6 class="color-green">Dirección</h6>
                        <h6 class="text-secondary">Mitre 475</h6>
                    </div>
                    <div class="col-2 d-inline-flex justify-content-around">
                        <h1 class="color-green m-0"><strong>20 </strong></h1>
                        <img src="./src/media/pesa.svg" alt="boton de rollback">
                    </div>
                </div>
            </div>
        </form>
    </div>
        `
    }
}

export default CarteleraScreen;