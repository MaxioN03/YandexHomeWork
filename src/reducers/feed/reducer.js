const initialState = {
  mode: "gallery",
  cards: [],
  currentPage: 1,
  loading: false,
  currentIndex: 0,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "CHANGE_FEED_MODE": {
      return {
        ...state,
        mode: action.mode,
      };
    }
    case "GET_CARDS": {
      return {
        ...state,
        loading: true,
      };
    }
    case "GET_CARDS_SUCCESS": {
      return {
        ...state,
        loading: false,
        cards: action.cards,
        currentPage: state.currentPage,
      };
    }
    case "GET_CARDS_ERROR": {
      return {
        ...state,
        loading: false,
      };
    }
    case "CHANGE_CURRENT_CARD_INDEX": {
      return {
        ...state,
        currentIndex: action.currentIndex,
      };
    }
    default: {
      return state;
    }
  }
}

