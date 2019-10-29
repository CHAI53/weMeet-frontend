import React, {Component} from 'react';
import './HashTag.scss'

class HashTag extends Component{
    constructor(){
        super()
        this.state={
            one: "사회 운동 참여",
            two: "요리 배우기",
            three: "마라톤 대비 트레이닝",
            four: "모바일 앱 개발",
            five: "이부분은 수정을",
            six: "할 것입니다.",
            seven: "뭐로할까요?"
        }
    }
    render(){
        return(
            
                <div className="hashtag-large-group">
                    <div className="hashtag-small-group">
                    <button className="first-left">
                        {this.state.one}
                    </button>
                    <button>
                        {this.state.two}
                    </button>
                    <button>
                        {this.state.three}
                    </button>
                    <button>
                        {this.state.four}
                    </button>
                    <button>
                        {this.state.five}
                    </button>
                    <button>
                        {this.state.six}
                    </button>
                    <button>
                        {this.state.seven}
                    </button>
                    </div>
                </div>
            
        )
    }
}

export default HashTag;