import { register } from "../api";
import { redirectUser } from "../utils";

const RegisterScreen ={
    after_render: ()=>{
        
        document.getElementById('registro-secretaria')
        .addEventListener('submit', async(e)=>{
            e.preventDefault();
            const data = await register({
                nombre: document.getElementById('nameInput').value,
                //apellido: document.getElementById('surnameInput').value,
                telefono: document.getElementById('phoneInput').value,
                direccion: document.getElementById('addressInput').value,
                email: document.getElementById('eMailInput').value,
                contrasena: document.getElementById('passwordInput').value
            });
            if(!data){
                console.log('fallo');
            }else{
               // setUserInfo(data);
                //redirectUser();
                console.log('Se registro correctamente');
                redirectUser();
            }
        });


    },
    render: ()=>{
        return`
        <div class="container main-container mt-5">
        <form class="col-lg-4 m-auto" id="registro-secretaria">
            <h2 class="color-green mb-3 mt-4">
                Registrarse
            </h2>
            <div class="mb-3">
                <input type="text" class="form-control form-control-sm" id="nameInput" placeholder="Nombre/s" required>
            </div>
            <div class="mb-3">
                <input type="text" class="form-control form-control-sm" id="surnameInput" placeholder="Apellido/s" required>
            </div>
            <div class="mb-3">
                <input type="tel" class="form-control form-control-sm" id="phoneInput" placeholder="Teléfono" required>
            </div>
            <div class="mb-3">
                <input type="text" class="form-control form-control-sm" id="addressInput" placeholder="Dirección" required>
            </div>
            <div class="mb-0">
                <input type="email" class="form-control form-control-sm md-0" id="eMailInput" placeholder="E-mail" required>
            </div>
            <div id="eMailHelp" class="form-text mb-3">*tunombre@gmail.com</div>
            <div class="mb-3 position-relative d-flex justify-content-end">
                <input type="password" class="form-control form-control-sm" id="passwordInput" placeholder="Contraseña" required>
                <img class="ojo" src="./src/media/ojo.svg">
            </div>
            <div class="mb-3 position-relative d-flex justify-content-end">
                <input type="password" class="form-control form-control-sm" id="passwordReInput" placeholder="Repetir contraseña " required >
                <img class="ojo" src="./src/media/ojo.svg">
            </div>
            <div class="mb-5 nav justify-content-end">
                <button type="submit" class="btn text-white background-green rounded-pill">Enviar solicitud</button>
            </div>
        </form>
    </div>
        `
    }
}


export default RegisterScreen;