
import { registerMaterial } from '../api';
import {materiales} from '../data.json'


const mats = materiales;


const MaterialList ={ 
    after_render:()=>{
        const contentMats = document.getElementById('content-mats')
        const formContainer = document.getElementById('mat-form');
        const eventoForm = document.getElementById('add-mat');
        const btnCerrar = document.getElementById('btn-cerrar');
        eventoForm.addEventListener('click', () =>{
            //formContainer.style.display = 'block';
            formContainer.style.visibility = 'visible';
            contentMats.style.opacity =  '0.4';
        });
        btnCerrar.addEventListener('click', () =>{
            formContainer.style.visibility = 'hidden';
            contentMats.style.opacity =  '1';
        })

        document.getElementById('register-material')
        .addEventListener("submit", async (e) =>{
            e.preventDefault();
            console.log('subiendo....')
            console.log(document.getElementById('material-name').value);
            console.log(document.getElementById('material-description').value);
            console.log(document.getElementById('material-img').value);
        /*    const data = await registerMaterial({
                name: document.getElementById('material-name').value,
                descripcion: document.getElementById('material-descripcion').value,
                img: document.getElementById('material-img').value,
                //falta la imagen
            });
            if(data.error){
                console.log(data.error);
            }
            else{
                console.log('Algo')
            }*/
        });
    },

    render:async()=>{
        return `
            <div>
            <div class="mat-form" id="mat-form">
            <div class="contenido-form">
            <div class="test-container">
            
            <div class="form-btn-c">
            <i id="btn-cerrar" class="fas fa-times-circle"></i>
            </div>
            <form id="register-material">
                <div class="form-items">
                    <div class="right">
                        <h5>Form</h5>
                        <input type="file" id="material-img" name="material-img" accept="image/*" />
                    </div>
                    <div class="left">
                        <label>Material</label>
                        <input type="name" name="material" id="material-name"/>
                        <label>Descripcion</label>
                        <textarea 
                            placeholder="descripcion" 
                            type="descripcion" 
                            name="descripcion"
                            id="material-description"
                        ></textarea>
                    </div>
                </div>
                <div class="align-r">
                    <button type="submit" class="btn text-white background-green rounded-pill mr-0 ml-auto">Subir item</button>
                </div>
            </form>
            </div>
            </div>          
            </div>
            <div class="content-mats" id="content-mats">
                ${mats.map(mat =>
                    `
                    <div class="contenedor">
                        <div class="card-container">
                            <div class="card-material">
                                <figure class="card-front">
                                    <img src="${mat.img}" />
                                    <h4>${mat.nombre}</h4>
                                </figure>
                                <figure class="card-back">
                                    <p>${mat.descripcion}</p>
                                </figure>
                            </div>
                        </div>
                    </div>
                    `).join('\n')}

                    <div class="contenedor">
                    <div class="card-container">
                        <div class="card-add-material">
                            <div class="card-add-content">
                                <i class="fas fa-plus" id="add-mat"></i>
                                <h4  >Agregar item</h4>
                            <div>
                        </div>
                    </div>
                </div>   
            </div>
            </div>
        `
    }
    
}

export default MaterialList;