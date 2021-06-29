
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
        const mostrarImg = document.getElementById('show-img');
        const editarM = false;//creo que no se usa

        const inicializarForm = () =>{
            document.getElementById('material-name').value = '';
            document.getElementById('material-description').value = '';
            document.getElementById('btn-sbm').value = '';
           //document.getElementById('material-img').files[0] = '';
        }

        eventoForm.addEventListener('click', () =>{
            //formContainer.style.display = 'block';
            formContainer.style.visibility = 'visible';
            contentMats.style.opacity =  '0.4';
            inicializarForm();
        });
        btnCerrar.addEventListener('click', () =>{
            formContainer.style.visibility = 'hidden';
            contentMats.style.opacity =  '1';
            
        })

        const previewImg = document.getElementById('material-img').addEventListener('change', () =>{
            console.log('hola3232')
            let img = document.getElementById('material-img').files[0];
            let src = URL.createObjectURL(img);
            console.log(src)
            mostrarImg.src = src;
            mostrarImg.style.display = 'block';
        })

        document.getElementById('register-material')
        .addEventListener("submit", async (e) =>{
            e.preventDefault();
            console.log('subiendo....')
            let nombre = document.getElementById('material-name').value;
            let desc = document.getElementById('material-description').value;
            let idMaterial = document.getElementById('btn-sbm').value;
            let imagene = document.getElementById('material-img').files[0];
    

            console.log(idMaterial)

            const material = mats.filter((mat) => mat.nombre == nombre) //el problema esta aca

            
            console.log('antes de entrar')
            console.log(idMaterial)
            if(idMaterial > 0 ){
                console.log('actualiza')
                const dataU = updateMaterial({
                    nombre: nombre,
                    descripcion: desc,
                    id: idMaterial
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
                document.getElementById('btn-sbm').value = updateButton.id; 
                /* let imagene = document.getElementById('material-img').files[0].value;
    
                let src = URL.createObjectURL(imagene);
             
                mostrarImg.src = src;
                mostrarImg.style.display = 'block';*/
                console.log(updateButton.id)
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
                        <img class="preview-img" src="" id="show-img" />
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
                    <button type="submit" id='btn-sbm' class="btn text-white background-green rounded-pill mr-0 ml-auto">Subir item</button>
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
                            <button class="update-button btn-u btn btn-success" id="${dato.idMaterial}"> <i class="fas fa-edit"></i></button>
                            <button class="delete-button btn-d btn btn-danger" id="${dato.idMaterial}"><i class="fas fa-times" ></i></button>
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