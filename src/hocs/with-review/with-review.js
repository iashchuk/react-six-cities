import React, { PureComponent } from "react";

const commentLength = {
  MIN: 50,
  MAX: 300
};

const withReview = (Component) => {
  class WithReview extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        rating: 0,
        comment: ``
      };

      this._setRating = this._setRating.bind(this);
      this._setComment = this._setComment.bind(this);
      this._onSubmit = this._onSubmit.bind(this);
    }

    _setRating(evt) {
      this.setState({ rating: evt.target.value });
    }
    _setComment(evt) {
      const comment = evt.target.value;

      if (comment.length > commentLength.MAX) {
        return;
      }

      this.setState({
        comment
      });
    }

    _onSubmit(evt) {
      evt.preventDefault();
      const { rating, comment } = this.state;
      const { hotelId } = this.props;
      this.props.sendReviewAsync(hotelId, rating, comment);
    }

    render() {
      const { comment, rating } = this.state;
      const isDisabled = !rating || comment.length < commentLength.MIN;
      return (
        <Component
          {...this.props}
          isDisabled={isDisabled}
          comment={comment}
          setRating={this._setRating}
          setComment={this._setComment}
          onSubmit={this._onSubmit}
        />
      );
    }
  }

  return WithReview;
};

export default withReview;
