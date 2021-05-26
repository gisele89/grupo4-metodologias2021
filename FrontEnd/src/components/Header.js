

const Header ={
    render: ()=>{
        return`
        <nav class="navbar navbar-expand-lg navbar-light border-bottom border-5">
        <div class="container-fluid container-xl">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a href=''> <img src="./media/CRUT-1.png"/ height="72px"></a>
                </li>
            </ul>
            
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse nav justify-content-end" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="/#/">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="cartelera.html">Cartelera</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/#/materiales">Materiales</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/#/matsScreen">Postulate</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>       
        `
    },
    after_render:()=>{},
}

export default Header;