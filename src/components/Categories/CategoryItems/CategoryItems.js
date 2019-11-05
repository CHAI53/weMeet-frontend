import React, {Component} from 'react';
import './CategoryItems.scss'
import items from  './CategoryItemData';

class CategoryItems extends Component{
  constructor() {
    super();
    this.state = {
      items
    };
  }
    
  render(){
    const {items} = this.state;
      return(
        <ul className="grid-list">
          {items.map((el, index)=>(
            <li className="grid-list-item">
              <div className="grid-inner">
                <a href={el.moveTo}>
                  <div className="category-cards"
                       style={{
                         backgroundImage: 
                         `url(${el.bgImg})`,
                         backgroundSize: 'cover',
                         backgroundPosition: 'center'
                         
                        }}
                       key={index}>
                  </div>
                  <h4 className="card-subject">
                    {el.subject}
                  </h4>
                </a>
              </div>
            </li>
          ))}
        </ul>
      );
    }
  }

export default CategoryItems;
