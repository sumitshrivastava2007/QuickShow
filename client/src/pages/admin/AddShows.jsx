import React, { useEffect,useState } from 'react'
import { dummyShowsData } from '../../assets/assets';
import Loading from '../../components/Loading';

const AddShows = () => {
    const currency = import.meta.env.VITE_CURRENCY
    const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [dateTimeSelection, setDateTimeSelection] = useState({});
    const [dateTimeInput, setDateTimeInput] = useState("");
    const [showPrice, setShowPrice] = useState("");

    const fetchNowPlayingMovies = async() =>{
        setNowPlayingMovies(dummyShowsData);
    }

    useEffect(()=>{
        fetchNowPlayingMovies();
    },[])
  return nowPlayingMovies.length>0 ? (
    <>
        <p className='mt-10 text-lg font-medium'>Now playing Movies</p>
        <div className='overflow-x-auto pb-4'>
            <div className='group flex flex-wrap gap-4 mt-4 w-max'>
                {nowPlayingMovies.map((movie)=>(
                    <div key={movie.id} className='relative max-w-40 cursor-pointer group-hover:not-hover:opacity-40 hover:-translate-y-1 transition duration-300'>
                        <div>
                            <img src="" alt="" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>
  ) : <Loading/>
}

export default AddShows
