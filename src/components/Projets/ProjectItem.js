import React, { Component } from 'react'
import { Col, Row } from "react-bootstrap";


export default class ProjectItem extends Component {

    state = { showInfo: false}
    handleInfo= () => {
        this.setState({
            showInfo: !this.state.showInfo
        })
    }


    render() {
        
        let {name, languages, languagesIcons,source,info,picture} = this.props.item

        return (
                <div className="projects">
                    <Row>
                        <Col>
                            <p>{info}</p>
                            <legend>{languages}</legend>
                            <i>{source}</i>
                        </Col>
                        <Col>
                            <h3 className="projectName">{name}</h3>
                            <img className="projectImg" onClick={this.handleInfo} src={picture} alt="projectPic"/>
                            <span className="infos" onClick={this.handleInfo} >
                                <i className="fas fa-plus-circle"></i>
                            </span>
                            <div className="icons">
                                {languagesIcons.map(icon => <i key={icon} className={icon}></i>)}
                            </div>
                        </Col>
                    </Row>
                    

                    {
                        this.state.showInfo && (
                            <div className="showInfo">
                                <div className="infoContent">
                                    <div className="head">
                                        <h2>{name}</h2>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
           
        )
    }
}