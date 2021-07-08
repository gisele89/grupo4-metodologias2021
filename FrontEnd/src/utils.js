import Header from "./components/Header";

let userName = '';

export const parseRequestUrl = () => {
    const url = document.location.hash.toLowerCase();
    const request = url.split("/");
    return{
        resource: request[1],
        id: request[2],
        action: request[3],
    };
};

export const rerender = async (component) => {
    document.getElementById("main-container").innerHTML = await component.render();
    await component.after_render();
};

export const redirectUser = async()=>{
    document.location.hash = '/registro-exitoso'
}

export const userData = async(nombre)=>{
    
    userName = nombre
    document.getElementById("header-container").style.backgroundColor= '#212529';
    document.location.hash = '/materiales'
    
}

export const getUser = ()=>{
    return userName;
}

export const redirigir = async()=>{
    document.location.hash = '/iniciar-sesion'
}