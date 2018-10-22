import React, { Component } from 'react';
/* import image1 from './Assets/500c10758615806317ce2677f4ab4eff.jpg';
import image2 from './Assets/designing-new-projects1.jpg';
import image3 from './Assets/images.jpg'; */
/* import {Carousel} from 'react-bootstrap'; */
import {bdd} from './DataCarousel'; 
class CarouselHome extends Component {
  constructor(props){
      super(props);
      this.state = {
          activeIndex: 0,
          data: bdd,
      };

  }
  componentDidUpdate(){
      console.log("component did update");
      console.log(this.state.activeIndex);
  };
  componentWillUpdate(){
      console.log("component will update");
  }
  componentWillMount(){
      console.log("component will mount")
  }
  componentDidMount(){
      console.log("component did mount");
      setInterval(()=>this.nextImage(), 4000);
  }
  componentWillUnmount(){
        clearInterval(()=>this.nextImage());
    console.log("component will unmount");
}

    previousImage=()=>{
        const { activeIndex } = this.state;
        if(activeIndex>0){
            this.setState({activeIndex:activeIndex-1})
        }
    }
     
    nextImage=()=>{
        const { activeIndex, data } = this.state;
        if(activeIndex<data.length-1){
            console.log("before");
            this.setState({activeIndex: activeIndex+1});
            console.log("after");
        }   
    } 

    render() {
        const { data } = this.state;
        console.log(this.state.activeIndex+'ème item');
        console.log(bdd.length+'item');
        return (


            <div>
                <button onClick={()=>this.previousImage(data)}>1</button>
                <button onClick={()=>this.nextImage(data)}>2</button>
                <div style={{transition: "0.3s", backgroundImage: 'url('+data[this.state.activeIndex].url+')'}} className='box_carousel' key={data[this.state.activeIndex].id}>
                    {data[this.state.activeIndex].title}
                </div>
            </div>
          )
    }
}
 
export default CarouselHome;