import React from "react";
import renderer from "react-test-renderer";
import ReviewForm from "./review-form.jsx";

const user = {
  name: `Zak`,
  avatarUrl: `img/avatar.src`
};
const id = 80;
const isSubmitDisabled = true;
const isFormDisabled = false;
const rating = 80;
const comment = `Bathed in the nature. Completely unplugged. Unforgettable`;
const sendFormError = ``;
const setRating = jest.fn();
const sendReviewAsync = jest.fn();
const setComment = jest.fn();
const handleSubmitForm = jest.fn();

describe(`ReviewFrom`, () => {
  it(`renders correctly`, () => {
    const component = renderer
      .create(
          <ReviewForm
            hotelId={id}
            isSubmitDisabled={isSubmitDisabled}
            isFormDisabled={isFormDisabled}
            user={user}
            rating={rating}
            comment={comment}
            sendFormError={sendFormError}
            setRating={setRating}
            setComment={setComment}
            sendReviewAsync={sendReviewAsync}
            handleSubmitForm={handleSubmitForm}
          />
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
