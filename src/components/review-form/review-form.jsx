import React, { Fragment } from "react";

const rating = [
  { count: 5, title: `perfect` },
  { count: 4, title: `good` },
  { count: 3, title: `not bad` },
  { count: 2, title: `badly` },
  { count: 1, title: `terribly` }
];

const ReviewForm = () => {
  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {rating.map((item) => {
          return (
            <Fragment key={item.title}>
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                value={item.count}
                id={`${item.count}-stars`}
                type="radio"
              />
              <label
                htmlFor={`${item.count}-stars`}
                className="reviews__rating-label form__rating-label"
                title={item.title}
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
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set
          <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled=""
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ReviewForm;
