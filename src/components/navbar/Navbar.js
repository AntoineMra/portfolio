import React, {   useState  } from 'react';
import NavItems from './NavData'
import { NavLink } from "react-router-dom";
import '../../styles/Navbar/Navbar.css'
import { Col, Container, Row } from 'react-bootstrap';



const Items = function(){ 
    return(
        NavItems.map((items,index) => 
            {
                return( 
                    <NavLink key={index} exact to={items.url}  activeClassName="navActive">
                        {items.isDrop ? ( 
                        <li className="dropdown">
                            <i className={items.icon}></i>
                            <span className="navItem nav-links">{items.title}</span>
                            <div className="dropdown-content">
                                <NavLink exact to="/bts/projets">Projets Scolaires</NavLink>
                                <NavLink exact to="/bts/veille">Veille Technologique</NavLink>
                                <NavLink exact to="/bts/stage">Stage</NavLink>
                            </div>
                        </li> ) 
                        : (                         
                        <li>
                            <i className={items.icon}></i>
                            <span className="navItem nav-links">{items.title}</span>
                        </li> )
                        }

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
            <Container>
                <Row>
                    <Col md={5}>
                    <NavLink exact to="/"><h1 className="navbarTitle"> ANTOINE MARIONNEAU</h1></NavLink>
                    
                    </Col>
                    <Col md={{span:6 , offset: 1}}>
                        <div className={clicked ? 'mobileMenuDeployed' : 'mobileMenu'} onClick={handleClickMobile}>
                            <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                        </div>
                        <div className="navbarMenu" >
                            <ul className={clicked ? 'navListMobile ' : 'navListWeb'}> 
                                <Items/>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </nav>
    );
};

export default Navbar;