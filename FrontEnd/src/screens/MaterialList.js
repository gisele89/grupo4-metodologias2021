import {materiales} from '../data.json'

const mats = materiales;
const MaterialList ={ 
    
    render:async()=>{
        return `
            <div>
            <h2>Lista de materiales</h2>
            <div class="content-mats">
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
            </div>
            </div>
        `
    }
}

export default MaterialList;