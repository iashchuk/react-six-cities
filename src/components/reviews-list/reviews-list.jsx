import React from "react";
import PropTypes from "prop-types";
import Review from "../review/review.jsx";

import { sortByDate } from "../../helpers/sort-by-date";

const ReviewsList = ({ comments }) => {
  const commentToDisplay = comments.sort(sortByDate).slice(0, 10);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot;
        <span className="reviews__amount">{commentToDisplay.length}</span>
      </h2>
      <ul className="reviews__list">
        {commentToDisplay.map((item) => {
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
