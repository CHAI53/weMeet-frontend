import React, {Component} from 'react';
import './CategoryItems.scss'
import items from  './CategoryItemData';

class CategoryItems extends Component{
  constructor() {
    super();
    this.state = {
      items: items
    };
  }
    
    render(){
      const {moveTo, bgImg, subject} = this.state.items;
        return(
          <ul className="grid-list">
            <li className="grid-list-item">
              <div className="grid-inner">
                <a href={moveTo}>
                  <div className="category-cards">
                  </div>
                  <h4 className="card-subject">{subject}></h4>
                </a>
              </div>
            </li>
          </ul>
        );
      }
    }

export default CategoryItems;