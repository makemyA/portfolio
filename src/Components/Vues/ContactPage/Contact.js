import React, { Component } from 'react';
import styled from 'styled-components';
class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        const Button = styled.div`
            position: relative;
            cursor: pointer;
            background-color: transparent;
            z-index: 1;
            font-size: 0.7em;
            text-decoration: none;
            border: none;
            margin-top:1em;
            width: 5em;
            text-align: center;
            color: black;
            ::after{
                content:"";
                color:black;
                opacity:0.9;
                position: absolute;
                background: black;
                top:100%;
                left:0;
                width:100%;
                height: 1px;
                z-index: 0;
                transform: scaleX(1);
                transform-origin: bottom left;
                transition: transform 0.3s;
            }
            :hover::after{
                transform: scaleX(0);
            }`
            const Title = styled.h2`
                font-size: 0.7em;
                margin-bottom: 3em;
            ` 
        return (
            <div className='container-form'>
                <Title>Please, fill the form with a subject. I will answer you as soon as possible</Title>
                <form action="">
                    <input className='text-fill' type="text" placeholder='Enter your Name'/>
                    <input className='text-fill' type="text" placeholder='Enter your firstname'/>
                    <input className='text-fill' type="text" placeholder= 'Enter your e-mail'/>
                    <input className='text-fill' type="text" placeholder='Enter a subject'/>
                    <Button type='submit'>Envoyer</Button>
                </form>
            </div>
          );
    }
}
 
export default Contact;