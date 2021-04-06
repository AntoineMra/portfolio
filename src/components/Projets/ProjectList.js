import React, { Component } from 'react'
import ProjectItem from "./ProjectItem";
import { portfolioData } from "../../data/portfolioData";
import { Container, Row } from "react-bootstrap";


export default class ProjectList extends Component {

    state = {projects:portfolioData}
    radLang = [
        {
            id: 1,
            name: 'PHP'
        },
        {
            id: 2,
            name: 'JavaScript'
        },
        {
            id: 3,
            name: 'React'
        },
        {
            id: 4,
            name: 'CSS'
        }

    ]


    render() {
        let {projects} = this.state

        return (
            <Container>
                <ul className="radioDisplay">
                    {this.radLang.map(rad =>{
                        return (
                            <li className="radioLang" key={rad.id}>
                                <label className="radLabel" htmlFor={rad.id}> {rad.name} </label>
                                <input  className="radInput" type="radio" name={rad.name} id={rad.id}/>
                            </li>
                        )
                    }
                    )}

                </ul>
                <Row>
                    {projects.map(item => {
                        return(
                            <ProjectItem 
                            key={item.id}
                            item={item}
                            />
                        )
                        })
                    }
                </Row>
            </Container>
        )
    }
}
