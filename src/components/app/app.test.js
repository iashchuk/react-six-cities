import React from "react";
import App from "./app.jsx";
import renderer from "react-test-renderer";
import Map from "../map/map.jsx";
import { Provider } from "react-redux";
import { store } from "../../redux/index.js";

describe(`App`, () => {
  it(`renders correctly`, () => {
    Map.prototype.componentDidMount = jest.fn();
    const component = renderer
      .create(
          <Provider store={store}>
            <App />
          </Provider>
      )
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
