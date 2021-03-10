import React, {   useState  } from 'react';
import NavItems from './NavData'
import '../../styles/Navbar.css'


const Items = function(){ 
    return(
    NavItems.map((items,index) => 
    {
        return(
            <li key={index}>
            <a className="navItem nav-links" href={items.url}>
                <i className={items.icon}></i>
                {items.title}
            </a>
            </li>
        )
    }) 
    )
}


const Navbar = () => {
    const [clicked, setclicked] = useState(false)

    const handleClickMobile = () =>{setclicked(!clicked)}         

    return (
        <nav className="NavbarItems">
            <h1 className="navbarTitle"> ANTOINE MARIONNEAU</h1>
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