import React, { Component } from 'react'
import Styled from 'styled-components';
import Roll from 'react-reveal/Roll';
import Fade from 'react-reveal';


const LanderStyle = Styled.div`
background-color: black;
width: 100%;
height: 600px;
margin-top: -37px;

#landerHeader {
font-family: 'Charmonman';
font-size: 55px;
color: white;
}
#guitarLogo {
    width: 250px;
    height: 250px;
    margin-top: -30px;
}
#landerText{
    font-family: 'Quattrocento';
    color: white;
    font-size: 45px;
}
`
export default class Lander extends Component {
    render() {
        return (
            
                <LanderStyle>
                    <Fade down>
                    <h1 id="landerHeader">Guitar Lessons with Cody</h1>
                    </Fade>
                    <Roll up>
                    <img id="guitarLogo" src="https://i.imgur.com/9S0zpwZ.gif" alt="guitarlogo"/>
                    </Roll>
                    <Fade up>
                    <p id="landerText">Learn guitar by mastering songs from the 60's to today</p>
                    </Fade>
                </LanderStyle>
            
        )
    }
}
