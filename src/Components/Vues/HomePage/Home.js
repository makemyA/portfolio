//HomePage
import React, { Component } from 'react';
import Header from '../../Global/Header';
import CarouselHome from './Carousel';
import {Grid, Row, Col} from 'react-bootstrap';
export default class HomePage extends Component {
    render() {
        return(
            <div>
                <Header />
                <Grid>
                    <Row>
                        <Col componentClass= 'p'sm={6} lg={12} className='text'>
                            "Hi, I'm Paul. Im a full stack Web Developer
                        </Col>
                        <Col sm={6} lg={12} className='text'>
                        especially interested by JavaScript environment."
                        </Col>
                    </Row>
                </Grid>
                <CarouselHome />    
            </div>
            
            
        )
    }
}