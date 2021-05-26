
import CargarMaterial from '../components/CargarMaterial';



const MatsScreen = {

    after_render: () =>{
        const btncerrar = document.getElementById('btn-cerrar');
        const formulario = document.getElementById('formulario');
        const contenedor = document.getElementById('contenedor');
        document.getElementById("hola").
        addEventListener('click', ()=>{
            contenedor.style.display = 'block';
            btncerrar.innerHTML = `<button type="button" id="cerrar"><i class="fas fa-times"></i></button>`;
            formulario.innerHTML = CargarMaterial.render();
            
        });

        
        document.getElementById("btn-cerrar").
        addEventListener('click',()=>{
        console.log('hola');
        contenedor.style.display = 'none';
    })
    },
    
    render: ()=>{
        return `
        <div>
            <h2>Componente Materiales</h2>
            <button type="button" id="hola" > <i class="fas fa-plus"></i></button>
            
            <div class="contenedor" id="contenedor">
                <div id="btn-cerrar"></div>
                <div id="formulario"></div>                  
            </div>

            <div id="formulario2"></div>
        </div>
        `;
    },
};

export default MatsScreen;