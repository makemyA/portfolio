import React, { Component } from 'react';
import styled from 'styled-components';
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
class Presentation extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        const BoxText= styled.div`
            display:  flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            background: url('https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260') no-repeat;
            background-size: cover;
            background-attachment: fixed;
            background-position: center;
            border-bottom: .2px solid rgba(0, 0, 0, 0.2);
            z-index: 2; 
            width: 100vw;
            height: 100%;
            margin: 0 auto; 
            .text{
                color: white;;
                opacity: 1;
                font-size: 0.8em;
                width: 80%;
            }
            .text.left{
                text-align: center;
            }
            ul{
                display: flex;
                list-style: none;
                flex-direction: row;
                z-index:1;
                font-size: 0.5em;
                padding-bottom: 10px;
                margin-left:1em;
                justify-content: center;
                li a{
                    position: relative;
                    text-decoration: none;
                    color :black;
                    margin: none;
                    margin-left: 0.5em;
                    margin-right: 0.5em;
                    background: white;
                    font-size: 1em;
                }
                li a::after{
                    z-index:10000;
                    content: "";
                    position: absolute;
                    top: 10px;
                    left: 1px;
                    width: 35px;
                    height: 1px;
                    transform: scaleX(1);
                    transform-origin: bottom left;
                    background: black;
                    z-index: -1;
                    transition: transform 0.3s;
                }
                li a:hover::after{
                    z-index:10000;
                    transform: scaleX(0);
                }
            }
    
        `
        return (
            <BoxText className='box-text'>
                <p className='text left'>
                    "Hi, I'm Paul. Im a full stack Web Developer especially interested by JavaScript environment."
                </p>
                <ul>
                    <li>let</li>
                    <li> <Link to='contact' spy={true} smooth={true}><a href='#section2'>Contact Me</a></Link></li>
                    <li>for any questions or work idea</li>
                </ul>    
            </BoxText>
          );
    }
}
 
export default Presentation;