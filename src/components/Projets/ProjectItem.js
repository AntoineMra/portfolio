import React, { Component } from 'react'
import { Col, Container, Row , Button} from "react-bootstrap";


export default class ProjectItem extends Component {

    state = { showInfo: false}
    handleInfo= () => {
        this.setState({
            showInfo: !this.state.showInfo
        })
    }


    render() {
        
        let {name,subTitle, languagesIcons,source,info,picture} = this.props.item

        return (
                <div className="projects">
                    <Container>
                        <Row>
                            <Col md={4}>
                                <h1 className="projectName">{name}</h1>
                                <h4 className="projectSubTitle">{subTitle}</h4>
                                <div className="icons">
                                    {languagesIcons.map(icon => <i key={icon} className={icon + " fa-2x"}></i>)}
                                </div>
                                <Button variant="dark" className="btnMore" onClick={this.handleInfo}> En savoir + </Button>
                            </Col>
                            <Col md={8}>
                                <img className="projectImg" onClick={this.handleInfo} src={picture} alt="projectPic"/>
                            </Col>
                        </Row>
                        

                        {
                            this.state.showInfo && (
                                <div className="showInfo">
                                    <div className="infoContent">
                                        <div className="head">
                                            <h1>{name}</h1>
                                        </div>
                                        <div className="body">
                                            <p>{info}</p>
                                        </div>
                                        <div>
                                            <a href={source} target="_blank" rel="noreferrer" className="legend">{source}</a>
                                            <Button className="btnMore" variant="outline-light" onClick={this.handleInfo}> Fermer</Button>
                                        </div>
                                    </div>
                                </div>
                            )
                        }

                    </Container>
                    
                </div>
           
        )
    }
}