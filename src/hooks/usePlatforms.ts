//import useData from "./useData";
import platformJson from "../data/platformJson";

interface Platform{
    id: number;
    name: string;
    slug: string;
}

//const usePlatforms = () => useData<Platform>('/platforms/lists/parents');
const usePlatforms = () => ({ data: platformJson, isLoading: false, error:null});

export default usePlatforms;