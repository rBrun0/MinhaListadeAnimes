import { useEffect, useState } from 'react'
import NavBar from '../../components/navbar'
import './style.css'

import axios from 'axios'
import { useNavigate } from 'react-router-dom'



const Home = ({setAnimeInfo}) => {

  const navigate = useNavigate()

  const handleSearch = (anime) => {
    setAnimeInfo(anime)
    navigate('/Info')
  }

  const [animeData, setAnimeData] = useState([]);

  const getAnime = async () => {
    const res = await axios.get('https://api.jikan.moe/v4/anime');
    const data = res.data.data
    console.log(data)
    setAnimeData(data)
  }

  const filteredAnime = (name) => {
    const animeFiltered = [];

    if(name == ""){
      getAnime()
    }

  
    for(let i in animeData){
      if(animeData[i].title.includes(name))
      animeFiltered.push(animeData[i])
    }
    setAnimeData(animeFiltered)
    
  }

  useEffect(() => {
    getAnime()
  }, [])

  return (
    <div className='homeContainer'>
      <NavBar filteredAnime={filteredAnime} />

      <main className='mainContainer'> 

        {

         filteredAnime < 0 ? filteredAnime.map((anime, index) => (
            <div className='animeCard' key={index}>
          <div className='imageContainer'><img src={anime.images.jpg.image_url} alt="" /></div>
          <p className='animeName'>{anime.title}</p>
        </div>
          )) :
          animeData.map((anime, index) => (
            <div className='animeCard' key={index} onClick={() => handleSearch(anime)}>
          <div className='imageContainer'><img src={anime.images.jpg.image_url} alt="" /></div>
          <p className='animeName'>{anime.title}</p>
        </div>
          )) 
        
       } 
        
      </main>
    </div>
  )
}

export default Home