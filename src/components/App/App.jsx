import React from "react";
import { connect } from "react-redux";
import { changeFeedMode } from "../../reducers/feed/action";
import Infinite from "../Infinite/Infinite";

class App extends React.PureComponent {
  render() {
    return (
      <div>
        <Infinite />
      </div>
    );
  }
}

export default connect(state => ({
  mode: state.feed.mode,
}), {
  changeFeedMode,
})(App);
