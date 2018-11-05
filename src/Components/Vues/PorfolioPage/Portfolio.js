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
            margin: 5em auto 0 auto;
            background-color: transparent;
            width: 100vw;  
        `
       
        const FlipBox = styled.div`

            width:30vw;
            height: 18vw;
            font-size: 1em;
            margin:0.2em;
            background: transparent;
            ` 
           
        const FlipBoxInner = styled.div`
            position: relative;
            width:100%;
            height:100%
            color:white;
            
        `    
        const FlipBoxFront = styled.div`
            position: relative;
            display:flex;
            justify-content:center;
            align-items: center;
            flex-wrap: wrap;
            background: ${props => props.background};
            filter: sepia(40%);
            background-size: cover;
            font-size: 0.8em;
            width:100%;
            height:100%;
           
            :after{
                position: absolute;
                top:0;
                left:0;
                content:"";
                height:100%;
                width:100%;
                background: yellow;
                transform: scaleY(0);
                transition: transform 0.5s;
            }
            :after::hover {
                transform: scaleY(1);
            }
        `
        const FlipBoxBack = styled.div`
            position: absolute;
            z-index:0;
            display:flex;
            justify-content:center;
            align-items: center;
            flex-wrap: wrap;
            background: #404352;
            font-size: 0.8em;
            width:100%;
            height:100%;
            filter: grayscale(100%);
           
           
           
           
           
        ` 
        const BoxTitle= styled.div`
            display:flex;
            justify-content:center;
            align-items: center;
            flex-wrap: wrap;
            width: 100%;
            height: 50%;
            h2{
                font-size: 0.8em;
                text-align: center;
                color: white;
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
                font-size: 0.7em;
                text-decoration: none;
                border: none;
                width: 5em;
                text-align: center;
                ::after{
                    content:"";
                    position: absolute;
                    background: white;
                    top:100%;
                    left:0;
                    width:100%;
                    height: 0.5px;
                    transform: scaleX(1);
                    transform-origin: bottom left;
                    transition: transform 0.3s;
                }
                :hover::after{
                    transform: scaleX(0);
                }
            :hover{
            }
        `    
           
        
        const mappBDDHover= bdd.map((item)=>{
            console.log(item.url);
            return(
        <FlipBox className='flipBox'>
            <FlipBoxInner className='flipBoxInner'>
                <FlipBoxFront background={'url('+item.url+') no-repeat'}>
                    <BoxTitle className='boxTitleFront'>
                    <h2>16-10-1984</h2>
                    </BoxTitle>
                </FlipBoxFront>
                <FlipBoxBack background={'url('+item.url+') no-repeat'}>
                    <BoxTitle className='boxTitleBack'>
                        <h3>{item.cat}</h3>
                        <h2>{item.title}</h2>
                        <Link to={'/project/'+item.id}>See more</Link>
                    </BoxTitle>
                </FlipBoxBack>
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