import React, {Component} from 'react';
import './Feeds.scss'
import Flickity from 'react-flickity-component'
import SectionTitle from './SectionTitle/SectionTitle'
import EventClip from './EventClip/EventClip'
import "./flickity.scss";
import FeedsExample from './FeedsExample'; //목업데이터

class Feeds extends Component{
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
                    {FeedsExample.example.map(e =>(
                        <EventClip date={e.date} name={e.name} desc={e.desc} location={e.location} people={e.people}/>
                    ))}
                    </Flickity>
                </div>
                
            
        )
    }
}

export default Feeds;