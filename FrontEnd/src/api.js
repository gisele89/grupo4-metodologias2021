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

                'Content-Type': 'application-json',
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

export const update = async ({name, descripcion, img, id}) =>  {
    try{
        const response = await axios({
            url: `${apiUrl}/materiales/${id}`,
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            data:  {    
                name,
                descripcion,
                img,
            },
        });
        if(response.statusText !== 'OK'){
            throw new Error(response.data.message);
        }
        return response.data;
    }
    catch(err){
        console.log(err);
        return {error: err.response.data.message || err.message}
    }
};