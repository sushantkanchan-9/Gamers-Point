import usePlatforms from "./usePlatforms";

const usePlatForm = (id?:number) => {
    const {data:platform} = usePlatforms();
    return platform?.results.find(p => p.id === id)
}

export default usePlatForm