import React, {Component} from 'react';
import './Myprofile.scss'
import AfterLogInNav from '../../components/Nav/AfterLogInNav/AfterLogInNav';
import About from './About'
import Option from './Option'
import Interest from './Interest'

class Myprofile extends Component{
    render(){
        return(
            <>
            <AfterLogInNav/>
            <div>
            <About/>
            <Option/>
            <Interest/>
            </div>
            </>
        )
    }
}
export default Myprofile;