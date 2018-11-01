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
            classNameVideo:'front',
            classNameMd:'back',
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
        const readme= bdd.map((item)=>item.readme);
        const showVideo= ()=> video[id-1];
        const showTitle= ()=> title[id-1];
        const showReadme =()=> readme[id-1];
        const toggleVideo= ()=> this.setState({
            video: this.state.video?false:true,
            classNameVideo: this.state.video?'back':'front',
            classNameMd: this.state.video?'front':'back',
            iconswitch: this.state.video?<i class="fas fa-toggle-on"></i>:<i class="fas fa-toggle-on reverse"></i>,
        });
        const Container = styled.div`
            width: 100vw;
            display:flex;
            justify-content:center;
            align-items:flex-start;
            flex-wrap: wrap;
            
        `
        const Title = styled.div`
            display: flex;
            position: relative;
            z-index:0;
            flex-direction: column;
            justify-content: flex-start;
            align-items:center;
            width: 40%;
            margin-top: 3em;
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
        display:flex;
        height: 100%;
        width: 600px;
        justify-content: space-around;
        align-items: flex-start;
        flex-wrap: wrap;
        overflow: hidden;
        margin: 0 auto;
        
        `
        const BoxVideo = styled.video`
         
            width: 400px;
            height: 210px;
            source:${props => props.src};
            background-size: cover;
            margin: 2em 2em 0 0 ;
            &.back{
                position: fixed;
                z-index:30;
                opacity: 0.1;
                left:0;
            }
            &.front{
                position: fixed;
                z-index:50;
            }
            `
        const Card = styled.div`
            display:flex;
            flex-direction: column;
            justify-content:space-evenly;
            align-items:flex-start;
            flex:100%;
            width: 140px;
            height: 210px;
            background-color: white;
            color: black;
            border: .2px solid rgba(0, 0, 0, 0.2);
            margin: 2em 2em 0 0 ;
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
            margin: 3em 2em 0 0 ;
            border: .2px solid rgba(0, 0, 0, 0.2);
            
            &.back{
                position: absolute;
                z-index:30;
                opacity: 0.1;
                left:0;
            }
            &.front{
                position: absolute;
                z-index:50;
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
                        <button onClick={()=>toggleVideo()}>
                            <span>VIDEO</span>
                                {this.state.iconswitch} 
                            <span>README</span>
                        </button>
                    </div>
              
                </Title>
                <Section>
                    
                    <BoxVideo id={this.state.classNameVideo} className={this.state.classNameVideo} width="100%" height="100%" loop autoPlay>
                        <source src={showVideo()} type="video/mp4"/>
                        Votre navigateur ne supporte pas la balise vidéo.
                    </BoxVideo>
                    <Md id={this.state.classNameMd} className={this.state.classNameMd}>
                        <Markdown style={{width:'100%', height: '100%'}}>{showReadme()}</Markdown>
                    </Md>
                    
                    <Card className='id-card'>
                        <h2>When</h2>
                        <h2>role</h2>
                        <h2>what</h2>
                    </Card>
                    <Title>
                    <h2>{showTitle()}</h2>
                    <div>
                        <button onClick={()=>toggleVideo()}>
                            <span>VIDEO</span>
                                {this.state.iconswitch} 
                            <span>README</span>
                        </button>
                    </div>
                </Title>
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