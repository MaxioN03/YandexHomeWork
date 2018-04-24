import React from 'react';
import Spinner from '../Spinner/Spinner.js';
import Card from '../Card/Card.js';
import { connect } from 'react-redux';
import { getCards } from '../../reducers/feed/action';

let time = new Date().getTime();

class CardList extends React.Component {
  componentWillMount() {
    this.props.getCards(this.props.currentPage);
  }

  componentDidUpdate() {
    const currentTime = new Date().getTime();
    if (currentTime - time > 1000) {
      time = currentTime;
      this.props.getCards(this.props.currentPage);
    }
  }

  render() {
    return (
      <div>
      <div className="cardList">
        {
          this.props.cards.map((item, i) => <Card key={item.id+i} data={item} index={i} />)
        }
      </div>
        <Spinner />
      </div>
    );
  }
}

export default connect(state => ({
  cards: state.feed.cards,
  loading: state.feed.loading,
  currentPage: state.feed.currentPage,
}), {
  getCards,
})(CardList);
