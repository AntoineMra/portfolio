import React, { Component } from 'react'
import ProjectItem from "./ProjectItem";
import { portfolioData } from "../../data/portfolioData";
import { Container, Row } from "react-bootstrap";


export default class ProjectList extends Component {

    state = {projects:portfolioData, selectedRadio: ''}
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
    handleRadio = (event) => {
        let radio = event.target.value;
        this.setState({selectedRadio: radio})
    }


    render() {
        let {projects , selectedRadio} = this.state

        return (
            <Container>
                <ul className="radioDisplay">
                    {this.radLang.map(rad =>{
                        return (
                            <li className="radioLang" key={rad.id}>
                                <label className="radLabel" htmlFor={rad.id}> {rad.name} </label>
                                <input  className="radInput" type="radio" name="radio" checked={rad.name === selectedRadio} value={rad.name} id={rad.id} onChange={this.handleRadio} />
                            </li>
                        )
                    }
                    )}

                </ul>
                <Row>
                {
                    projects.filter(proj => selectedRadio === '' || proj.languages.includes(selectedRadio))
                    .map(item => {
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
