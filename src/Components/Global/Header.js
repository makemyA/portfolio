import React, { Component } from 'react';
class Header extends Component {
    
    render() { 
        return (
            <div>
                <header className='header'>
                    <div className='box_menu'>
                        <h1>makemyA</h1>
                        <div className='pointer-nav'></div>
                        <ul className='menu-navigation'>
                            <li>Portfolio</li>
                            <li>Lesson</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <ul className='menu-media'>
                        <li>facebook</li>
                        <li>mail</li>
                        <li>github</li>
                    </ul>
                </header>
            </div>
          );
    }
}
 
export default Header;