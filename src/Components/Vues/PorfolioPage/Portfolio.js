//PortfolioPage
/* import image1 from '../HomePage/Assets/project1.jpg' */
import React, { Component } from 'react';
import {bdd} from '../HomePage/DataCarousel';
class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {bdd},
          }
    }
    mapBDD = bdd.map((item)=><div className={'box box'+item.id}><img src={item.url} alt={"project"+item.id}/></div>)
    render() { 
        return (
            <div className='container-project'>
                {this.mapBDD}
            </div>
          );
    }
}
 
export default Portfolio;