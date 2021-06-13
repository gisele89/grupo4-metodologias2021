
const CargarMaterial = {

    after_render:() => {
        const cerrarBtn = document.getElementById('btn-cerrar');
        cerrarBtn.addEventListener('click', ()=>{
            console.log('se cerro');
        })
    
    },

    render: () =>{
        return `
        <div class="form-container">
        <form id="register-form">
            <ul class="form-items">
                <li>
                    <h1>Create Account</h1>
                </li>
                <li>
                    <label for="name">Name</label>
                    <input type="name" name="name" id="name"/>
                </li>
                <li>
                    <label for="email">Email</label>
                    <input type="email" name="email" id="email"/>
                </li>
                <li>
                    <label for="password">Password</label>
                    <input type="password" name="password" id="password"/>
                </li>      
                <li>
                    <button type="submit" class="primary">Register</button>
                </li>
            </ul>
        </form>
        
    </div>
    
        `
    }
}

export default CargarMaterial;