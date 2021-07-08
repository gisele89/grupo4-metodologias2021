
const RegistroExitoso = {
    render: ()=>{
        return `
            <div class="container main-container mt-5">
            <form class="col-lg-4 m-auto">
                <h2 class="color-green mb-3 mt-4 text-center">
                    ¡Registro exitoso!
                </h2>
                <h5 class="mb-5 text-center text-secondary">
                    Te enviamos un mail para confirmar tu información. ¡Revisá tu casilla de correo!
                </h5>
                <div class="mb-5 d-flex justify-content-center">
                    <a class="btn text-white background-green rounded-pill" type="button" href="/#/iniciar-sesion">Iniciar sesión</a>
                </div>
            </form>
        </div>
        `
    }
}

export default RegistroExitoso