import React from 'react';
import { connect } from 'react-redux';
import { debounce } from 'throttle-debounce';
import { getCards, setCurrentPage } from '../../reducers/feed/action';
import Feed from '../Feed/Feed';
import './Infinite.css';

let time = new Date().getTime();
let lastScrollTop = 0;

class Infinite extends React.Component {
  constructor(props) {
    super(props);

    this.onScroll = this.onScroll.bind(this);
    this.method = debounce(this.method, 1000);
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
    const st = window.pageYOffset || document.documentElement.scrollTop;
    const treshold = 200;
    if (st > lastScrollTop) {
      if (!this.container) {
        return;
      }
      let scrollTop = document.body.scrollTop || document.documentElement.scrollTop,
        containerHeight = this.container.clientHeight,
        windowHeight = window.innerHeight;
      if (scrollTop + windowHeight >= containerHeight - treshold) {
        const currentTime = new Date().getTime();
        if (currentTime - time > 1000) {
          time = currentTime;
          this.props.setCurrentPage(this.props.currentPage);
        }
      }
    } else {

    }
    lastScrollTop = st;
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
