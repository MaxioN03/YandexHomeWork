import React from "react";
import CardList from "../CardList/CardList";
import { connect } from "react-redux";
import "./ShowModeFeed.css";
import { changeFeedMode } from "../../reducers/feed/action";
import Button from "../Button/Button";

class ShowModeFeed extends React.Component {
  clickOverlayHandler() {
    this.props.changeFeedMode("gallery");
  }

  render() {
    return (
      <div>
        <div className="overlay" onClick={this.clickOverlayHandler.bind(this)} />
        <div className="show-container">
          <Button dir="prev" />
          <div className="picture-container">
            <img
              className="contain"
              src={this.props.cards[this.props.currentIndex].urls.regular}
              style={{
                    backgroundColor: this.props.cards.color,
                  }}
            />
          </div>
          <Button dir="next" />
        </div>
        <CardList />
      </div>
    );
  }
}

export default connect(state => ({
  cards: state.feed.cards,
  currentIndex: state.feed.currentIndex,
}), {
  changeFeedMode,
})(ShowModeFeed);
