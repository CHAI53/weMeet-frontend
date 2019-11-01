import React, {Component} from 'react';
import BeforeLoginNav from 'components/BeforeLoginNav';
import MainVideo from 'components/MainVideo';
import HashTag from 'components/HashTag'
import Feeds from 'components/Feeds';
import Footer from 'components/Footer';

class BeforeLoginMain extends Component{
    render(){
        return(
            <>
                <BeforeLoginNav/>
                <MainVideo/>
                <HashTag/>
                <Feeds/>
                <Footer/>
            </>
        )
    }
}

export default BeforeLoginMain;