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
      console.log(this.state.data[this.state.activeIndex].id);
   
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
        const { activeIndex, data} = this.state;
        if(activeIndex<data.length-1){
            this.setState({activeIndex: activeIndex+1});
            console.log(activeIndex+1)
        }   
    }
 /*    choseImage= ()=>{
        const {activeIndex, data}= this.state;
        this.setState({activeIndex: data.id});
    } */ 

    render() {
        const {data} = this.state;
        console.log(this.state.activeIndex+'ème item');
        console.log(bdd.length+'item');

             
        const setListButtons = data.map((item, index)=>{
            let computedClass= index ===(this.state.activeIndex)? ' slide transition':' slide';
               return  <button key={item.id} className={"list_buttons"+ computedClass} onClick={()=>this.setState({activeIndex:item.id-1})}>{item.id}</button>
        }
        )
        /* className={
            "badge " +
            (this.state.value ? "badge-primary " : "badge-danger ") +
            " m-4"
          } */


        return (
                <div id='box-carousel' style={{backgroundImage: 'url('+data[this.state.activeIndex].url+')'}}>
                    <div className='box-title-project'>
                        <div className='box-title-project--text'>
                            <h3 className='title-categorie'>{data[this.state.activeIndex].cat}</h3>
                            <h2 className='title-grid'>{data[this.state.activeIndex].title}</h2>
                            <button className='button'>See more</button>
                        </div>
                        <div className='box-title-project--blur'></div>
                     </div>
                    <ol className='box-list_buttons'>
                        {setListButtons}
                    </ol>
                </div>
          )
    }
}
 
export default CarouselHome;