import React from "react";
import PropTypes from "prop-types";
import Review from "../review/review.jsx";

const ReviewsList = ({ comments }) => {
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot; <span className="reviews__amount">1</span>
      </h2>
      <ul className="reviews__list">
        {comments.map((item) => {
          return (
            <Review
              key={item.id}
              user={item.user}
              rating={item.rating}
              date={item.date}
              comment={item.comment}
            />
          );
        })}
      </ul>
    </section>
  );
};

ReviewsList.propTypes = {
  comments: PropTypes.array
};

export default ReviewsList;
