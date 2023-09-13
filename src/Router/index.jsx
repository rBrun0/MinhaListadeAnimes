import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from '../pages/home'
import Info from "../pages/info"
import { useState } from "react"

const Router = () => {

    const [animeInfo, setAnimeInfo] = useState()

  return (

    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home setAnimeInfo={setAnimeInfo}/>}/>
        <Route path="/Info" element={<Info animeInfo={animeInfo}/>}/>
      </Routes>

    </BrowserRouter>
  )
}

export default Router