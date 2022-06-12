import Logo from '../Assets/Navbar/logo.png'
import Flag from '../Assets/Navbar/Flag-UAE.svg'
import { FaSearch } from 'react-icons/fa'
import '../Styles/Navigation.css'
import {Link}  from "react-router-dom"

const Navbar = () => {
  return (
    <div className='nav-block'>
        <nav className='navbar navbar-expand-lg cust-nav'>
            <Link to="/">
            <p className='navbar-brand' href="#">
                <img src={Logo} className='nav-logo' alt="" />
            </p>
            </Link>
            <div className='collapse navbar-collapse main-navarea'>
                <ul className='nav-ul-bottom'>
                    <li>
                        <Link to={`/findActivities`}>Find Activities</Link>   
                    </li>
                    <li>
                        <Link to={`/Blog`}>Blog</Link>
                    </li>
                    <li>
                        <Link to={`/kidzappAwards`}>Kidzapp Awards</Link>
                    </li>
                    <li>
                        <Link to={`/kidzappTV`}>Kidzapp TV</Link>
                    </li>
                    <li>
                        <Link to={`/GetInTouch`}>Get In Touch</Link>
                    </li>
                    <li>
                        <Link to={`/GetListed`}>Get Listed</Link>
                    </li>
                </ul>
                <ul className='navbar-nav'>
                    <li>
                        <a href="..">Search By</a>
                    </li>
                    <li>
                        <div>
                            <form style={{position: 'relative'}}>
                                <input type="text" placeholder='search'/>
                                <button><FaSearch /></button>
                            </form>
                        </div>
                    </li>
                    <li>
                        <a href="..">Download App</a>
                    </li>
                    <li>
                        <div style={{position: 'relative'}}>
                            <button>
                                <span>
                                    <img src={Flag} alt="" />
                                     UAE
                                </span>
                            </button>
                        </div>
                    </li>
                    <li>
                        <a href="..">
                            <svg xmlns="http://www.w3.org/2000/svg" width="17.432" height="17" viewBox="0 0 17.432 17"><g transform="translate(-986.329 -2018.263)"><g transform="translate(0.386)"><g transform="translate(990.075 2018.263)" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="1.5"><ellipse cx="4.5" cy="4.499" rx="4.5" ry="4.499" stroke="none"></ellipse><ellipse cx="4.5" cy="4.499" rx="3.75" ry="3.749" fill="none"></ellipse></g><path d="M986.693,2042.5v-2.111a3.95,3.95,0,0,1,3.95-3.95h8.03a3.95,3.95,0,0,1,3.951,3.95v2.111" transform="translate(0 -7.233)" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="1.5"></path></g></g></svg>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar