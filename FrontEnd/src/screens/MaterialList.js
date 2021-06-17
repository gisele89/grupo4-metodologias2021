
import { deleteMaterial, getMaterial, registerMaterial, updateMaterial } from '../api';
import {materiales} from '../data.json'
import { rerender } from '../utils';


//const mats = materiales;

const MaterialList ={ 
    after_render: async()=>{
        const mats =   await getMaterial();
        const contentMats = document.getElementById('content-mats')
        const formContainer = document.getElementById('mat-form');
        const eventoForm = document.getElementById('add-mat');
        const btnCerrar = document.getElementById('btn-cerrar');
        const editarM = false;
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
            let nombre = document.getElementById('material-name').value;
            let desc = document.getElementById('material-description').value;
            let imagene = document.getElementById('material-img').files[0];

            const material = mats.filter((mat) => mat.nombre == nombre)

            if(material.length > 0 ){
                console.log('actualiza')
                const dataU = updateMaterial({
                    nombre: nombre,
                    descripcion: desc,
                    id: material[0].idMaterial
                })
            }
            else{
                console.log('creando...')
                let reader = new FileReader();
                reader.readAsDataURL(imagene);
                reader.onload = function () {
                const data =  registerMaterial({
                nombre: nombre,
                descripcion: desc,
                img: reader.result
                });
            };
            }
        
       
        });
    

        const deleteButtons = document.getElementsByClassName("delete-button");
        Array.from(deleteButtons).forEach(deleteButton =>{
            deleteButton.addEventListener('click', async() => {
                deleteMaterial(deleteButton.id);
                const datos =  await getMaterial();
                rerender(MaterialList);
            });
            });

        const updateButtons = document.getElementsByClassName("update-button");
        Array.from(updateButtons).forEach(updateButton =>{
            updateButton.addEventListener('click', async() => {
                const actuMat = mats.find((mat) => mat.idMaterial == updateButton.id)
                document.getElementById('material-name').value = actuMat.nombre;
                document.getElementById('material-description').value = actuMat.descripcion; 

                formContainer.style.visibility = 'visible';
                contentMats.style.opacity =  '0.4';
            });
            });        
    },

    render:async()=>{
        
        const datos =  await getMaterial();
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
                    <button type="submit"  class="btn text-white background-green rounded-pill mr-0 ml-auto">Subir item</button>
                </div>
            </form>
            </div>
            </div>          
            </div>
            <div class="content-mats" id="content-mats">
                ${datos.map(dato =>
                    `
                    <div class="contenedor">
                        <div class="card-container">
                            <div class="card-material">
                                <figure class="card-front">
                                    <img src="${dato.img}" />
                                    <h4>${dato.nombre}</h4>
                                </figure>
                                <figure class="card-back">
                                    <p>${dato.descripcion}</p>
                                </figure>
                                
                            </div>
                            <button class="update-button" id="${dato.idMaterial}"> <i class="fas fa-edit"></i></button>
                            <button class="delete-button" id="${dato.idMaterial}"><i class="fas fa-times" ></i></button>
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