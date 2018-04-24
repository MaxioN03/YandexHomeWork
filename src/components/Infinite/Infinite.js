import React from 'react';
import { connect } from 'react-redux';
import { getCards, setCurrentPage } from '../../reducers/feed/action';
import Feed from '../Feed/Feed';
import './Infinite.css';

class Infinite extends React.Component {
  constructor(props) {
    super(props);

    this.onScroll = this.onScroll.bind(this);
  }

  componentDidMount() {
    document.addEventListener('scroll', this.onScroll, { passive: true });
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.onScroll);
  }

  componentDidUpdate() {
    this.onScroll();
  }

  onScroll() {
    const treshold = 200;
    if (!this.container) {
      return;
    }

    let scrollTop = document.body.scrollTop || document.documentElement.scrollTop,
      containerHeight = this.container.clientHeight,
      windowHeight = window.innerHeight;

    if (scrollTop + windowHeight >= containerHeight - treshold) {
      // console.log(this.props.currentPage);
    }
  }


  render() {
    return (
      <div className="infinite" ref={container => this.container = container}>
        <Feed />
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
  setCurrentPage,
})(Infinite);
