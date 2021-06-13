import axios from 'axios';

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