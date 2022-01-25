import React,{useState} from 'react'
import {MenuItems} from './MenuItems'
import './navbar.css'
import {Button} from './Button'
import {Link} from 'react-router-dom';

function Navbar() {
    const [clicked, setClicked] = useState(false);
    return (
        <nav className='NavbarItems'>
            <h1 className='navbar-logo'>React<i className='fab fa-react'></i></h1>
            <div className='menu-icon' onClick={()=>setClicked(!clicked)}>
                <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                {
                    MenuItems.map((item,index)=>(
                        <li key={index}><Link to={item.url} className={item.cName}>{item.title}</Link></li>
                    ))
                }
            </ul>
            <div className='no'>
                <Link to='sign-up'><Button> SignUp</Button></Link>
            </div>
            
        </nav>
    )
}

export default Navbar
