import React, { Component } from 'react';
import './NewStepWithWeMeet.scss';

export class NewStepWithWeMeet extends Component {
    render() {
        return (
            <div className="new-step">
                <div className="new-step-header">
                    <h2 className="new-step-header-title">
                        WeMeet과 함께 새로운 발걸음 내딛기
                    </h2>
                    <p className="new-step-header-discription">
                        새로운 그룹을 만들고 마음 맞는 사람들을 모아 보세요.
                    </p>
                </div>
                <ul className="new-step-cards">
                    <li className="new-step-card">
                        <div className="background-green">
                            <div className="new-step-card-flex">
                                <div className="new-step-card-content">
                                    <h3 className="new-step-card-header">
                                        수업 개설하기
                                    </h3>
                                    <p className="new-step-card-cta">
                                        자세히 알아보기
                                    </p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="new-step-card">
                        <div className="background-yellow">
                            <div className="new-step-card-flex">
                                <div className="new-step-card-content">
                                    <h3 className="new-step-card-header">
                                        새로운 사람 만나기
                                    </h3>
                                    <p className="new-step-card-cta">
                                        자세히 알아보기
                                    </p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="new-step-card">
                        <div className="background-red">
                            <div className="new-step-card-flex">
                                <div className="new-step-card-content">
                                    <h3 className="new-step-card-header">
                                        브랜드 키우기
                                    </h3>
                                    <p className="new-step-card-cta">
                                        자세히 알아보기
                                    </p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="new-step-card">
                        <div className="background-blue">
                            <div className="new-step-card-flex">
                                <div className="new-step-card-content">
                                    <h3 className="new-step-card-header">
                                        외국어 회화 연습하기
                                    </h3>
                                    <p className="new-step-card-cta">
                                        자세히 알아보기
                                    </p>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}

export default NewStepWithWeMeet