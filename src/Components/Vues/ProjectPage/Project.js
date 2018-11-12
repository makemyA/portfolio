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
           pointerEvent: 'auto',
           overflow:'hidden',
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
       
        const Container = styled.div`
            width: 100vw;
            height: 100vh;
            overflow: hidden;
        `
        const Section = styled.div`
        
        display:flex;
        justify-content: space-between;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;
        width: 100vw;
        height: 100vh;
        overflow-y: ${props => props.overflow};
        background : url(${props => props.background}) no-repeat;
        background-size: cover;
        
        &.section{
            background-attachment: fixed;
            background-position: center;
        
        }
        `
        const Title = styled.div`
        position: relative;
        display:flex;
        justify-content:center;
        align-items:center;
        width: 15%;
        height: 100%;
        overflow: hidden;
        z-index:1000;
        color:white;
        font-weight: 700;
        h1{
            text-align:center;
            white-space: nowrap;
            font-size: 2.6vw;
            font-weight: 700;
            font-family: 'Share Tech', sans-serif;
            transform: rotate(-90deg);
        }
    `
        const FlipBox = styled.div`
            position: relative;
            width: 60%;
            min-width: 500px;
            height:100%;
            min-height: 400px;
            font-size: 1em;
            perspective: 1500px;
            overflowY: hidden;
            pointer-events: ${props=> props.pointerEvent};
            :hover .flipBoxInner{
                transform: rotateY(180deg);
               
            }
            
            
            `
        const FlipBoxInner = styled.div`
            position: relative;
            display:flex;
            justify-content: center;
            align-items:center;
            width:100%;
            height:100%;
            transition: transform 0.5s;
            transform-style: preserve-3d;
            transform: rotate3d(0,1,0,20deg);
            overflowY: auto;
            cursor: pointer;
            :hover{
                transform: scale(1);
            }
        `     
        const BoxVideo = styled.video`
            position: absolute;
            width: 100%;
            height: 70%;
            source:${props => props.src};
            background-size: cover;
            backface-visibility: hidden;
           
            overflowY: auto;
            `
        
        const Md = styled.div`
            position: absolute;
            z-index: 10;
            display:flex;
            justify-content: center;
            align-items: center;
            width:100%;
            height: 75%;
            font-size:0.5em;
            border: .2px solid rgba(0, 0, 0, 0.2);
            transform: rotateY(180deg);
            backface-visibility: hidden;
            background: rgba(255, 255, 255, 1);
            filter:grayscale(0%) sepia(0%);
            color:rgba(36, 41, 46,0.9);
            font-family: 'Share Tech', sans-serif;
            cursor: default;
            overflowY: hidden;
            }
            
            h1{
                position:relative;
                z-index:100;
                font-size:3em;
                margin: 0.5em 0.5em;
                color: black;
                font-weight: 700;
            }
            h2{
                position:relative;
                z-index:100;
                font-size:2.5em;
                margin: 0.5em 0.5em;
                font-weight: 500;
            }
            h3{
                position:relative;
                z-index:100;
                font-size:1.5em;
                margin: 0.5em 0.5em;
                font-weight: 500;
            }
            ul {
                margin: 0.5em 1em 0.3em 1em;
            }
            p, li{
                position:relative;
                z-index:100;
                margin: 0.3em 1em;
            }
            a {
                position: relative;
                text-decoration: none;
                border: none;
                color : black;
                z-index:15;
                ::after {
                    position: absolute;
                    content:"";
                    top: 100%;
                    left:0;
                    height: 0.1em;
                    width: 100%;
                    background: black;
                    transform: scaleX(1);
                    transform-origin: left;
                }
                :hover::after {
                    transform: scaleX(0);
                    transition : transform 0.3s;
                }
            }
            `
            const Card = styled.div`
            position: relative;
            display:flex;
            flex-direction: column;
            justify-content:space-evenly;
            align-items:flex-start;
            width: 15%;
            background-color: rgba(0, 0, 0, 0.0);
            color: white;
           
            & h2{
                font-size: 1.2em;
                font-weight:700;
                margin: 0em;
                font-family: 'Share Tech', sans-serif;
            }
            & h3{
                font-size: 0.6em;
                margin: 0.2em 0 0.7em 0;
                font-family: 'Share Tech', sans-serif;
            } 
        `
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
            const showBackground = ()=> background[id-1];
            const showVideo= ()=> video[id-1];
            const showTitle= ()=> title[id-1];
            const showReadme =()=> readme[id-1];
            const showWhen=()=> when[id-1];
            const showRole=()=> role[id-1];
            const showWhat=()=> what[id-1];
            
        return (
            <Container >
                <Header2 />
                <Section   className='section' overflow={this.state.overflow}  background ={showBackground()}>
                        <Title>
                            <h1> {showTitle()}</h1>
                        </Title>
                       
                        <FlipBox>
                            <FlipBoxInner onMouseLeave={this.onMouseLeave} className={this.state.class}>
                                <BoxVideo onClick={this.showBack} loop autoPlay>
                                    <source src={showVideo()} type="video/mp4"/>
                                    Votre navigateur ne supporte pas la balise vidéo.
                                </BoxVideo>
                                <Md  onClick={this.showFront}  id='markdown-container'className='readme readme-1'>
                                    <Markdown style={{height:'100%',width: '100%', overflowY: 'auto'}}>{showReadme()}</Markdown>
                                </Md>
                            </FlipBoxInner>
                        </FlipBox>
                        <Card className='id-card'>
                            <h2>When</h2>
                            <h3>{showWhen()}</h3>
                            <h2>role</h2>
                            <h3>{showRole()}</h3>
                            <h2>what</h2>
                            <h3>{showWhat()}</h3>
                        </Card>
                    </Section>
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
                   