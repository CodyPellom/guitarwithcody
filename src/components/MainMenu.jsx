import React, { Component } from 'react'
import Styled from 'styled-components';

const MainMenuBackgroundStyler = Styled.div`
background-image: url("https://i.imgur.com/ngCrFAN.png");
background-repeat: no-repeat;
background-size: cover;
background-height: 
width: 100%;
height: 100px;
`
const MenuTextStyler = Styled.div`
padding-top: 35px;

.MenuChoices {

margin-right: 30px;
padding-top: 200px;
padding-left: 50px;
}
`

export default class MainMenu extends Component {
    render() {
        return (
            <MainMenuBackgroundStyler>
                <MenuTextStyler>
                    <a class="MenuChoices" href="#">About Me</a>
                    <a class="MenuChoices" href="#">Lessons</a>
                    <a class="MenuChoices" href="#">Specials</a>
                    <a class="MenuChoices" href="#">Contact</a>
                </MenuTextStyler>
            </MainMenuBackgroundStyler>
        )
    }
}