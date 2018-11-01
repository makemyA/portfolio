//HomePage
import React, { Component } from 'react';
import Header from '../../Global/Header';
import CarouselHome from './Carousel';
import Portfolio from '../PorfolioPage/Portfolio'
import Contact from '../ContactPage/Contact'
import Presentation from './Presentation'
export default class HomePage extends Component {
    

     
    render() {
       
        let eventHandler= ()=>console.log(window.pageXOffset+window.pageYOffset);
        window.addEventListener('scroll', eventHandler);
        
         /*  let section=document.getElementById("section");   
         const unscroll=()=>window.addEventListener("scroll", preventToScroll);
         const preventToScroll=(e)=>{
            if(window.pageYOffset>50){
                window.scrollTo(0,0);    
            }else {
                e.preventDefault();
            } 
        } 
         unscroll() */
        return(
            <div className='container-home'>
                <Header />
                <div id='section1' className='container-section1'>
                    <div class="title-section">HIGHLIGHT</div>
                    <CarouselHome />
                    <Presentation />
                    <a href='#section2'><i id ='arrow-down1'className="fas fa-angle-down"></i></a>
                </div>
                <div id='section2' className='container-section2'>
                    <div className='title-section2'>PORTFOLIO</div>
                    <Portfolio />
                        <a href="#header"><i id='arrow-up1'className="fas fa-angle-up"></i></a>  
                        <a href='#section3'><i id ='arrow-down2'className="fas fa-angle-down"></i></a>
                </div>
                <div id='section3' className='container-section3'>
                    <div className='title-section3'>CONTACT</div>
                    <Contact />
                <a href="#header"><i id='arrow-up2'class="fas fa-angle-up"></i></a> 
                </div>  
            </div>
            
            
        )
    }
   
}