import React from "react";
import App from "./app.jsx";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Map from "../map/map.jsx";
import { Provider } from "react-redux";
import { store } from "../../redux/index.js";

configure({ adapter: new Adapter() });

describe(`App`, () => {
  it(`renders correctly`, () => {
    Map.prototype.componentDidMount = jest.fn();
    const component = shallow(
        <Provider store={store}>
          <App />
        </Provider>
    );

    expect(component).toMatchSnapshot();
  });
});
