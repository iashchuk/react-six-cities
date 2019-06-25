import React from "react";
import { Redirect } from "react-router-dom";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withPrivate from "./with-private.js";

configure({ adapter: new Adapter() });

const isAuthenticated = false;
const match = {
  url: `/favorites`
};

const Component = () => <Redirect to="/login" />;
const WithPrivate = withPrivate(Component);

describe(`withPrivate component`, () => {
  it(`renders correctly`, () => {
    const component = shallow(
        <WithPrivate match={match} isAuthenticated={isAuthenticated} />
    );
    expect(component).toMatchSnapshot();
  });
});
