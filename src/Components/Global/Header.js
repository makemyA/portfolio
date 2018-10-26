import React, { Component } from 'react';
class Header extends Component {
    
    render() { 
        return (
            <div>
                <header className='header'>
                    <div className='box-presentation'>
                        <h1 className='title'>WEB</h1>
                        <br/>
                        <h1 className='title'>DEVELOPER</h1>
                        <h3>React - React Native - Javascript - PHP - HTML - CSS - Bootstrap</h3>                    
                    </div>
                    <div className='box_menu'>
                        <h1>makemyA</h1>
                        <div className='pointer-nav'></div>
                        <ul className='menu-navigation'>
                            <li><a href="#section2">Portfolio</a></li>
                            <li><a href="#">Lesson</a></li>
                            <li><a href="#section3">Contact</a></li>
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