import axios from "axios"

const BASE_URL = "https://api.themoviedb.org/3"
// const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ODE4Yzk5ZGYyZWUyYjAwYjA1NWE0YWRiMDAyMjMwOSIsInN1YiI6IjY0ZmY1MWYzZWZlYTdhMDExYWI3ODIzNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MdyUFtmObYjpOLdwBym98tbnlIOxAa2xViNV62h9w68"

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,

};

export  const fetchDataFromApi = async (url, params)=>{
    try{
        const {data}= await axios.get(BASE_URL + url, {
            headers,
            params
        })
        return data;
    }catch(err){
        console.log(err);
        return err;
    }
}