import React, { Component } from 'react';
import './MemberHomeHead.scss';

export class MemberHomeHead extends Component {
    render() {
        return (
            <div className="member-home-head">
                <h2 className="hero-primary">내 다음 이벤트 찾기</h2>
                <p className="hero-secondary">
                    <span>
                        내 그룹 이벤트 1개
                    </span>
                    <span className="text-middot-left">
                        내 주변 이벤트 612개
                    </span>
                </p>
            </div>
        );
    }
}

export default MemberHomeHead