import React, { Component } from 'react';
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeClasses: [],
          };  
    }
    /* setActive= (e) => {
        let tab= [false, false, false];
        tab.splice(e,0,true);
        console.log(e+' '+tab[e]); 
        this.setState({
            activeClasses: tab,
        })
    } */
   
    componentDidUpdate(){
        console.log("component did update");
        console.log(this.state.activeClasses0)
    };
    componentWillUpdate(){
        console.log("component will update");
        
    }
    componentWillMount(){
        console.log("component will mount") 
    }
     componentDidMount(){
        console.log("component did mount");
        let sections= document.querySelectorAll(".section");
        console.log(sections[0]);
        let eventHandler= ()=>{
            window.pageYOffset>sections[1].getBoundingClientRect().top?
            this.setState({
                activeClasses: [true, false, false] 
            }):
             this.setState({
                activeClasses: [false, false,false]
            });
            window.pageYOffset>sections[2].getBoundingClientRect().top?
            this.setState({
                activeClasses: [false, false, true] 
            }):
             this.setState({
                activeClasses: this.state.activeClasses 
            }); 
           
        } 
        window.addEventListener('scroll', eventHandler);  
    }
    componentWillUnmount(){
         
      console.log("component will unmount");
  } 
    render() {
         
        return (
            <div>
                <header id='header' className='header'>
                    <div className='box-presentation'>
                        <h1 className='title'>WEB</h1>
                        <br/>
                        <h1 className='title'>DEVELOPER</h1>
                        <h3>React - React Native - Javascript - PHP - HTML - CSS - Bootstrap</h3>                    
                    </div>
                    <div className='box_menu'>
                        <Link to="home" spy={true} smooth={true}><h1 >makemyA</h1></Link>
                        <div className='pointer-nav'></div>
                        <ul className='menu-navigation'>
                            <Link  to='portfolio' spy={true} smooth={true}><a href='#section2'><li  className={this.state.activeClasses[0]?'current':''}>Portfolio</li></a></Link>
                            <li className={this.state.activeClasses[1]?'current':''}><a href="#">Lesson</a></li>
                            <Link to='contact' spy={true} smooth={true}><a  href="#section3"><li  className={this.state.activeClasses[2]?'current':''}>Contact</li></a></Link>
                        </ul>
                    </div>
                    <ul className='menu-media'>
                        <li><a href="https://www.linkedin.com/in/paul-henrot-makemya/"><i class="fab fa-linkedin"></i></a></li>
                        <li><a href="mailto:henrot.paul@gmail.com"><i class="fas fa-envelope"></i></a></li>
                        <li><a href="https://github.com/makemyA"><i class="fab fa-github-alt"></i></a></li>
                    </ul>
                </header>
            </div>
          );
    }
}
 
export default Header;