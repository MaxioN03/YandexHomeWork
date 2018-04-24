import { changeFeedMode, setCurrentCard } from "../../reducers/feed/action";
import { connect } from "react-redux";

const React = require("react");

class Card extends React.Component {
  clickHandler() {
    this.props.changeFeedMode("show");
    this.props.setCurrentCard(this.props.index);
  }

  render() {
    return (
      <div className="card" onClick={this.clickHandler.bind(this)}>
        <img
          className="contain"
          src={this.props.data.urls.small}
          style={{
                backgroundColor: this.props.data.color,
              }}
        />
      </div>
    );
  }
}


export default connect(state => ({
}), {
  changeFeedMode,
  setCurrentCard,
})(Card);
