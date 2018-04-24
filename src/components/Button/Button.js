import React from 'react';
import { connect } from 'react-redux';
import './Button.css';
import { changeCurrentCard } from '../../reducers/feed/action';

class Button extends React.Component {
  clickOverlayHandler() {
    this.props.changeCurrentCard(this.props.dir, this.props.currentIndex, this.props.cards.length);
  }

  render() {
    let buttons;
    if (this.props.dir === 'prev') {
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
  changeCurrentCard,
})(Button);
