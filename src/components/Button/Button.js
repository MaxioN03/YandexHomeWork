import React from "react";
import { connect } from "react-redux";
import "./Button.css";
import { setCurrentCard } from "../../reducers/feed/action";

class Button extends React.Component {
  clickOverlayHandler() {
    let index = 0;

    if (this.props.dir === "prev") {
      if (this.props.currentIndex === 0) {
        index = this.props.cards.length - 1;
      } else {
        index = this.props.currentIndex - 1;
      }
    }
    if (this.props.dir === "next") {
      if (this.props.currentIndex === this.props.cards.length - 1) {
        index = 0;
      } else {
        index = this.props.currentIndex + 1;
      }
    }


    this.props.setCurrentCard(index);
  }

  render() {
    let buttons;
    if (this.props.dir === "prev") {
      buttons =
          (<div className="button" onClick={this.clickOverlayHandler.bind(this)}>
            <i className="fa fa-angle-up" />
            <i className="fa fa-angle-left" />
          </div>);
    } else {
      buttons =
          (<div className="button" onClick={this.clickOverlayHandler.bind(this)}>
            <i className="fa fa-angle-down" />
            <i className="fa fa-angle-right" />
          </div>);
    }


    return (
      buttons
    );
  }
}

export default connect(state => ({
  cards: state.feed.cards,
  currentIndex: state.feed.currentIndex,
}), {
  setCurrentCard,
})(Button);
