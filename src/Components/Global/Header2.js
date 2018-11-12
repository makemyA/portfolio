import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
class Header2 extends Component {
    goBack= ()=> {
        window.history.back()
    }
    componentWillUnmount(){
    }
    render() { 
        const Header = styled.div `
            font-size: 1em;
            display: flex;
            justify-content: space-between;
            align-items: center;
            width:100vw;
            height: 8vh;
            border-bottom: 0.2px solid rgba(0, 0, 0,0.2);
            color:black;
            background-color:white;
            font-family: caveat;
            font-weight:700;
            .box-left{
                display:flex;
                justify-content:space-evenly;
                align-items:center;
                width: 20%;
                color:black;
                h1{
                    font-size: 1em;
                    color:black;
                    text-decoration:none;
                    font-weight:700;
                }
                a{
                    text-decoration:none;
                }
                #arrow-left{
                    cursor : pointer;
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
                        <i onClick={this.goBack} id='arrow-left' class="fas fa-arrow-left"></i>
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