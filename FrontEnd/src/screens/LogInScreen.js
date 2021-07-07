import { logIn } from "../api";
import { getUser, userData } from "../utils";


const LogInScreen ={

    after_render:()=>{
        document.getElementById('signIn')
        .addEventListener('submit', async(e) =>{
            e.preventDefault();
            const data = await logIn ({
                
                email: document.getElementById('userInput').value,
                contrasena: document.getElementById('passwordInput').value
            })
            if(!data){
                console.log('error')
            }
            else{
                
                console.log('datos correctos ..... logueando')
                console.log(data.data.nombre)
                userData(data.data.nombre);
                console.log(getUser());
            }
        })
    },

    render:() =>{
        return  ` 
        <div class="container main-container mt-5">
            <form class="col-lg-4 m-auto" id="signIn">
                <h2 class="color-green mb-3 mt-4">
                    Iniciar sesión
                </h2>
                <div class="mb-3">
                <input type="email" class="form-control form-control-sm md-0" id="userInput" placeholder="E-mail" required>
                </div>
                <div class="mb-3 position-relative d-flex justify-content-end">
                    <input type="password" class="form-control form-control-sm" id="passwordInput" placeholder="Contraseña" required>
                    <img class="ojo" src="./src/media/ojo.svg">
                </div>
                <div class="mb-5 nav justify-content-between">
                    <a class="text-secondary text-decoration-none" type="button"><small>Recuperá tu contraseña</small></a>
                    <button type="submit" class="btn text-white background-green rounded-pill">Enviar solicitud</button>
                </div>
            </form>
        </div>
        `
    }
}

export default LogInScreen;