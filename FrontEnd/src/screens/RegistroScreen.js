
const RegistroScreen ={
    after_render:()=>{},
    render:()=>{
        return`
        <div class="container mt-5">
        <form class="col-lg-8 m-auto">
            <div class="mb-4">
                <select class="form-select form-select-sm" aria-label="Franja horaria" id="filterSelect" aria-describedby="volumeHelp">
                    <option selected disabled>Filtrar por:</option>
                    <option value="1">Apellido del cartonero</option>
                    <option value="2">Peso acumulado</option>
                </select>
            </div>
            <div class="shadow px-3 py-1 mb-3 bg-body rounded">
                <div class="d-flex justify-content-between align-items-center row">
                    <div class="text-center col-3">
                        <h6 class="color-green">Nombre</h6>
                        <h6 class="text-secondary">Juan Pérez</h6>
                    </div>
                    <div class="text-center col-3">
                        <h6 class="color-green mt-2 mb-1">Cant. acum.</h6>
                        <h4 class="color-green"><strong>20</strong> Kg</h4>
                    </div>
                    <div class="col-4">
                        <input type="text" class="form-control form-control-sm" id="addKgInput" placeholder="Agregar Kilogramos">
                    </div>
                    <div class="col-1">
                        <button class="img-btn" id="btn-ok" data-bs-toggle="tooltip" data-bs-pyacement="top" title="Confirmar cambio">
                            <img src="./src/media/tick.svg" alt="boton de confirmar">
                        </button>
                    </div>
                    <div class="col-1">
                        <button class="img-btn" id="btn-undo" data-bs-toggle="tooltip" data-bs-pyacement="top" title="Deshacer cambio">
                            <img src="./src/media/rollback.svg" alt="boton de rollback">
                        </button>
                    </div>
                </div>
            </div>
            <div class="shadow px-3 py-1 mb-3 bg-body rounded">
                <div class="d-flex justify-content-between align-items-center row">
                    <div class="text-center col-3">
                        <h6 class="color-green">Nombre</h6>
                        <h6 class="text-secondary">Pedro Rodríguez</h6>
                    </div>
                    <div class="text-center col-3">
                        <h6 class="color-green mt-2 mb-1">Cant. acum.</h6>
                        <h4 class="color-green"><strong>10</strong> Kg</h4>
                    </div>
                    <div class="col-4">
                        <input type="text" class="form-control form-control-sm" id="addKgInput" placeholder="Agregar Kilogramos">
                    </div>
                    <div class="col-1">
                        <button class="img-btn" id="btn-ok" data-bs-toggle="tooltip" data-bs-pyacement="top" title="Confirmar cambio">
                            <img src="./src/media/tick.svg" alt="boton de confirmar">
                        </button>
                    </div>
                    <div class="col-1">
                        <button class="img-btn" id="btn-undo" data-bs-toggle="tooltip" data-bs-pyacement="top" title="Deshacer cambio">
                            <img src="./src/media/rollback.svg" alt="boton de rollback">
                        </button>
                    </div>
                </div>
            </div>
            <div class="shadow px-3 py-1 mb-3 bg-body rounded">
                <div class="d-flex justify-content-between align-items-center row">
                    <div class="text-center col-3">
                        <h6 class="color-green">Nombre</h6>
                        <h6 class="text-secondary">Giancarlo Cristiano</h6>
                    </div>
                    <div class="text-center col-3">
                        <h6 class="color-green mt-2 mb-1">Cant. acum.</h6>
                        <h4 class="color-green"><strong>5</strong> Kg</h4>
                    </div>
                    <div class="col-4">
                        <input type="text" class="form-control form-control-sm" id="addKgInput" placeholder="Agregar Kilogramos">
                    </div>
                    <div class="col-1">
                        <button class="img-btn" id="btn-ok" data-bs-toggle="tooltip" data-bs-pyacement="top" title="Confirmar cambio">
                            <img src="./src/media/tick.svg" alt="boton de confirmar">
                        </button>
                    </div>
                    <div class="col-1">
                        <button class="img-btn" id="btn-undo" data-bs-toggle="tooltip" data-bs-pyacement="top" title="Deshacer cambio">
                            <img src="./src/media/rollback.svg" alt="boton de rollback">
                        </button>
                    </div>
                </div>
            </div>
            <div class="shadow px-3 py-1 mb-3 bg-body rounded">
                <div class="d-flex justify-content-between align-items-center row">
                    <div class="text-center col-3">
                        <h6 class="color-green">Nombre</h6>
                        <h6 class="text-secondary">Lucas González</h6>
                    </div>
                    <div class="text-center col-3">
                        <h6 class="color-green mt-2 mb-1">Cant. acum.</h6>
                        <h4 class="color-green"><strong>5</strong> Kg</h4>
                    </div>
                    <div class="col-4">
                        <input type="text" class="form-control form-control-sm" id="addKgInput" placeholder="Agregar Kilogramos">
                    </div>
                    <div class="col-1">
                        <button class="img-btn" id="btn-ok" data-bs-toggle="tooltip" data-bs-pyacement="top" title="Confirmar cambio">
                            <img src="./src/media/tick.svg" alt="boton de confirmar">
                        </button>
                    </div>
                    <div class="col-1">
                        <button class="img-btn" id="btn-undo" data-bs-toggle="tooltip" data-bs-pyacement="top" title="Deshacer cambio">
                            <img src="./src/media/rollback.svg" alt="boton de rollback">
                        </button>
                    </div>
                </div>
            </div>
            <div class="shadow px-3 py-1 mb-3 bg-body rounded">
                <div class="d-flex justify-content-between align-items-center row">
                    <div class="text-center col-3">
                        <h6 class="color-green">Nombre</h6>
                        <h6 class="text-secondary">Leonel Dimasi</h6>
                    </div>
                    <div class="text-center col-3">
                        <h6 class="color-green mt-2 mb-1">Cant. acum.</h6>
                        <h4 class="color-green"><strong>50</strong> Kg</h4>
                    </div>
                    <div class="col-4">
                        <input type="text" class="form-control form-control-sm" id="addKgInput" placeholder="Agregar Kilogramos">
                    </div>
                    <div class="col-1">
                        <button class="img-btn" id="btn-ok" data-bs-toggle="tooltip" data-bs-pyacement="top" title="Confirmar cambio">
                            <img src="./src/media/tick.svg" alt="boton de confirmar">
                        </button>
                    </div>
                    <div class="col-1">
                        <button class="img-btn" id="btn-undo" data-bs-toggle="tooltip" data-bs-pyacement="top" title="Deshacer cambio">
                            <img src="./src/media/rollback.svg" alt="boton de rollback">
                        </button>
                    </div>
                </div>
            </div>
            <div class="shadow px-3 py-1 mb-3 bg-body rounded">
                <div class="d-flex justify-content-between align-items-center row">
                    <div class="text-center col-3">
                        <h6 class="color-green">Nombre</h6>
                        <h6 class="text-secondary">Gabriel González</h6>
                    </div>
                    <div class="text-center col-3">
                        <h6 class="color-green mt-2 mb-1">Cant. acum.</h6>
                        <h4 class="color-green"><strong>40</strong> Kg</h4>
                    </div>
                    <div class="col-4">
                        <input type="text" class="form-control form-control-sm" id="addKgInput" placeholder="Agregar Kilogramos">
                    </div>
                    <div class="col-1">
                        <button class="img-btn" id="btn-ok" data-bs-toggle="tooltip" data-bs-pyacement="top" title="Confirmar cambio">
                            <img src="./src/media/tick.svg" alt="boton de confirmar">
                        </button>
                    </div>
                    <div class="col-1">
                        <button class="img-btn" id="btn-undo" data-bs-toggle="tooltip" data-bs-pyacement="top" title="Deshacer cambio">
                            <img src="./src/media/rollback.svg" alt="boton de rollback">
                        </button>
                    </div>
                </div>
            </div>
            <div class="shadow px-3 py-1 mb-3 bg-body rounded">
                <div class="d-flex justify-content-between align-items-center row">
                    <div class="text-center col-3">
                        <h6 class="color-green">Nombre</h6>
                        <h6 class="text-secondary">José López</h6>
                    </div>
                    <div class="text-center col-3">
                        <h6 class="color-green mt-2 mb-1">Cant. acum.</h6>
                        <h4 class="color-green"><strong>0</strong> Kg</h4>
                    </div>
                    <div class="col-4">
                        <input type="text" class="form-control form-control-sm" id="addKgInput" placeholder="Agregar Kilogramos">
                    </div>
                    <div class="col-1">
                        <button class="img-btn" id="btn-ok" data-bs-toggle="tooltip" data-bs-pyacement="top" title="Confirmar cambio">
                            <img src="./src/media/tick.svg" alt="boton de confirmar">
                        </button>
                    </div>
                    <div class="col-1">
                        <button class="img-btn" id="btn-undo" data-bs-toggle="tooltip" data-bs-pyacement="top" title="Deshacer cambio">
                            <img src="./src/media/rollback.svg" alt="boton de rollback">
                        </button>
                    </div>
                </div>
            </div>                
        </form>
    </div>
        `
    }
}

export default RegistroScreen;