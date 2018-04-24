import React from "react";
import CardList from "../CardList/CardList";
import { connect } from "react-redux";
import ShowModeFeed from "../ShowModeFeed/ShowModeFeed";

class Feed extends React.Component {
  render() {
    if (this.props.mode === "gallery") {
      return (
        <CardList />
      );
    } else if (this.props.mode === "show") {
      return (
        <ShowModeFeed />
      );
    }
  }
}

export default connect(state => ({
  mode: state.feed.mode,
}), {

})(Feed);
