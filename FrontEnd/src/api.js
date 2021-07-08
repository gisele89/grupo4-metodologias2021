import axios from 'axios';

import {apiUrl} from './config';

export const registerMaterial = async ({nombre,descripcion,img}) =>{
    
   try{
        const response = await axios({
            url: `${apiUrl}/materiales/nuevo`,
            method: 'POST',
            headers:{
                'Access-Control-Allow-Origin': 'Access-Control-Allow-Origin'
            },
            data: {
                nombre,
                descripcion,
                img
            },
        });
        if(response.status !== 200){
            console.log(response)
            throw new Error(response.data.message);
        }
        return response;
    }
    catch(err){
        console.log(err);
        return {error: err.response || err.message}
    }
};


export const getMaterial = async () =>{
    try{
        const response = await axios({
            url: `${apiUrl}/materiales/`,
            method: 'GET',
            headers:{
                'Access-Control-Allow-Origin': 'Access-Control-Allow-Origin',
            },
        });
        console.log(response)
        if (response.status !== 200) {
            
            throw new Error(response.data.message);
        }
        console.log(response);
        return response.data;
    }catch (err) {
        console.log(err);
        return { error: err.response.data.message || err.message };
        }
};


export const deleteMaterial = async (id) =>{
    try{
        const response = await axios({
            url: `${apiUrl}/materiales/${id}`,
            method: 'DELETE',
            headers:{
                'Content-Type': 'application-json',
            },
        });
        if (response.status !== 200) {
            throw new Error(response.data.message);
        }
        return response.data;
        
        }catch (err) {
        return { error: err.response.data.message || err.message };
        }
        
}

export const updateMaterial = async ({nombre, descripcion,  id}) =>  {
    try{
        console.log(id)
        const response = await axios({
            url: `${apiUrl}/materiales/${id}`,
            method: 'PUT',
            headers: {
                'Access-Control-Allow-Origin': 'Access-Control-Allow-Origin',
            },
            data:  {    
                nombre,
                descripcion,
                
            },
        });
        if(response.status !== 200){
            throw new Error(response.data.message);
        }
        return response.data;
    }
    catch(err){
        console.log(err);
        return {error: err.response.data.message || err.message}
    }
};

export const register = async({nombre, telefono, direccion, email, contrasena})=>{
    console.log('creando secretaria')
    console.log(contrasena);
    try {
        const response = await axios ({
            url:  `${apiUrl}/usuario/`,
            method: 'POST',
            headers:{
                'Access-Control-Allow-Origin': 'Access-Control-Allow-Origin'
            },
            data:{
                contrasena,
                direccion,
                email,
                nombre,
                telefono
            }
        });
        if(response.status !== 200){
            console.log(response)
            throw new Error(response.data.message);
        }
        return response;
    } catch (err) {
        console.log(err);
        return {error: err.response || err.message}
    }
}

export const logIn = async ({email, contrasena})=>{
    console.log(email);
    console.log(contrasena);
    try {
        const response = await axios({
            url: `${apiUrl}/usuario/autenticacion/`,
            method: 'POST',
            headers:{
                'Access-Control-Allow-Origin': 'Access-Control-Allow-Origin'
            },
            data:{
                contrasena,
                email            
            }
        });
        if(response.status !== 200){
            console.log(response)
            throw new Error(response.data.message);
        }
        return response;
    } catch (err) {
        console.log(err);
        return {error: err.response || err.message}
    }
}

export const altaCartonero = async({apellido, direccion, dni, nacimiento, nombre, vehiculo}) =>{
    try {
        const response = await axios({
            url: `${apiUrl}/cartonero/`,
            method: 'POST',
            headers:{
                'Access-Control-Allow-Origin': 'Access-Control-Allow-Origin'
            },
            data:{
                apellido,
                direccion,
                dni,
                nacimiento,
                nombre,
                vehiculo            
            }
        });
        if(response.status !== 200){
            console.log(response)
            throw new Error(response.data.message);
        }
        return response;
    } catch (err) {
        console.log(err);
        return {error: err.response || err.message}
    }

}


export const getCartonero = async()=>{
    try{
        const response = await axios({
            url: `${apiUrl}/cartonero/`,
            method: 'GET',
            headers:{
                'Access-Control-Allow-Origin': 'Access-Control-Allow-Origin',
            },
        });
        console.log(response)
        if (response.status !== 200) {
            
            throw new Error(response.data.message);
        }
        console.log(response);
        return response.data;
        }catch (err) {
            console.log(err);
            return { error: err.response.data.message || err.message };
        }
}

export const deleteCartonero = async(id)=>{
    try{
        const response = await axios({
            url: `${apiUrl}/cartonero/${id}`,
            method: 'DELETE',
            headers:{
                'Content-Type': 'application-json',
            },
        });
        if (response.status !== 200) {
            throw new Error(response.data.message);
        }
        return response.data;
        
        }catch (err) {
        return { error: err.response.data.message || err.message };
        }
        
}

export const updateCartonero = async({apellido, direccion, dni, nacimiento, nombre, vehiculo, idCartonero} ) =>{
    try{
        const response = await axios({
            url: `${apiUrl}/cartonero/${idCartonero}`,
            method: 'PUT',
            headers: {
                'Access-Control-Allow-Origin': 'Access-Control-Allow-Origin',
            },
            data:  {    
                apellido,
                direccion,
                dni,
                nacimiento,
                nombre,
                vehiculo 
            },
        });
        if(response.status !== 200){
            throw new Error(response.data.message);
        }
        return response.data;
    }
    catch(err){
        console.log(err);
        return {error: err.response.data.message || err.message}
    }
}