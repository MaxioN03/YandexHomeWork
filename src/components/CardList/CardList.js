import React from "react";
import Spinner from "../Spinner/Spinner.js";
import Card from "../Card/Card.js";
import {connect} from "react-redux";
import {getCards} from "../../reducers/feed/action";

class CardList extends React.Component {
    componentWillMount() {
        this.props.getCards(1);
    }


    render() {
        if (this.props.loading) {
            return (
                <Spinner/>
            );
        }

        return (
            <div className="cardList">
                {
                    this.props.cards.map((item, i) => <Card key={item.id} data={item} index={i}/>)
                }
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
