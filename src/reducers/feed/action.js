/* eslint-disable no-param-reassign */
import Unsplash, { toJson } from 'unsplash-js';

const unsplash = new Unsplash({
  applicationId: '1bb774d04ec1f5ea65b534340fa3fd1719c942549a45f9af35f2420f594777a2',
  secret: '1bb774d04ec1f5ea65b534340fa3fd1719c942549a45f9af35f2420f594777a2',
  callbackUrl: 'http://localhost:8080/',
});

export function changeFeedMode(mode) {
  return (dispatch) => {
    dispatch({
      type: 'CHANGE_FEED_MODE',
      mode,
    });
  };
}

export function getCards(page) {
  return (dispatch) => {
    dispatch({ type: 'GET_CARDS' });
    unsplash.search.photos('neon', page, 20)
      .then(toJson)
      .then((response) => {
        dispatch({
          type: 'GET_CARDS_SUCCESS',
          cards: response.results,
        });
      });
  };
}

export function setCurrentCard(currentIndex) {
  return (dispatch) => {
    dispatch({
      type: 'CHANGE_CURRENT_CARD_INDEX',
      currentIndex,
    });
  };
}

export function changeCurrentCard(dir, currentIndex, cardsLength) {
  return (dispatch) => {
    if (dir === 'prev') {
      if (currentIndex === 0) {
        currentIndex = cardsLength - 1;
      } else {
        currentIndex -= 1;
      }
    }
    if (dir === 'next') {
      if (currentIndex === cardsLength - 1) {
        currentIndex = 0;
      } else {
        currentIndex += 1;
      }
    }
    dispatch({
      type: 'CHANGE_CURRENT_CARD_INDEX',
      currentIndex,
    });
  };
}


export function setCurrentPage(currentPage) {
  return (dispatch) => {
    currentPage += 1,
    dispatch({
      type: 'SET_CURRENT_PAGE',
      currentPage,
    });
  };
}

