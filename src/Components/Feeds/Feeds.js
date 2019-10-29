import React, {Component} from 'react';
import './Feeds.scss'
import SectionTitle from './SectionTitle/SectionTitle'
import EventClip from './EventClip/EventClip'

class Feeds extends Component{
    render(){
        return(
            <div>
                <div className="Feeds">
                    <SectionTitle/>
                    {/* map함수 돌리기 */}
                    <EventClip/>
                </div>
                
            </div>
        )
    }
}

export default Feeds;