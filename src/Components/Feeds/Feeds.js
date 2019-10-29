import React, {Component} from 'react';
import './Feeds.scss'
import SectionTitle from './SectionTitle/SectionTitle'
import EventClip from './EventClip/EventClip'

class Feeds extends Component{
    constructor(){
        super()
        this.state={
            example:[
        {
            date:1,
            name:'Gyeongki',
            desc:'learning',
            location:'seoul',
            people:'5'
        },
        {   
            date:2,
            name:'Gyeongki2',
            desc:'learning2',
            location:'seoul2',
            people:'6'
        },
        {
            date:3,
            name:'Gyeongki3',
            desc:'learning3',
            location:'seoul3',
            people:'7'
        }]
        }
    }
    render(){
        return(
            
                <div className="Feeds">
                    <SectionTitle/>
                    {this.state.example.map(e =>(
                        <EventClip date={e.date} name={e.name} desc={e.desc} location={e.location} people={e.people}/>
                    ))}
                    
                </div>
                
            
        )
    }
}

export default Feeds;