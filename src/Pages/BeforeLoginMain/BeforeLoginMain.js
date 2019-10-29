import React, {Component} from 'react';
import BeforeLoginNav from '../../Components/BeforeLoginNav/BeforeLoginNav';
import MainVideo from '../../Components/MainVideo/MainVideo';
import HashTag from '../../Components/HashTag/HashTag'
import Feeds from '../../Components/Feeds';
import Footer from '../../Components/Footer';

class BeforeLoginMain extends Component{
    render(){
        return(
            <div>
                
                <BeforeLoginNav/>
                <MainVideo/>
                <HashTag/>
                <Feeds/>
                <Footer/>
            </div>
        )
    }
}

export default BeforeLoginMain;