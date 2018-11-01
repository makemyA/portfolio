//PortfolioPage
/* import image1 from '../HomePage/Assets/project1.jpg' */
import React, { Component } from 'react';
import {bdd} from '../HomePage/DataCarousel';
import styled from 'styled-components';
import {Link} from 'react-router-dom'
class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {bdd},
          }
    }
    /* mapBDD = bdd.map((item)=>
    <div className={'box box'+item.id}><img src={item.url} alt={"project"+item.id}/>
        <div className='box-over'>
            <h4>{item.title}</h4>
        </div>
        <div className={'box::after'}></div>
    </div>
        
    ); */
    
    render() {
        const Container = styled.div`
            z-index: 100;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            margin-top: 1em;
            margin: 0 auto;
            background-color: transparent;
            width: 400px;  
        `
       
        const Over = styled.div`
            z-index: 0;
            position: relative;
            display:flex;
            justify-content:center;
            align-items:center;
            flex-wrap: wrap;
            color:black;
            font-size: 0.8em;
            width: 50%;
            height: 150px;
            background: ${props => props.background};
            background-size: cover;
            .box-title{
                z-index:1;
                display:flex;
                flex-direction: column;
                justify-content:flex-evenly;
                align-items:center;
                h2{
                    color: white;
                    background-color: rgba(0, 0, 0,0.2);
                    padding: 0.1em;
                    margin:1em 
                    font-size: 0.9em;
                    text-align: center;
                    
                }
                h3{
                    padding:0.1em;
                    font-size: 0.8em;
                    text-align: center;
                    color: white;
                    background-color: rgba(0, 0, 0,0.2);
                }
                a{
                    margin-bottom:0.5em;
                    position: relative;
                    cursor: pointer;
                    background-color: transparent;
                    font-size: 0.7em;
                    text-decoration: none;
                    border: none;
                    width: 50px;
                    text-align: center;
                    color: black;
                    ::after{
                        content:"";
                        position: absolute;
                        background: black;
                        top:100%;
                        left:0;
                        width:100%;
                        height: 0.5px;
                        z-index: 0;
                        transform: scaleX(1);
                        transform-origin: bottom left;
                        transition: transform 0.3s;
                    }
                    :hover::after{
                        transform: scaleX(0);
                    }
                }
            }
           
            ::after{
                content: '';
                color:white;
                text-align: center;
                position: absolute;
                top:0;
                left:0;
                width:100%;
                height:100%;
                transform: scaleY(0);
                filter: blur(1px);
                background: ${props => props.background};
                background-size: cover;
                transform-origin: center;
                transition: transform 0.2s ease-in;
            }
            :hover::after{
                transform: scaleY(1);
            }
        `
        const mappBDDHover= bdd.map((item)=>{
            console.log(item.url);
            return(
        <Over background={'url('+item.url+') no-repeat'}>
            <div className='box-title'>
                <h3>{item.cat}</h3>
                <h2>{item.title}</h2>
                <Link to={'/project/'+item.id}>See more</Link>
           </div>
        </Over>)
        });
        return (
            <Container>
                {mappBDDHover}
                {mappBDDHover}
            </Container>
          );
    }
}
 
export default Portfolio;