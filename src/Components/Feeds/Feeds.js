import React, {Component} from 'react';
import './Feeds.scss'
import Flickity from 'react-flickity-component'
import SectionTitle from './SectionTitle/SectionTitle'
import EventClip from './EventClip/EventClip'
import "./flickity.scss";

class Feeds extends Component{
    constructor(){
        super()
        this.state={
            example:[
        {
            date:'2019년 11월 1일 금요일',
            name:'Global Seoul Mates Gangnam 강남 외국인 친구 사귀기',
            desc:'Friday pre-drink Pub Party and Club in Gangnam! 강남 인터내셔널 펍파티와 클럽! 불금',
            location:'서울, 한국(대한민국)',
            people:'15'
        },
        {   
            date:'2019년 11월 1일 금요일',
            name:'Belly Dance Social Party',
            desc:'Learning Korean Language with Native Korean teachers',
            location:'GSM Global Seoul Mates (Gangnam)',
            people:'26'
        },
        {
            date:'2019년 11월 2일 토요일',
            name:'Naejangsan National Park: Colorful Autumn Foliage!(FULL)',
            desc:'Lets hike at Naejangsan National Park to see the autumn leaves!',
            location:'Sport Complex Station on line 2',
            people:'17'  
        },
        {
            date:'2019년 11월 2일 토요일',
            name:'Sixteenth Discussion- eSports and Digital Gaming',
            desc:'Seoul Saturday Brunch Discussion',
            location:'A Twosome Place - Sinnonhyeon station',
            people:'13'  
        },
        {
            date:5,
            name:'Gyeongki3',
            desc:'learning3',
            location:'seoul3',
            people:'7'  
        },
        {
            date:6,
            name:'Gyeongki3',
            desc:'learning3',
            location:'seoul3',
            people:'7'  
        },
        {
            date:7,
            name:'Gyeongki3',
            desc:'learning3',
            location:'seoul3',
            people:'7'  
        }]      
        }
    }

    
    

    render(){
        // let EventClipContainer = document.getElementsByClassName('event-clip-container')[0];  
        return(
            
                <div className="feeds">
                    {/* <SectionTitle/>
                    <div className="eventclip-div">
                        <button className="up"><img className="arrow1" src={require('./upside.png')} alt=""></img></button>
                        <div className="event-clip-container">
                        {this.state.example.map(e =>(
                        <EventClip date={e.date} name={e.name} desc={e.desc} location={e.location} people={e.people}/>
                    ))}</div>
                    <button className="down"><img className="arrow2" src={require('./downside.png')} alt=""></img></button>
                    </div> */}
                    <SectionTitle/>
                    <Flickity>
                    {this.state.example.map(e =>(
                        <EventClip date={e.date} name={e.name} desc={e.desc} location={e.location} people={e.people}/>
                    ))}
                    </Flickity>
                </div>
                
            
        )
    }
}

export default Feeds;