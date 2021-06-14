
const FormTransporteScreen ={
    after_render:()=>{},
    render:()=>{
        return`
        <div class="mt-5">
        <form class="col-lg-4 m-auto">
            <h2 class="color-green mb-3 mt-4">
                Postulate
            </h2>
            <div class="mb-3">
                <input type="text" class="form-control form-control-sm" id="nameInput" placeholder="Nombre/s">
            </div>
            <div class="mb-3">
                <input type="text" class="form-control form-control-sm" id="surnameInput" placeholder="Apellido/s">
            </div>
            <div class="mb-3">
                <input type="text" class="form-control form-control-sm" id="phoneInput" placeholder="Teléfono">
            </div>
            <div class="mb-3">
                <input type="text" class="form-control form-control-sm" id="addressInput" placeholder="Dirección">
            </div>
            <div class="mb-3">
                <select class="form-select form-select-sm" aria-label="Franja horaria" aria-describedby="volumeHelp">
                    <option selected disabled>Volúmen de materiales</option>
                    <option value="1">Entra en una caja</option>
                    <option value="2">Entra en el baúl de un auto</option>
                    <option value="3">Entra en la caja de una camioneta</option>
                    <option value="4">Es necesario un camión</option>
                </select>
                <!-- <div id="volumeHelp" class="form-text">De materiales a retirar.</div> -->
            </div>
            <div class="mb-3">
                <select class="form-select form-select-sm" aria-label="Franja horaria">
                    <option selected disabled>Franja horaria</option>
                    <option value="1">9 a 12hs</option>
                    <option value="2">13 a 17hs</option>
                </select>
            </div>
            <div class="mb-3">
                <div id="fileHelp" class="form-text ms-2 mb-1">Subi una foto tuya</div>
                <input type="file" class="form-control form-control-sm" placeholder="Dirección" id="fileInput" accept="image/*" aria-describedby="fileHelp">
            </div>
            <div class="mb-5 nav justify-content-end">
                <button type="submit" class="btn text-white background-green rounded-pill">Enviar solicitud</button>
            </div>
        </form>
    </div>
        `
    }
}


export default FormTransporteScreen;