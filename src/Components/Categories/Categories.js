import React, {Component} from 'react';
import './Categories.scss'
import CategoryItems from './CategoryItems';

class Categories extends Component{
    render(){
        return(
          <section className="section categories-wrapper">
            <h2 className="section-title">
              <div className="padding-bottom">
                <span>관심 있는 주제별로 그룹을 찾아보세요.</span>
              </div>
              <CategoryItems />
            </h2>            
          </section>
        );
      }
    }

export default Categories;