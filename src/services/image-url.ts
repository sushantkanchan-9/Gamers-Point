import noImage from '../assets/No-Image-Placeholder.png'
import noImage2 from '../assets/No-Image-Placeholder2.jpg'
const getCroopedIMGUrl = (url: string)=> {

    if (!url) return noImage2;

    const target ='media/'
    const index = url.indexOf(target) + target.length;
    return url.slice(0, index) + 'crop/600/400/'+ url.slice(index);
}
export default getCroopedIMGUrl;