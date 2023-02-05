import React,{useState} from "react";
export default function User({settitle,setdescr,setrating,setimage,title,descr,rating,handleclick}){
    const [show,setshow] = useState(false);
    function AddMovie(){
          return(
            <div className="ml-5 mt-5">
                <h1 className="font-bold mb-2">Add Your Favorite Movie</h1>
                <input onChange={(e)=>settitle(e.target.value)} value={title} placeholder="Enter Title" required></input>
                <input value={descr} onChange={(e)=>setdescr(e.target.value)} placeholder="Enter Description" required></input>
                <input value={rating} onChange={(e)=>setrating(e.target.value)} placeholder="Enter Raring" required></input>
                <label htmlFor="img" >Upload Image</label>
                <input className="hidden" type="file" id="img" name="img" onChange={(e)=>setimage(e.target.files[0])}  accept="image/*"></input>
                <button className="ml-8 w-32 bg-red-500 rounded text-gray-50" type="submit" onClick={handleclick}>Valider</button>
            </div>
          )
    }
    return (
        <div>
        <div className="flex justify-center">
            <button onClick={()=>setshow(!show)} className="border-2 border-yellow-800 border-solid bg-lime-600 rounded mt-8">Add Movie</button>
        </div>
        {show ? AddMovie() : null}
        </div>
    )
}