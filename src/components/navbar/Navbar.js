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
            <Container>
                <Row>
                    <Col xs={5}>
                    <NavLink exact to="/"><h1 className="navbarTitle"> ANTOINE MARIONNEAU</h1></NavLink>
                    
                    </Col>
                    <Col xs={{span:6 , offset: 1}}>
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