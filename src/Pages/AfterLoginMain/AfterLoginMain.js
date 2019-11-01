import React, { Component } from 'react';
import './AfterLoginMain.scss';
import MemberHomeHead from 'components/MemberHomeHead';
import FindNavbar from 'components/FindNavbar';
import EventLists from 'components/EventLists';
import SeeMoreBtn from 'components/SeeMoreBtn';
import SimpleEventFilter from 'components/SimpleEventFilter';

export class AfterLoginMain extends Component {
    constructor() {
        super();
        this.state = {
            inverted: true
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    
    handleScroll = (e) => {
        let lastScrollTop = 0;
        let currentScrollTop = FindNavbar.scrollTop;
        if (currentScrollTop > lastScrollTop) {
            this.setState({inverted: false});
        } else {
            this.setState({inverted: true});
        }
    }

    render() {
        return (
            <div className="after-login-main-page">
                <div className="pre-alm-page">
                    <MemberHomeHead/>
                    <FindNavbar inverted={this.state.inverted ? "find-navbar-wrap" : "find-navbar-wrap-fixed"}/>
                </div>
                <div className="alm-page">
                    <div className="alm-left">
                        <EventLists/>
                        <SeeMoreBtn/>
                    </div>
                    <div className="alm-right">
                        <SimpleEventFilter/>
                    </div>
                </div>
            </div>
        );
    }
}

export default AfterLoginMain