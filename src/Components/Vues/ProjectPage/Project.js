import React, { Component } from 'react';
import Header2 from '../../Global/Header2';
import styled from 'styled-components';
import {bdd} from '../../Vues/HomePage/DataCarousel';
import Markdown from 'markdown-to-jsx';
import { createSecurePair } from 'tls';

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
            video: true,
            iconswitch: <i class="fas fa-toggle-on reverse"></i>,
            videoUrl: 'https://youtu.be/jSZTI6J4Jtk',
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
    }
     componentDidMount(){
        console.log("component did mount");
    }
    componentWillUnmount(){
         
      console.log("component will unmount");
  } 
    render() {
      
        const id= this.props.match.params.id;
        const video =bdd.map((item)=>item.video);
        const title= bdd.map((item)=>item.title);
        const when= bdd.map((item)=>item.when);
        const role= bdd.map((item)=>item.role);
        const what= bdd.map((item)=>item.what);
        const readme= bdd.map((item)=>item.readme);
        const showVideo= ()=> video[id-1];
        const showTitle= ()=> title[id-1];
        const showReadme =()=> readme[id-1];
        const showWhen=()=> when[id-1];
        const showRole=()=> role[id-1];
        const showWhat=()=> what[id-1];
        const toggleVideo= ()=> this.setState({
            video: this.state.video?false:true,
            iconswitch: this.state.video?<i class="fas fa-toggle-on"></i>:<i class="fas fa-toggle-on reverse"></i>,
        });
        const Container = styled.div`
            width: 100vw;
            display:flex;
            flex-direction :row;
            justify-content:space-between;
            align-items:flex-start;
            flex-wrap: wrap;
            background: url('https://images.pexels.com/photos/65880/paper-crepe-crepe-paper-colorful-65880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260') no-repeat;
            background-size: cover;
        `
        const Title = styled.div`
            position: fixed;
            z-index:1;
            left:-5vw;
            top:50vh;
            font-size:2em;
            color:white;
            font-weight: 700;
            transform: rotate(-90deg);
        `
        const Section = styled.div`
        display:flex;
        width: 100%;
        height: 100vh;
        overflow: scroll;
        background-size: cover;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        margin: 0 auto;
        
        `
        const FlipBox = styled.div`
            margin-top:20vh;
            width:50vw;
            height:50vh;
            font-size: 1em;
            perspective: 2000px;
            :hover .flipBoxInner{
                transform: rotateY(190deg);
            }
            
            `
        const FlipBoxInner = styled.div`
            position: relative;
            width:100%;
            height:100%;
            transition: transform 0.8s;
            transform-style: preserve-3d;
            margin-bottom: 12em;
           
        `     
        const BoxVideo = styled.video`
            position: absolute;
            width: 100%;
            height: 100%;
            source:${props => props.src};
            background-size: cover;
            backface-visibility: hidden;
            &.back{
            }
            &.front{
            }
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
            background-color: white;
            color: black;
            border: .2px solid rgba(0, 0, 0, 0.1);
            margin: 2em 2em 0 0 ;
            & h2{
                font-size: 1em;
                margin: 0.2em;
            }
            & h3{
                font-size: 0.7em;
                margin: 0.5em;
            } 
        `
        const Md = styled.div`
            position: absolute;
            display:flex;
            justify-content: center;
            align-items: flex-start;
            width:100%;
            font-size:0.5em;
            border: .2px solid rgba(0, 0, 0, 0.2);
            transform: rotateY(180deg);
            backface-visibility: hidden;
            background-color: white;
            &.back{
            }
            &.front{
            }
            h1{
                font-size:3em;
                margin: 0.2em;
                color: blue;
            }
            h2{
                font-size:2em;
                margin: 0.2em;
            }
            h3{
                font-size:1.5em;
                margin: 0.2em;
            }
            p, li{
                margin: 0.5em;
            }
            `  
               const readmeObject= document.getElementById("flipBox");
                window.onscroll= ()=>
                console.log(window.pageYOffset);
                /* window.onscroll=()=> readmeObject.style.cssText += 'background-color: green;'; */
            /* let section=document.getElementById("section");   
            const unscroll=()=>window.addEventListener("scroll", preventToScroll);
            const preventToScroll=(e)=>{
               if(window.pageYOffset>50){
                   window.scrollTo(0,0);    
               }else {
                   e.preventDefault();
               } 
           } 
            unscroll() */
            /* console.log(project.test.content); */
        return (
            <Container>
                <Header2 />
                
                    <Title>
                        {showTitle()}
                    </Title>
                    <Card className='id-card'>
                        <h2>When</h2>
                        <h3>{showWhen()}</h3>
                        <h2>role</h2>
                        <h3>{showRole()}</h3>
                        <h2>what</h2>
                        <h3>{showWhat()}</h3>
                    </Card>
                    <Section style={{
                        background: 'url(https://images.pexels.com/photos/1095814/pexels-photo-1095814.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)',
                        backgroundSize:'cover',
                        filter: 'sepia(10%)',
                        }}>
                        <FlipBox id='flipBox'>
                            <FlipBoxInner  className='flipBoxInner'>
                                <BoxVideo   className={this.state.classNameVideo} loop autoPlay>
                                    <source src={showVideo()} type="video/mp4"/>
                                    Votre navigateur ne supporte pas la balise vidéo.
                                </BoxVideo>
                                <Md  className={this.state.classNameMd}>
                                    <Markdown style={{width:'100%', height: '100%'}}>{showReadme()}</Markdown>
                                </Md>
                            </FlipBoxInner>
                        </FlipBox>
                    </Section>
                    <Section style={{background: 'url(https://images.pexels.com/photos/1317559/pexels-photo-1317559.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)',backgroundSize:'cover'}}>
                    <FlipBox>
                        <FlipBoxInner  className='flipBoxInner'>
                            <BoxVideo   className={this.state.classNameVideo} loop autoPlay>
                                <source src={showVideo()} type="video/mp4"/>
                                Votre navigateur ne supporte pas la balise vidéo.
                            </BoxVideo>
                            <Md  className={this.state.classNameMd}>
                                <Markdown style={{width:'100%', height: '100%'}}>{showReadme()}</Markdown>
                            </Md>
                        </FlipBoxInner>
                    </FlipBox>
                    </Section>
                   
                    
                          
                           
               
                
                

            </Container>
          );
    }
}
{/* <BoxVideo id='box-video' className={this.state.classNameVideo} background={'url('+showPicture()+') no-repeat'}>
                    </BoxVideo> */}
 {/* <img src={this.props.params.url} height='100%' width='100%' alt=""/> */}
export default Project;