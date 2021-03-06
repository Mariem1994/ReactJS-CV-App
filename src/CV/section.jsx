import React, { Component } from "react";
import SkillsList from "./skillsList";
import EduList from "./eduList";
import DotedList from "./dotedList";
import Icon from "./icon";
import Stars from "./stars";

class Section extends Component {
  state = {};
  render() {
    return (
      <div className="mb-3">
        <h3 className="title mb-3 text-info">{this.props.title}</h3>
        <div>{this.getContent(this.props.type)}</div>
      </div>
    );
  }

  getContent(type) {
    switch (type) {
      case "skills":
        return this.props.content.map(c => (
          <SkillsList key={Math.random()} {...c} />
        ));
      case "edu":
        return this.props.content.map(c => (
          <EduList key={Math.random()} {...c} />
        ));
      case "exp":
      case "proj":
        return this.props.content.map(c => (
          <DotedList key={Math.random()} {...c} />
        ));
      case "hob":
        let hb = this.props.content.map(c => (
          <Icon key={Math.random()} {...c} />
        ));
        return <div className="row">{hb}</div>;

      case "lang":
        return this.props.content.map(c => (
          <Stars key={Math.random()} {...c} />
        ));
      default:
        return ""
    }
  }
}

export default Section;
