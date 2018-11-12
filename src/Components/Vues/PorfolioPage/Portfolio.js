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
            position :relative;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            margin: 2em auto 0 auto;
            background-color: white;
            width: 100vw;  
        `
       
        const FlipBox = styled.div`

            width:30vw;
            height: 18vw;
            font-size: 1em;
            margin:0.2em;
            background: transparent;
            perspective: 1500px;
            ` 
           
        const FlipBoxInner = styled.div`
            position: relative;
            width:100%;
            height:100%
            color:white;
        `    
        const FlipBoxFront = styled.div`
            position: absolute;
            display:flex;
            justify-content:center;
            align-items: center;
            flex-wrap: wrap;
            background: ${props => props.background};
            background-size: cover;
            font-size: 0.6em;
            width:100%;
            height:100%;
            filter: sepia(15%) grayscale(80%);
            transform: scale(1);
            transition: transform 0.3s;
           
            :after {
                position: absolute;
                z-index:-1;
                display:flex;
                justify-content: center;
                align-items:center;
                content:"";
                top:0;
                width:100%;
                height:100%;
                background: rgba(0,0,0,0.2);
                background-size: cover;
                opacity:1;
                font-size: 0.6em;
            }
            :hover{
                transform: scale(1.02);
                filter: grayscale(0%);
                transform-style: preserve-3d;
                transform: rotate3d(0,1,0,20deg); 
            }
        ` 
        const BoxTitle= styled.div`
            display:flex;
            justify-content:center;
            align-items: center;
            flex-wrap: wrap;
            width: 100%;
            height: 50%;
            color: white;
            font-family: 'Share Tech', sans-serif;
            h2{
                font-size: 1em;
                text-align: center;
                width:100%;
            }
            h3{
                font-size: 0.8em;
                text-align: center;
                width:100%;
            }
            a{  
                color:white;
                position: relative;
                cursor: pointer;
                background-color: transparent;
                font-size: 0.1em;
                text-decoration: none;
                border: none;
                text-align: center;
        `    
           
        
        const mappBDDHover= bdd.map((item)=>{
            console.log(item.url);
            return(
        <FlipBox className='flipBox'>
            <FlipBoxInner className='flipBoxInner'>
                <Link to={'/project/'+item.id}>
                    <FlipBoxFront content= {item.title} background={'url('+item.url+') no-repeat'}>
                        <BoxTitle>
                            <h3>{item.cat}</h3>
                            <h2>{item.title}</h2>
                            <h3>See more</h3>  
                        </BoxTitle>
                    </FlipBoxFront>
                </Link>
            </FlipBoxInner>
        </FlipBox>)
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