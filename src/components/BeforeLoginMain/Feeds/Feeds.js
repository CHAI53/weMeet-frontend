import React, { Component } from "react";
import "./Feeds.scss";
import Flickity from "react-flickity-component";
import SectionTitle from "./SectionTitle/SectionTitle";
import EventClip from "./EventClip/EventClip";
import "./flickity.scss";
import FeedsExample from "./FeedsExample";
import Categories from "../../Categories";

class Feeds extends Component {
  constructor() {
    super();
    this.state = {
      data: ""
    };
  }
  componentDidMount() {
    fetch("http://10.58.4.169:8000/event", {
      method: "GET"
    })
      .then(res => res.json())
      .then(info => {
        this.setState({
          data: info.data
        });
      });
  }
  render() {
    return (
      <div className="feeds">
        <SectionTitle />
        <Flickity>
          {/* FeedsExample 없애고 새로 받은 state 내용을 뿌려주면됨 */}
          {FeedsExample.example.map(e => (
            <EventClip
              //e 뒤에 date,name,desc,location,people 이름만 성현님이 정한 이름으로 바꾸면됨
              date={e.date} //eend-date
              name={e.name} //ename
              desc={e.desc} //eintroduction
              location={e.location} //위치 ??
              people={e.people} //몇명 ???
            />
          ))}
        </Flickity>
        <Categories />
      </div>
    );
  }
}

export default Feeds;
