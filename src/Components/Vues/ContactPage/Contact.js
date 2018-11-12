import React, { Component } from 'react';
import styled from 'styled-components';
class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
          }
    }

    handleChange=(event)=>{
        const target= event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value,
        })
    }
    handleSubmit=(event)=>{
        console.log("submit en cours");
        alert('Bonjour '+ this.state.name +' '+ this.state.firstname);
        alert("Votres message est: "+this.state.message);
        alert("Nous répondrons au sujet: "+this.state.subject+" à l'adresse mail suivante: "+ this.state.email);
        console.log(this.state.message);
        event.preventDefault();
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
            }
            input[type="submit"]{
                    margin: 0;
                    font-size: 1em;
                    padding: 0;
                    line-height: 100%;
                    border: none;
                    background: none;
                    text-decoration: none;
            }
            `
            const Title = styled.h2`
                font-size: 0.6em;
                margin-bottom: 2em;
                font-family: 'Share Tech', sans-serif;
            ` 
        return (
            <div className='container-form'>
                <Title>Please, fill the form with a subject. I will answer you as soon as possible</Title>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} name='name' value= {this.state.name} className='text-fill' type="text"  placeholder='Enter your Name'/>
                    <input onChange={this.handleChange} name='firstname' value={this.state.firstname} className='text-fill' type="text" placeholder='Enter your firstname'/>
                    <input onChange={this.handleChange} name='email' value={this.state.email} className='text-fill' type="text" placeholder= 'Enter your e-mail'/>
                    <input onChange={this.handleChange} name='subject' value={this.state.subject} className='text-fill' type="text" placeholder='Enter a subject'/>
                    <textarea onChange={this.handleChange} name='message' value={this.state.message}  cols="40" rows="3"></textarea>
                    <Button><input type='submit' value='Submit'/></Button>
                </form>
            </div>
          );
    }
}
 
export default Contact;