import React, { Component } from 'react';
import Header2 from '../../Global/Header2';
import styled from 'styled-components';
import {bdd} from '../../Vues/HomePage/DataCarousel';
import Markdown from 'markdown-to-jsx';

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
           front: true, 
           class:'',
           overflow:'hidden',
           pointerEvent: 'auto',
           title: bdd[this.props.match.params.id-1].title,
          }
    }
    changeTitle= ()=>{
       /*  let sections = document.querySelectorAll('.section');
        let idProps= this.props.match.params.id-1;
        let newTable= bdd;
        newTable.splice(idProps,1); 
        for( let i =0 ;i<sections.length; i++){
            console.log(sections[i].getBoundingClientRect().top);
            if(window.pageYOffset> sections[i].getBoundingClientRect().top){
                    this.setState({
                        title: newTable[i-1].title,
                    }) 
            }
        } */
       
    }
        
    showBack= ()=>{ 
        console.log("showback");
        this.setState({
        front: false,
        class: 'flipBoxInner',
        overflow:'scroll',
        pointerEvent: 'auto'
        /* iconswitch: this.state.video?<i class="fas fa-toggle-on"></i>:<i class="fas fa-toggle-on reverse"></i>, */
       /*  height:${props => props.height}px; */
    })
       /*  window.scrollTo(0,500); */
};
    showFront= ()=>{ 
        console.log("showfront");
        this.setState({
        front:true,
        class: '',
        overflow:'hidden',
        pointerEvent: 'auto'
        /* iconswitch: this.state.video?<i class="fas fa-toggle-on"></i>:<i class="fas fa-toggle-on reverse"></i>, */
       /*  height:${props => props.height}px; */
    })};
    onMouseLeave= ()=>{
        console.log("reset vue");
        if(!this.state.front){
        this.setState({
            front:true,
            class:'',
            overflow:'',
            pointerEvent:'auto',
        })
    }
    }
   
     componentDidUpdate(){
        console.log("component did update");
        
    };
    componentWillUpdate(){
        console.log("component will update");
        
    }
    componentWillMount(){
        console.log("component will mount")
        window.scrollTo(0,0);
       
    }
     componentDidMount(){
        console.log("component did mount");
        let sections = document.querySelectorAll('.section');
        /* let idProps= this.props.match.params.id-1;
        bdd.splice(idProps,1);
        
        for( let i =0; i<sections.length; i++){
            console.log(sections[i].getBoundingClientRect().top);
            console.log(bdd[i]);
        } */
        /* console.log(readmeHeightAll[0].getBoundingClientRect().height); */
        const id= this.props.match.params.id;
       /*  console.log(readmeHeight); */
    }
    componentWillUnmount(){
         
      console.log("component will unmount");
  } 
    render() {
        let eventHandler= ()=>console.log(window.pageXOffset+window.pageYOffset);
        window.addEventListener('scroll', eventHandler);
        const id= this.props.match.params.id;
        const background =bdd.map((item)=>item.url)
        const video =bdd.map((item)=>item.video);
        const title= bdd.map((item)=>item.title);
        const when= bdd.map((item)=>item.when);
        const role= bdd.map((item)=>item.role);
        const what= bdd.map((item)=>item.what);
        const readme= bdd.map((item)=>item.readme);
        const showBackground = (element)=> background[id-1+element];
        const showVideo= (element)=> video[id-1+element-1];
        const showTitle= ()=> title[id-1];
        const showReadme =(element)=> readme[id-1+element-1];
        const showWhen=()=> when[id-1];
        const showRole=()=> role[id-1];
        const showWhat=()=> what[id-1];
        const Container = styled.div`
            width: 100vw;
            display:flex;
            flex-direction :row;
            justify-content:space-between;
            align-items:flex-start;
            flex-wrap: wrap;
        `
        const Title = styled.div`
            position: fixed;
            z-index:1000;
            left:-5vw;
            top:50vh;
            font-size:1.8em;
            color:white;
            font-weight: 700;
            transform: rotate(-90deg);
        `
        const Section = styled.div`
        position:relative;
        display:flex;
        width: 100%;
        height: 100vh;
        overflow-y: ${props => props.overflow};
        overflow-x: hidden;
        background : url(${props => props.background}) no-repeat;
        background-size: cover;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        margin: 0 auto;
        &.section{
            background-attachment: fixed;
            background-position: center;
        
        }
        `
        const FlipBox = styled.div`
            position: absolute;
            width:45vw;
            height:45vh;
            font-size: 1em;
            z-index:1000;
            perspective: 1500px;
            pointer-events:auto;
            overflow-y: visible;
            pointer-events: ${props=> props.pointerEvent};
            :hover .flipBoxInner{
                transform: rotateY(175deg);
               
            }
            
            
            `
        const FlipBoxInner = styled.div`
            position: relative;
            width:100%;
            height:100%;
            transition: transform 0.8s;
            transform-style: preserve-3d;
            margin-bottom: 12em;
            transform: rotate3d(0,1,0,20deg);
            :hover{
                cursor: pointer;
                transform: scale(1);
            }
        `     
        const BoxVideo = styled.video`
            position: absolute;
            width: 100%;
            height: 100%;
            source:${props => props.src};
            background-size: cover;
            backface-visibility: hidden;
            `
        const Card = styled.div`
            display:flex;
            position: fixed;
            z-index: 50;
            left:80%;
            top: 30vh;
            flex-direction: column;
            justify-content:space-evenly;
            align-items:flex-start;
            width: 200px;
            background-color: rgba(0, 0, 0, 0.0);
            color: white;
            margin: 2em 2em 0 0 ;
            & h2{
                font-size: 1em;
                font-weight:700;
                margin: 0em;
            }
            & h3{
                font-size: 0.7em;
                margin: 0.2em 0 0.7em 0;
            } 
        `
        const Md = styled.div`
            position: absolute;
            z-index: 10;
            display:flex;
            justify-content: center;
            align-items: flex-start;
            width:100%;
            font-size:0.5em;
            border: .2px solid rgba(0, 0, 0, 0.2);
            transform: rotateY(180deg);
            backface-visibility: hidden;
            background: rgba(230, 230, 230, 0.9);
            filter:grayscale(40%) sepia(10%);
            color: black;
            &.readme::after{
                z-index:50;
                content:"";
                text-align:center;
                position:absolute;
                top:0;
                left:0;
                width: 100%;
                height:100%;
                background : url(${props => props.background}) no-repeat;
                filter:sepia(40%) grayscale(100%);
                opacity: 0.2;
                background-size: cover;
                background-attachment: fixed;
                background-position: center;
            }
            h1{
                position:relative;
                z-index:100;
                font-size:3em;
                margin: 0.2em;
                color: black;
            }
            h2{
                position:relative;
                z-index:100;
                font-size:2em;
                margin: 0.2em;
            }
            h3{
                position:relative;
                z-index:100;
                font-size:1.5em;
                margin: 0.2em;
            }
            p, li{
                position:relative;
                z-index:100;
                margin: 0.6em;
            }
            `
           
            const showSections = bdd.map((item)=>{
                let order = 2;
                let setOrder= id==item.id?1:order++;
               
                return(
                <Section onPointerEnter={this.changeTitle} id={item.id} className='section' style={{order:setOrder}} overflow={this.state.overflow} background ={item.url}>
                        <FlipBox  pointerEvent={this.state.pointerEvent} id='flipBox'>
                            <FlipBoxInner onMouseLeave={this.onMouseLeave} className={this.state.class}>
                                <BoxVideo onClick={this.showBack} loop autoPlay>
                                    <source src={item.video} type="video/mp4"/>
                                    Votre navigateur ne supporte pas la balise vidéo.
                                </BoxVideo>
                                <Md  onClick={this.showFront}  id='markdown-container'className='readme readme-1' background ={showBackground(id)}>
                                    <Markdown style={{width:'100%', height: '100%'}}>{item.readme}</Markdown>
                                </Md>
                            </FlipBoxInner>
                        </FlipBox>
                    </Section>
                )
            }  
            )

        return (
            <Container >
                <Header2 />
                    <Title>
                        {this.state.title}
                    </Title>
                    <Card className='id-card'>
                        <h2>When</h2>
                        <h3>{showWhen()}</h3>
                        <h2>role</h2>
                        <h3>{showRole()}</h3>
                        <h2>what</h2>
                        <h3>{showWhat()}</h3>
                    </Card>
                    {showSections}
            </Container>
          );
    }
}
{/* <BoxVideo id='box-video' className={this.state.classNameVideo} background={'url('+showPicture()+') no-repeat'}>
                    </BoxVideo> */}
 {/* <img src={this.props.params.url} height='100%' width='100%' alt=""/> */}
