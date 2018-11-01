import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
class Header2 extends Component {
    render() { 
        const Header = styled.div `
            font-size: 1em;
            position: fixed;
            z-index:5;
            display: flex;
            justify-content: space-between;
            align-items: center;
            width:100vw;
            height: 8vh;
            border-bottom: 0.2px solid rgba(0, 0, 0,0.2);
            color:black;
            background-color:white;
            .box-left{
                display:flex;
                justify-content:space-evenly;
                align-items:center;
                width: 20%;
                color:black;
                h1{
                    font-size: 0.7em;
                    color:black;
                    text-decoration:none;
                }
                a{
                    text-decoration:none;
                } 
            }
            .menu-media{
                display:flex;
                flex-direction: row;
                justify-content:space-evenly;
                align-items:center;
                width: 10%;
                color: black;
                li a {
                    color: black;
                    font-size: 0.6em;
                }
            } 
        `
        return (
            
                <Header id='header' className='header'>
                    <div className='box-left'>
                        <Link to='/'><i id='arrow-left' class="fas fa-arrow-left"></i></Link>
                        <Link to="/"><h1>makemyA</h1></Link>
                    </div>
                    <ul className='menu-media'>
                        <li><a href="https://www.linkedin.com/in/paul-henrot-makemya/"><i class="fab fa-linkedin"></i></a></li>
                        <li><a href="mailto:henrot.paul@gmail.com"><i class="fas fa-envelope"></i></a></li>
                        <li><a href="https://github.com/makemyA"><i class="fab fa-github-alt"></i></a></li>
                    </ul>
                </Header>
           
          );
    }
}
 
export default Header2;