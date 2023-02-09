import React,{useState} from "react";
import MovieCard from "./MovieCard";
import Filter from './Filter';
import User from './User';
import Movies from "../data/data.json"
function MovieList(){
    const [search,setsearch] = useState("");
    const [min,setmin] = useState("");
    const [max,setmax] = useState("");
    const [title,settitle] = useState("");
    const [descr,setdescr] = useState("");
    const [rating,setrating] = useState("");
    const [imagefile,setimagefile] = useState("");
    const [image,setimage] = useState("");
    const [add,setadd] = useState(Movies);
    function handleclick(){
        setadd([...add,{title,image:imagefile,descr,rating}]);
        settitle("");
        setdescr("");
        setrating("");
    }
    return(
            <div>
            <div className="bg-red-500 h-12 text-center text-xl pt-3 ">Movies</div>
            <User settitle = {settitle} setdescr = {setdescr} setrating = {setrating} setimage = {setimage} title = {title} descr = {descr} rating = {rating} image = {image} setimagefile={setimagefile} handleclick={handleclick} />
            <Filter setsearch = {setsearch} setmax={setmax} setmin={setmin} search={search} max={max} min={min} />
                <div className="mt-5 ml-5">
                {
                    add
                    .filter(movie=>{return (search.toLowerCase()==='' ? movie : movie.title.toLowerCase().includes(search))})
                    .filter(movie=>{return (min==="" || max==="" ? movie : movie.rating>min && movie.rating<max)})
                    .map(movie => <div key={movie.id}><MovieCard 
                    id = {movie.id}
                    title={movie.title}
                    image={movie.image}
                    descr={movie.descr}
                    rating={movie.rating}
                    /></div>)
                }
                </div>
            </div>
    )
}
export default MovieList