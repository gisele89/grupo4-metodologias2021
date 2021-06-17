import axios from 'axios';

import {apiUrl} from './config';

export const registerMaterial = async ({name,descripcion}) =>{
    try{
        const response = await axios({
            url: ``,
            method: 'POST',
            headers:{ //cualquier cosa cambiar por heather
                'Content-Type': 'application-json',
            },
            data: {
                name,
                descripcion
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