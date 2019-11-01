import React, {Component} from 'react';
import './HashTag.scss'
import HashTagButton from './HashTagButton';

class HashTag extends Component{
    constructor(){
        super()
        this.state={
            example:[
                {name:'사회 운동 참여'},
                {name:'요리 배우기'},
                {name:'마라톤 대비 트레이닝'},
                {name:'모바일 앱 개발'},
                {name:'산악 하이킹'},
                {name:'프론트-엔드 개발'},
                {name:'백-엔드 개발'},
            ]
        }
    }
    render(){
        return(
            <div className="hashtag-large-group">
                <div className="hashtag-small-group">
                    {this.state.example.map(e=>(
                        <HashTagButton name={e.name}/>
                    ))}
                </div>
            </div>
        )
    }
}

export default HashTag;