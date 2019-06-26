import React, { Fragment } from "react";
import PropTypes from "prop-types";
import withReview from "../../hocs/with-review/with-review.js";

const ratingCases = [`perfect`, `good`, `not bad`, `badly`, `terribly`];

const ReviewForm = ({
  isSubmitDisabled,
  isFormSending,
  comment,
  rating,
  sendFormError,
  setRating,
  setComment,
  onSubmitForm
}) => {
  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={onSubmitForm}
    >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {ratingCases.map((item, index) => {
          const count = ratingCases.length - index;
          return (
            <Fragment key={item}>
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                value={count}
                id={`${count}-stars`}
                type="radio"
                onChange={setRating}
                checked={count === Number(rating)}
                disabled={isFormSending}
              />
              <label
                htmlFor={`${count}-stars`}
                className="reviews__rating-label form__rating-label"
                title={item}
              >
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star" />
                </svg>
              </label>
            </Fragment>
          );
        })}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={comment}
        onChange={setComment}
        disabled={isFormSending}
      />
      {sendFormError && (
        <span className={`form__error error`}>
          При отправке формы возникла ошибка: {sendFormError}. Пожалуйста, попробуйте
          позже.
        </span>
      )}
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set
          <span className="reviews__star">rating</span> and describe your stay with at
          least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isSubmitDisabled}
        >
          Submit
        </button>
      </div>
    </form>
  );
};
ReviewForm.propTypes = {
  isSubmitDisabled: PropTypes.bool,
  isFormSending: PropTypes.bool,
  comment: PropTypes.string,
  rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  sendFormError: PropTypes.string,
  setRating: PropTypes.func,
  setComment: PropTypes.func,
  onSubmitForm: PropTypes.func
};

export default withReview(ReviewForm);
