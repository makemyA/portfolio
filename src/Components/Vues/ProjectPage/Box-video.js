import React, { Component } from 'react';
import styled from 'styled-components';
import {bdd} from '../../Vues/HomePage/DataCarousel';
class Video extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        const tri= bdd.map((item)=>item.url);
        const showPicture= ()=> tri[this.props.match.params.id-1];
        const BoxVideo = styled.div`
            z-index:30;
            width: 400px;
            height: 210px;
            background:${props => props.background};
            background-size: cover;
            `  
        return (
            <BoxVideo background={'url('+showPicture()+') no-repeat'}>
                <p>{this.props.match.params.id}</p>
            </BoxVideo>
          );
    }
}

export default Video;
