import React, { Component } from 'react';
class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className='container-form'>
                <form action="">
                    <input className='text-fill' type="text" placeholder='Enter your Name'/>
                    <input className='text-fill' type="text" placeholder='Enter your firstname'/>
                    <input className='text-fill' type="text" placeholder= 'Indiquez votre age'/>
                    <input className='text-fill' type="text" placeholder='Indiquez votre adresse email'/>
                    <button className='button' type='submit'>Envoyer</button>
                </form>
            </div>
          );
    }
}
 
export default Contact;