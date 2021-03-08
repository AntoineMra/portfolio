import React from 'react';
import NavItems from './NavElem'
import '../../styles/Navbar.css'



const Items = function(){ 
    return(
    NavItems.map((items,index) => {
                return(
                    <li key={index}>
                        <a className="navItem" href={items.url}>
                            <img src={items.img} alt={items.title} />
                            {items.title}
                        </a>
                    </li>
                )
                } ) 
    )
            }

const Navbar = () => {
    return (
        <nav className="NavbarItems">
            <h1 className="navbarTitle"> ANTOINE MARIONNEAU</h1>
            <div className="navbarMenu">
            <ul> 
                <Items/>
            </ul>
            </div>

        </nav>
    );
};

export default Navbar;