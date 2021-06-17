import axios from 'axios';

import {apiUrl} from './config';

export const registerMaterial = async ({name,descripcion,img}) =>{
    console.log(name);
    try{
        const response = await axios({
            url: `${apiUrl}/materiales/`,
            method: 'POST',
            headers:{
                'Content-Type': 'application-json',
            },
            data: JSON.stringify({
                name,
                descripcion,
                img
            }),
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