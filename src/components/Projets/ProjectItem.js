import React, { Component } from 'react'
import { Col, Container, Row } from "react-bootstrap";


export default class ProjectItem extends Component {

    state = { showInfo: false}
    handleInfo= () => {
        this.setState({
            showInfo: !this.state.showInfo
        })
    }


    render() {
        
        let {name,subTitle, languages, languagesIcons,source,info,picture} = this.props.item

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
                                <span className="moreInfos" onClick={this.handleInfo} >
                                    <i className="fas fa-plus-circle "></i>
                                </span>
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
                                            <h2>{source}</h2>
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