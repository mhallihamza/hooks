import React,{useState} from "react";
import MovieCard from "./MovieCard";
import Filter from './Filter';
import User from './User';
function MovieList(){
    const [search,setsearch] = useState("");
    const [min,setmin] = useState("");
    const [max,setmax] = useState("");
    const [title,settitle] = useState("");
    const [descr,setdescr] = useState("");
    const [rating,setrating] = useState("");
    const [image,setimage] = useState("");
    const Movies = [
        {
            title : "Avatar: The Way of Water",
            image : "../images/avatar.jpg",
            descr : "Jake Sully lives with his newfound family formed on the extrasolar moon Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Na'vi race to protect their home.",
            rating : 8.9,
        },
        {
            title : "Samaritan",
            image : "../images/samaritan.jpg",
            descr : "A young boy learns that a superhero who was thought to have died after an epic battle twenty-five years ago may in fact still be alive.",
            rating : 5.7
        },
        {
            title : "The Crooked Man",
            image : "../images/crooked.jpg",
            descr : "Singing a nursery rhyme summons a demonic figure known as the Crooked Man. Once you sing the rhyme, everyone in the house is cursed to die by his hands.",
            rating : 3.7
        },
        {
            title : "Plane",
            image : "../images/plane.jpg",
            descr : "A pilot finds himself stuck in a war zone after he is forced to crash-land his commercial jet during a terrible storm.",
            rating : 4.8
        },
        {
            title : "Pelé",
            image : "../images/pele.jpg",
            descr : "Against the backdrop of a turbulent era in Brazil, this documentary captures Pelé’s extraordinary path from breakthrough talent to national hero.",
            rating : 9.7
        }
    ]
    const [add,setadd] = useState(Movies);
    function handleclick(){
        console.log("hi");
        setadd([...add,{title,image,descr,rating}]);
        settitle("");
        setdescr("");
        setrating("");
    }
    return(
            <div>
            <User settitle = {settitle} setdescr = {setdescr} setrating = {setrating} setimage = {setimage} title = {title} descr = {descr} rating = {rating} image = {image} handleclick={handleclick} />
            <Filter setsearch = {setsearch} setmax={setmax} setmin={setmin} search={search} max={max} min={min} />
                <div className="mt-5 ml-5">
                {
                    add
                    .filter(movie=>{return (search.toLowerCase()==='' ? movie : movie.title.toLowerCase().includes(search))})
                    .filter(movie=>{return (min==="" || max==="" ? movie : movie.rating>min && movie.rating<max)})
                    .map(movie => <div key={movie.title}><MovieCard 
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