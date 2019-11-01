import React, {Component} from 'react';
import './Footer.scss';
import FooterTop from './FooterTop'
import FooterBottom from './FooterBottom';

class Footer extends Component{
    render(){
        return(
            
                <div className="footer-wrapper">
                    <FooterTop/>
                    <FooterBottom/>
                </div>
            
        )
    }
}

export default Footer