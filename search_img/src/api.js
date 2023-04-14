import axios from "axios";
const searchImages=async(term)=>{
   const response=await axios.get("https://api.unsplash.com/search/photos",{
        headers:{
         Authorization:"Client-ID toJRomPatwWs42v7J-NgVg43EWu4FHCL2U94Kpid79A"
        },
        params:{
           query:term
        },
    });
    return response.data.results;
};
export default searchImages;