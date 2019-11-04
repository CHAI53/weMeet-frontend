import React, {Component} from 'react';
import './HashTag.scss'
import HashTagButton from './HashTagButton';
import './HashTagExample'
import HashTagExample from './HashTagExample'; //목업데이터

class HashTag extends Component{
    render(){
        return(
            <div className="hashtag-large-group">
                <div className="hashtag-small-group">
                    {HashTagExample.example.map(e=>(
                        <HashTagButton name={e.name}/>
                    ))}
                </div>
            </div>
        )
    }
}

export default HashTag;