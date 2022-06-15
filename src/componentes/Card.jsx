import React from "react";
import '../CSS/card.css';

export default class Card extends React.Component {
  render() {
    const { icon, title } = this.props;
    return (
      <div>
        <p className="icon">{ icon }</p>
        <p className="title">{ title }</p>
      </div>
    );
  }
}
