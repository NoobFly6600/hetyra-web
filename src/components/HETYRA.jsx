import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import HETYRA_Navbar from "./nav/HETYRA_Navbar";
import GlobalContext from "../contexts/GlobalContext";

import { Col, Container, Row } from 'react-bootstrap';

export default function HETYRA() {


    return (
        <div style={{backgroundColor: '#f8f9fa'}}>
            <HETYRA_Navbar />
            <br></br>
            <div style={{backgroundColor: '#f8f9fa'}}>
                <GlobalContext.Provider>
                    <Outlet />
                </GlobalContext.Provider>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div>
                <Container 
                    fluid={true} 
                    style={{
                        position:'fixed', 
                        backgroundColor: '#DEDFE4', 
                        bottom:'0', 
                        padding: '10px', 
                        textAlign: 'center', 
                        height:'70px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <div>
                        <span>©2024 HETYRA All Rights Reserved</span>
                        <span style={{ margin: '0 10px' }}>|</span>
                        <a href="/PrivacyPage" style={{ color: '#666', textDecoration: 'none' }}>Privacy Policy</a>
                        <span style={{ margin: '0 10px' }}>|</span>
                        <a href="/PrivacyPage#rules" style={{ color: '#666', textDecoration: 'none' }}>Rules Center</a>
                    </div>
                </Container>
            </div>
        </div>
    );
}
