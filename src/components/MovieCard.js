import React from "react";
import {Link } from "react-router-dom";
export default function MovieCard(props){
    return (
        <div className="flex mb-3">
            <Link to={`/Movie/${props.id}`}><img src={props.image} alt={props.title} className="w-64 h-64"></img></Link>
            <div className="ml-4 mt-4 w-[60%]">
            <h1 className="text-xl font-bold">{props.title}</h1>
            <p className="my-2">{props.descr}</p>
            <p>{props.url}</p>
            <p className="font-bold">{props.rating}/10</p>
            </div>
        </div>
    )
}