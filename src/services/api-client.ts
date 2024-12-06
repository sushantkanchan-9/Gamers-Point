import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    // params: {
    //     // Mosh key:'c7b18323a47d40c394ea5b019646b1f5'
    //     //Bomber 
    //     //key : 'd031971bfb8e46bfaf27192d5fbc536d'
    //     //19906
    // }
    params: {
        //key:'d031971bfb8e46bfaf27192d5fbc536d',
    }
})