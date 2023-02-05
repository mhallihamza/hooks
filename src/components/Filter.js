import React,{useState} from "react";
function Filter({setsearch,setmax,setmin,search,max,min}){
    const [showRating, setShowRating] = useState(false);
    const [showTitle, setShowTitle] = useState(false);
    const Rating = () => setShowRating(!showRating);
    const Title = () => setShowTitle(!showTitle);
    const ShowRat = ()=> (
            <div>
                <div>Rating</div>
                <div className="inline-flex">
                    <div>
                    <label>Min</label>
                    <input type="number" onChange={(e)=>setmin(e.target.value)}></input>
                    </div>
                    <div>
                    <label>Max</label>
                    <input type="number" onChange={(e)=>setmax(e.target.value)}></input>
                    </div>
                </div>
              </div>
        );
const ShowTit = () => (
    <div>
        <div>Title</div>
        <input type="text" value={search} onChange={(e)=>setsearch(e.target.value)} placeholder="Search"></input>
    </div>
)   
    return (
        <div className="ml-5">
            <div className="ml-20 font-bold">Filtres</div>
            <div className="inline-flex">
              <div className="ml-5 mr-5 bg-slate-500 w-20 border-2 border-solid border-black rounded text-center"><button onClick={Rating}>Rating</button></div>
              <div className="bg-slate-500 w-20 border-2 border-solid border-black rounded text-center"><button onClick={Title}>Title</button></div>  
              </div>
              <div> { showRating  ? ShowRat(): null }</div>
              <div> { showTitle ? ShowTit() : null }</div>
        </div>
    )
}
export default Filter