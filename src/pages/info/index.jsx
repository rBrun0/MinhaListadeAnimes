import { useEffect } from 'react'
import NavBar from '../../components/navbar'
import './style.css'
import { useNavigate } from 'react-router-dom'

const Info = ({animeInfo}) => {

  const navigate = useNavigate()

  useEffect(() => {
    if(!animeInfo){
      navigate("/")
    }
  }, [])

  if(!animeInfo){
    return;
  }

  return (
   
    <div>
       <NavBar hideSearch/>

       <div className='animeInformations'>
        <img src={animeInfo.images.jpg.large_image_url} alt="capa-do-anime" />

        <div className='animeGuide'>
        <h1>{animeInfo.title}</h1>
        <p>{animeInfo.synopsis}</p>
        <br />
        <br />
        <p>Episodios: {animeInfo.episodes}</p>
        <p>Popularidade: {animeInfo.popularity}</p>
        <p>Rank: {animeInfo.rank}</p>
        </div>
       </div>


    </div>
  )
}

export default Info