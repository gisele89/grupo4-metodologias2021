import { altaCartonero, deleteCartonero, getCartonero, updateCartonero } from '../api';
import {getUser} from '../utils';

const CarteleraScreen ={
    after_render: async()=> {
        const cartoneros = await getCartonero();

        const inicilizar = ()=>{
            document.getElementById('apellido').value =''
            document.getElementById('direccion').value =''
            document.getElementById('dni').value = ''
            document.getElementById('fechaNac').value = ''
            document.getElementById('nombre').value = ''
            document.getElementById('vehiculo').value = ''
            document.getElementById('btn-smt-c').value = ''
        }
        
        document.getElementById('cartonero')
        .addEventListener('submit', async(e) =>{
            e.preventDefault();
            console.log('creando cartoneitor');
            console.log(document.getElementById('dni').value)
            
            let apell = document.getElementById('apellido').value
            let direc = document.getElementById('direccion').value
            let dni = document.getElementById('dni').value
            let nacimiento = document.getElementById('fechaNac').value
            let nombre = document.getElementById('nombre').value
            let vehiculo = document.getElementById('vehiculo').value
            let idCart = document.getElementById('btn-smt-c').value

    

            if(idCart > 0){
                console.log('actualiza')
                const dataU = await updateCartonero({
                    apellido: apell,
                    direccion: direc,
                    dni: dni,
                    nacimiento: nacimiento,
                    nombre: nombre,
                    vehiculo: vehiculo,
                    idCartonero: idCart
                })
                inicilizar()
            }
            else{
                console.log('creando')
                const data = await altaCartonero({
                apellido: apell,
                direccion: direc,
                dni: dni,
                nacimiento: nacimiento,
                nombre: nombre,
                vehiculo: vehiculo
            })
            inicilizar()
            }
        })

        const deleteCarts =  document.getElementsByClassName('delete-cartonero');
        Array.from(deleteCarts).forEach(deleteCart =>{
            deleteCart.addEventListener('click', async()=>{
                console.log('borrar cartonero')
                console.log(deleteCart.id)
                deleteCartonero(deleteCart.id)
                const cartoneros = await getCartonero();
            })
        })

        const updateCarts = document.getElementsByClassName('edit-cartonero');
        Array.from(updateCarts).forEach(updateCart =>{
            updateCart.addEventListener('click', async() =>{
                console.log(updateCart.id)
                console.log('editar cartonero')
                const actuCart = cartoneros.find((cartonero) => cartonero.idCartonero == updateCart.id)
                console.log(actuCart)

                document.getElementById('apellido').value = actuCart.apellido
                document.getElementById('direccion').value = actuCart.direccion
                document.getElementById('dni').value = actuCart.dni
                document.getElementById('fechaNac').value = actuCart.nacimiento
                document.getElementById('nombre').value = actuCart.nombre
                document.getElementById('vehiculo').value = actuCart.vehiculo
                document.getElementById('btn-smt-c').value = actuCart.idCartonero


            })
        })
    
    },
    render: async() =>{
       const cartoneros = getCartonero();
        if(getUser() !== ''){
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
                        <img src="../screens/media/pesa.svg" alt="boton de rollback">
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
                        <img src="../src/media/pesa.svg" alt="boton de rollback">
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
    }else{
        const cartoneros = await getCartonero();
        return `
        <div class="container mt-5">
        <div class="col-lg-8 m-auto">
            <div class="mb-5">
                <select class="form-select form-select-sm" aria-label="Franja horaria" id="filterSelect" aria-describedby="volumeHelp">
                    <option selected disabled>Filtrar por:</option>
                    <option value="1">Más recientes</option>
                    <option value="2">Apellido de cartonero</option>
                    <option value="3">Peso de materiales</option>
                </select>
            </div>

          
               
                    ${cartoneros.map(cartonero =>

                        `
                          <div class="shadow-lg px-3 pt-2 pb-1 mb-4 bg-body rounded">
                         <div class="d-flex justify-content-between align-items-center row p-3">
                            <div class="text-center align-items-center col-4 ps-0">
                            <img src="./src/media/profile.svg" class="mb-3" alt="imagen por default" width="75%">
                            <h6 class="text-secondary">${cartonero.nombre} ${cartonero.apellido}
                            <span class="color-green"><strong class="fs-3">20 </strong>kg</span></h6>
                            </div>
                            <div class="text-center col-8 mb-3 p-2 d-flex bg-body border border-2 border-gray rounded-3">
                        <div class="col-6 p-2">
                            <div class="d-flex align-items-center mb-2" height=100%>
                                <img src="./src/media/dni.svg" class="mx-3" alt="d.n.i." width="26px" height="26px">
                                <h6 class="text-secondary m-0">${cartonero.dni}</h6>
                            </div>
                            <div class="d-flex align-items-center mb-2" height=100%>
                                <img src="./src/media/pin.svg" class="mx-3" alt="dirección"  width="26px" height="26px">
                                <h6 class="text-secondary m-0">${cartonero.direccion}</h6>
                            </div>
                            <div class="d-flex align-items-center mb-2" height=100%>
                                <img src="./src/media/calendario.svg" class="mx-3" alt="fecha de nacimiento"  width="26px" height="26px">
                                <h6 class="text-secondary m-0">${cartonero.nacimiento}</h6>
                            </div>
                        </div>
                        <div class="col-6 p-2">
                            <div class="d-flex align-items-center mb-2" height=100%>
                                <img src="./src/media/coche.svg" class="mx-3" alt="vehículo" width="26px" height="26px">
                                <h6 class="text-secondary m-0">${cartonero.vehiculo}</h6>
                            </div>
                            <div class="d-flex align-items-center mb-2" height=100%>
                                <img src="./src/media/patente.svg" class="mx-3" alt="patente"  width="26px" height="26px">
                                <h6 class="text-secondary m-0">ABC 123</h6>
                            </div>
                        
                        </div>
                    </div>
                    <div class="mb-0 nav align-items-center justify-content-end">
                        <button type="submit" class="btn color-green selected-menu rounded-pill mx-2">Ver Detalles</button>
                        
                        <button type="submit" class="img-btn edit-cartonero" id="${cartonero.idCartonero}"> <img src="./src/media/editar.svg" class="mx-2" alt="editar" width="26px"></button>
                        <button type="submit" class="img-btn delete-cartonero" id="${cartonero.idCartonero}"> <img src="./src/media/borrar.svg" class="ml-3 mr-0" alt="borrar" width="26px"></button>
                    </div>
            </div>
             </div>   
                        `
                        ).join('\n')}
                     
               

              <div class="shadow-lg px-3 pt-2 pb-1 mb-4 bg-body rounded">
                <form id="cartonero">
                <div class="d-flex justify-content-between align-items-center row p-3">
                    <div class="text-center align-items-center col-4 ps-0">
                        <img src="../src/media/profile.svg" class="mb-3" alt="imagen por default" width="75%">
                    </div>
                    <div class="text-center col-8 mb-3 p-2 d-flex bg-body border border-2 border-gray rounded-3">
                       
                            <div class="col-6 p-2">
                                <div class="d-flex align-items-center mb-2" height=100%>
                                    <input type="text" id="nombre" name="name" placeholder="Nombre"/>
                                </div>
                                <div class="d-flex align-items-center mb-2" height=100%>
                                    <input type="text" id="apellido" name="apellido" placeholder="Apellido"/>
                                </div>
                                <div class="d-flex align-items-center mb-2" height=100%>
                                    <input type="number" id="dni" name="dni" placeholder="DNI"/>
                                </div>
                                <div class="d-flex align-items-center mb-2" height=100%>
                                    <input type="text" id="direccion" name="direccion" placeholder="Direccion"/>
                                </div>
                            </div>
                            <div class="col-6 p-2">
                                <div class="d-flex align-items-center mb-2" height=100%>
                                    <input type="text" id="fechaNac" name="fechaNac" placeholder="Fecha Nacimiento"/>
                                </div>
                                <div class="d-flex align-items-center mb-2" height=100%>
                                    <input type="text" id="vehiculo" name="vehiculo" placeholder="Vehiculo"/>
                                </div>
                                <div class="d-flex align-items-center mb-2" height=100%>
                                    <input type="text" id="patente" name="patente" placeholder="Patente"/>
                                </div>
                            </div>
                        
                    </div>
                    <div class="mb-0 nav align-items-center justify-content-end">
                        <button type="submit" id="btn-smt-c"class="btn text-white background-green rounded-pill mx-2 px-5">Subir</button>
                    </div>
                    
                </div>
                </form>
            </div>
        
        </div>
    </div>
        `
    }}
    
}

export default CarteleraScreen;