export default Project;

{/*  <Section   id='section-project-1' className='section section-project-1' overflow={this.state.overflow} background ={showBackground(1)}>
                        <FlipBox  pointerEvent={this.state.pointerEvent} id='flipBox'>
                            <FlipBoxInner onMouseLeave={this.onMouseLeave} className={this.state.class}>
                                <BoxVideo onClick={this.showBack} loop autoPlay>
                                    <source src={showVideo(1)} type="video/mp4"/>
                                    Votre navigateur ne supporte pas la balise vidéo.
                                </BoxVideo>
                                <Md onClick={this.showFront}  id='markdown-container'className='readme readme-1' background ={showBackground(1)}>
                                    <Markdown style={{width:'100%', height: '100%'}}>{showReadme(1)}</Markdown>
                                </Md>
                            </FlipBoxInner>
                        </FlipBox>
                    </Section>
                    <Section id='section-project-2' className='section section-project-2' background ={showBackground(2)}>
                        <FlipBox >
                        <FlipBoxInner onMouseLeave={this.onMouseLeave} className={this.state.class}>
                                <BoxVideo onClick={this.showBack} loop autoPlay>
                                    <source src={showVideo(2)} type="video/mp4"/>
                                    Votre navigateur ne supporte pas la balise vidéo.
                                </BoxVideo>
                                <Md className='readme readme-2'>
                                    <Markdown style={{width:'100%', height: '100%'}}>{showReadme(2)}</Markdown>
                                </Md>
                            </FlipBoxInner>
                       </FlipBox>
                    </Section>
                    <Section id='section-project-3' className='section section-project-3' background ={showBackground(3)}>
                        <FlipBox>
                            <FlipBoxInner  className='flipBoxInner'>
                                <BoxVideo  loop autoPlay>
                                    <source src={showVideo(3)} type="video/mp4"/>
                                    Votre navigateur ne supporte pas la balise vidéo.
                                </BoxVideo>
                                <Md  className='readme readme-3'>
                                    <Markdown style={{width:'100%', height: '100%'}}>{showReadme(3)}</Markdown>
                                </Md>
                            </FlipBoxInner>
                       </FlipBox>
                    </Section>
                    <Section id='section-project-4' className='section section-project-4' background ={showBackground(4)}>
                        <FlipBox>
                            <FlipBoxInner  className='flipBoxInner'>
                                <BoxVideo  loop autoPlay>
                                    <source src={showVideo(4)} type="video/mp4"/>
                                    Votre navigateur ne supporte pas la balise vidéo.
                                </BoxVideo>
                                <Md  className='readme readme-4'>
                                    <Markdown style={{width:'100%', height: '100%'}}>{showReadme(4)}</Markdown>
                                </Md>
                            </FlipBoxInner>
                       </FlipBox>
                    </Section> */}
                   