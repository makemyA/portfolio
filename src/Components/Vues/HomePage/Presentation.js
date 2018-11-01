import React, { Component } from 'react';
import styled from 'styled-components';

class Presentation extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        const BoxText= styled.div`
            position: relative;
            border-bottom: .5px solid rgba(0, 0, 0, 0.1);
            z-index: 2; 
            width: 70%;
            margin: 0 auto;
            .text{
                color: $primary;
                opacity: 1;
                font-size: 0.5em;
                margin-bottom:2em;
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
   /*  .box-text{
        position: relative;
        border-bottom: .5px solid rgba(0, 0, 0, 0.5);
        z-index: 2; 
        width: 100%;
        margin: 0 auto; 
        .text{
            color: $primary;
            opacity: 1;
            font-size: 0.5em;
            margin-bottom:2em;
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
        } */
   
         
        return (
            <div className='box-text'>
                <p className='text left'>
                    "Hi, I'm Paul. Im a full stack Web Developer especially interested by JavaScript environment."
                </p>
                <ul>
                    <li>let</li>
                    <li><a href="">Contact me</a></li>
                    <li>for any questions or work idea</li>
                </ul>    
            </div>
          );
    }
}
 
export default Presentation;