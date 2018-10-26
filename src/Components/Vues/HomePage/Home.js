//HomePage
import React, { Component } from 'react';
import Header from '../../Global/Header';
import CarouselHome from './Carousel';
import Portfolio from '../PorfolioPage/Portfolio'
import Contact from '../ContactPage/Contact'
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
                <div className='container-background1'>
                </div>
                <div className='container-background2'>
                </div>
                <div className='container-section1'>
                <div class="title-section">HIGHLIGHT</div>
                    <CarouselHome />
                    <div className='box-text'>
                        <p className='text left'>
                            "Hi, I'm Paul. Im a full stack Web Developer especially interested by JavaScript environment."
                        </p>
                    </div>
                    <ul>
                        <li>let</li>
                        <li><a href="">Contact me</a></li>
                        <li>for any questions or work idea</li>
                    </ul>    
                        <a href='#section2'><i id ='arrow-down1'className="fas fa-angle-down"></i></a>
                </div>
                    <Portfolio />
                <div>
                    <a href="#section1"><i id='arrow-up1'class="fas fa-angle-up"></i></a>  
                    <a href='#section3'><i id ='arrow-down2'className="fas fa-angle-down"></i></a>
                </div>
                    <Contact />
                <a href="#section1"><i id='arrow-up2'class="fas fa-angle-up"></i></a> 
                  
            </div>
            
            
        )
    }
   
}