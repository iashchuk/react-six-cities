import React, { PureComponent } from "react";
import PropTypes from "prop-types";

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
        comment: ``,
        isFormDisabled: false
      };

      this._setRating = this._setRating.bind(this);
      this._setComment = this._setComment.bind(this);
      this._handleSubmitForm = this._handleSubmitForm.bind(this);
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

    _resetReview() {
      this.setState({
        rating: 0,
        comment: ``,
        isFormDisabled: true
      });
    }

    _handleSubmitForm(evt) {
      evt.preventDefault();
      const { rating, comment } = this.state;
      const { hotelId } = this.props;
      this.props.sendReviewAsync(hotelId, rating, comment);
      this._resetReview();
    }

    render() {
      const { comment, rating, isFormDisabled } = this.state;
      const isSubmitDisabled = !rating || comment.length < commentLength.MIN;
      return (
        <Component
          {...this.props}
          isFormDisabled={isFormDisabled}
          isSubmitDisabled={isSubmitDisabled}
          rating={rating}
          comment={comment}
          setRating={this._setRating}
          setComment={this._setComment}
          handleSubmitForm={this._handleSubmitForm}
        />
      );
    }
  }

  WithReview.propTypes = {
    hotelId: PropTypes.number,
    sendReviewAsync: PropTypes.func.isRequired
  };

  return WithReview;
};

export default withReview;
