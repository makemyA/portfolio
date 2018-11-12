import React, { Component } from 'react';
import styled, { keyframes, injectGlobal } from 'styled-components';
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import './Assets/LibreBaskerville-Regular.ttf'
class Presentation extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        
        const BoxText= styled.div`
            position: relative;
            display:flex;
            justify-content: center;
            flex-direction: row;
            align-items: center;
            background: url('https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260') no-repeat;
            background-size: cover;
            background-attachment: fixed;
            background-position: center;
            border-bottom: .2px solid rgba(0, 0, 0, 0.2);
            filter: sepia(10%);
            z-index: 2; 
            width: 100vw;
            height: 100%;
            margin: 0 auto;
            ::after{
                content:"";
                position: absolute;
                z-index:-1;
                height:100%;
                width:100%;
                background: rgba(36, 41, 46,0.5)
            }
            .box-title{
                position: absolute;
                display: flex;
                justify-content:flex-start;
                align-items:center;
                flex-wrap: wrap;
                line-height:0.4em;
                width: 7.4em;
                margin: 0 auto;
                border-radius: 5px; 
            }  
        `
        const animatedText = keyframes`
            from {
               width:0;
            }
            to {
                width:100%;
            }
        `;
        const blinkCaret = keyframes`
            from, to { border-color: transparent }
            50% { border-color: white; }
        
        `
        const AnimatedText= styled.p`
            text-align: left;
            color:white;
            padding:0;
            border-right: .15em solid transparent;
            font-size: 0.35em;
            overflow: hidden;
            white-space: nowrap;
            flex-wrap: nowrap;
            font-family: 'Share Tech', sans-serif;
            margin: 0 0.5em;
            &.text-1{
                width:0;
                animation:  ${animatedText} 3.5s 0s steps(100, end) forwards;
                           
            }
            &.text-2{
                width:0%;
                height: 2em;
                animation:  ${animatedText} 3.5s 3.5s steps(100, end) forwards;        
            }
            &.text-3{
                animation:  ${animatedText} 3.5s 7s steps(100, end) forwards;        
                width:0%;
                margin-top: 2em;
            }
            a{
                position: relative;
                text-decoration: none;
                color :#24292E;
                margin-left: 0.5em;
                margin-right: 0.5em;
                background:white;
                width: 100%;
                font-size: 1em;
                padding: 0;
                transition: opacity 1s;
                :hover{
                    background: black;
                    color: white;
                    opacity: 0.8;
                }
            }      
        `;
        return (
            <BoxText className='box-text'>
                <div className='box-title'>
                    <AnimatedText className='text-1'>
                     "Hi, I'm Paul. Im a full stack Web Developer<br/>
                    </AnimatedText>
                    <AnimatedText className='text-2'>
                    especially interested by JavaScript environment."   
                    </AnimatedText>        
                    <AnimatedText className='text-3'>
                       <p>let
                        <Link to='contact' spy={true} smooth={true}>
                            <a href='#section2'>Contact Me</a>
                        </Link>
                        for any questions or work idea  </p> 
                    </AnimatedText>
                    
                </div>
                
            </BoxText>
          );
    }
}
 
export default Presentation;