import React, {   useState  } from 'react';
import NavItems from './NavData'
import { NavLink } from "react-router-dom";
import '../../styles/Navbar/Navbar.css'


const Items = function(){ 
    return(
        NavItems.map((items,index) => 
            {
                return(
                    <NavLink exact to={items.url}  activeClassName="navActive">
                        <li key={index}>
                            <i className={items.icon}></i>
                            <span className="navItem nav-links">{items.title}</span>
                        </li>
                    </NavLink>
                )
            }
        ) 
    )
}


const Navbar = () => {
    const [clicked, setclicked] = useState(false)

    const handleClickMobile = () =>{setclicked(!clicked)}         

    return (
        <nav className="NavbarItems">
            <NavLink exact to="/"><h1 className="navbarTitle"> ANTOINE MARIONNEAU</h1></NavLink>
            <div className={clicked ? 'mobileMenuDeployed' : 'mobileMenu'} onClick={handleClickMobile}>
                <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>

            <div className="navbarMenu" >
            <ul className={clicked ? 'navListMobile ' : 'navListWeb'}> 
                <Items/>
            </ul>
            </div>

        </nav>
    );
};

export default Navbar;