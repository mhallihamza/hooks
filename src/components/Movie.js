import React from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import Movies from "../data/data.json"
import {Swiper,SwiperSlide} from 'swiper/react'
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

function Movie() {
  const navigate = useNavigate();
    const {id} = useParams();
  return (
    <div class="mt-9 mx-[20rem]">
        <div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
        <img className="w-[50rem] h-[350px]" src={Movies[id].image} alt={Movies[id].title}></img>
        </SwiperSlide>
        <SwiperSlide>
        <iframe width="760" height="345" src={Movies[id].video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </SwiperSlide>
        </Swiper>
        </div>
        <h1 className="text-2xl font-bold text-center mt-4">{Movies[id].title}</h1>
        <p className='text-xl mt-7 text-center'>{Movies[id].descr}</p>
        <button onClick={()=>navigate('/')} className="text-cyan-700 text-xl ml-[40%] mt-4 underline">Go to Home page</button>

    </div>
  )
}

export default Movie

