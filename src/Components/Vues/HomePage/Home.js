//HomePage
import React, { Component } from 'react';
import Header from '../../Global/Header';
import CarouselHome from './Carousel';
export default class HomePage extends Component {
    render() {
        return(
            <div>
                <Header />
                <div>
                    <h1>test</h1>
                </div>
                <CarouselHome />    
            </div>
            
            
        )
    }
}