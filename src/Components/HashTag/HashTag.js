import React, {Component} from 'react';
import './HashTag.scss'
import HashTagButton from './HashTagButton';

class HashTag extends Component{
    constructor(){
        super()
        this.state={
            example:[
                {name:'뭘로할까요'},
                {name:'데이터를 받아야'},
                {name:'되나요'},
                {name:'map 함수'},
                {name:'사용해서'},
                {name:'늘렸습니다'},
                {name:'Ipsum Lorein'},
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