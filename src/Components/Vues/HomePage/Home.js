//HomePage
import React, { Component } from 'react';
import Header from '../../Global/Header';
import CarouselHome from './Carousel';
import Portfolio from '../PorfolioPage/Portfolio'
import Contact from '../ContactPage/Contact'
import Presentation from './Presentation'
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { cpus } from 'os';
export default class HomePage extends Component {
   
    
    componentWillMount(){
        
       
    }
    componentDidMount(){
     /*    let sections= document.querySelectorAll(".section");
        console.log(sections[0]);  */
    }
    componentWillUpdate(){
    
    }
   
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
            <div id='containerHome' className='container-home'>
                <Header />
                <Element name='home'>
                    <div id='section1' className='section container-section1'>
                        <div class="title-section1">Intro</div>
                        <Presentation />
                        <Link to='portfolio' spy={true} smooth={true}><a href='#section2'><i id ='arrow-down1'className="fas fa-angle-down"></i></a></Link>
                    </div>
                </Element>
                <Element name='portfolio'>
                    <div id='section2' className='section container-section2'>
                        <div className='title-section2'>PORTFOLIO</div>
                        <Portfolio />
                    </div>
                </Element>
                <Element name='contact'>
                    <div id='section3' className='section container-section3'>
                        <div className='title-section3'>CONTACT</div>
                        <Contact />
                    </div> 
                </Element> 
            </div>
            
            
        )
    }
   
}