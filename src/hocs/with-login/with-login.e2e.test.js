import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withLogin from "./with-login.js";

configure({ adapter: new Adapter() });

const Component = () => <div>This is a component!</div>;
const WithLogin = withLogin(Component);
const loginAsync = jest.fn();
const removeAuthRequired = jest.fn();

it(`should set email`, () => {
  const component = shallow(
      <WithLogin
        loginAsync={loginAsync}
        removeAuthRequired={removeAuthRequired}
      />
  );
  expect(component.state().email).toEqual(``);
  component
    .props()
    .handleInputChange({ target: { value: `test@test.ru`, name: `email` }});
  expect(component.state().email).toEqual(`test@test.ru`);
});

it(`should set password`, () => {
  const component = shallow(
      <WithLogin
        loginAsync={loginAsync}
        removeAuthRequired={removeAuthRequired}
      />
  );
  expect(component.state().password).toEqual(``);
  component
    .props()
    .handleInputChange({ target: { value: `123456`, name: `password` }});
  expect(component.state().password).toEqual(`123456`);
});
