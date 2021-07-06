

const Header ={
    render: ()=>{
        return`
        <nav class="navbar navbar-expand-lg navbar-light border-bottom-green-thick">
    <div class="container">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item">
                <a class="home-logo" href='index.html'> <img src="./media/CRUT-1.png"/ height="72px"></a>
            </li>
        </ul>
        
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse nav justify-content-end" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link color-green selected-menu" href="index.html">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link color-green" href="/#/cartelera">Cartelera</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link color-green" href="/#/materiales">Materiales</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link color-green" href="/#/registro">Registro</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link color-green" href="/#/postulate"><span>Postulate</span></a>
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