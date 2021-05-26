
const PostulateScreen ={
    render: ()=>{
        return `
                <div class="mb-5"">
                <img src="./media/imagen-postulate.png" class="image-wide" alt="foto reciclaje">
                <div class="container-lg text-white">
                    <h1 class="inner-title ">Doná los materiales<br>que ya no uses</h1>
                    <hr class="inner-line">
                    <p class="inner-p">Nosotros podemos reciclarlos y hacer juntos<br>un mundo mejor.</p>
                </div>
                <div class="container-lg text-secondary my-5">
                    <h4 class="mbot">Elegí la opción más conveniente para vos</h4>
                    <div class="shadow-lg p-3 mbot bg-body rounded">
                        <div class="d-flex justify-content-between align-items-center">
                            Completá el formulario para postular tu oferta de transporte
                            <a href="/#/form-transporte" class="btn text-white background-green rounded-pill mr-0 ml-auto">Postulá tu oferta</a>
                        </div>
                    </div>
                    <div class="shadow-lg p-3 mb-5 bg-body rounded">
                        <div class="d-flex justify-content-between align-items-center">
                            Completá el formulario para dar aviso y que se retiren tus materiales
                            <a href="/#/form-materiales" class="btn text-white background-green rounded-pill mr-0 ml-auto">Cargá tu pedido</a>
                        </div>
                    </div>
                </div>
                
                </div>
            `
    }
}

export default PostulateScreen;