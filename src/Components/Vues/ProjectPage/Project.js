import React, { Component } from 'react';
import Header2 from '../../Global/Header2';
import styled from 'styled-components';
import {bdd} from '../../Vues/HomePage/DataCarousel';
import Markdown from 'markdown-to-jsx';

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
            video: true,
            classNameVideo:'',
            classNameMd:'hide',
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
        const url= bdd.map((item)=>item.url);
        const title= bdd.map((item)=>item.title);
        const readme= bdd.map((item)=>item.readme);
        const showPicture= ()=> url[id-1];
        const showTitle= ()=> title[id-1];
        const showReadme =()=> readme[id-1];
        const toggleVideo= ()=> this.setState({
            video: this.state.video?false:true,
            classNameVideo: this.state.video?'hide':'',
            classNameMd: this.state.video?'':'hide',
            iconswitch: this.state.video?<i class="fas fa-toggle-on"></i>:<i class="fas fa-toggle-on reverse"></i>,
        });
        const Container = styled.div`
            width: 100vw;
            display:flex;
            justify-content:flex-start;
            align-items:center;
            flex-wrap: wrap;
            
        `
        const Title = styled.div`
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items:center;
            width: 40%;
            margin-top: 1em;
            h2{
                font-size:1em;
                color:black;
                font-weight: 700;
            }
            i{
                color:black;
                margin: 0.5em;
                font-size:0.7em;
                vertical-align:baseline;
            }
            i.reverse{
                transform: rotate(180deg);
            }
            span{
                font-size: 0.6em;
                vertical-align:baseline;
            }
            button{
                border:none;
                background-color: transparent;
            }
        `
        const Section = styled.div`
        position: relative;
        z-index:2;
        display:flex;
        height: 100%;
        width: 600px;
        justify-content: space-around;
        align-items: flex-start;
        flex-wrap: nowrap;
        overflow: hidden;
        margin: 0 auto;
        
        `
        const BoxVideo = styled.div`
            z-index:30;
            width: 400px;
            height: 210px;
            background:${props => props.background};
            background-size: cover;
            margin: 2em;
            .hide{
                display:none;
            }
            `
        const Card = styled.div`
            display:flex;
            flex-direction: column;
            justify-content:space-evenly;
            align-items:flex-start;
            width: 140px;
            height: 210px;
            background-color: white;
            color: black;
            border: 0.5px solid black;
            margin-top: 2em;
            margin-right:1em;
            h2{
                font-size: 0.8em;
                margin-left:0.5em;
            } 
        `
        const Md = styled.div`
            display:flex;
            justify-content: center;
            align-items: center;
            width: 400px;
            font-size:0.6em;
            margin-top: 2em;
            padding-top:0em;
            padding-bottom:0;
            border: 0.5px solid black;
            .hide{
                display:none;
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
            /* console.log(project.test.content); */
        return (
            <Container>
                <Header2 />
                <Title>
                    <h2>{showTitle()}</h2>
                    <div>
                        <span>VIDEO</span>
                            <button onClick={()=>toggleVideo()}>{this.state.iconswitch}</button>
                        <span>README</span>
                    </div>
              
                </Title>
                <Section>
                    
                    <video width="320" height="240" loop autoPlay>
                        <source src="/video.mp4" type="video/mp4"/>
                        Votre navigateur ne supporte pas la balise vidéo.
                    </video>
                    <Md id='md' className={this.state.classNameMd}>
                        <Markdown>{showReadme()}</Markdown>
                    </Md>
                    
                    <Card className='id-card'>
                        <h2>When</h2>
                        <h2>role</h2>
                        <h2>what</h2>
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