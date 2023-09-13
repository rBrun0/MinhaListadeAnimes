import { Navigate, useNavigate } from 'react-router-dom'
import logo from '../../assets/th.jpg'
import './style.css'

const NavBar = ({filteredAnime, hideSearch}) => {

    const navigate = useNavigate()

  return (

    !hideSearch ?
    <div className='navbarContainer'>
        <div className='logoContainer'  onClick={() => navigate("/")}>
            <img src={logo} alt="logo"/>
        </div>

        <div className='navContainer'>
            <input type="text"  className='inputText' onChange={(e) => filteredAnime(e.target.value)}/>
        </div>
    </div> : 

<div className='navbarContainer'>
<div className='logoContainer'>
    <img src={logo} alt="logo" />
</div>
</div>


  )
}

export default NavBar