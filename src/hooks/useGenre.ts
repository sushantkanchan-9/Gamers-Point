//import useData from "./useData";
import genresJson from "../data/genreJson"


export interface Genre {
    id: number;
    name: string;
    image_background : string;
}

//#region || OLD LOGIC || 
// const useGenre =() => {
//     const [genre, setGenre] = useState<Genre[]>([]);
//     const [error, setError] = useState("");
//     const [isLoading, setIsLoading] = useState(false);
  
//     useEffect(() => {

//         const controller = new AbortController();
//         // url : https://api.rawg.io/api/genres
//         setIsLoading(true);
//       apiClient
//         .get<FetchGenreResponse>("/genres", {signal : controller.signal})
//         .then((res) => {
//           setGenre(res.data.results);
//           setIsLoading(false);
//         })
//         .catch((err) =>{
//             if (err instanceof CanceledError) return;
//             setError(err.message)
//             setIsLoading(true)
//         });

//         return () => controller.abort();

//     }, []);

//     return { genre , error, isLoading};
// };
//#endregion

//const useGenre = () => useData<Genre>('/genres');
const useGenre = () => ({ data: genresJson, isLoading: false, error:null});

export default useGenre;